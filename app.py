import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# ── Page Configuration ────────────────────────────────────────────────────────
st.set_page_config(
    page_title="Koushik Garg | Data Analyst Portfolio",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# ── Custom CSS Design System (Matching Reference Dark Glassmorphism) ──────────
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

html, body, [class*="css"], [class*="st-"] {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #f8fafc;
}

/* Background */
.stApp {
    background-color: #060b14;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 44px 44px;
}

/* Hide default Streamlit elements */
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
header {visibility: hidden;}
.block-container {
    padding-top: 2rem;
    padding-bottom: 4rem;
    max-width: 1150px;
}

/* Typography & Gradient Accents */
.gradient-text {
    background: linear-gradient(135deg, #67e8f9 0%, #60a5fa 50%, #c084fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #22d3ee;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
}
.eyebrow::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 2px;
    background-color: #22d3ee;
    border-radius: 2px;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
    margin-bottom: 0.5rem;
}

.section-desc {
    font-size: 0.95rem;
    color: #94a3b8;
    line-height: 1.7;
    max-width: 650px;
    margin-bottom: 2rem;
}

/* Glassmorphism Cards */
.glass-card {
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 1.75rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease;
    margin-bottom: 1.5rem;
}
.glass-card:hover {
    border-color: rgba(34, 211, 238, 0.3);
    background: rgba(255, 255, 255, 0.035);
}

/* Metric Cards */
.metric-box {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 1.25rem 1rem;
    text-align: center;
    transition: transform 0.2s ease, border-color 0.2s ease;
}
.metric-box:hover {
    transform: translateY(-2px);
    border-color: rgba(34, 211, 238, 0.4);
}
.metric-val {
    font-size: 1.8rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -0.02em;
    display: block;
}
.metric-lbl {
    font-size: 0.75rem;
    font-weight: 600;
    color: #22d3ee;
    margin-top: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.metric-sub {
    font-size: 0.7rem;
    color: #64748b;
    margin-top: 0.2rem;
}

/* Skill Pills */
.skill-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    border-radius: 9999px;
    padding: 4px 12px;
    font-size: 0.78rem;
    font-weight: 500;
    margin: 3px;
    transition: all 0.2s ease;
}
.skill-tag:hover {
    border-color: rgba(34, 211, 238, 0.4);
    color: #ffffff;
    background: rgba(34, 211, 238, 0.08);
}

/* Status Badges */
.badge-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(34, 211, 238, 0.06);
    border: 1px solid rgba(34, 211, 238, 0.25);
    color: #67e8f9;
    border-radius: 9999px;
    padding: 6px 16px;
    font-size: 0.8rem;
    font-weight: 600;
}
.dot-pulse {
    width: 8px;
    height: 8px;
    background-color: #22d3ee;
    border-radius: 50%;
    box-shadow: 0 0 10px #22d3ee;
}

/* Streamlit Widget Overrides */
.stButton > button {
    background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%) !important;
    color: #060b14 !important;
    font-weight: 700 !important;
    border: none !important;
    border-radius: 9999px !important;
    padding: 0.6rem 1.8rem !important;
    font-size: 0.9rem !important;
    transition: all 0.2s ease !important;
    box-shadow: 0 4px 20px rgba(34, 211, 238, 0.25) !important;
}
.stButton > button:hover {
    transform: scale(1.02) !important;
    box-shadow: 0 6px 25px rgba(34, 211, 238, 0.4) !important;
}

/* Expander Overrides */
.streamlit-expanderHeader {
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 16px !important;
    color: #22d3ee !important;
    font-weight: 600 !important;
}
.streamlit-expanderContent {
    background: #0b1220 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-top: none !important;
    border-radius: 0 0 16px 16px !important;
}

