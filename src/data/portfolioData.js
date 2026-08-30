export const personalInfo = {
  name: "Koushik",
  lastName: "Garg",
  title: "Data Analyst",
  location: "Delhi, India",
  headline: "Data Analyst turning raw data into actionable insights & predictive decisions.",
  bio: "Specialized in statistical modeling, ARIMA demand forecasting, ML threat detection, automated Python ETL pipelines, and executive Power BI / Tableau dashboards.",
  email: "koushikgarg11@gmail.com",
  phone: "+91-7428668469",
  linkedin: "https://linkedin.com/in/koushik-garg-b034442a9",
  github: "https://github.com/koushikgarg11",
  resumeUrl: "#", // or direct pdf link
  currentFocus: "Predictive Analytics & BI"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education & Certs" },
  { id: "contact", label: "Contact" }
];

export const keyMetrics = [
  { value: "15–20%", label: "Forecast Accuracy Improvement", sub: "ARIMA Time Series on B2B Data" },
  { value: "~18%", label: "Threat Detection Precision", sub: "Random Forest & Logistic Regression" },
  { value: "~30%", label: "ETL Time Saved", sub: "Automated Python Pipelines" },
  { value: "Top 1%", label: "National Unstop Ranking", sub: "Weekly Case Competition Series" },
  { value: "100K+", label: "Records Analyzed & Modeled", sub: "Multi-Source Analytics Workflows" }
];

export const skillCategories = [
  {
    title: "Data Analytics & Wrangling",
    category: "analytics",
    accent: "from-cyan-400 to-blue-500",
    items: ["Python", "Pandas", "NumPy", "SQL (PostgreSQL/MySQL)", "Advanced Excel", "Power Query", "Data Cleaning"]
  },
  {
    title: "Visualization & BI",
    category: "bi",
    accent: "from-violet-400 to-fuchsia-500",
    items: ["Power BI", "Tableau", "DAX Formulas", "Interactive Dashboards", "Plotly", "Matplotlib", "Seaborn"]
  },
  {
    title: "Machine Learning & Forecasting",
    category: "ml",
    accent: "from-emerald-400 to-teal-500",
    items: ["ARIMA & SARIMA", "Time Series Modeling", "Random Forest", "Logistic Regression", "Scikit-Learn", "Feature Engineering"]
  },
  {
    title: "Databases & Data Engineering",
    category: "data-eng",
    accent: "from-amber-300 to-orange-500",
    items: ["MySQL", "PostgreSQL", "Relational Modeling", "ETL Pipelines", "Multi-Table Joins", "Query Optimization"]
  },
  {
    title: "Business & Operations Analytics",
    category: "business",
    accent: "from-pink-400 to-rose-500",
    items: ["Demand Forecasting", "Inventory Optimization (EOQ)", "Safety Stock & ROP", "ABC/Pareto Analysis", "KPI Design"]
  },
  {
    title: "AI & Automation",
    category: "ai",
    accent: "from-blue-400 to-indigo-500",
    items: ["LLM Prompt Engineering", "Semantic Search", "Automated Reporting", "Python Scripting", "Jinja2 Templates"]
  }
];

