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

# ── Custom CSS Design System (Dark Glassmorphic UI) ───────────────────────────
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* Apply font to text elements while preserving icon fonts */
html, body, p, h1, h2, h3, h4, h5, h6, input, textarea, select, button {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #f8fafc;
}

/* Background grid */
.stApp {
    background-color: #060b14;
    background-image: 
        linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
}

/* Hide default Streamlit elements */
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
header {visibility: hidden;}
.block-container {
    padding-top: 1.5rem;
    padding-bottom: 4rem;
    max-width: 1150px;
}

/* Typography & Gradient Accents */
.gradient-text {
    background: linear-gradient(135deg, #22d3ee 0%, #60a5fa 50%, #818cf8 100%);
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
    max-width: 680px;
    margin-bottom: 2rem;
}

/* Glassmorphism Cards */
.glass-card {
    background: rgba(9, 17, 34, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 1.5rem;
    backdrop-filter: blur(16px);
    margin-bottom: 1.25rem;
    transition: all 0.25s ease;
}
.glass-card:hover {
    border-color: rgba(34, 211, 238, 0.35);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
}

/* Status Badges & Pills */
.badge-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(34, 211, 238, 0.08);
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
    background-color: #34d399;
    border-radius: 50%;
    box-shadow: 0 0 10px #34d399;
}

.skill-tag {
    display: inline-block;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 8px;
    margin-right: 6px;
    margin-bottom: 6px;
}

.metric-box {
    background: rgba(9, 17, 34, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 1.25rem;
    text-align: center;
    transition: all 0.25s ease;
}
.metric-box:hover {
    border-color: rgba(34, 211, 238, 0.35);
}
.metric-val {
    font-size: 1.85rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -0.03em;
}
.metric-lbl {
    font-size: 0.8rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-top: 4px;
}
.metric-sub {
    font-size: 0.7rem;
    color: #94a3b8;
    margin-top: 2px;
}

/* Streamlit Button Overrides */
.stButton > button {
    background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%) !important;
    color: #060b14 !important;
    font-weight: 700 !important;
    border: none !important;
    border-radius: 9999px !important;
    padding: 0.6rem 1.8rem !important;
    font-size: 0.88rem !important;
    transition: all 0.2s ease !important;
    box-shadow: 0 4px 20px rgba(34, 211, 238, 0.25) !important;
}
.stButton > button:hover {
    transform: scale(1.02) !important;
    box-shadow: 0 6px 25px rgba(34, 211, 238, 0.4) !important;
}

/* Streamlit Expander Overrides — Preserves Chevron Icon Font */
details[data-testid="stExpander"] {
    background: rgba(9, 17, 34, 0.7) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 14px !important;
    margin-top: 0.5rem !important;
    margin-bottom: 1.25rem !important;
}
details[data-testid="stExpander"] > summary {
    color: #22d3ee !important;
    font-weight: 600 !important;
    padding: 0.65rem 1rem !important;
    border-radius: 14px !important;
}
details[data-testid="stExpander"] > summary:hover {
    color: #67e8f9 !important;
    background: rgba(34, 211, 238, 0.05) !important;
}
details[data-testid="stExpander"][open] > summary {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
details[data-testid="stExpander"] > div[data-testid="stExpanderDetails"] {
    padding: 1.25rem !important;
    background: #091122 !important;
    border-radius: 0 0 14px 14px !important;
}
</style>
""", unsafe_allow_html=True)

# ── Helper for Dark Plotly Styling ────────────────────────────────────────────
def apply_dark_theme(fig, height=330, left_margin=40):
    fig.update_layout(
        template="plotly_dark",
        plot_bgcolor="rgba(6, 11, 20, 0.9)",
        paper_bgcolor="rgba(6, 11, 20, 0)",
        font=dict(family="Inter, sans-serif", color="#cbd5e1", size=11),
        margin=dict(l=left_margin, r=20, t=40, b=20),
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
        <div style="width: 34px; height: 34px; border-radius: 10px; background: linear-gradient(135deg, #22d3ee, #3b82f6); display: flex; align-items: center; justify-content: center; font-weight: 900; color: #060b14; font-size: 1.1rem;">
            📊
        </div>
        <span style="font-size: 1.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
            Koushik<span style="color: #22d3ee;">.</span>Garg
        </span>
    </div>
    """, unsafe_allow_html=True)

with c_nav:
    st.markdown("""
    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 14px; padding: 10px 0;">
        <a href="#about" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">About</a>
        <a href="#skills" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Skills</a>
        <a href="#projects" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Projects</a>
        <a href="#calculator" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Live Simulator</a>
        <a href="#credentials" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Credentials</a>
        <a href="#contact" style="color: #67e8f9; border: 1px solid rgba(34,211,238,0.3); background: rgba(34,211,238,0.08); padding: 4px 14px; border-radius: 9999px; text-decoration: none; font-size: 0.8rem; font-weight: 600;">Contact</a>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<hr style='border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 0.5rem 0 2rem 0;'>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 2. HERO SECTION
# ══════════════════════════════════════════════════════════════════════════════
hero_left, hero_right = st.columns([1.25, 0.75])

with hero_left:
    st.markdown("""
    <div class="badge-status">
        <div class="dot-pulse"></div>
        Data Analyst · New Delhi, India · <strong style="color: #34d399;">Open to Work</strong>
    </div>
    <div style="height: 12px;"></div>
    <h1 style="font-size: 3.4rem; font-weight: 900; line-height: 1.05; letter-spacing: -0.04em; margin: 0; color: #ffffff;">
        Hi, I'm <span class="gradient-text">Koushik.</span>
    </h1>
    <h2 style="font-size: 1.45rem; font-weight: 700; color: #e2e8f0; margin-top: 0.8rem; letter-spacing: -0.02em;">
        Turning <span style="color: #22d3ee; text-decoration: underline; text-decoration-color: rgba(34,211,238,0.4);">raw data</span> into high-conviction business decisions.
    </h2>
    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.7; margin-top: 0.9rem; max-width: 580px;">
        Quantitative problem-solver with hands-on experience in <strong style="color: #f1f5f9;">ARIMA time-series demand forecasting (+15–20% accuracy gain)</strong>, <strong style="color: #f1f5f9;">geospatial EV infrastructure modeling (130K+ records)</strong>, and <strong style="color: #f1f5f9;">machine learning threat classification on 100K+ records</strong>. Proficient in Python, SQL, Power BI, and Tableau.
    </p>
    
    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 1.5rem; align-items: center;">
        <a href="#projects" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #22d3ee, #3b82f6); color: #060b14; font-weight: 700; font-size: 0.85rem; padding: 10px 22px; border-radius: 9999px; text-decoration: none;">
            View Projects ↓
        </a>
        <a href="mailto:koushikgarg11@gmail.com" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: #f1f5f9; font-weight: 600; font-size: 0.85rem; padding: 10px 20px; border-radius: 9999px; text-decoration: none;">
            ✉ Email Me
        </a>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 1.5rem; color: #64748b; font-size: 0.85rem;">
        <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #94a3b8; text-decoration: none;">🔗 LinkedIn</a>
        <a href="https://github.com/koushikgarg11" target="_blank" style="color: #94a3b8; text-decoration: none;">💻 GitHub</a>
        <a href="tel:+917428668469" style="color: #94a3b8; text-decoration: none;">📞 +91-7428668469</a>
    </div>
    """, unsafe_allow_html=True)

with hero_right:
    st.markdown("""
    <div class="glass-card" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 6px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #94a3b8; margin-left: 6px;">forecast_engine.py</span>
            </div>
            <span style="font-size: 0.7rem; font-weight: 700; color: #22d3ee; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.3); padding: 2px 8px; border-radius: 6px;">ARIMA(2,1,2)</span>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.73rem; background: rgba(0,0,0,0.5); padding: 0.9rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); color: #cbd5e1; line-height: 1.6;">
            <span style="color: #64748b;"># Demand Forecasting & Spatial Scoring</span><br>
            <span style="color: #c084fc;">from</span> statsmodels.tsa.arima <span style="color: #c084fc;">import</span> ARIMA<br>
            <span style="color: #67e8f9;">model</span> = ARIMA(demand, order=(2, 1, 2)).fit()<br>
            <span style="color: #34d399;">✓ Accuracy Gain: +18.4% (Taiwal)</span><br>
            <span style="color: #22d3ee;">✓ 130K+ Geospatial Records Analyzed</span>
        </div>
        <div style="margin-top: 0.85rem; background: rgba(34,211,238,0.05); border: 1px solid rgba(34,211,238,0.2); border-radius: 12px; padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Academic Focus</div>
                <div style="font-size: 0.85rem; font-weight: 700; color: #ffffff;">IIT Madras (DS) · DU (81.6%)</div>
            </div>
            <span style="font-size: 1.2rem;">🎓</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 3. KEY METRICS BAR
# ══════════════════════════════════════════════════════════════════════════════
m1, m2, m3, m4, m5 = st.columns(5)
metrics_data = [
    ("130K+", "Geospatial Records", "EV Charging Platform"),
    ("15–20%", "Forecast Accuracy", "ARIMA Modeling"),
    ("100K+", "Records Modeled", "ML Threat Classification"),
    ("Top 1%", "Unstop National Rank", "Weekly Case Challenges"),
    ("~40%", "Reporting Time Saved", "AI & Python ETL Pipelines")
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

st.markdown("<div id='about' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 4. ABOUT SECTION
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">About Me</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Bridging quantitative modeling with commercial business acumen.</h2>', unsafe_allow_html=True)

about_col1, about_col2 = st.columns([1.1, 0.9])

with about_col1:
    st.markdown("""
    <div style="color: #94a3b8; font-size: 0.95rem; line-height: 1.8;">
        <p>
            I am an analytical problem-solver currently pursuing a <strong style="color: #ffffff;">Diploma in Data Science from IIT Madras</strong> alongside a <strong style="color: #ffffff;">Bachelor of Commerce (Honours) from Aryabhatta College, University of Delhi (81.6%)</strong>. This quantitative + commercial foundation enables me to understand both mathematical algorithms and balance sheet drivers.
        </p>
        <p>
            My hands-on experience bridges the full analytics lifecycle: from engineering <strong style="color: #22d3ee;">ARIMA time-series models</strong> to optimize inventory ordering and improve forecast accuracy by 15–20% at Taiwal Enterprises, aggregating <strong style="color: #22d3ee;">130K+ geospatial records</strong> for EV infrastructure gap recommendations, to training <strong style="color: #22d3ee;">Random Forest & Logistic Regression classifiers</strong> on 100K+ records.
        </p>
        <p>
            I specialize in mathematical inventory formulas (EOQ, Safety Stock, ROP), multi-criteria spatial scoring (AHP/TOPSIS), relational SQL modeling, and executive storytelling in Power BI & Tableau.
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
        <div style="font-size: 0.85rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.55rem;">
                <span style="color: #64748b;">Target Role</span>
                <span style="font-weight: 600; color: #f1f5f9;">Data Analyst / BI Analyst</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.55rem; margin-top: 0.55rem;">
                <span style="color: #64748b;">Education</span>
                <span style="font-weight: 600; color: #f1f5f9; text-align: right;">IIT Madras (DS) · DU (B.Com)</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.55rem; margin-top: 0.55rem;">
                <span style="color: #64748b;">Location</span>
                <span style="font-weight: 600; color: #f1f5f9;">Delhi, India (Open to Remote)</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.55rem; margin-top: 0.55rem;">
                <span style="color: #64748b;">Core Stack</span>
                <span style="font-weight: 600; color: #f1f5f9;">Python · SQL · Power BI · Excel</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.55rem;">
                <span style="color: #64748b;">Focus Areas</span>
                <span style="font-weight: 600; color: #f1f5f9;">Forecasting · Spatial AI · Dashboards</span>
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<div id='skills' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 5. SKILLS SECTION
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Technical Stack</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Tools & Methodologies</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">A comprehensive toolkit spanning relational querying, statistical modeling, machine learning, and enterprise business intelligence.</p>', unsafe_allow_html=True)

sk_col1, sk_col2 = st.columns(2)

skills_grid = [
    ("🐍 Technical & Data Wrangling", ["Python", "Pandas", "NumPy", "SQL (PostgreSQL/MySQL)", "Power BI", "Tableau", "Excel (VBA, Power Query)", "ETL Pipelines", "Data Cleaning"]),
    ("🤖 ML & Statistical Analytics", ["ARIMA / SARIMA Forecasting", "Predictive Modeling", "Classification & Regression", "Anomaly Detection", "A/B Testing", "Feature Engineering", "AHP / TOPSIS Spatial Scoring"]),
    ("💼 Business & BI Analytics", ["Demand Forecasting", "Inventory Optimization (EOQ)", "Safety Stock & ROP", "ABC / Pareto 80/20 Analysis", "KPI Design", "Executive Dashboards"]),
    ("⚡ AI & Automation", ["LLM Prompt Engineering", "AI-assisted Reporting Pipelines", "Semantic Search", "Power Automate", "Web Scraping", "Jinja2 Templating"])
]

cols_list = [sk_col1, sk_col2]
for idx, (category, items) in enumerate(skills_grid):
    with cols_list[idx % 2]:
        pills_html = "".join([f'<span class="skill-tag">{item}</span>' for item in items])
        st.markdown(f"""
        <div class="glass-card" style="padding: 1.25rem; min-height: 180px;">
            <div style="font-weight: 700; font-size: 1rem; color: #ffffff; margin-bottom: 0.85rem;">{category}</div>
            {pills_html}
        </div>
        """, unsafe_allow_html=True)

st.markdown("<div id='projects' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 6. FEATURED PROJECTS SECTION (5 Resume Projects with Live Plotly Visuals)
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Featured Work</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Data Science & Analytics Projects</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">End-to-end analytical solutions, spatial decision intelligence, time-series forecasting, and automated pipelines.</p>', unsafe_allow_html=True)

# ── PROJECT 1: CHARGEDESERT EV INFRASTRUCTURE PLATFORM ────────────────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #22d3ee;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #67e8f9; letter-spacing: 0.15em; text-transform: uppercase;">Geospatial AI & Decision Science · 2026</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">ChargeDesert — EV Infrastructure Gap & Site Recommendation Platform</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Python · GIS · AHP/TOPSIS Multi-Criteria Scoring · Streamlit · 130K+ Geospatial Records</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Built an end-to-end EV infrastructure intelligence platform integrating 130K+ geospatial records to identify charging gaps, evaluate road risk, and prioritize optimal charging locations using AHP/TOPSIS multi-criteria algorithms and what-if simulation.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">GIS Analytics</span>
        <span class="skill-tag">AHP / TOPSIS</span>
        <span class="skill-tag">Streamlit</span>
        <span class="skill-tag">Scikit-Learn</span>
    </div>
    <div style="margin-top: 0.75rem;">
        <a href="https://chargedesert.streamlit.app/" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, #22d3ee, #3b82f6); color: #060b14; font-weight: 700; font-size: 0.75rem; padding: 6px 14px; border-radius: 9999px; text-decoration: none;">
            🚀 Launch Live App ↗
        </a>
    </div>
</div>
""", unsafe_allow_html=True)

# Plotly Visual 1: AHP/TOPSIS Corridor Gap Ranking (With generous left margin to prevent clipping)
corridors = ["NH-48 (Delhi-Jaipur)", "NH-44 (Delhi-Agra)", "Western Peripheral Expwy", "NE-3 (Delhi-Meerut)", "NH-9 (Delhi-Moradabad)"]
gap_scores = [92, 84, 78, 65, 58]
topsis_scores = [0.88, 0.81, 0.74, 0.63, 0.55]

df_ev = pd.DataFrame({"Corridor": corridors, "Gap Score": gap_scores, "TOPSIS Viability": topsis_scores})
fig_ev = px.bar(
    df_ev, x="Gap Score", y="Corridor", orientation="h",
    color="Gap Score", color_continuous_scale=["#38bdf8", "#818cf8", "#f43f5e"],
    title="EV Charging Desert Gap Score & Viability Ranking (AHP/TOPSIS)", text="Gap Score"
)
fig_ev.update_traces(texttemplate='%{text}/100', textposition='outside')
fig_ev.update_layout(yaxis=dict(categoryorder='total ascending'))
apply_dark_theme(fig_ev, height=290, left_margin=180)
st.plotly_chart(fig_ev, use_container_width=True)

with st.expander("📖 View Full Case Study — ChargeDesert EV Infrastructure Platform"):
    st.markdown("""
    #### 🎯 Business Problem
    Electric vehicle adoption in regional corridors is bottlenecked by charging deserts. Planners lack unified spatial intelligence to prioritize high-yield locations without straining local power grids.
    
    #### 📦 Dataset & Spatial ETL
    - **130K+ Records:** Ingested existing charging nodes, state/national highway networks, traffic density telemetry, and substation capacities.
    - **AHP/TOPSIS Engine:** Weighted dynamic criteria (Traffic Density 30%, Grid Distance 25%, Competitor Buffer 15%, POI Density 15%, Road Risk 10%, Land Cost 5%).
    - **Impact:** Top 15 ranked highway intersections identified for Phase-1 deployment, projected to increase network coverage by 38% while reducing grid extension Capex by 24%.
    
    🔗 **Live App:** [https://chargedesert.streamlit.app/](https://chargedesert.streamlit.app/)
    """)

st.markdown("<br>", unsafe_allow_html=True)


# ── PROJECT 2: WATER ATM DOWNTIME ATLAS ───────────────────────────────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #f59e0b;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #fde68a; letter-spacing: 0.15em; text-transform: uppercase;">Infrastructure Analytics & Web Scraping · 2026</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Water ATM Downtime Atlas – Rural Drinking Water Analytics</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Pan-India Web-Scraped Database · Root-Cause Diagnostics · Power BI Dashboards</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Constructed a Pan-India Water ATM Operational Intelligence Database by web-scraping government portals, tender platforms, and public grievance logs to diagnose downtime patterns, failure causes (power, RO membrane, vandalism), and vendor SLA reliability.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Web Scraping</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Failure Diagnostics</span>
        <span class="skill-tag">Power BI</span>
    </div>
    <div style="margin-top: 0.75rem;">
        <a href="https://wateratm.streamlit.app/" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, #22d3ee, #3b82f6); color: #060b14; font-weight: 700; font-size: 0.75rem; padding: 6px 14px; border-radius: 9999px; text-decoration: none;">
            🚀 Launch Live App ↗
        </a>
    </div>
</div>
""", unsafe_allow_html=True)

# Plotly Visual 2: Downtime Root Causes
causes = ["Power Grid Instability", "RO Membrane Choking / Fouling", "Hardware Vandalism", "Dispense Valve Failure"]
shares = [48, 31, 12, 9]
colors_pie = ["#f43f5e", "#f59e0b", "#c084fc", "#22d3ee"]

fig_water = go.Figure(data=[go.Pie(
    labels=causes, values=shares, hole=0.55,
    marker=dict(colors=colors_pie), textinfo="label+percent"
)])
fig_water.update_layout(title="Pan-India Water ATM Downtime Failure Root Causes (%)")
apply_dark_theme(fig_water, height=310, left_margin=20)
st.plotly_chart(fig_water, use_container_width=True)

with st.expander("📖 View Full Case Study — Water ATM Downtime Atlas"):
    st.markdown("""
    #### 🎯 Operational Challenge
    Decentralized rural drinking water kiosks face unmonitored operational downtimes, leading to acute drinking water insecurity and lack of accountability among maintenance vendors.
    
    #### 🔍 Key Findings & Recommendations
    - **Data Pipeline:** Scraped and harmonized data from state water mission portals, Smart City feeds, and grievance logs spanning 100+ districts.
    - **Diagnostics:** 48% of outages were caused by power supply instability, 31% by membrane fouling. Maintenance vendors breached contractual 24-hour SLAs by an average of 4.2 days.
    - **Policy ROI:** Recommended solar-hybrid micro inverters and implemented penalty-linked vendor SLA scorecards, cutting operational downtime by 45%.
    
    🔗 **Live App:** [https://wateratm.streamlit.app/](https://wateratm.streamlit.app/)
    """)

st.markdown("<br>", unsafe_allow_html=True)


# ── PROJECT 3: AI-ASSISTED SALES REPORT AUTOMATION ─────────────────────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #c084fc;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #e9d5ff; letter-spacing: 0.15em; text-transform: uppercase;">AI ETL & Semantic Automation · 2026</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">AI-Assisted Sales Report Automation</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Python ETL · LLM Prompt Engineering · Semantic Vector Search · ~40% Time Saved</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Built an automated Python ETL pipeline leveraging LLM prompt engineering to auto-generate structured executive sales summaries and integrated semantic search for natural language querying over product/customer datasets.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">LLM Prompting</span>
        <span class="skill-tag">Semantic Search</span>
        <span class="skill-tag">ETL Workflows</span>
        <span class="skill-tag">Pandas</span>
    </div>
    <div style="margin-top: 0.75rem;">
        <a href="https://ai-assisted-sales-report-automation.streamlit.app/" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, #22d3ee, #3b82f6); color: #060b14; font-weight: 700; font-size: 0.75rem; padding: 6px 14px; border-radius: 9999px; text-decoration: none;">
            🚀 Launch Live App ↗
        </a>
    </div>
</div>
""", unsafe_allow_html=True)

# Plotly Visual 3: Manual vs AI Automated Reporting Time
tasks = ["Data Ingestion & Alignment", "Variance Analysis", "Executive Summary Writing", "Ad-Hoc SQL Lookups"]
manual_hrs = [4.5, 3.5, 4.0, 3.0]
auto_hrs = [0.8, 0.5, 0.8, 0.4]

fig_ai = go.Figure()
fig_ai.add_trace(go.Bar(name="Manual Workflow (Hours)", x=tasks, y=manual_hrs, marker_color="#f43f5e"))
fig_ai.add_trace(go.Bar(name="AI-Assisted ETL (Hours)", x=tasks, y=auto_hrs, marker_color="#22d3ee"))
fig_ai.update_layout(barmode="group", title="Weekly Reporting Hours: Manual Workflow vs AI-Assisted ETL (~40% Saved)")
apply_dark_theme(fig_ai, height=290, left_margin=30)
st.plotly_chart(fig_ai, use_container_width=True)

with st.expander("📖 View Full Case Study — AI-Assisted Sales Report Automation"):
    st.markdown("""
    #### 🎯 Business Context
    Sales ops teams spent 15+ hours weekly aggregating regional sales spreadsheets, drafting narrative executive decks, and answering repetitive ad-hoc data inquiries.
    
    #### ⚙️ Technical Architecture
    - **ETL Engine:** Automated multi-branch data ingestion and schema validation in Python.
    - **Prompt Engineering:** Designed Few-Shot prompt templates extracting top margin gainers/losers and generating Markdown/HTML briefings.
    - **Semantic Retrieval:** Integrated vector embeddings enabling plain-English querying ("Which categories saw >5% margin erosion?"), eliminating repetitive SQL lookups.
    """)

st.markdown("<br>", unsafe_allow_html=True)


# ── PROJECT 4: DEMAND FORECASTING & INVENTORY OPTIMIZATION | TAIWAL ────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #10b981;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #a7f3d0; letter-spacing: 0.15em; text-transform: uppercase;">Time Series Forecasting & Inventory Optimization · 2025</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Demand Forecasting & Inventory Optimization | Taiwal Enterprises</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">ARIMA / SARIMA Models (+15–20% Accuracy) · ABC/Pareto 80/20 · EOQ & Safety Stock</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Replaced manual demand estimation with ARIMA time-series models, improving forecast accuracy by 15–20% and reducing stockout risk. Conducted ABC/Pareto analysis and built client-adopted EOQ, Safety Stock, and Reorder Point procurement schedules.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">ARIMA / SARIMA</span>
        <span class="skill-tag">ABC / Pareto</span>
        <span class="skill-tag">EOQ Optimization</span>
        <span class="skill-tag">Safety Stock</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Plotly Visual 4: Actual vs ARIMA Forecast Curve
weeks = [f"Week {i}" for i in range(1, 11)]
actuals = [420, 460, 490, 430, 510, 580, 610, 640, 670, None]
forecast = [415, 450, 485, 440, 505, 565, 595, 630, 660, 695]
upper_ci = [v + 35 for v in forecast]
lower_ci = [v - 35 for v in forecast]

fig_arima = go.Figure()
fig_arima.add_trace(go.Scatter(x=weeks, y=actuals, name="Actual Demand", mode="lines+markers", line=dict(color="#22d3ee", width=3)))
fig_arima.add_trace(go.Scatter(x=weeks, y=forecast, name="ARIMA(2,1,2) Forecast", mode="lines+markers", line=dict(color="#10b981", width=3, dash="dash")))
fig_arima.add_trace(go.Scatter(x=weeks + weeks[::-1], y=upper_ci + lower_ci[::-1], fill='toself', fillcolor='rgba(16, 185, 129, 0.12)', line=dict(color='rgba(255,255,255,0)'), name='95% Confidence Interval'))
fig_arima.update_layout(title="Weekly SKU Demand: Actual Sales vs ARIMA Forecast (+18.4% Accuracy Gain)")
apply_dark_theme(fig_arima, height=310, left_margin=30)
st.plotly_chart(fig_arima, use_container_width=True)

with st.expander("📖 View Full Case Study — Taiwal Enterprises Demand Forecasting"):
    st.markdown("""
    #### 🎯 Business Context
    Taiwal Enterprises experienced frequent stockouts of critical revenue-generating SKUs alongside heavy capital lockup in slow-moving inventory due to guesswork procurement ordering.
    
    #### 📈 Methodology & Results
    - **ARIMA Modeling:** Performed stationary transformation (ADF testing) and tuned ARIMA(2,1,2) models, improving forecast precision by 15–20%.
    - **ABC Pareto Segmentation:** Identified that 20% of SKUs generated 75% of revenue (Class-A).
    - **Inventory Optimization:** Formulated dynamic Safety Stocks at 95% service level and automated EOQ batch sizes, reducing total holding costs by 18%.
    """)

st.markdown("<br>", unsafe_allow_html=True)


# ── PROJECT 5: MARKET RESEARCH & COMPETITIVE ANALYSIS | IIT MADRAS ────────────
st.markdown("""
<div class="glass-card" style="border-left: 4px solid #3b82f6;">
    <div style="font-size: 0.75rem; font-weight: 700; color: #93c5fd; letter-spacing: 0.15em; text-transform: uppercase;">Strategic Benchmarking & Market Intelligence · 2025</div>
    <h3 style="font-size: 1.6rem; font-weight: 800; color: #ffffff; margin-top: 0.25rem;">Market Research & Competitive Analysis | Business.io Society, IIT Madras</h3>
    <div style="color: #94a3b8; font-size: 0.85rem; font-weight: 500;">Multi-Source Competitive Benchmarking · HMC Group · Strategic Decision Matrices</div>
    <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-top: 0.75rem;">
        Contributed to a structured competitive market analysis for HMC Group, synthesizing multi-source market data, feature parity matrices, and pricing tiers into prioritized executive recommendations.
    </p>
    <div style="margin-top: 0.5rem;">
        <span class="skill-tag">Market Analytics</span>
        <span class="skill-tag">Competitive Benchmarking</span>
        <span class="skill-tag">Strategic Matrices</span>
        <span class="skill-tag">Power BI</span>
        <span class="skill-tag">Excel</span>
    </div>
</div>
""", unsafe_allow_html=True)

# Plotly Visual 5: Radar Chart for Competitive Benchmarking
categories = ["Price/Value Ratio", "AI Automation", "Deployment Speed", "Feature Depth", "Enterprise SLA"]
hmc_vals = [88, 82, 90, 78, 85]
comp_vals = [72, 85, 68, 84, 75]

fig_radar = go.Figure()
fig_radar.add_trace(go.Scatterpolar(r=hmc_vals, theta=categories, fill='toself', name='HMC Group', fillcolor='rgba(34, 211, 238, 0.2)', line=dict(color='#22d3ee', width=2)))
fig_radar.add_trace(go.Scatterpolar(r=comp_vals, theta=categories, fill='toself', name='Industry Benchmark', fillcolor='rgba(148, 163, 184, 0.1)', line=dict(color='#94a3b8', width=2, dash='dash')))
fig_radar.update_layout(polar=dict(radialaxis=dict(visible=True, range=[0, 100])), title="HMC Group Competitive Parity & Differentiation Matrix")
apply_dark_theme(fig_radar, height=320, left_margin=30)
st.plotly_chart(fig_radar, use_container_width=True)

with st.expander("📖 View Full Case Study — HMC Group Competitive Analysis"):
    st.markdown("""
    #### 🎯 Strategic Goal
    Provide HMC Group leadership with data-backed positioning recommendations against incumbent players in a highly saturated market.
    
    #### 📊 Synthesis & Impact
    - **Multi-Source Synthesis:** Synthesized analyst reports, pricing tiers, and consumer sentiment signals.
    - **Differentiation Roadmap:** Pinpointed mid-tier packaging and automation features as key whitespace opportunities, delivering a client-adopted go-to-market plan.
    """)

st.markdown("<div id='calculator' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 7. INTERACTIVE DEMO: OPTIMIZATION CALCULATOR
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Interactive Live Simulator</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Inventory & Replenishment Optimizer</h2>', unsafe_allow_html=True)
st.markdown('<p class="section-desc">Adjust procurement parameters below to test the mathematical inventory optimization algorithms (EOQ, Safety Stock, Reorder Point).</p>', unsafe_allow_html=True)

st.markdown('<div class="glass-card">', unsafe_allow_html=True)
calc_c1, calc_c2 = st.columns([1.1, 0.9])

with calc_c1:
    demand = st.slider("Annual Demand (Units / Year)", 500, 10000, 2400, step=100)
    order_cost = st.slider("Order Cost per Batch (₹)", 50, 2000, 500, step=50)
    holding_cost = st.slider("Holding Cost per Unit / Year (₹)", 10, 200, 50, step=5)
    lead_time = st.slider("Supplier Lead Time (Days)", 3, 45, 14, step=1)
    daily_std = st.slider("Daily Demand Volatility (StdDev Units)", 1, 20, 5, step=1)

# Computation
eoq_val = int(np.sqrt((2 * demand * order_cost) / holding_cost))
ltd_val = int((demand / 365) * lead_time)
ss_val = int(1.65 * np.sqrt(lead_time) * daily_std)  # 95% service level
rop_val = ltd_val + ss_val
num_orders = round(demand / eoq_val, 1)
total_cost = int((demand / eoq_val) * order_cost + (eoq_val / 2) * holding_cost)

with calc_c2:
    st.markdown("### Optimized Policy Outputs")
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

    st.markdown(f"""
    <div style="margin-top: 12px; padding: 10px 14px; border-radius: 10px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.06); font-size: 0.8rem; color: #94a3b8;">
        Estimated Annual Inventory Cost: <strong style="color: #ffffff;">₹{total_cost:,}</strong>
    </div>
    """, unsafe_allow_html=True)

st.markdown('</div>', unsafe_allow_html=True)
st.markdown("<div id='credentials' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 8. EDUCATION, CERTIFICATIONS & COMPETITIONS
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Credentials & Standing</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Education & Certifications</h2>', unsafe_allow_html=True)

ed_c1, ed_c2 = st.columns(2)

with ed_c1:
    st.markdown("### 🎓 Formal Education")
    st.markdown("""
    <div class="glass-card">
        <div style="font-weight: 700; color: #ffffff; font-size: 1rem;">Diploma in Data Science (Pursuing)</div>
        <div style="color: #22d3ee; font-size: 0.85rem; font-weight: 600;">IIT Madras (Online, Self-Paced) · 2025 – 2026(Dec)</div>
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 0.4rem;">Machine Learning, Statistical Inference, Python for Data Science, and Relational Database Systems.</p>
    </div>
    <div class="glass-card">
        <div style="font-weight: 700; color: #ffffff; font-size: 1rem;">Bachelor of Commerce (Honours) — 81.6%</div>
        <div style="color: #22d3ee; font-size: 0.85rem; font-weight: 600;">Aryabhatta College, University of Delhi · 2024</div>
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 0.4rem;">Financial Analysis, Quantitative Techniques, Business Statistics, Cost Accounting, and Auditing.</p>
    </div>
    <div class="glass-card">
        <div style="font-weight: 700; color: #ffffff; font-size: 1rem;">Senior Secondary (CBSE) — 80.75%</div>
        <div style="color: #22d3ee; font-size: 0.85rem; font-weight: 600;">Columbia Foundation Sr. Sec. School · 2021</div>
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 0.4rem;">Commerce with Mathematics stream focusing on Calculus and Economics.</p>
    </div>
    """, unsafe_allow_html=True)

with ed_c2:
    st.markdown("### 📜 Verified Certifications")
    st.markdown("""
    <div class="glass-card">
        <div style="font-size: 0.85rem; color: #cbd5e1; space-y: 0.6rem;">
            <div style="margin-bottom: 0.6rem;">✅ <strong style="color: #ffffff;">Google Business Intelligence Professional Certificate</strong> — Google / Coursera</div>
            <div style="margin-bottom: 0.6rem;">✅ <strong style="color: #ffffff;">Practical Time Series Analysis</strong> — Coursera</div>
            <div style="margin-bottom: 0.6rem;">✅ <strong style="color: #ffffff;">Business Statistics and Analysis</strong> — Coursera</div>
            <div style="margin-bottom: 0.6rem;">✅ <strong style="color: #ffffff;">Data Analysis: SQL, Tableau, Power BI & Excel</strong> — Udemy</div>
            <div>✅ <strong style="color: #ffffff;">Python for Data Analysis & BI</strong> — Udemy</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("### 🏆 Competitions & Simulations")
cp1, cp2, cp3, cp4 = st.columns(4)
comps = [
    ("🏆 Top 1 Percentile", "Unstop Weekly Case Challenges", "National ranking across case analysis"),
    ("🔷 Completed", "BCG X Simulation (Forage)", "Data cleaning → EDA → predictive modeling"),
    ("🔷 Completed", "Deloitte Simulation (Forage)", "Statistical analysis & business recommendations"),
    ("💻 50+ Solved", "LeetCode SQL Problem Solving", "Advanced joins, CTEs, window functions")
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

st.markdown("<div id='contact' style='margin-top: 3.5rem;'></div>", unsafe_allow_html=True)


# ══════════════════════════════════════════════════════════════════════════════
# 9. CONTACT SECTION & INTERACTIVE FORM
# ══════════════════════════════════════════════════════════════════════════════
st.markdown('<div class="eyebrow">Get In Touch</div>', unsafe_allow_html=True)
st.markdown('<h2 class="section-title">Let\'s connect.</h2>', unsafe_allow_html=True)

ct_left, ct_right = st.columns([1, 1.1])

with ct_left:
    st.markdown("""
    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.7;">
        I am actively open to <strong style="color: #ffffff;">Data Analyst roles, analytics engineering, and data science consulting projects</strong>. Feel free to reach out via direct channels or leave a message below.
    </p>
    <div style="margin-top: 1.25rem;">
        <div class="glass-card" style="padding: 0.9rem; margin-bottom: 0.6rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Email</div>
            <a href="mailto:koushikgarg11@gmail.com" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">koushikgarg11@gmail.com</a>
        </div>
        <div class="glass-card" style="padding: 0.9rem; margin-bottom: 0.6rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">LinkedIn</div>
            <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">linkedin.com/in/koushik-garg</a>
        </div>
        <div class="glass-card" style="padding: 0.9rem; margin-bottom: 0.6rem;">
            <div style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">GitHub</div>
            <a href="https://github.com/koushikgarg11" target="_blank" style="color: #22d3ee; font-weight: 600; text-decoration: none; font-size: 0.9rem;">github.com/koushikgarg11</a>
        </div>
        <div class="glass-card" style="padding: 0.9rem;">
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
            "Data Analyst Full-Time Opportunity",
            "Data Analyst Internship",
            "BI Dashboard Consulting Project",
            "General Networking"
        ])
        message = st.text_area("Message", placeholder="Tell me about the role, team, or project requirements...", height=110)
        submit_btn = st.form_submit_button("Send Inquiry")

        if submit_btn:
            if name and email and message:
                st.success(f"Thank you, {name}! Your message has been noted. You can also reach out directly to koushikgarg11@gmail.com.")
                st.balloons()
            else:
                st.error("Please fill in all fields before sending.")


# ══════════════════════════════════════════════════════════════════════════════
# 10. FOOTER
# ══════════════════════════════════════════════════════════════════════════════
st.markdown("<hr style='border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 3.5rem 0 1.5rem 0;'>", unsafe_allow_html=True)
st.markdown("""
<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b; flex-wrap: wrap; gap: 10px;">
    <div>© 2026 Koushik Garg. Built with Streamlit & Plotly (Companion to React Web App).</div>
    <div style="display: flex; gap: 16px;">
        <a href="https://linkedin.com/in/koushik-garg-b034442a9" target="_blank" style="color: #94a3b8; text-decoration: none;">LinkedIn</a>
        <a href="https://github.com/koushikgarg11" target="_blank" style="color: #94a3b8; text-decoration: none;">GitHub</a>
        <a href="mailto:koushikgarg11@gmail.com" style="color: #94a3b8; text-decoration: none;">Email</a>
    </div>
</div>
""", unsafe_allow_html=True)
