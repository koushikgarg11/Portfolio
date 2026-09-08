# 📊 Koushik Garg — Data Analyst Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.40+-FF4B4B?logo=streamlit&logoColor=white)](https://streamlit.io/)
[![Plotly](https://img.shields.io/badge/Plotly-5.18+-3F4F75?logo=plotly&logoColor=white)](https://plotly.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)](https://python.org/)

> **Quantitative Data Analyst Portfolio** featuring ARIMA demand forecasting (+15–20% accuracy gain), ChargeDesert geospatial EV infrastructure intelligence (130K+ records), Water ATM Downtime Atlas (Pan-India web scraping), AI-assisted sales ETL pipelines, and interactive executive dashboards.

---

## 🚀 Live Demos & Links

- **Production React Web App:** Deployable on Netlify, Vercel, or GitHub Pages.
- **Streamlit Companion App:** [koushikgarg11-portfolioapp.streamlit.app](https://koushikgarg11-portfolioapp.streamlit.app)
- **LinkedIn Profile:** [linkedin.com/in/koushik-garg-b034442a9](https://linkedin.com/in/koushik-garg-b034442a9/)
- **GitHub Profile:** [github.com/koushikgarg11](https://github.com/koushikgarg11)
- **Email:** [koushikgarg11@gmail.com](mailto:koushikgarg11@gmail.com) | **Phone:** +91-7428668469

---

## 📌 Architecture & Dual-Stack Design

This repository is architected as a **Dual-Stack Analytics Portfolio**:

```
portfolio/
├── public/                       # Static public assets (Resume PDF, icons)
│   └── Koushik_Garg_Resume.pdf
├── src/                          # React + Vite + Tailwind Source
│   ├── components/               # Glassmorphic UI Components
│   │   ├── About.jsx             # Candidate background & academic standing
│   │   ├── CaseStudyModal.jsx    # In-depth 5-section case study modals
│   │   ├── Contact.jsx           # Direct channels & interactive form
│   │   ├── EducationCerts.jsx    # IIT Madras + DU, Certifications, Competitions
│   │   ├── Footer.jsx            # Brand footer & social links
│   │   ├── GitHubBanner.jsx      # Sticky repository status banner
│   │   ├── Hero.jsx              # Hero introduction & live telemetry code card
│   │   ├── InteractiveWidget.jsx # Live EOQ & Safety Stock inventory simulator
│   │   ├── MetricsBar.jsx        # High-conviction metrics bar
│   │   ├── Navbar.jsx            # Sticky blurred glass navbar
│   │   ├── ProjectVisual.jsx     # Interactive custom SVG/dashboard widgets
│   │   └── Projects.jsx          # 5 Resume-derived featured projects
│   ├── data/
│   │   └── portfolioData.js      # Centralized single-source-of-truth data
│   ├── App.jsx                   # Master application layout
│   ├── index.css                 # Tailwind directives & dark theme styling
│   └── main.jsx                  # React DOM entry
├── app.py                        # Streamlit Python Companion App (Plotly Dark Charts)
├── requirements.txt              # Python runtime dependencies
├── package.json                  # Node.js frontend dependencies & build scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS design system configuration
├── netlify.toml                  # Netlify SPA routing rules
├── .streamlit/config.toml        # Streamlit dark theme settings
└── README.md                     # Documentation
```

---

## 🌟 Featured Projects & Research Reports

### 1. Tier 1 Engineering College Intelligence Database & Placement Drivers
- **Live Streamlit App:** [https://collegedashboard.streamlit.app/](https://collegedashboard.streamlit.app/)
- **GitHub Repository:** [https://github.com/koushikgarg11/College_Dashboard](https://github.com/koushikgarg11/College_Dashboard)
- **Full Report (PDF):** `public/Tier_1_Engineering_College_Report.pdf` (20-page formal research report)
- **Stack:** Python, Pandas, Statistical Correlation Modeling, Streamlit, Power BI
- **Highlights:** Master benchmark of **44 Tier 1 colleges across 18 states and 16 attributes**. Quantified critical drivers: strong correlation between placement rate & max CTC (**r = 0.78**), Autonomous colleges leading placement averages (**89.3%** vs 86.6% Govt vs 85.2% Private), and NBA accreditation edge (**+2–4%**).

### 2. DATAYUG — Pan-India Branch-Wise Skill Gap & Industry Readiness Intelligence
- **Full Report (PDF):** `public/Branch_Wise_Skill_Gap_Report.pdf` (30-page research report)
- **Stack:** Python, ETL Pipelines, Statistical Modeling, Skill Gap Scoring (0–100), Workforce Analytics
- **Highlights:** Ingested **28,091 college-branch records across 2,813 institutions in 483 cities**. Formulated a standardized 0–100 Skill Gap Score isolating major software tool lags in Civil (Gap 39.5) and Mechanical (Gap 34.2), and proved that **internship participation is the #1 actionable placement lever (r = 0.71)**.

### 3. ChargeDesert — EV Infrastructure Gap & Site Recommendation Platform
- **Live Streamlit App:** [https://chargedesert.streamlit.app/](https://chargedesert.streamlit.app/)
- **Stack:** Python, GIS & Spatial Analytics, AHP/TOPSIS, Streamlit, Pandas
- **Highlights:** Ingested **130K+ geospatial records** across arterial highway grids. Implemented Analytic Hierarchy Process (AHP) and TOPSIS multi-criteria algorithms to detect charging deserts and prioritize optimal deployment nodes.

### 4. Water ATM Downtime Atlas – Rural Drinking Water Infrastructure Analytics
- **Live Streamlit App:** [https://wateratm.streamlit.app/](https://wateratm.streamlit.app/)
- **Stack:** Python, Web Scraping, SQL, Power BI, Failure Diagnostics
- **Highlights:** Web-scraped and harmonized pan-India government disclosures, tenders, and grievance tickets. Diagnosed failure patterns (48% power grid instability, 31% RO fouling) and identified a 4.2-day vendor SLA breach lag.

### 5. AI-Assisted Sales Report Automation
- **Live Streamlit App:** [https://ai-assisted-sales-report-automation.streamlit.app/](https://ai-assisted-sales-report-automation.streamlit.app/)
- **Stack:** Python, LLM Prompt Engineering, Semantic Search, ETL Pipelines
- **Highlights:** Built automated Python ETL workflows with Few-Shot prompting, reducing manual sales report generation time by **~40%** and enabling semantic plain-English querying.

### 6. Demand Forecasting & Inventory Optimization | Taiwal Enterprises
- **Stack:** Python, ARIMA / SARIMA, ABC/Pareto 80/20, EOQ, Safety Stock, ROP
- **Highlights:** Replaced guesswork replenishment with ARIMA time-series models, improving forecast accuracy by **15–20%**. Conducted ABC analysis (20% SKUs = 75% revenue) and engineered client-adopted EOQ/Safety Stock reorder schedules.

### 7. Market Research & Competitive Analysis | Business.io Society, IIT Madras
- **Stack:** Market Intelligence, Competitive Benchmarking, Power BI, Excel
- **Highlights:** Synthesized multi-source competitive data for HMC Group, delivering feature parity matrices and whitespace differentiation recommendations.

---

## 💻 Local Setup & Development

### Option A: Running the React Web Application

1. **Install Node dependencies:**
   ```bash
   npm install
   ```

2. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

---

### Option B: Running the Streamlit Companion App

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Launch Streamlit:**
   ```bash
   streamlit run app.py
   ```
   Open [http://localhost:8501](http://localhost:8501) in your browser.

---

## 🚀 Pushing to GitHub & Deploying

### 1. Push to your GitHub Repository

```bash
git add .
git commit -m "Update portfolio as per resume with 5 featured projects, live simulator, and dual-stack architecture"
git push origin main
```

### 2. Deploy to Cloud

- **Netlify / Vercel (React App):** Connect your GitHub repository. Build command: `npm run build`, Publish directory: `dist`.
- **Streamlit Cloud (Python App):** Connect your GitHub repo, select `app.py`, and deploy instantly.

---

## 📬 Contact & Connect

- **Author:** Koushik Garg
- **Email:** [koushikgarg11@gmail.com](mailto:koushikgarg11@gmail.com)
- **LinkedIn:** [linkedin.com/in/koushik-garg-b034442a9](https://linkedin.com/in/koushik-garg-b034442a9/)
- **Location:** New Delhi, India
