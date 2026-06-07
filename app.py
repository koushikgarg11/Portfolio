import streamlit as st

st.set_page_config(
    page_title="Koushik Garg | Data Analyst",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ── Custom CSS ──────────────────────────────────────────────────────────────
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

html, body, [class*="css"] {
    font-family: 'DM Sans', sans-serif;
}

.hero-name {
    font-family: 'DM Serif Display', serif;
    font-size: 3.5rem;
    line-height: 1.1;
    color: #0F2744;
    margin: 0;
}

.hero-title {
    font-size: 1.15rem;
    color: #1D9E75;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 0.5rem;
}

.hero-summary {
    font-size: 1rem;
    color: #444;
    line-height: 1.75;
    max-width: 620px;
    margin-top: 1.2rem;
}

.metric-card {
    background: linear-gradient(135deg, #0F2744 0%, #1a3a5c 100%);
    border-radius: 12px;
    padding: 1.2rem 1.4rem;
    color: white;
    text-align: center;
}

.metric-value {
    font-family: 'DM Serif Display', serif;
    font-size: 2.2rem;
    color: #5DCAA5;
    display: block;
    line-height: 1.1;
}

.metric-label {
    font-size: 0.78rem;
    color: #9FE1CB;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 0.3rem;
}

.section-header {
    font-family: 'DM Serif Display', serif;
    font-size: 1.8rem;
    color: #0F2744;
    border-bottom: 2px solid #1D9E75;
    padding-bottom: 0.4rem;
    margin-bottom: 1.2rem;
}

.exp-card {
    background: #f8fbff;
    border-left: 3px solid #1D9E75;
    border-radius: 0 8px 8px 0;
    padding: 1rem 1.25rem;
    margin-bottom: 1rem;
}

.exp-title { font-weight: 600; color: #0F2744; font-size: 1rem; }
.exp-meta { color: #1D9E75; font-size: 0.85rem; margin: 0.2rem 0 0.5rem; }
.exp-desc { color: #555; font-size: 0.9rem; line-height: 1.6; }

.skill-pill {
    display: inline-block;
    background: #E1F5EE;
    color: #0F6E56;
    border-radius: 20px;
    padding: 4px 14px;
    font-size: 0.82rem;
    font-weight: 500;
    margin: 3px;
}

.badge-top {
    display: inline-block;
    background: #0F2744;
    color: #5DCAA5;
    border-radius: 6px;
    padding: 3px 10px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.stButton > button {
    background-color: #1D9E75 !important;
    color: white !important;
    border: none !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
    padding: 0.5rem 1.5rem !important;
}

a { color: #1D9E75 !important; }
</style>
""", unsafe_allow_html=True)

# ── Sidebar ─────────────────────────────────────────────────────────────────
with st.sidebar:
    st.markdown("### 📊 Koushik Garg")
    st.markdown("*Data Analyst · Delhi, India*")
    st.divider()
    st.markdown("**Contact**")
    st.markdown("📧 koushikgarg11@gmail.com")
    st.markdown("📞 +91-7428668469")
    st.markdown("🔗 [LinkedIn](https://linkedin.com/in/koushik-garg-b034442a9)")
    st.markdown("💻 [GitHub](https://github.com/koushikgarg11)")
    st.divider()
    st.markdown("**Navigation**")
    st.page_link("app.py", label="🏠 Home")
    st.page_link("pages/1_Projects.py", label="🚀 Projects & Demos")
    st.page_link("pages/2_Skills.py", label="🛠️ Skills & Tools")
    st.page_link("pages/3_Contact.py", label="📬 Contact")

# ── Hero ─────────────────────────────────────────────────────────────────────
col_hero, col_space = st.columns([3, 1])
with col_hero:
    st.markdown('<p class="hero-name">Koushik Garg</p>', unsafe_allow_html=True)
    st.markdown('<p class="hero-title">📊 Data Analyst</p>', unsafe_allow_html=True)
    st.markdown("""
    <p class="hero-summary">
    Entry-level Data Analyst with hands-on experience in data wrangling, statistical analysis,
    demand forecasting, and machine learning. I turn messy datasets into actionable insights —
    from ARIMA forecasting models to interactive Power BI dashboards.
    </p>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# ── Key Metrics ──────────────────────────────────────────────────────────────
m1, m2, m3, m4, m5 = st.columns(5)
metrics = [
    ("15–20%", "Forecast Accuracy Improvement"),
    ("~18%", "False Positive Reduction"),
    ("~30%", "Data Prep Time Saved"),
    ("Top 1%", "Unstop Rankings"),
    ("100K+", "Records Analyzed"),
]
for col, (val, label) in zip([m1, m2, m3, m4, m5], metrics):
    with col:
        st.markdown(f"""
        <div class="metric-card">
            <span class="metric-value">{val}</span>
            <div class="metric-label">{label}</div>
        </div>
        """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)
st.divider()

# ── Experience ───────────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Work Experience</p>', unsafe_allow_html=True)

experiences = [
    {
        "title": "Data Analyst Intern",
        "company": "Unified Mentor",
        "period": "Aug 2025 – Oct 2025",
        "highlights": [
            "Built Random Forest & Logistic Regression models on 100K+ record dataset — improved threat detection precision by ~18%",
            "Automated end-to-end ETL pipeline in Python, cutting manual data prep time by 30%",
            "Designed executive risk dashboards in Power BI & Tableau adopted by stakeholders",
            "Applied feature engineering to EV Sales data across 20+ states for market entry recommendations"
        ]
    },
    {
        "title": "Data Analyst (Client Engagement)",
        "company": "Taiwal Enterprises",
        "period": "2025",
        "highlights": [
            "Replaced manual estimation with ARIMA time-series models — improved forecast accuracy by 15–20%",
            "Identified top 20% SKUs driving ~75% of revenue via ABC and Pareto analysis",
            "Built EOQ, Safety Stock & Reorder Point models to optimize procurement cycles",
            "Delivered client-adopted inventory strategy with actionable reorder schedules"
        ]
    },
    {
        "title": "Competitive Intelligence Consultant",
        "company": "Business.io Society, IIT Madras",
        "period": "2025",
        "highlights": [
            "Contributed to structured competitive analysis for HMC Group",
            "Synthesized multi-source market data into prioritized strategic recommendations",
        ]
    }
]

for exp in experiences:
    bullets = "".join([f"<li>{h}</li>" for h in exp["highlights"]])
    st.markdown(f"""
    <div class="exp-card">
        <div class="exp-title">{exp['title']}</div>
        <div class="exp-meta">🏢 {exp['company']} &nbsp;|&nbsp; 📅 {exp['period']}</div>
        <div class="exp-desc"><ul style="margin:0; padding-left:1.2rem;">{bullets}</ul></div>
    </div>
    """, unsafe_allow_html=True)

st.divider()

# ── Education & Certifications ────────────────────────────────────────────────
edu_col, cert_col = st.columns([1, 1])

with edu_col:
    st.markdown('<p class="section-header">Education</p>', unsafe_allow_html=True)
    edu = [
        ("🎓 Diploma in Data Science (Pursuing)", "IIT Madras (Online)", "2025 – Present"),
        ("🎓 B.Com (Honours) — 81.6%", "Aryabhatta College, University of Delhi", "2024"),
        ("🏫 Senior Secondary (CBSE) — 80.75%", "Columbia Foundation Sr. Sec. School", "2021"),
    ]
    for degree, inst, year in edu:
        st.markdown(f"**{degree}**  \n*{inst}* · {year}")
        st.markdown("")

with cert_col:
    st.markdown('<p class="section-header">Certifications</p>', unsafe_allow_html=True)
    certs = [
        "Google Business Intelligence Professional Certificate — Coursera",
        "Practical Time Series Analysis — Coursera",
        "Business Statistics and Analysis — Coursera",
        "Data Analysis: SQL, Tableau, Power BI & Excel — Udemy",
        "Python for Data Analysis and Business Intelligence — Udemy",
    ]
    for c in certs:
        st.markdown(f"✅ {c}")

st.divider()

# ── Competitions ──────────────────────────────────────────────────────────────
st.markdown('<p class="section-header">Competitions & Simulations</p>', unsafe_allow_html=True)

cc1, cc2, cc3, cc4 = st.columns(4)
comps = [
    ("🏆", "Top 1 Percentile", "Unstop Weekly Case Challenges — National ranking"),
    ("🔷", "BCG X Simulation", "Data cleaning → EDA → predictive modeling → stakeholder presentation"),
    ("🔷", "Deloitte Simulation", "Statistical analysis, data visualization & business recommendations"),
    ("💻", "LeetCode SQL", "50+ problems: joins, subqueries, query optimization"),
]
for col, (icon, title, desc) in zip([cc1, cc2, cc3, cc4], comps):
    with col:
        st.markdown(f"**{icon} {title}**")
        st.caption(desc)

st.markdown("<br><br>", unsafe_allow_html=True)
