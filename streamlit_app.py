import asyncio
import os
from typing import List, Optional

import httpx
import streamlit as st

st.set_page_config(page_title="ACC Chat Bot", page_icon="🤖", layout="wide")

# --- Build the knowledge base before importing the FastAPI app (same as app.py did) ---
_APP_DIR = os.path.dirname(os.path.abspath(__file__))
_DATA_FILE = os.path.join(_APP_DIR, "app", "data", "knowledge_base.json")

if not os.path.exists(_DATA_FILE):
    with st.spinner("Indexing ACC knowledge base from PDFs and website (first run only)..."):
        from app.knowledge.indexer import build_knowledge_base
        build_knowledge_base()

from app.main import app as fastapi_app          # the real FastAPI app — called in-process below
from app.knowledge.rag_engine import rag_engine  # only for the doc-filter dropdown; no route lists source names


async def call_api(method: str, path: str, **kwargs):
    """
    Calls a route on `fastapi_app` directly through its ASGI interface.
    No server is started, no port is opened, nothing touches localhost —
    httpx hands the request straight to FastAPI's routing/validation/handler
    code in memory and hands back the same response a real HTTP call would.
    """
    transport = httpx.ASGITransport(app=fastapi_app)
    async with httpx.AsyncClient(transport=transport, base_url="http://internal") as client:
        resp = await client.request(method, path, **kwargs)
        resp.raise_for_status()
        return resp.json()


@st.cache_data
def get_doc_options() -> List[str]:
    docs = sorted({item.get("source_name", "ACC Knowledge Base") for item in rag_engine.chunks if item.get("source_name")})
    return ["all"] + docs


async def generate_chat_reply(message: str, history: List[dict], doc_filter: Optional[str]):
    payload = {
        "message": message,
        "history": history,
        "provider": None,
        "doc_filter": doc_filter,
    }
    result = await call_api("POST", "/api/chat", json=payload)
    return result["response"], result["provider"], result["citations"], result["suggested_followups"]


st.title("ACC Chat Bot")
st.caption("Analytics Career Connect AI Assistant built with Streamlit + RAG")

if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

page = st.sidebar.radio("Navigation", ["AI Chat", "Programs", "Career Match", "Company Info"])

if page == "AI Chat":
    doc_filter = st.sidebar.selectbox("Document scope", get_doc_options())
    st.subheader("Ask about ACC programs, internships, and eligibility")

    for msg in st.session_state.chat_history:
        with st.chat_message(msg["role"]):
            st.markdown(msg["content"])

    user_input = st.chat_input("Ask a question about ACC...")
    if user_input:
        st.session_state.chat_history.append({"role": "user", "content": user_input})
        with st.chat_message("user"):
            st.markdown(user_input)

        with st.spinner("Searching ACC knowledge..."):
            try:
                answer, provider, citations, followups = asyncio.run(
                    generate_chat_reply(user_input, st.session_state.chat_history[:-1], doc_filter)
                )
            except httpx.HTTPStatusError as e:
                st.error(f"API error ({e.response.status_code}): {e.response.text}")
                st.stop()

        st.session_state.chat_history.append({"role": "assistant", "content": answer})
        with st.chat_message("assistant"):
            st.markdown(answer)
            st.caption(f"Provider: {provider}")
            if citations:
                with st.expander("Citations"):
                    for c in citations:
                        st.markdown(f"**{c['title']}** — {c['source_name']} | Relevance: {c['relevance_score']}")
                        st.write(c["snippet"])

        if followups:
            st.write("Suggested follow-ups:")
            for item in followups:
                if st.button(item, key=f"followup_{len(st.session_state.chat_history)}_{item}"):
                    st.session_state.chat_history.append({"role": "user", "content": item})
                    st.rerun()

elif page == "Programs":
    st.subheader("ACC Programs")
    batch_filter = st.selectbox("Filter by batch", ["All", 2025, 2026, 2027, 2028, 2029])
    params = {} if batch_filter == "All" else {"batch": batch_filter}
    try:
        result = asyncio.run(call_api("GET", "/api/programs", params=params))
    except httpx.HTTPStatusError as e:
        st.error(f"API error ({e.response.status_code}): {e.response.text}")
        st.stop()
    programs = result["programs"]

    for program in programs:
        with st.container():
            st.markdown(f"### {program.get('title', 'Program')}")
            st.markdown(f"**Batch:** {program.get('batch', 'N/A')}")
            st.write(program.get('description', ''))
            st.write("**Key Skills:** " + ", ".join(program.get('key_skills', [])))
            if program.get('apply_url'):
                st.markdown(f"[Apply here]({program['apply_url']})")
            st.markdown("---")

elif page == "Career Match":
    st.subheader("Career Match Calculator")

    with st.form("career_match_form"):
        graduation_year = st.number_input("Graduation year", min_value=2020, max_value=2035, value=2028)
        current_skills = st.text_input("Current skills (comma separated)", value="SQL, Excel")
        knowledge_level = st.selectbox("Knowledge level", ["Beginner (0-30%)", "Intermediate (30-70%)", "Advanced (70-100%)"])
        weekly_hours = st.slider("Weekly hours available", 5, 40, 15)
        target_role = st.selectbox("Target role", ["Data Analyst", "Business Analyst", "Marketing / Growth", "Founder's Office", "Undecided"])
        submitted = st.form_submit_button("Evaluate my fit")

    if submitted:
        skills_list = [s.strip() for s in current_skills.split(",") if s.strip()]
        payload = {
            "graduation_year": int(graduation_year),
            "current_skills": skills_list,
            "knowledge_level": knowledge_level,
            "weekly_hours": int(weekly_hours),
            "target_role": target_role,
        }
        try:
            result = asyncio.run(call_api("POST", "/api/career-match", json=payload))
        except httpx.HTTPStatusError as e:
            st.error(f"API error ({e.response.status_code}): {e.response.text}")
            st.stop()

        st.success(result["status"])
        st.markdown(f"### {result['track_title']}")
        st.write(result["summary"])
        st.markdown(f"**Cost / Status:** {result['cost_status']}")
        st.markdown(f"**Apply URL:** [{result['apply_url']}]({result['apply_url']})")
        st.write("**Recommended skills to learn:** " + ", ".join(result["skill_gap_analysis"]["recommended_skills_to_learn"]))
        st.write(f"**Match Score:** {result['skill_gap_analysis']['match_score_percentage']}%")
        st.subheader("Roadmap")
        for step in result["tailored_roadmap"]:
            st.write(f"{step['step']}. {step['phase']}: {step['goal']}")

else:
    st.subheader("Company Profile")
    try:
        company = asyncio.run(call_api("GET", "/api/company"))
    except httpx.HTTPStatusError as e:
        st.error(f"API error ({e.response.status_code}): {e.response.text}")
        st.stop()
    if company:
        st.write(company)
    else:
        st.info("No company profile loaded.")
