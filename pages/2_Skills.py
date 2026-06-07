import streamlit as st
import plotly.graph_objects as go
import pandas as pd

st.set_page_config(page_title="Skills | Koushik Garg", page_icon="🛠️", layout="wide")

st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');
html, body, [class*="css"] { font-family: 'DM Sans', sans-serif; }
.section-header { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: #0F2744; border-bottom: 2px solid #1D9E75; padding-bottom: 0.4rem; margin-bottom: 1.2rem; }
.skill-card { background: #f8fbff; border-radius: 10px; padding: 1rem 1.25rem; border: 1px solid #e0eeea; margin-bottom: 0.75rem; }
.skill-name { font-weight: 600; color: #0F2744; font-size: 0.95rem; }
.skill-bar-bg { background: #e0eeea; border-radius: 20px; height: 8px; margin-top: 6px; }
.cert-pill { display: inline-block; background: #0F2744; color: #5DCAA5; border-radius: 6px; padding: 4px 12px; font-size: 0.8rem; font-weight: 500; margin: 4px 4px 4px 0; }
</style>
""", unsafe_allow_html=True)

st.markdown("# 🛠️ Skills & Technical Stack")
st.divider()

# ── Radar Chart ───────────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Skill Radar</p>', unsafe_allow_html=True)

categories = ['Python', 'SQL', 'Power BI / Tableau', 'Machine Learning', 'Statistics', 'Data Storytelling', 'Excel / Power Query', 'ETL Pipelines']
values = [85, 80, 82, 75, 78, 88, 80, 77]
values_closed = values + [values[0]]
categories_closed = categories + [categories[0]]

fig_radar = go.Figure()
fig_radar.add_trace(go.Scatterpolar(
    r=values_closed, theta=categories_closed,
    fill='toself', name='Skill Level',
    line=dict(color='#1D9E75', width=2),
    fillcolor='rgba(29,158,117,0.18)'
))
fig_radar.update_layout(
    polar=dict(
        radialaxis=dict(visible=True, range=[0, 100], showticklabels=False),
        angularaxis=dict(tickfont=dict(size=12, family="DM Sans"))
    ),
    showlegend=False,
    font=dict(family="DM Sans"),
    height=420,
    paper_bgcolor="white"
)
col_r, col_skills = st.columns([1, 1])
with col_r:
    st.plotly_chart(fig_radar, use_container_width=True)
with col_skills:
    skill_data = [
        ("Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)", 85),
        ("SQL (Joins, Subqueries, Query Optimization)", 80),
        ("Power BI", 82),
        ("Tableau", 80),
        ("Machine Learning (Classification, Regression, Forecasting)", 75),
        ("Statistics & Hypothesis Testing", 78),
        ("Excel (Power Query, VBA)", 80),
        ("Data Storytelling & Dashboards", 88),
    ]
    for name, level in skill_data:
        bar_width = f"{level}%"
        color = "#1D9E75" if level >= 80 else "#5DCAA5"
        st.markdown(f"""
        <div style="margin-bottom:10px;">
            <div style="display:flex; justify-content:space-between;">
                <span style="font-size:0.88rem; color:#0F2744; font-weight:500;">{name}</span>
                <span style="font-size:0.82rem; color:#1D9E75; font-weight:600;">{level}%</span>
            </div>
            <div style="background:#e0eeea; border-radius:20px; height:7px; margin-top:4px;">
                <div style="width:{bar_width}; background:{color}; border-radius:20px; height:7px;"></div>
            </div>
        </div>
        """, unsafe_allow_html=True)

st.divider()

# ── Stack Categories ───────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Tech Stack by Category</p>', unsafe_allow_html=True)

categories_grid = {
    "🐍 Programming": ["Python", "SQL", "VBA", "Bash"],
    "📊 BI & Visualization": ["Power BI", "Tableau", "Plotly", "Matplotlib", "Seaborn", "Chart.js"],
    "🤖 ML & Analytics": ["Scikit-learn", "ARIMA", "Random Forest", "Logistic Regression", "A/B Testing", "Monte Carlo Simulation"],
    "🗄️ Data Engineering": ["Pandas", "NumPy", "Power Query", "ETL Pipelines", "Feature Engineering"],
    "💼 Business Analytics": ["Demand Forecasting", "Inventory Optimization (EOQ)", "KPI Design", "ABC/Pareto Analysis"],
    "🤖 AI & Automation": ["LLM Prompt Engineering", "Semantic Search", "AI Reporting Pipelines"],
}

cols = st.columns(3)
for i, (category, skills) in enumerate(categories_grid.items()):
    with cols[i % 3]:
        pills = " ".join([f'<span style="display:inline-block; background:#E1F5EE; color:#0F6E56; border-radius:20px; padding:3px 11px; font-size:0.78rem; font-weight:500; margin:2px;">{s}</span>' for s in skills])
        st.markdown(f"""
        <div style="background:#f8fbff; border-radius:10px; padding:1rem 1.25rem; border:1px solid #e0eeea; margin-bottom:1rem; min-height:130px;">
            <div style="font-weight:600; color:#0F2744; font-size:0.95rem; margin-bottom:0.6rem;">{category}</div>
            {pills}
        </div>
        """, unsafe_allow_html=True)

st.divider()

# ── Certifications ─────────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Certifications</p>', unsafe_allow_html=True)

certs = [
    {"name": "Google Business Intelligence Professional Certificate", "issuer": "Coursera / Google", "icon": "🏅"},
    {"name": "Practical Time Series Analysis", "issuer": "Coursera", "icon": "📈"},
    {"name": "Business Statistics and Analysis", "issuer": "Coursera", "icon": "📐"},
    {"name": "Data Analysis: SQL, Tableau, Power BI & Excel", "issuer": "Udemy", "icon": "🎓"},
    {"name": "Python for Data Analysis and Business Intelligence", "issuer": "Udemy", "icon": "🐍"},
]

cert_cols = st.columns(3)
for i, cert in enumerate(certs):
    with cert_cols[i % 3]:
        st.markdown(f"""
        <div style="background:#0F2744; border-radius:10px; padding:1rem 1.25rem; margin-bottom:1rem; color:white;">
            <div style="font-size:1.5rem;">{cert['icon']}</div>
            <div style="font-weight:600; font-size:0.9rem; margin-top:0.4rem; color:#5DCAA5;">{cert['name']}</div>
            <div style="font-size:0.78rem; color:#9FE1CB; margin-top:0.3rem;">{cert['issuer']}</div>
        </div>
        """, unsafe_allow_html=True)

st.divider()

# ── Competitions ────────────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Competitions & Rankings</p>', unsafe_allow_html=True)

comp_data = {
    "Competition": ["Unstop Weekly Case Challenges", "BCG X Data Science Simulation", "Deloitte Data Science Simulation", "LeetCode SQL"],
    "Rank / Result": ["Top 1 Percentile (National)", "Completed", "Completed", "50+ Problems Solved"],
    "Skills Demonstrated": ["Data Storytelling, Problem Solving", "EDA, Predictive Modeling, Stakeholder Comms", "Statistical Analysis, Visualization", "SQL Optimization, Joins, Subqueries"],
}
st.dataframe(pd.DataFrame(comp_data), use_container_width=True, hide_index=True)