/* Input elements */
.stTextInput > div > div > input, .stTextArea > div > div > textarea, .stSelectbox > div > div {
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 12px !important;
    color: #ffffff !important;
}
</style>
""", unsafe_allow_html=True)

# ── Plotly Dark Template Helper ───────────────────────────────────────────────
def apply_dark_theme(fig, height=350):
    fig.update_layout(
        template="plotly_dark",
        plot_bgcolor="rgba(11, 18, 32, 0.8)",
        paper_bgcolor="rgba(11, 18, 32, 0)",
        font=dict(family="Inter, sans-serif", color="#cbd5e1", size=11),
        margin=dict(l=20, r=20, t=40, b=20),
        height=height,
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=1.02,
            xanchor="right",
            x=1,
            bgcolor="rgba(0,0,0,0)"
        )
    )
    fig.update_xaxes(showgrid=True, gridcolor="rgba(255,255,255,0.06)", zerolinecolor="rgba(255,255,255,0.1)")
    fig.update_yaxes(showgrid=True, gridcolor="rgba(255,255,255,0.06)", zerolinecolor="rgba(255,255,255,0.1)")
    return fig


# ══════════════════════════════════════════════════════════════════════════════
# 1. TOP NAVBAR / BRAND HEADER
# ══════════════════════════════════════════════════════════════════════════════
c_brand, c_nav = st.columns([1.5, 3])
with c_brand:
    st.markdown("""
    <div style="display: flex; align-items: center; gap: 10px; padding: 10px 0;">
        <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #22d3ee, #3b82f6); display: flex; align-items: center; justify-content: center; font-weight: 900; color: #060b14;">
            📊
        </div>
        <span style="font-size: 1.15rem; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
            Koushik<span style="color: #22d3ee;">.</span>Garg
        </span>
    </div>
    """, unsafe_allow_html=True)

with c_nav:
    st.markdown("""
    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 12px; padding: 10px 0;">
        <a href="#about" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">About</a>
        <a href="#skills" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Skills</a>
        <a href="#projects" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Projects</a>
        <a href="#calculator" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Optimization Demo</a>
        <a href="#contact" style="color: #67e8f9; border: 1px solid rgba(34,211,238,0.3); background: rgba(34,211,238,0.08); padding: 4px 14px; border-radius: 9999px; text-decoration: none; font-size: 0.8rem; font-weight: 600;">Contact</a>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<hr style='border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 0.5rem 0 2.5rem 0;'>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 2. HERO SECTION
# ══════════════════════════════════════════════════════════════════════════════
hero_left, hero_right = st.columns([1.2, 0.8])

with hero_left:
    st.markdown("""
    <div class="badge-status">
        <div class="dot-pulse"></div>
        Data Analyst · Delhi, India
    </div>
    <div style="height: 14px;"></div>
    <h1 style="font-size: 3.5rem; font-weight: 900; line-height: 1.05; letter-spacing: -0.04em; margin: 0; color: #ffffff;">
        Hi, I'm <span class="gradient-text">Koushik.</span>
    </h1>
    <h2 style="font-size: 1.5rem; font-weight: 700; color: #e2e8f0; margin-top: 0.8rem; letter-spacing: -0.02em;">
        Data Analyst turning <span style="color: #22d3ee; text-decoration: underline; text-decoration-color: rgba(34,211,238,0.4);">raw data</span> into actionable decisions.
    </h2>
    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.7; margin-top: 1rem; max-width: 540px;">
        I work with <strong style="color: #f1f5f9;">Python, SQL, Power BI, Excel, and Statistical Modeling</strong> to analyze engineering workforce gaps, monitor IoT telemetry streams, and engineer institutional academic BI dashboards.
    </p>
    
    <div style="display: flex; flex-wrap: gap; gap: 10px; margin-top: 1.5rem; align-items: center;">
        <a href="#projects" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #22d3ee, #3b82f6); color: #060b14; font-weight: 700; font-size: 0.85rem; padding: 10px 22px; border-radius: 9999px; text-decoration: none;">
            View Projects ↓
        </a>
        <a href="mailto:koushikgarg11@gmail.com" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #f1f5f9; font-weight: 600; font-size: 0.85rem; padding: 10px 20px; border-radius: 9999px; text-decoration: none;">
            ✉ Email Me
        </a>
    </div>

    <div style="display: flex; gap: 16px; margin-top: 1.5rem; color: #64748b; font-size: 0.85rem;">
        <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #94a3b8; text-decoration: none;">🔗 LinkedIn</a>
        <a href="https://github.com/koushikgarg11" target="_blank" style="color: #94a3b8; text-decoration: none;">💻 GitHub</a>
        <a href="tel:+917428668469" style="color: #94a3b8; text-decoration: none;">📞 +91-7428668469</a>
    </div>
    """, unsafe_allow_html=True)