export const projects = [
  {
    id: "demand-forecasting",
    tag: "TIME-SERIES FORECASTING",
    visualType: "forecast",
    title: "Demand Forecasting & Inventory Optimization",
    subtitle: "Taiwal Enterprises — ARIMA time-series models & ABC inventory strategy",
    description: "Replaced manual estimation with rigorous ARIMA time-series forecasting on multi-year transactional data. Engineered EOQ, Safety Stock, and Reorder Point algorithms alongside ABC/Pareto classification.",
    tools: ["Python", "ARIMA", "Pandas", "Inventory Optimization", "Time Series", "Power BI"],
    stats: [
      ["Forecast Accuracy", "+15–20%"],
      ["Top SKU Rev Share", "~75%"],
      ["Reorder Cycle", "Optimized"]
    ],
    work: [
      "Built ARIMA models on multi-year sales data with 95% confidence intervals",
      "Conducted ABC/Pareto analysis identifying the 20% SKUs driving 75% of revenue",
      "Calculated Economic Order Quantity (EOQ) and Safety Stock to eliminate stockouts",
      "Delivered client-adopted reorder strategy and dynamic procurement schedule"
    ],
    case: {
      problem: "Taiwal Enterprises relied on manual intuition for inventory reordering, resulting in periodic stockouts on high-demand items and bloated holding costs for slow-moving inventory.",
      dataset: "Multi-year transactional sales logs spanning 50+ unique SKUs with unit prices, customer orders, lead times, and seasonal variances.",
      cleaning: "Reconciled missing transaction timestamps, normalized currency discrepancies, aggregated monthly sales volume, and tested for stationarity using the Augmented Dickey-Fuller (ADF) test.",
      analysis: "Applied ARIMA(p,d,q) parameter tuning via AIC minimization. Segmented products into ABC classes (Category A: 20% SKUs = 75% revenue; Category B: 30% SKUs = 20% revenue; Category C: 50% SKUs = 5% revenue). Modeled dynamic Safety Stock based on a 95% service level standard.",
      visualization: "Built interactive forecast curves with historical actuals vs predicted values and confidence bands, complemented by an interactive EOQ & Reorder Point calculator.",
      recommendations: "Shift Category A items to weekly automated reorder points, maintain buffer safety stock on high-margin items, and batch Category C procurement to reduce annual holding costs by 15–20%."
    },
    github: "https://github.com/koushikgarg11/demand-forecasting-inventory"
  },
  {
    id: "cybersecurity-ml",
    tag: "MACHINE LEARNING & CLASSIFICATION",
    visualType: "classification",
    title: "Cybersecurity Threat Detection System",
    subtitle: "Unified Mentor — Supervised ML classification across 100K+ records",
    description: "Trained Random Forest and Logistic Regression models on 100,000+ network traffic logs to classify normal vs malicious payloads, improving threat detection precision by ~18% and cutting false alerts.",
    tools: ["Random Forest", "Logistic Regression", "Python", "Scikit-Learn", "Power BI", "ETL"],
    stats: [
      ["Dataset Size", "100K+ Rows"],
      ["Precision Score", "89%"],
      ["False Positive Rate", "↓ 24% to 6%"]
    ],
    work: [
      "Engineered automated ETL pipeline in Python, slashing data preparation time by 30%",
      "Trained and evaluated Logistic Regression (76% precision) vs Random Forest (89% precision)",
      "Addressed class imbalance using SMOTE sampling and feature scaling",
      "Designed executive risk monitoring dashboards in Power BI adopted by leadership"
    ],
    case: {
      problem: "High volumes of false positive security alerts overwhelmed analyst response teams, obscuring genuine intrusion attempts and increasing risk response latency.",
      dataset: "100,000+ web traffic and firewall logs containing packet lengths, protocol types, request frequencies, source/destination IP hashes, and verified attack labels.",
      cleaning: "Removed duplicate logs, encoded categorical network features, scaled skewed continuous variables using RobustScaler, and treated class imbalances with SMOTE.",
      analysis: "Compared ROC-AUC curves, precision-recall trade-offs, and confusion matrices across algorithms. Random Forest delivered superior threat separation with an F1-score of 0.87 and reduced false alarms by 18%.",
      visualization: "Created interactive confusion matrix heatmaps, classification performance benchmarks, and Power BI threat velocity dashboards.",
      recommendations: "Deploy the Random Forest model as a real-time pre-filter on incoming firewall traffic to automatically escalate high-confidence threats while suppressing low-risk noise."
    },
    github: "https://github.com/koushikgarg11/cybersecurity-threat-detection"
  },
  {
    id: "ev-sales-india",
    tag: "MARKET ANALYTICS & REGIONAL MODELING",
    visualType: "barchart",
    title: "EV Sales & Market Adoption Analysis",
    subtitle: "Unified Mentor — State-level predictive prioritization across 20+ Indian states",
    description: "Evaluated electric vehicle sales data across 20+ Indian states using feature engineering and regression techniques. Uncovered the top 3 adoption drivers to formulate regional market entry strategies.",
    tools: ["Python", "Pandas", "Feature Engineering", "Tableau", "Market Segmentation"],
    stats: [
      ["States Analyzed", "20+ States"],
      ["Top Growth State", "Kerala (+55%)"],
      ["Volume Leader", "Maharashtra (42K)"]
    ],
    work: [
      "Engineered state-level indices for charging infrastructure density, subsidy benefits, and urbanization",
      "Segmented states into High Priority, Medium Growth, and Emerging Adoption tiers",
      "Developed interactive Tableau dashboards showing geographic sales distribution and YoY growth rates",
      "Formulated data-backed expansion recommendations for regional dealerships"
    ],
    case: {
      problem: "Automotive stakeholders needed clear, data-driven clarity on which Indian states to prioritize for EV infrastructure investments and regional sales campaigns.",
      dataset: "Multi-year state-by-state EV registration statistics, charging station installations, state subsidy policies, and demographic data across 20+ Indian states.",
      cleaning: "Normalized state reporting formats, imputed missing historical infrastructure data, and merged demographic census data with vehicle registration numbers.",
      analysis: "Identified that state subsidies, charging port density, and urban disposable income contributed to 78% of adoption variance. Maharashtra and Karnataka dominated absolute volume, while Kerala and Telangana exhibited the fastest YoY acceleration (>47%).",
      visualization: "Built interactive geographic heatmaps, ranked horizontal state comparisons, and priority matrix tables in Tableau.",
      recommendations: "Focus fast-charging hub capital expenditure on Maharashtra, Karnataka, and Delhi, while ramping up promotional campaigns in emerging high-growth states (Kerala, Telangana)."
    },
    github: "https://github.com/koushikgarg11/ev-sales-analysis-india"
  },
  {
    id: "ai-sales-automation",
    tag: "AI AUTOMATION & ETL",
    visualType: "pipeline",
    title: "AI-Assisted Sales Report Automation",
    subtitle: "Personal Project — Automated ETL pipeline & LLM summarization system",
    description: "Constructed an end-to-end Python pipeline using LLM prompt engineering to ingest raw sales CSVs, clean messy entries, compute summary KPIs, and generate publication-ready stakeholder reports.",
    tools: ["Python", "LLM APIs", "ETL Pipelines", "Semantic Search", "Pandas", "Jinja2"],
    stats: [
      ["Reporting Time", "60m → 7m"],
      ["Time Saved", "~88%"],
      ["Query Latency", "<500ms"]
    ],
    work: [
      "Engineered automated multi-step pipeline: CSV ingestion → Pandas cleaning → Feature calculation",
      "Integrated structured prompt templates with LLM APIs for natural language synthesis",
      "Implemented semantic search over product catalog and transaction data",
      "Generated clean, formatted HTML/PDF executive summaries on a scheduled cadence"
    ],
    case: {
      problem: "Creating monthly executive sales reports consumed 5–8 hours of manual data wrangling, formula calculations, and narrative writing every month.",
      dataset: "Raw transactional sales exports containing 15,000+ line items, irregular column headers, currency symbols, and customer notes.",
      cleaning: "Used regex to strip currency symbols and normalize dates, vectorized string operations for customer classification, and automated anomaly flagging.",
      analysis: "Constructed automated KPI aggregations (MoM growth, cohort retention, top customer contribution) and fed formatted JSON payloads to LLM APIs with zero-shot validation prompts.",
      visualization: "Structured Jinja2 template dashboard generating synchronized KPI cards, comparison charts, and executive narrative summaries.",
      recommendations: "Adopt automated LLM report synthesis across weekly trading updates to eliminate repetitive reporting grunt work and allow analysts to focus on deep-dive strategic inquiries."
    },
    github: "https://github.com/koushikgarg11/ai-sales-report-automation"
  },
  {
    id: "restaurant-sql-analytics",
    tag: "SQL ANALYTICS & RELATIONAL MODELING",
    visualType: "sql",
    title: "Restaurant Sales & Customer Behavior Analysis",
    subtitle: "SQL-only deep-dive across 36,000 orders and 7 relational tables",
    description: "Queried a comprehensive 7-table schema to uncover customer spending behavior, peak meal hours, and high-margin categories, translating complex queries into clear business expansion recommendations.",
    tools: ["SQL", "PostgreSQL", "MySQL", "Relational Schema", "Multi-Table Joins"],
    stats: [
      ["Orders Analyzed", "36,000"],
      ["Tables Queried", "7"],
      ["Business Queries", "9 Core Findings"]
    ],
    work: [
      "Modeled and queried a 7-table schema (orders, members, meals, restaurants, categories, cities)",
      "Engineered complex queries using window functions, subqueries, CTEs, and multi-table joins",
      "Identified peak ordering windows (12:00 PM lunch surge & 7:00–9:00 PM dinner peak)",
      "Developed RFM-inspired customer ranking to segment high-value VIP members"
    ],
    case: {
      problem: "Restaurant management lacked visibility into peak ordering hours, high-performing cuisine categories, and customer retention metrics across diverse locations.",
      dataset: "36,000 orders across 200 customers, 30 active restaurants, and 7 linked relational tables.",
      cleaning: "Excluded partial month data to prevent seasonal skew, standardized timestamp formats, and filtered orphaned order records.",
      analysis: "Wrote SQL queries leveraging Window Functions (`DENSE_RANK()`, `SUM() OVER()`), recursive CTEs, and aggregated joins. Uncovered that Fast Food was the #1 revenue driver, and top 10% customers generated 34% of orders.",
      visualization: "Structured tabular reporting schema paired with visual SQL query execution flow diagrams.",
      recommendations: "Shift kitchen staffing shifts to match the 12 PM and 7–9 PM peaks, create loyalty perks for top 10% spenders, and expand the Fast Food category menu."
    },
    github: "https://github.com/koushikgarg11/restaurant-sales-sql-analysis"
  }
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Aug 2025 – Oct 2025",
    type: "Internship",
    highlights: [
      "Built Random Forest & Logistic Regression classification models on 100K+ network records, improving precision by ~18%",
      "Automated end-to-end Python ETL pipelines, cutting manual data preparation time by 30%",
      "Designed executive risk monitoring dashboards in Power BI and Tableau adopted by key stakeholders",
      "Applied feature engineering to EV Sales datasets across 20+ states to guide regional expansion"
    ]
  },
  {
    role: "Data Analyst (Client Engagement)",
    company: "Taiwal Enterprises",
    period: "2025",
    type: "Client Project",
    highlights: [
      "Replaced manual demand estimation with ARIMA time-series models, improving forecast accuracy by 15–20%",
      "Conducted ABC and Pareto analysis to identify top 20% SKUs generating ~75% of total business revenue",
      "Constructed Economic Order Quantity (EOQ), Safety Stock, and Reorder Point models for inventory optimization",
      "Delivered a client-adopted procurement strategy that reduced holding costs and stockout frequency"
    ]
  },
  {
    role: "Competitive Intelligence Consultant",
    company: "Business.io Society, IIT Madras",
    period: "2025",
    type: "Consulting",
    highlights: [
      "Contributed to structured competitive analysis and market benchmarking for HMC Group",
      "Synthesized multi-source qualitative and quantitative market data into prioritized strategic growth recommendations",
      "Delivered structured executive presentations to student society mentors and industry advisors"
    ]
  }
];

