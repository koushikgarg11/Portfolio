import asyncio
from typing import List

import streamlit as st

from app.api.career_match import ProfileEvaluationRequest, evaluate_profile
from app.knowledge.rag_engine import rag_engine
from app.services.llm_service import llm_service

st.set_page_config(page_title="ACC Chat Bot", page_icon="🤖", layout="wide")


@st.cache_data
def get_doc_options() -> List[str]:
    docs = sorted({item.get("source_name", "ACC Knowledge Base") for item in rag_engine.chunks if item.get("source_name")})
    return ["all"] + docs


def get_followup_suggestions(query: str) -> List[str]:
    q_low = query.lower()
    if any(x in q_low for x in ["2027", "2028", "2029", "student", "internship"]):
        return [
            "Is the 2027-2029 internship 100% free?",
            "What is the stipend for top performing interns?",
            "How do I apply for the college internship?",
            "What skills will I learn during the internship?",
        ]
    if any(x in q_low for x in ["2026", "placement", "datayug"]):
        return [
            "What are the 3 options under the DataYug Project?",
            "What placement support does ACC provide until placed?",
            "Which tools are covered in the placement program?",
        ]
    if any(x in q_low for x in ["scam", "fee", "charge"]):
        return [
            "How do I verify official ACC communication?",
            "What programs are paid vs free?",
            "How to apply for official programs safely?",
        ]
    return [
        "Compare Paid Placement Program vs College Internship",
        "What is the DataYug Project?",
        "Who founded Analytics Career Connect?",
        "What are the official application links?",
    ]


async def generate_chat_reply(message: str, history: List[dict], doc_filter: str) -> tuple[str, str, list, list]:
    matched_chunks = rag_engine.search(message, top_k=5, source_filter=doc_filter)
    result = await llm_service.generate_response(
        query=message,
        context_chunks=matched_chunks,
        conversation_history=history,
        provider="local",
        company_profile=rag_engine.get_company_profile(),
        programs=rag_engine.get_all_programs(),
        doc_filter=doc_filter,
    )
    followups = get_followup_suggestions(message)
    citations = []
    for chunk in matched_chunks:
        snippet = chunk.get("content", "")
        if len(snippet) > 220:
            snippet = snippet[:220] + "..."
        citations.append({
            "source_name": chunk.get("source_name", "ACC Knowledge Base"),
            "title": chunk.get("title", "ACC Document"),
            "category": chunk.get("category", "General"),
            "snippet": snippet,
            "relevance_score": chunk.get("relevance_score", 0.0),
        })
    return result["answer"], result["provider"], citations, followups


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
            answer, provider, citations, followups = asyncio.run(
                generate_chat_reply(user_input, st.session_state.chat_history[:-1], doc_filter)
            )

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
    programs = rag_engine.get_all_programs()
    if batch_filter != "All":
        programs = rag_engine.get_program_by_batch(batch_filter)

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
        payload = ProfileEvaluationRequest(
            graduation_year=int(graduation_year),
            current_skills=skills_list,
            knowledge_level=knowledge_level,
            weekly_hours=int(weekly_hours),
            target_role=target_role,
        )
        result = asyncio.run(evaluate_profile(payload))
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
    company = rag_engine.get_company_profile()
    if company:
        st.write(company)
    else:
        st.info("No company profile loaded.")