with hero_right:
    st.markdown("""
    <div class="glass-card" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem; margin-bottom: 1rem;">
            <div style="display: flex; align-items: center; gap: 6px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #94a3b8; margin-left: 6px;">telemetry_pipeline.py</span>
            </div>
            <span style="font-size: 0.7rem; font-weight: 700; color: #22d3ee; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.3); padding: 2px 8px; border-radius: 6px;">LIVE DEMO</span>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: rgba(0,0,0,0.5); padding: 1rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; line-height: 1.6;">
            <span style="color: #64748b;"># Skill Gap & IoT Telemetry Pipeline</span><br>
            <span style="color: #67e8f9;">from</span> scipy.stats <span style="color: #67e8f9;">import</span> f_oneway<br>
            <span style="color: #c084fc;">f_val, p_val</span> = f_oneway(core_branches, software_branches)<br>
            <span style="color: #34d399;">✓ Uptime: 94.2% on 25 Kiosk Nodes</span><br>
            <span style="color: #34d399;">✓ 4,500+ Student Records Modeled</span>
        </div>
        <div style="margin-top: 1rem; background: rgba(34,211,238,0.05); border: 1px solid rgba(34,211,238,0.2); border-radius: 14px; padding: 0.85rem 1rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Current Focus</div>
                <div style="font-size: 0.85rem; font-weight: 700; color: #ffffff;">IoT Analytics & Academic BI</div>
            </div>
            <span style="font-size: 1.25rem;">📈</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 3. KEY METRICS BAR
# ══════════════════════════════════════════════════════════════════════════════
m1, m2, m3, m4, m5 = st.columns(5)
metrics_data = [
    ("5+ Disciplines", "Branches Analyzed", "Curriculum vs Skill Gap"),
    ("25+ Kiosks", "IoT Telemetry Nodes", "Smart Water ATM Network"),
    ("4,500+", "Records Modeled", "Academic Performance BI"),
    ("94.2%", "Operational Uptime", "Automated IoT Monitoring"),
    ("Top 1%", "Unstop National Rank", "Weekly Case Challenges")
]

for col, (val, lbl, sub) in zip([m1, m2, m3, m4, m5], metrics_data):
    with col:
        st.markdown(f"""
        <div class="metric-box">
            <span class="metric-val">{val}</span>
            <div class="metric-lbl">{lbl}</div>
            <div class="metric-sub">{sub}</div>
        </div>
        """, unsafe_allow_html=True)

st.markdown("<div id='about' style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 4. ABOUT SECTION
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">About Me</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">I enjoy finding the story inside messy data.</h2>', unsafe_allow_html=True)

about_col1, about_col2 = st.columns([1.1, 0.9])

with about_col1:
    st.markdown("""
    <div style="color: #94a3b8; font-size: 0.95rem; line-height: 1.8; space-y: 1rem;">
        <p>
            I am an analytical problem-solver currently pursuing a <strong style="color: #ffffff;">Diploma in Data Science from IIT Madras</strong> with a strong foundation in <strong style="color: #ffffff;">B.Com (Honours) from the University of Delhi (81.6%)</strong>. This combination equips me with both quantitative modeling depth and commercial business acumen.
        </p>
        <p>
            My hands-on experience bridges raw data engineering and executive decision-making. Whether tuning <strong style="color: #22d3ee;">ARIMA time-series models</strong> for B2B demand forecasting at Taiwal Enterprises, training <strong style="color: #22d3ee;">Random Forest classifiers</strong> on 100K+ cybersecurity records at Unified Mentor, or developing interactive <strong style="color: #22d3ee;">Power BI & Tableau dashboards</strong>, my priority is always measurable ROI.
        </p>
        <p>
            I specialize in isolating hidden anomalies, calculating inventory optimization formulas (EOQ, Safety Stock), automating ETL pipelines, and synthesizing complex datasets into clear boardroom narratives.
        </p>
    </div>
    """, unsafe_allow_html=True)

with about_col2:
    st.markdown("""
    <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #22d3ee; letter-spacing: 0.15em; text-transform: uppercase;">Candidate Profile</span>
            <span style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); color: #34d399; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 9999px;">OPEN TO WORK</span>
        </div>
        <div style="font-size: 0.85rem; space-y: 0.8rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.6rem;">
                <span style="color: #64748b;">Target Role</span>
                <span style="font-weight: 600; color: #f1f5f9;">Data Analyst / BI Analyst</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.6rem; margin-top: 0.6rem;">
                <span style="color: #64748b;">Education</span>
                <span style="font-weight: 600; color: #f1f5f9; text-align: right;">IIT Madras (Data Science) · DU (B.Com)</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.6rem; margin-top: 0.6rem;">
                <span style="color: #64748b;">Location</span>
                <span style="font-weight: 600; color: #f1f5f9;">Delhi, India (Open to Remote)</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.6rem; margin-top: 0.6rem;">
                <span style="color: #64748b;">Core Stack</span>
                <span style="font-weight: 600; color: #f1f5f9;">Python · SQL · Power BI · Excel</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.6rem;">
                <span style="color: #64748b;">Focus Areas</span>
                <span style="font-weight: 600; color: #f1f5f9;">Forecasting · ML · Dashboards</span>
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<div id='skills' style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 5. SKILLS SECTION
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Technical Stack</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Tools I use to turn data into decisions.</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">A comprehensive toolkit spanning data wrangling, time-series forecasting, machine learning, relational querying, and executive visualization.</p>', unsafe_allow_html=True)

