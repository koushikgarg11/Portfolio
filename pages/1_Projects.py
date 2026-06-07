import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

st.set_page_config(page_title="Projects | Koushik Garg", page_icon="🚀", layout="wide")

st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
html, body, [class*="css"] { font-family: 'DM Sans', sans-serif; }
.section-header { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: #0F2744; border-bottom: 2px solid #1D9E75; padding-bottom: 0.4rem; margin-bottom: 1.2rem; }
.project-tag { display: inline-block; background: #E1F5EE; color: #0F6E56; border-radius: 20px; padding: 3px 12px; font-size: 0.78rem; font-weight: 500; margin: 2px; }
</style>
""", unsafe_allow_html=True)

st.markdown("# 🚀 Projects & Interactive Demos")
st.caption("Explore my projects with live, interactive charts and visualizations.")
st.divider()

# ── PROJECT TABS ─────────────────────────────────────────────────────────────
tab1, tab2, tab3, tab4 = st.tabs([
    "📦 Demand Forecasting",
    "🛡️ Cybersecurity Threat Detection",
    "⚡ EV Sales Analysis",
    "🤖 AI Sales Automation"
])

# ── TAB 1: DEMAND FORECASTING ─────────────────────────────────────────────────
with tab1:
    st.markdown('<p class="section-header">Demand Forecasting & Inventory Optimization</p>', unsafe_allow_html=True)
    st.markdown("**Client:** Taiwal Enterprises &nbsp;|&nbsp; **Year:** 2025 &nbsp;|&nbsp; **Impact:** 15–20% forecast accuracy improvement")

    col_desc, col_tags = st.columns([2, 1])
    with col_desc:
        st.markdown("""
        Replaced manual demand estimation with **ARIMA time-series forecasting** on multi-year B2B transactional data.
        Built EOQ, Safety Stock, and Reorder Point models. Identified top SKUs via **ABC/Pareto analysis**.
        """)
    with col_tags:
        st.markdown("""
        <span class="project-tag">Python</span>
        <span class="project-tag">ARIMA</span>
        <span class="project-tag">Pandas</span>
        <span class="project-tag">Inventory Optimization</span>
        <span class="project-tag">Time Series</span>
        """, unsafe_allow_html=True)

    st.markdown("---")

    # Simulate ARIMA-like forecast data
    np.random.seed(42)
    months = pd.date_range("2023-01-01", periods=24, freq="MS")
    actual = 1000 + np.cumsum(np.random.randn(24) * 50) + np.sin(np.linspace(0, 4*np.pi, 24)) * 150

    # Forecast (last 6 months)
    forecast_months = pd.date_range("2024-07-01", periods=6, freq="MS")
    forecast = actual[-1] + np.cumsum(np.random.randn(6) * 30) + np.sin(np.linspace(0, np.pi, 6)) * 80
    ci_upper = forecast + 120
    ci_lower = forecast - 120

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=months, y=actual, name="Actual Demand", line=dict(color="#0F2744", width=2.5)))
    fig.add_trace(go.Scatter(x=forecast_months, y=forecast, name="ARIMA Forecast", line=dict(color="#1D9E75", width=2.5, dash="dash")))
    fig.add_trace(go.Scatter(
        x=list(forecast_months) + list(forecast_months[::-1]),
        y=list(ci_upper) + list(ci_lower[::-1]),
        fill='toself', fillcolor='rgba(29,158,117,0.12)',
        line=dict(color='rgba(255,255,255,0)'), name="95% Confidence Interval"
    ))
    fig.update_layout(
        title="Monthly Demand Forecast vs Actual (ARIMA Model — Demo)",
        xaxis_title="Month", yaxis_title="Units Demanded",
        legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
        plot_bgcolor="white", paper_bgcolor="white",
        font=dict(family="DM Sans"),
        height=380
    )
    fig.update_xaxes(showgrid=True, gridcolor="#f0f0f0")
    fig.update_yaxes(showgrid=True, gridcolor="#f0f0f0")
    st.plotly_chart(fig, use_container_width=True)

    # ABC Analysis
    st.markdown("#### ABC / Pareto Analysis — SKU Revenue Contribution")
    np.random.seed(7)
    n_skus = 50
    revenues = np.sort(np.random.exponential(scale=500, size=n_skus))[::-1]
    revenues = revenues / revenues.sum() * 100
    cumrev = np.cumsum(revenues)
    sku_labels = [f"SKU-{i+1:02d}" for i in range(n_skus)]
    colors = ["#0F2744" if c <= 20 else ("#1D9E75" if c <= 50 else "#9FE1CB") for c in cumrev]
    abc_labels = ["A" if c <= 75 else ("B" if c <= 95 else "C") for c in cumrev]

    fig2 = make_subplots(specs=[[{"secondary_y": True}]])
    fig2.add_trace(go.Bar(x=sku_labels[:20], y=revenues[:20], name="Revenue %", marker_color=colors[:20]), secondary_y=False)
    fig2.add_trace(go.Scatter(x=sku_labels[:20], y=cumrev[:20], name="Cumulative %", line=dict(color="#D85A30", width=2)), secondary_y=True)
    fig2.update_layout(
        title="Top 20 SKUs: Revenue Share (20% of SKUs → ~75% of revenue)",
        plot_bgcolor="white", paper_bgcolor="white",
        font=dict(family="DM Sans"), height=350
    )
    fig2.update_yaxes(title_text="Revenue %", secondary_y=False)
    fig2.update_yaxes(title_text="Cumulative %", secondary_y=True)
    st.plotly_chart(fig2, use_container_width=True)

    # Inventory model
    st.markdown("#### Interactive: EOQ & Reorder Point Calculator")
    ic1, ic2, ic3 = st.columns(3)
    with ic1:
        demand_rate = st.slider("Annual Demand (units)", 500, 5000, 2000, step=100)
    with ic2:
        order_cost = st.slider("Order Cost (₹)", 100, 2000, 500, step=50)
    with ic3:
        holding_cost = st.slider("Holding Cost per unit (₹)", 10, 200, 50, step=5)

    eoq = np.sqrt((2 * demand_rate * order_cost) / holding_cost)
    lead_time_demand = demand_rate / 365 * 14  # 14-day lead time
    safety_stock = 1.65 * (demand_rate / 365) * 3  # 95% service level, 3-day std dev
    rop = lead_time_demand + safety_stock

    rc1, rc2, rc3, rc4 = st.columns(4)
    for col, label, val, unit in zip(
        [rc1, rc2, rc3, rc4],
        ["EOQ", "Lead Time Demand", "Safety Stock", "Reorder Point"],
        [eoq, lead_time_demand, safety_stock, rop],
        ["units", "units", "units", "units"]
    ):
        col.metric(label, f"{val:.0f} {unit}")

# ── TAB 2: CYBERSECURITY ─────────────────────────────────────────────────────
with tab2:
    st.markdown('<p class="section-header">Cybersecurity Threat Detection</p>', unsafe_allow_html=True)
    st.markdown("**Client:** Unified Mentor &nbsp;|&nbsp; **Year:** 2025 &nbsp;|&nbsp; **Impact:** ~18% reduction in false positives on 100K+ records")

    col_desc, col_tags = st.columns([2, 1])
    with col_desc:
        st.markdown("""
        Built **Random Forest** and **Logistic Regression** classification models on 100K+ web traffic records.
        Automated ETL pipeline reduced manual prep time by 30%. Executive dashboards adopted by stakeholders.
        """)
    with col_tags:
        st.markdown("""
        <span class="project-tag">Random Forest</span>
        <span class="project-tag">Logistic Regression</span>
        <span class="project-tag">Python</span>
        <span class="project-tag">Power BI</span>
        <span class="project-tag">ETL</span>
        """, unsafe_allow_html=True)

    st.markdown("---")

    # Model comparison
    models = ["Logistic Regression", "Random Forest"]
    precision = [0.76, 0.89]
    recall = [0.72, 0.86]
    f1 = [0.74, 0.87]
    fp_rate = [0.24, 0.11]

    fig = go.Figure()
    x = np.arange(len(models))
    width = 0.2
    for metric, vals, color in zip(["Precision", "Recall", "F1-Score"], [precision, recall, f1], ["#0F2744", "#1D9E75", "#5DCAA5"]):
        fig.add_trace(go.Bar(name=metric, x=models, y=vals, marker_color=color))
    fig.update_layout(
        title="Model Performance Comparison (Demo Simulation)",
        barmode='group', yaxis=dict(range=[0, 1.1], title="Score"),
        plot_bgcolor="white", paper_bgcolor="white",
        font=dict(family="DM Sans"), height=350
    )
    st.plotly_chart(fig, use_container_width=True)

    col_cm, col_fp = st.columns(2)
    with col_cm:
        # Confusion matrix heatmap (Random Forest)
        cm = np.array([[8420, 580], [320, 9680]])
        fig_cm = px.imshow(cm, text_auto=True,
            labels=dict(x="Predicted", y="Actual", color="Count"),
            x=["Normal", "Threat"], y=["Normal", "Threat"],
            color_continuous_scale=["#E1F5EE", "#0F6E56"],
            title="Random Forest Confusion Matrix (Demo)"
        )
        fig_cm.update_layout(font=dict(family="DM Sans"), height=320)
        st.plotly_chart(fig_cm, use_container_width=True)

    with col_fp:
        # False positive trend before/after
        months_fp = ["Before ML", "After ML"]
        fp_vals = [24, 6]
        fig_fp = go.Figure(go.Bar(
            x=months_fp, y=fp_vals,
            marker_color=["#D85A30", "#1D9E75"],
            text=[f"{fp_vals[0]}%", f"{fp_vals[1]}%"], textposition="outside"
        ))
        fig_fp.update_layout(
            title="False Positive Rate: Before vs After",
            yaxis=dict(range=[0, 32], title="False Positive Rate (%)"),
            plot_bgcolor="white", paper_bgcolor="white",
            font=dict(family="DM Sans"), height=320,
            showlegend=False
        )
        st.plotly_chart(fig_fp, use_container_width=True)

# ── TAB 3: EV SALES ──────────────────────────────────────────────────────────
with tab3:
    st.markdown('<p class="section-header">EV Sales Analysis — State-Level India</p>', unsafe_allow_html=True)
    st.markdown("**Client:** Unified Mentor &nbsp;|&nbsp; **Year:** 2025 &nbsp;|&nbsp; **Scope:** 20+ Indian states")

    col_desc, col_tags = st.columns([2, 1])
    with col_desc:
        st.markdown("""
        Applied **feature engineering & predictive modeling** to multi-state EV sales data.
        Identified top 3 state-level drivers of adoption for data-backed regional market entry recommendations.
        """)
    with col_tags:
        st.markdown("""
        <span class="project-tag">Feature Engineering</span>
        <span class="project-tag">Predictive Modeling</span>
        <span class="project-tag">Tableau</span>
        <span class="project-tag">Market Analysis</span>
        """, unsafe_allow_html=True)

    st.markdown("---")

    # Simulated EV sales by state
    states = ["Maharashtra", "Karnataka", "Delhi", "Uttar Pradesh", "Tamil Nadu",
              "Rajasthan", "Gujarat", "Telangana", "Kerala", "West Bengal",
              "Andhra Pradesh", "Madhya Pradesh", "Punjab", "Haryana", "Bihar"]
    np.random.seed(21)
    sales = [42000, 38000, 35000, 28000, 26000, 22000, 21000, 19000, 17000, 15000,
             14000, 11000, 9500, 8800, 7200]
    yoy_growth = [38, 52, 41, 29, 44, 33, 28, 47, 55, 31, 26, 22, 19, 24, 17]

    df_ev = pd.DataFrame({"State": states, "EV Sales (Units)": sales, "YoY Growth %": yoy_growth})
    df_ev["Priority"] = df_ev["EV Sales (Units)"].apply(
        lambda x: "🔴 High Priority" if x > 25000 else ("🟡 Medium" if x > 15000 else "🟢 Emerging")
    )

    col_map, col_table = st.columns([3, 2])
    with col_map:
        fig_ev = px.bar(df_ev, x="EV Sales (Units)", y="State", orientation="h",
            color="YoY Growth %", color_continuous_scale=["#9FE1CB", "#1D9E75", "#0F2744"],
            title="EV Sales by State with YoY Growth (Demo Data)",
            text="EV Sales (Units)"
        )
        fig_ev.update_traces(texttemplate='%{text:,.0f}', textposition='outside')
        fig_ev.update_layout(
            yaxis=dict(categoryorder='total ascending'),
            plot_bgcolor="white", paper_bgcolor="white",
            font=dict(family="DM Sans"), height=480, coloraxis_colorbar=dict(title="Growth %")
        )
        st.plotly_chart(fig_ev, use_container_width=True)

    with col_table:
        st.markdown("#### Market Priority Classification")
        st.dataframe(
            df_ev[["State", "EV Sales (Units)", "YoY Growth %", "Priority"]].head(10),
            use_container_width=True, hide_index=True
        )
        st.caption("Top 3 adoption drivers: EV subsidies, charging infra density, urban population share")

# ── TAB 4: AI AUTOMATION ─────────────────────────────────────────────────────
with tab4:
    st.markdown('<p class="section-header">AI-Assisted Sales Report Automation</p>', unsafe_allow_html=True)
    st.markdown("**Type:** Personal Project &nbsp;|&nbsp; **Year:** 2026 &nbsp;|&nbsp; **Impact:** ~40% reduction in manual reporting time")

    col_desc, col_tags = st.columns([2, 1])
    with col_desc:
        st.markdown("""
        Built a **Python ETL pipeline** leveraging **LLM prompt engineering** to auto-generate structured
        sales summaries from raw transactional CSV data. Integrated **semantic search** for plain-English
        querying over product & customer datasets.
        """)
    with col_tags:
        st.markdown("""
        <span class="project-tag">Python</span>
        <span class="project-tag">LLM</span>
        <span class="project-tag">ETL Pipeline</span>
        <span class="project-tag">Semantic Search</span>
        <span class="project-tag">Automation</span>
        """, unsafe_allow_html=True)

    st.markdown("---")

    # Pipeline flow visualization
    st.markdown("#### Workflow Architecture")
    pipeline_steps = {
        "Step": ["1. Raw CSV Ingestion", "2. Data Cleaning", "3. Feature Engineering", "4. LLM Summarization", "5. Formatted Report Output"],
        "Tool": ["Pandas", "Python / Regex", "Pandas / NumPy", "LLM API", "Jinja2 / HTML"],
        "Time Saved": ["5 min → 0.5 min", "15 min → 3 min", "10 min → 2 min", "20 min → 1 min", "10 min → 0.5 min"],
    }
    st.dataframe(pd.DataFrame(pipeline_steps), use_container_width=True, hide_index=True)

    # Time savings chart
    steps = ["CSV Ingestion", "Data Cleaning", "Feature Eng.", "LLM Summary", "Report Output"]
    before = [5, 15, 10, 20, 10]
    after = [0.5, 3, 2, 1, 0.5]

    fig_auto = go.Figure()
    fig_auto.add_trace(go.Bar(name="Before Automation (min)", x=steps, y=before, marker_color="#D85A30"))
    fig_auto.add_trace(go.Bar(name="After Automation (min)", x=steps, y=after, marker_color="#1D9E75"))
    fig_auto.update_layout(
        title="Time per Task: Before vs After Automation",
        barmode="group", yaxis_title="Minutes",
        plot_bgcolor="white", paper_bgcolor="white",
        font=dict(family="DM Sans"), height=360
    )
    st.plotly_chart(fig_auto, use_container_width=True)

    total_before = sum(before)
    total_after = sum(after)
    saving_pct = (total_before - total_after) / total_before * 100

    c1, c2, c3 = st.columns(3)
    c1.metric("Time Before", f"{total_before} min")
    c2.metric("Time After", f"{total_after:.1f} min")
    c3.metric("Time Saved", f"{saving_pct:.0f}%", delta=f"↓ {total_before - total_after:.1f} min")