export const education = [
  {
    degree: "Diploma in Data Science (Pursuing)",
    institution: "IIT Madras (Online)",
    period: "2025 – Present",
    details: "Advanced coursework in Machine Learning, Statistical Inference, Python for Data Science, and Relational Database Systems."
  },
  {
    degree: "Bachelor of Commerce (Honours) — 81.6%",
    institution: "Aryabhatta College, University of Delhi",
    period: "Graduated 2024",
    details: "Specialized in Financial Analysis, Quantitative Techniques, Business Statistics, and Auditing."
  },
  {
    degree: "Senior Secondary (CBSE) — 80.75%",
    institution: "Columbia Foundation Sr. Sec. School",
    period: "2021",
    details: "Commerce with Mathematics stream focusing on Calculus, Statistics, and Economics."
  }
];

export const certifications = [
  {
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Coursera / Google",
    tag: "Professional BI"
  },
  {
    name: "Practical Time Series Analysis",
    issuer: "Coursera",
    tag: "Time Series"
  },
  {
    name: "Business Statistics and Analysis",
    issuer: "Coursera",
    tag: "Statistics"
  },
  {
    name: "Data Analysis: SQL, Tableau, Power BI & Excel",
    issuer: "Udemy",
    tag: "Full Stack BI"
  },
  {
    name: "Python for Data Analysis and Business Intelligence",
    issuer: "Udemy",
    tag: "Python BI"
  }
];

export const competitions = [
  {
    title: "Unstop Weekly Case Challenges",
    badge: "🏆 Top 1 Percentile",
    description: "National rank holder demonstrating structured problem solving, business case decomposition, and data storytelling."
  },
  {
    title: "BCG X Data Science Simulation",
    badge: "🔷 Completed",
    description: "End-to-end client simulation: data cleaning → exploratory analysis → predictive churn modeling → executive deck."
  },
  {
    title: "Deloitte Data Science Simulation",
    badge: "🔷 Completed",
    description: "Statistical analysis, interactive data visualization, and actionable enterprise recommendations."
  },
  {
    title: "LeetCode SQL Practice",
    badge: "💻 50+ Solved",
    description: "Proficiency in complex joins, aggregations, window functions, and query optimization."
  }
];