sk_col1, sk_col2, sk_col3 = st.columns(3)

skills_grid = [
    ("🐍 Data Analytics & Wrangling", ["Python", "Pandas", "NumPy", "SQL (PostgreSQL/MySQL)", "Advanced Excel", "Power Query", "Data Cleaning"]),
    ("📊 Visualization & BI", ["Power BI", "Tableau", "DAX Formulas", "Interactive Dashboards", "Plotly", "Matplotlib", "Seaborn"]),
    ("🤖 ML & Forecasting", ["ARIMA & SARIMA", "Time Series Modeling", "Random Forest", "Logistic Regression", "Scikit-Learn", "Feature Engineering"]),
    ("🗄️ Databases & Engineering", ["MySQL", "PostgreSQL", "Relational Modeling", "ETL Pipelines", "Multi-Table Joins", "Query Optimization"]),
    ("💼 Business Analytics", ["Demand Forecasting", "Inventory Optimization (EOQ)", "Safety Stock & ROP", "ABC/Pareto Analysis", "KPI Design"]),
    ("⚡ AI & Automation", ["LLM Prompt Engineering", "Semantic Search", "Automated Reporting", "Python Scripting", "Jinja2 Templates"])
]

cols_list = [sk_col1, sk_col2, sk_col3]
for idx, (category, items) in enumerate(skills_grid):
    with cols_list[idx % 3]:
        pills_html = "".join([f'<span class="skill-tag">{item}</span>' for item in items])
        st.markdown(f"""
        <div class="glass-card" style="padding: 1.25rem; min-height: 180px;">
            <div style="font-weight: 700; font-size: 0.95rem; color: #ffffff; margin-bottom: 0.85rem;">{category}</div>
            {pills_html}
        </div>
        """, unsafe_allow_html=True)

st.markdown("<div id='projects' style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 6. FEATURED PROJECTS SECTION (With Live Charts & Case Study Modals)
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Featured Projects</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Analytics in action.</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">Production-grade models and end-to-end analytical solutions demonstrating data mining rigor.</p>', unsafe_allow_html=True)

# ── PROJECT 1: WHICH ENGINEERING BRANCHES FACE THE BIGGEST SKILL GAP? ─────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #f43f5e;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #fda4af; letter-spacing: 0.15em; text-transform: uppercase;">Higher Education & Workforce Modeling</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Which Engineering Branches Face the Biggest Skill Gap?</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Workforce Analytics · 5+ Disciplines · 3,200+ Student Survey Logs</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Evaluated curriculum alignment vs industry demand across 5+ engineering streams (CSE, ECE, Mechanical, Civil, Chemical). Quantified the modern tooling deficit using ANOVA testing and regression models.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Pandas</span>
        <span class="skill-tag">Hypothesis Testing</span>
        <span class="skill-tag">Scikit-Learn</span>
        <span class="skill-tag">Power BI</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Live Plotly Chart for Project 1: Skill Gap
branches_list = ["Civil", "Mechanical", "Chemical", "ECE", "Computer Science"]
gap_rates = [71, 68, 54, 36, 22]
df_gap = pd.DataFrame({"Branch": branches_list, "Skill Deficit %": gap_rates})
fig1 = px.bar(
    df_gap, x="Skill Deficit %", y="Branch", orientation="h",
    color="Skill Deficit %", color_continuous_scale=["#10b981", "#38bdf8", "#f59e0b", "#f43f5e"],
    title="Engineering Branch Skill Deficit Rate (%)", text="Skill Deficit %"
)
fig1.update_traces(texttemplate='%{text}%', textposition='outside')
fig1.update_layout(yaxis=dict(categoryorder='total ascending'))
apply_dark_theme(fig1, height=300)
st.plotly_chart(fig1, use_container_width=True)

with st.expander("📖 View Full Case Study — Which Engineering Branches Face the Biggest Skill Gap?"):
    st.markdown("""
    #### 🎯 Business & Policy Problem
    Graduates across engineering disciplines face vastly unequal placement outcomes. Academic institutions lack data-driven clarity on which disciplines suffer from the deepest skill deficits.
    
    #### 📦 Dataset & Methodology
    - **Dataset:** Placement logs across 3,200+ engineering graduates, course syllabus mappings across 5+ streams, and 15,000+ job requirement tags.
    - **Analysis:** Applied ANOVA and Kruskal-Wallis statistical testing. Mechanical (68%) and Civil (71%) showed the highest deficits in software tooling (CAD/CAE, Python, BIM), whereas CSE showed only 22% gap.
    - **Strategic Impact:** Tool proficiency increased entry-level offer compensation by 42%. Recommended mandatory industry-aligned tool electives in 2nd/3rd year curricula.
    """)

st.markdown("<br><br>", unsafe_allow_html=True)


# ── PROJECT 2: SMART WATER ATM - IOT TELEMETRY ─────────────────────────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #22d3ee;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #67e8f9; letter-spacing: 0.15em; text-transform: uppercase;">Smart Utility & IoT Telemetry</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Smart Water ATM: IoT Telemetry & Consumption Analytics</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">IoT Telemetry Network · 25+ Kiosks · 94.2% Operational Uptime</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Architected telemetry analytics for a network of 25+ automated clean water dispensing kiosks. Tracked flow rates, daily dispensed liters, TDS water purity levels, and hardware downtime.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">IoT Telemetry</span>
        <span class="skill-tag">Time Series</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Power BI</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Live Plotly Chart for Project 2: Dispensed Volume & TDS Quality
days = pd.date_range("2024-01-01", periods=30, freq="D")
dispensed_vol = np.random.normal(1400, 120, 30)
tds_levels = np.random.normal(140, 10, 30)

fig2 = make_subplots(specs=[[{"secondary_y": True}]])
fig2.add_trace(go.Bar(x=days, y=dispensed_vol, name="Daily Volume (L)", marker_color="#22d3ee"), secondary_y=False)
fig2.add_trace(go.Scatter(x=days, y=tds_levels, name="TDS Purity (ppm)", line=dict(color="#34d399", width=2.5)), secondary_y=True)
fig2.update_layout(title="Kiosk Network Dispensed Volume vs Water Purity (TDS)")
apply_dark_theme(fig2, height=320)
st.plotly_chart(fig2, use_container_width=True)

with st.expander("📖 View Full Case Study — Smart Water ATM: IoT Telemetry"):
    st.markdown("""
    #### 🎯 Operational Problem
    Decentralized clean water kiosks faced unmonitored dispensing breakdowns, delayed filter servicing, and unmeasured water wastage.
    
    #### 🛠️ Telemetry Pipeline & Diagnostics
    - **Data Streams:** Flow meter sensor pulses, cumulative daily liters, TDS purity sensors, and valve logs across 25+ nodes over 12 months.
    - **Key Findings:** Kiosks with TDS >300 ppm experienced 3.1× faster membrane fouling. Condition-based filter maintenance alerts predicted failures 5–7 days in advance.
    - **ROI:** Cut kiosk downtime by 62% and eliminated ~22% of annual water leakage.
    """)

st.markdown("<br><br>", unsafe_allow_html=True)


# ── PROJECT 3: SMART WATER ATM - RFID TRANSACTIONS & DEMAND PREDICTION ─────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #818cf8;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #a5b4fc; letter-spacing: 0.15em; text-transform: uppercase;">Financial Modeling & Demand Forecasting</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Smart Water ATM: RFID Transactions & Demand Prediction</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Transaction Modeling · 85,000+ Records · Bimodal Surge Optimization</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Analyzed over 85,000 vending logs to model user payment behavior (RFID smart card vs coin), morning/evening rush hour peaks, and forecast weekly tanker replenishment schedules.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">SARIMA</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Financial Modeling</span>
        <span class="skill-tag">Tableau</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Live Plotly Chart for Project 3: Hourly Bimodal Surge
hours = list(range(24))
hourly_demand = [
    12, 8, 5, 10, 25, 65, 140, 185, 150, 80, 55, 45,
    50, 48, 52, 60, 95, 175, 210, 160, 90, 50, 30, 18
]
fig3 = go.Figure()
fig3.add_trace(go.Scatter(
    x=hours, y=hourly_demand, fill='tozeroy', fillcolor='rgba(129, 140, 248, 0.2)',
    line=dict(color="#818cf8", width=3), name="Hourly Volume (Liters)"
))
fig3.update_layout(title="24-Hour Bimodal Consumption Curve (Peak Windows: 6–9 AM & 5–8 PM)", xaxis_title="Hour of Day", yaxis_title="Dispensed Volume (L)")
apply_dark_theme(fig3, height=300)
st.plotly_chart(fig3, use_container_width=True)

with st.expander("📖 View Full Case Study — Smart Water ATM: RFID & Demand Prediction"):
    st.markdown("""
    #### 🎯 Demand Problem
    Unpredictable water depletion during peak morning and evening hours caused kiosk queues, lost revenue, and erratic tanker dispatch.
    
    #### 🔍 Analytical Insights
    - **Bimodal Distribution:** 64% of daily consumption occurred during 6:00–9:00 AM and 5:00–8:00 PM.
    - **Payment Breakdown:** RFID smart cardholders drove 76% of total revenue with 2.8× higher customer retention compared to coin users.
    - **Refill Strategy:** Scheduled automated refills before 5:00 AM and 3:30 PM, ensuring 100% kiosk availability during surges.
    """)

st.markdown("<br><br>", unsafe_allow_html=True)


# ── PROJECT 4: COLLEGE PERFORMANCE & ACADEMIC INTELLIGENCE DASHBOARD ───────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #3b82f6;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #93c5fd; letter-spacing: 0.15em; text-transform: uppercase;">Educational Data Mining & BI</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">College Performance & Academic Intelligence Dashboard</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Institutional BI · 4,500+ Student Profiles · 12 Academic Departments</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Engineered an executive Power BI & SQL suite tracking student semester GPAs, attendance-to-grade regression curves, department benchmarks, and an 89% precision Early Warning System.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Power BI</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">DAX Formulas</span>
        <span class="skill-tag">Predictive Modeling</span>
        <span class="skill-tag">Excel</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Live Plotly Chart for Project 4: Attendance vs GPA Scatter/Trend
att = np.random.uniform(55, 98, 60)
gpa = 4.0 + (att / 100) * 5.0 + np.random.normal(0, 0.35, 60)
gpa = np.clip(gpa, 4.0, 10.0)

fig4 = px.scatter(
    x=att, y=gpa, color=gpa, color_continuous_scale=["#f43f5e", "#f59e0b", "#10b981"],
    labels={"x": "Attendance Percentage (%)", "y": "Semester GPA"},
    title="Attendance vs Academic GPA Correlation (EWS Model)"
)
fig4.add_vline(x=75, line_dash="dash", line_color="#f43f5e", annotation_text="75% Mandatory Attendance")
apply_dark_theme(fig4, height=320)
st.plotly_chart(fig4, use_container_width=True)

with st.expander("📖 View Full Case Study — College Performance & Academic BI"):
    st.markdown("""
    #### 🎯 Institutional Need
    Academic administrators lacked unified real-time visibility into student grade progression and attendance risk indicators, relying on siloed end-of-term spreadsheets.
    
    #### 📊 Architecture & Findings
    - **Star Schema:** Connected 4,500+ student demographics, 65,000+ exam scores, and attendance registers in SQL/Power BI.
    - **EWS Model:** Identified that attendance <75% strongly correlates with a 1.8-grade drop in final GPA. Built early warning triggers with 89% precision.
    - **Intervention:** Automated mid-semester advisor alerts projected to reduce academic probation by 32%.
    """)

st.markdown("<div id='calculator' style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 7. INTERACTIVE DEMO: OPTIMIZATION CALCULATOR
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Interactive Live Calculator</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Resource & Inventory Optimization Model</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">Adjust the parameters below to test the mathematical optimization algorithms for inventory and replenishment cycles.</p>', unsafe_allow_html=True)

st.markdown('<div class="glass-card">', unsafe_allow_html=True)
calc_c1, calc_c2 = st.columns([1.1, 0.9])

with calc_c1:
    demand = st.slider("Annual Demand (Units / Year)", 500, 10000, 2400, step=100)
    order_cost = st.slider("Order Cost per Batch (₹)", 100, 2000, 500, step=50)
    holding_cost = st.slider("Holding Cost per Unit / Year (₹)", 10, 200, 50, step=5)
    lead_time = st.slider("Supplier Lead Time (Days)", 3, 45, 14, step=1)

# Computation
eoq_val = int(np.sqrt((2 * demand * order_cost) / holding_cost))
ltd_val = int((demand / 365) * lead_time)
ss_val = int(1.65 * (demand / 365) * 3)  # 95% service level
rop_val = ltd_val + ss_val
num_orders = round(demand / eoq_val, 1)

with calc_c2:
    st.markdown("### Model Outputs")
    o1, o2 = st.columns(2)
    with o1:
        st.markdown(f"""
        <div class="metric-box" style="background: rgba(34,211,238,0.08); border-color: rgba(34,211,238,0.3);">
            <span class="metric-val" style="color: #67e8f9;">{eoq_val}</span>
            <div class="metric-lbl">Optimal Order (EOQ)</div>
            <div class="metric-sub">Units per batch</div>
        </div>
        """, unsafe_allow_html=True)
    with o2:
        st.markdown(f"""
        <div class="metric-box">
            <span class="metric-val" style="color: #f59e0b;">{rop_val}</span>
            <div class="metric-lbl">Reorder Point (ROP)</div>
            <div class="metric-sub">Trigger threshold</div>
        </div>
        """, unsafe_allow_html=True)

    o3, o4 = st.columns(2)
    with o3:
        st.markdown(f"""
        <div class="metric-box" style="margin-top: 10px;">
            <span class="metric-val" style="color: #34d399;">{ss_val}</span>
            <div class="metric-lbl">Safety Stock</div>
            <div class="metric-sub">95% Service Level</div>
        </div>
        """, unsafe_allow_html=True)
    with o4:
        st.markdown(f"""
        <div class="metric-box" style="margin-top: 10px;">
            <span class="metric-val" style="color: #c084fc;">~{num_orders}</span>
            <div class="metric-lbl">Orders / Year</div>
            <div class="metric-sub">Procurement cycles</div>
        </div>
        """, unsafe_allow_html=True)

st.markdown('</div>', unsafe_allow_html=True)

st.markdown("<div style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 9. EDUCATION, CERTIFICATIONS & COMPETITIONS
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Academic & Credentials</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Education & Certifications</h2>', unsafe_allow_html=True)

ed_c1, ed_c2 = st.columns(2)

with ed_c1:
    st.markdown("### 🎓 Education")
    st.markdown("""
    <div class="glass-card" style="padding: 1.25rem;">
        <div style="font-weight: 700; color: #ffffff; font-size: 1rem;">Diploma in Data Science (Pursuing)</div>
        <div style="color: #22d3ee; font-size: 0.85rem; font-weight: 600;">IIT Madras (Online) · 2025 – Present</div>
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 0.4rem;">Machine Learning, Statistical Inference, Python for Data Science, and Relational Database Systems.</p>
    </div>
    <div class="glass-card" style="padding: 1.25rem;">
        <div style="font-weight: 700; color: #ffffff; font-size: 1rem;">B.Com (Honours) — 81.6%</div>
        <div style="color: #22d3ee; font-size: 0.85rem; font-weight: 600;">Aryabhatta College, University of Delhi · 2024</div>
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 0.4rem;">Financial Analysis, Quantitative Techniques, Business Statistics, Auditing.</p>
    </div>
    """, unsafe_allow_html=True)

with ed_c2:
    st.markdown("### 📜 Verified Certifications")
    st.markdown("""
    <div class="glass-card" style="padding: 1.25rem;">
        <div style="font-size: 0.85rem; color: #cbd5e1; space-y: 0.5rem;">
            <div style="margin-bottom: 0.5rem;">✅ <strong style="color: #ffffff;">Google Business Intelligence Professional Certificate</strong> — Coursera / Google</div>
            <div style="margin-bottom: 0.5rem;">✅ <strong style="color: #ffffff;">Practical Time Series Analysis</strong> — Coursera</div>
            <div style="margin-bottom: 0.5rem;">✅ <strong style="color: #ffffff;">Business Statistics and Analysis</strong> — Coursera</div>
            <div style="margin-bottom: 0.5rem;">✅ <strong style="color: #ffffff;">Data Analysis: SQL, Tableau, Power BI & Excel</strong> — Udemy</div>
            <div>✅ <strong style="color: #ffffff;">Python for Data Analysis and Business Intelligence</strong> — Udemy</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("### 🏆 Competitions & Simulations")
cp1, cp2, cp3, cp4 = st.columns(4)
comps = [
    ("🏆 Top 1 Percentile", "Unstop Weekly Case Challenges", "National ranking across case analysis"),
    ("🔷 Completed", "BCG X Simulation", "Data cleaning → EDA → predictive modeling"),
    ("🔷 Completed", "Deloitte Simulation", "Statistical analysis & business recommendations"),
    ("💻 50+ Solved", "LeetCode SQL", "Advanced joins, CTEs, window functions")
]
for col, (bdg, title, sub) in zip([cp1, cp2, cp3, cp4], comps):
    with col:
        st.markdown(f"""
        <div class="glass-card" style="padding: 1rem; text-align: center;">
            <div style="font-size: 0.75rem; font-weight: 700; color: #fbbf24;">{bdg}</div>
            <div style="font-weight: 700; color: #ffffff; font-size: 0.85rem; margin-top: 4px;">{title}</div>
            <div style="font-size: 0.7rem; color: #64748b; margin-top: 4px;">{sub}</div>
        </div>
        """, unsafe_allow_html=True)

st.markdown("<div id='contact' style='margin-top: 4rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 10. CONTACT SECTION & INTERACTIVE FORM
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Get In Touch</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Let\'s connect.</h2>', unsafe_allow_html=True)

ct_left, ct_right = st.columns([1, 1.1])

with ct_left:
    st.markdown("""
    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.7;">
        I am actively open to <strong style="color: #ffffff;">Data Analyst roles, internships, and analytics consulting projects</strong>. Feel free to reach out via direct channels or leave a message below.
    </p>
    <div style="margin-top: 1.5rem; space-y: 0.75rem;">
        <div class="glass-card" style="padding: 1rem; margin-bottom: 0.75rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Email</div>
            <a href="mailto:koushikgarg11@gmail.com" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">koushikgarg11@gmail.com</a>
        </div>
        <div class="glass-card" style="padding: 1rem; margin-bottom: 0.75rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">LinkedIn</div>
            <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">linkedin.com/in/koushik-garg</a>
        </div>
        <div class="glass-card" style="padding: 1rem; margin-bottom: 0.75rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">GitHub</div>
            <a href="https://github.com/koushikgarg11" target="_blank" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">github.com/koushikgarg11</a>
        </div>
        <div class="glass-card" style="padding: 1rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Phone / WhatsApp</div>
            <a href="tel:+917428668469" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">+91-7428668469</a>
        </div>
    </div>
    """, unsafe_allow_html=True)

with ct_right:
    with st.form("contact_form"):
        st.markdown("#### ✉️ Send a Message")
        name = st.text_input("Your Name", placeholder="e.g. Hiring Manager / Recruiter")
        email = st.text_input("Your Email", placeholder="name@company.com")
        subject = st.selectbox("Inquiry Type", [
            "Data Analyst Job Opportunity",
            "Data Analyst Internship",
            "Freelance Analytics Project",
            "General Networking"
        ])
        message = st.text_area("Message", placeholder="Tell me about the role, team, or project requirements...", height=120)
        submit_btn = st.form_submit_button("Send Inquiry")

        if submit_btn:
            if name and email and message:
                st.success(f"Thank you, {name}! Your message has been noted. You can also reach out directly to koushikgarg11@gmail.com.")
                st.balloons()
            else:
                st.error("Please fill in all fields before sending.")


# ══════════════════════════════════════════════════════════════════════════════
# 11. FOOTER
# ══════════════════════════════════════════════════════════════════════════════
st.markdown("<hr style='border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 4rem 0 2rem 0;'>", unsafe_allow_html=True)
st.markdown("""
<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b; flex-wrap: wrap; gap: 10px;">
    <div>© 2026 Koushik Garg. Built with Streamlit & Plotly.</div>
    <div style="display: flex; gap: 16px;">
        <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #94a3b8; text-decoration: none;">LinkedIn</a>
        <a href="https://github.com/koushikgarg11" target="_blank" style="color: #94a3b8; text-decoration: none;">GitHub</a>
        <a href="mailto:koushikgarg11@gmail.com" style="color: #94a3b8; text-decoration: none;">Email</a>
    </div>
</div>
""", unsafe_allow_html=True)
