export const profile = {
  name: "Koushik Garg",
  title: "Data Analyst",
  subtitle: "Entry-level Data Analyst with hands-on experience in data wrangling, statistical analysis, demand forecasting, and machine learning.",
  tagline: "Turning raw, complex data into high-conviction business decisions.",
  location: "New Delhi, India",
  email: "koushikgarg11@gmail.com",
  phone: "+91-7428668469",
  status: "Open to Work",
  availability: "Full-Time Roles, Internships & Consulting",
  links: {
    github: "https://github.com/koushikgarg11",
    linkedin: "https://linkedin.com/in/koushik-garg-b034442a9/",
    streamlitApp: "https://koushikgarg11-portfolioapp.streamlit.app",
    resume: "/Koushik_Garg_Resume.pdf",
    tier1Report: "/Tier_1_Engineering_College_Report.pdf",
    skillGapReport: "/Branch_Wise_Skill_Gap_Report.pdf"
  }
};

export const metrics = [
  {
    value: "28K+",
    label: "College-Branch Records",
    sub: "Pan-India Employability Model"
  },
  {
    value: "130K+",
    label: "Geospatial Records",
    sub: "EV Charging Infrastructure Platform"
  },
  {
    value: "15–20%",
    label: "Forecast Accuracy Gain",
    sub: "ARIMA Time-Series Modeling"
  },
  {
    value: "44 Tier 1",
    label: "Top Colleges Benchmarked",
    sub: "Statistical Driver Analysis (r = 0.78)"
  },
  {
    value: "Top 1%",
    label: "Unstop National Rank",
    sub: "Weekly Case & Analytics Challenges"
  },
  {
    value: "~40%",
    label: "Reporting Time Reduced",
    sub: "AI & Python ETL Pipelines"
  }
];

export const skills = {
  technical: {
    title: "Technical & Data Wrangling",
    icon: "Code2",
    items: [
      "Python (Pandas, NumPy, Scikit-learn, Matplotlib)",
      "SQL (PostgreSQL, MySQL)",
      "Power BI",
      "Tableau",
      "Excel (VBA, Power Query)",
      "ETL Pipelines",
      "Data Cleaning & Imputation"
    ]
  },
  mlAnalytics: {
    title: "ML & Statistical Analytics",
    icon: "BrainCircuit",
    items: [
      "ARIMA / SARIMA Forecasting",
      "Predictive Modeling",
      "Classification & Regression",
      "Anomaly Detection",
      "A/B Testing & Hypothesis Testing",
      "Feature Engineering",
      "Spatial & Multi-Criteria Scoring (AHP / TOPSIS)"
    ]
  },
  businessBI: {
    title: "Business & BI Analytics",
    icon: "BarChart3",
    items: [
      "Demand Forecasting",
      "Inventory Optimization (EOQ, Safety Stock)",
      "ABC / Pareto 80/20 Analysis",
      "Reorder Point (ROP) Scheduling",
      "KPI & Metrics Design",
      "Executive Dashboards & Storytelling"
    ]
  },
  aiAutomation: {
    title: "AI & Reporting Automation",
    icon: "Bot",
    items: [
      "LLM Prompt Engineering",
      "AI-assisted Reporting Pipelines",
      "Semantic Search & Query Augmentation",
      "Power Automate Workflows",
      "Automated Web Scraping",
      "Jinja2 & Structured Markdown Templating"
    ]
  }
};

export const projects = [
  {
    id: "tier1-college-analytics",
    tag: "BENCHMARKING & DECISION INTELLIGENCE",
    visualType: "tier1-colleges",
    title: "Tier 1 Engineering College Intelligence Database & Placement Drivers",
    subtitle: "Consolidated 44 Tier 1 institutions across 18 states with 16 attributes into an analytical platform to uncover true placement drivers",
    description: "Built a master intelligence database of 44 Tier 1 Indian engineering colleges across 18 states and 16 structured attributes. Evaluated placement drivers beyond ranking: quantified the correlation between placement rate & maximum package (r = 0.78), ownership variations (Autonomous 89.3% vs Govt 86.6% vs Private 85.2%), and NBA accreditation premiums.",
    tools: ["Python", "Pandas", "Statistical Correlation", "Streamlit", "Power BI", "Data Wrangling"],
    year: "2026",
    stats: [
      ["Dataset Scope", "44 Colleges · 16 Fields"],
      ["Placement vs CTC", "r = 0.78 Correlation"],
      ["Autonomous Lead", "89.3% Placement Rate"]
    ],
    work: [
      "Built a unified 44-college Pan-India master database across 18 states and 16 structured parameters from NIRF, NAAC/NBA, and placement disclosures",
      "Discovered strong statistical correlation (r = 0.78) between placement rate and maximum CTC, proving recruiter quality lifts both volume and compensation",
      "Identified that Autonomous institutions achieve the highest average placement rate (89.3%), outpacing Government (86.6%) and Private (85.2%)",
      "Constructed interactive multi-view Streamlit dashboards for institutional distribution, comparative analytics, and ROI evaluation"
    ],
    case: {
      problem: "Information on India's top Tier 1 engineering colleges is fragmented across disparate ranking releases, institutional brochures, and accreditation disclosures. Educational strategists and recruiters lack a centralized, evidence-based benchmark to understand what structural factors (accreditation, autonomy, location, scale) actually drive placement outcomes.",
      dataset: "Consolidated Pan-India repository of 44 Tier 1 engineering colleges across 18 states and 8 categories (IITs, NITs, BITS, Autonomous, etc.), capturing 16 attributes across recognition, governance, batch intake, alumni strength, median CTC, max CTC, and placement percentages.",
      cleaning: "Standardized multi-format placement disclosures, normalized category nomenclature, reconciled NIRF engineering ranks with NAAC/NBA accreditation tiers, and eliminated duplicate institutional registries.",
      analysis: "Quantified Pearson correlation drivers: Placement % vs Max Package showed strong correlation (r = 0.78); NIRF Rank vs Placement % was moderate (r = -0.55); Intake capacity and Alumni size showed near-zero correlation with placement rate (r = 0.03 each), debunking the assumption that sheer scale drives outcomes. NBA accreditation delivered a consistent +2–4% placement edge over NAAC-only.",
      visualization: "Engineered 6-view interactive Streamlit dashboards featuring geographic state distribution, multi-variable scatter correlation plots, side-by-side institutional comparison radars, and package-to-cost ROI matrices.",
      recommendations: "Formulated a 5-pillar Campus-to-Corporate blueprint for partner institutions: prioritize program-level NBA accreditation readiness, leverage institutional autonomy for agile curriculum updates, and build active recruiter ecosystems rather than solely relying on NIRF ranking."
    },
    demo: "https://collegedashboard.streamlit.app/",
    github: "https://github.com/koushikgarg11/College_Dashboard",
    reportPdf: "/Tier_1_Engineering_College_Report.pdf",
    reportName: "Tier 1 Eng. College Project Report.pdf"
  },
  {
    id: "branch-skill-gap-datayug",
    tag: "EMPLOYABILITY & WORKFORCE INTELLIGENCE",
    visualType: "branch-skill-gap",
    title: "DATAYUG — Pan-India Branch-Wise Skill Gap & Industry Readiness Intelligence",
    subtitle: "28,091 college-branch records analyzed across 2,813 institutions in 483 locations to diagnose branch-specific employability gaps and placement levers",
    description: "Conducted a large-scale engineering workforce intelligence study synthesizing 28,091 college-branch records across 2,813 colleges in India. Formulated a 0–100 Skill Readiness Index & Skill Gap Score, diagnosed curriculum-industry misalignments across 7 engineering branches, and identified internship participation as the #1 actionable placement lever (r = 0.71).",
    tools: ["Python", "ETL Pipelines", "Statistical Modeling", "Skill Gap Scoring (0-100)", "Pandas", "Workforce Analytics"],
    year: "2026",
    stats: [
      ["Master Records", "28,091 Branch Records"],
      ["Colleges & Cities", "2,813 Colleges · 483 Cities"],
      ["Top Actionable Lever", "r = 0.71 Internship Correlation"]
    ],
    work: [
      "Synthesized and validated 28,091 college-branch records across 2,813 institutions, 483 locations, and 30 institutional categories into a consolidated analytics model",
      "Formulated the standardized Skill Readiness Index (0–100) and Skill Gap Score to quantify shortfall between academic curricula and recruiter demand",
      "Identified that Civil (Skill Gap 39.5, 60.5% placement) and Mechanical (Skill Gap 34.2, 65.8% placement) suffer the highest software-tool adoption lags",
      "Discovered that internship participation has the highest single correlation with placement (r = 0.71), establishing structured internships as the primary ROI lever"
    ],
    case: {
      problem: "Despite millions of annual engineering graduates, employers report acute talent shortages while thousands of graduates remain unplaced. The skill gap is highly non-uniform across disciplines (CSE vs Core branches), leaving academic institutions, edtech platforms, and policy bodies without granular, branch-specific upskilling roadmaps.",
      dataset: "28,091 college-branch records spanning 2,813 engineering colleges across 483 Indian locations and 30 institutional categories. Captures placement percentages, average CTC, internship exposure, curricula taught vs recruiter tools demanded, missing skill gaps, and emerging tech adoption across 7 branch clusters.",
      cleaning: "Reconciled cross-institutional branch taxonomies, normalized salary and placement metrics, parsed recruiter demand narratives with text mining, and cross-validated institutional categories (IITs, NITs, Autonomous, Govt, Private).",
      analysis: "Developed the Skill Readiness Index (0–100) based on placement outcomes, recruiter demand intensity, and internship exposure. Proved that Civil (Gap 39.5) and Mechanical (Gap 34.2) lag due to manual drafting vs 3D BIM/ANSYS; EEE/ECE require embedded RTOS and Cadence EDA; while CSE/IT need continuous MLOps/DevOps refresh. Proved internship participation correlates with placement at r = 0.71 (stronger than salary's correlation with placement).",
      visualization: "Constructed comprehensive branch-wise skill gap heatmaps, government vs private outcome differentials, and regional placement distribution matrices.",
      recommendations: "Designed a 3-tier intervention framework for Analytics Career Connect: Tier 1 immediate intensive tooling bootcamps for Civil/Mechanical; Tier 2 software micro-certifications for EEE/ECE; and Tier 3 continuous MLOps/Cloud subscriptions for CSE/IT, centered around mandatory structured internships."
    },
    reportPdf: "/Branch_Wise_Skill_Gap_Report.pdf",
    reportName: "DATAYUG Engineering Skill Gap Report (30 Pages).pdf"
  },
  {
    id: "chargedesert-ev",
    tag: "GEOSPATIAL AI & DECISION SCIENCE",
    visualType: "ev-geospatial",
    title: "ChargeDesert — EV Infrastructure Gap & Site Recommendation Platform",
    subtitle: "End-to-end EV charging intelligence integrating 130K+ geospatial records, AHP/TOPSIS multi-criteria scoring, and what-if simulation",
    description: "Built an end-to-end EV infrastructure intelligence platform integrating 130K+ geospatial records to identify charging gaps, evaluate highway road risk, and prioritize optimal charging station locations using AHP/TOPSIS multi-criteria decision algorithms.",
    tools: ["Python", "GIS & Spatial Analytics", "AHP / TOPSIS", "Streamlit", "Pandas", "Scikit-Learn"],
    year: "2026",
    stats: [
      ["Geospatial Records", "130,000+ Records"],
      ["Decision Framework", "AHP & TOPSIS Scoring"],
      ["Simulation Engine", "Interactive What-If Grid"]
    ],
    work: [
      "Aggregated and cleaned 130K+ geospatial records covering traffic density, grid proximity, existing chargers, and arterial road networks",
      "Engineered spatial grid clustering to detect high-risk 'charging deserts' across regional travel corridors",
      "Formulated an Analytic Hierarchy Process (AHP) & TOPSIS scoring engine to weight commercial viability, grid load, and traffic intensity",
      "Delivered interactive GIS dashboards with explainable recommendations, enabling data-driven EV infrastructure planning"
    ],
    case: {
      problem: "Rapid electric vehicle adoption is bottlenecked by fragmented charging station distribution. Planners lack unified spatial intelligence to prioritize high-yield locations without causing grid strain or financial underutilization.",
      dataset: "130,000+ geospatial coordinate points spanning existing charging hubs, state & national highway grids, traffic volume telemetry, population density nodes, and power substation capacities.",
      cleaning: "Performed spatial boundary joins, deduplicated multi-source POI registries, resolved CRS coordinate projections (EPSG:4326 to metric UTM), and imputed missing substation proximity vectors.",
      analysis: "Developed an AHP/TOPSIS ranking engine assigning dynamic weights to 6 key parameters (Traffic Flow 30%, Grid Distance 25%, Competitor Buffer 15%, POI Density 15%, Road Risk 10%, Land Cost 5%). Identified over 40 critical gap clusters along major transit highways.",
      visualization: "Engineered an interactive Streamlit GIS mapping interface featuring density heatmaps, site viability rank overlays, radar score breakdowns, and live what-if parameter sliders.",
      recommendations: "Prioritize Phase-1 deployment on top 15 ranked highway intersections, projected to increase network coverage by 38% while reducing initial grid extension Capex by 24%."
    },
    github: "https://github.com/koushikgarg11/ChargeDesert",
    demo: "https://chargedesert.streamlit.app/"
  },
  {
    id: "water-atm-downtime",
    tag: "INFRASTRUCTURE ANALYTICS & WEB SCRAPING",
    visualType: "wateratm-downtime",
    title: "Water ATM Downtime Atlas – Rural Drinking Water Infrastructure Analytics",
    subtitle: "Pan-India operational intelligence database scraped across government portals, tender platforms, and grievance systems",
    description: "Constructed a Pan-India Water ATM operational intelligence database by web-scraping government portals, tender registries, and public grievance logs to analyze downtime patterns, failure causes, and vendor reliability across states and districts.",
    tools: ["Python", "Web Scraping", "SQL", "Power BI", "Pandas", "Failure Root-Cause Analysis"],
    year: "2026",
    stats: [
      ["Coverage Scale", "Pan-India Database"],
      ["Failure Diagnostics", "Power, RO, Vandalism"],
      ["Stakeholder Utility", "Govt & NGO Planning"]
    ],
    work: [
      "Built resilient web scrapers and ETL workflows ingesting data from government portals, smart city tenders, and public grievance trackers",
      "Analyzed downtime patterns, mean time between failures (MTBF), and maintenance response times across states and districts",
      "Diagnosed primary operational failure causes: power supply instability, RO membrane fouling, and localized vandalism",
      "Designed interactive dashboards (state-wise coverage, operational status, downtime analysis, vendor performance) for data-backed planning"
    ],
    case: {
      problem: "Decentralized rural drinking water purification kiosks (Water ATMs) suffer from recurrent unmonitored downtimes, leading to water insecurity in underserved communities and lack of accountability among maintenance vendors.",
      dataset: "Pan-India repository compiled from state water mission disclosures, Smart City portal feeds, open government tender awards, and citizen grievance tickets spanning 100+ districts.",
      cleaning: "Normalized state and district naming variations, resolved multi-format timestamp disparities across grievance logs, filtered duplicate downtime incidents, and classified unstructured maintenance notes using text parsing.",
      analysis: "Evaluated failure distribution across regions: 48% of downtimes were attributed to power grid instability, 31% to delayed RO membrane replacement / filter choking, and 12% to hardware vandalism. Quantified vendor SLA compliance rates showing an average 4.2-day lag against contractually stipulated 24-hour turnaround windows.",
      visualization: "Designed comprehensive multi-layered dashboards showing geographic downtime heatmaps, vendor SLA scorecards, root-cause Pareto charts, and MTTR (Mean Time to Repair) tracking.",
      recommendations: "Recommended solar-battery backup hybrid installations for top 20% failure-prone rural zones and implemented penalty-linked vendor SLA performance tracking to cut downtime by over 45%."
    },
    github: "https://github.com/koushikgarg11/Water_ATM_Downtime_Atlas",
    demo: "https://wateratm.streamlit.app/"
  },
  {
    id: "sales-report-automation",
    tag: "AI ETL & SEMANTIC AUTOMATION",
    visualType: "ai-sales-etl",
    title: "AI-Assisted Sales Report Automation",
    subtitle: "End-to-end Python ETL pipeline with LLM prompt engineering and semantic search over sales datasets",
    description: "Engineered an automated Python ETL pipeline leveraging LLM prompt engineering to parse multi-channel sales feeds into structured executive summaries, cutting manual reporting time by ~40% and integrating semantic search for plain-English querying.",
    tools: ["Python", "LLM Prompt Engineering", "Semantic Search", "ETL Pipelines", "Pandas", "NLP"],
    year: "2026",
    stats: [
      ["Manual Time Saved", "~40% Reduction"],
      ["Natural Language SQL", "Semantic Search Querying"],
      ["Reporting Pipeline", "Automated Daily/Weekly"]
    ],
    work: [
      "Built a Python ETL pipeline ingesting disparate CRM, billing, and transactional sales exports",
      "Designed optimized Few-Shot prompt templates to generate formatted executive summaries, anomaly callouts, and revenue trends",
      "Integrated semantic vector search enabling stakeholders to ask plain-English questions over product and customer datasets",
      "Replaced repetitive ad-hoc SQL lookups with natural language retrieval and automated Markdown/HTML report compilation"
    ],
    case: {
      problem: "Commercial sales teams spent 15+ hours weekly manually aggregating sales spreadsheets, compiling executive reports, and answering repetitive ad-hoc data questions from regional leads.",
      dataset: "Multi-branch sales transactions, SKU catalogs, customer purchasing records, margin tables, and discount logs.",
      cleaning: "Automated schema alignment across legacy CSV/XLSX exports, normalized regional currency notations, validated product category hierarchies, and removed transactional duplicates.",
      analysis: "Constructed automated variance analytics comparing weekly performance against rolling 4-week averages. Utilized embedding models and cosine similarity to map natural language queries directly to data subsets.",
      visualization: "Automated email-ready HTML briefings, structured executive summary cards, and an interactive lightweight query console providing immediate data answers.",
      recommendations: "Full organizational adoption of automated reporting reduced manual weekly aggregation time by ~40% and accelerated leadership decision response times from 3 days to under 15 minutes."
    },
    github: "https://github.com/koushikgarg11/AI_Sales_Report_Automation",
    demo: "https://ai-assisted-sales-report-automation.streamlit.app/"
  },
  {
    id: "demand-forecasting-inventory",
    tag: "TIME SERIES FORECASTING & INVENTORY OPTIMIZATION",
    visualType: "taiwal-arima",
    title: "Demand Forecasting & Inventory Optimization | Taiwal Enterprises",
    subtitle: "ARIMA time-series demand modeling, ABC/Pareto 80/20 SKU segmentation, and EOQ/Safety Stock optimization",
    description: "Replaced manual demand estimation with ARIMA time-series models, improving forecast accuracy by 15–20% and reducing stockout risk. Conducted ABC/Pareto analysis and engineered mathematical EOQ and Reorder Point procurement schedules.",
    tools: ["Python", "ARIMA / SARIMA", "ABC/Pareto Analysis", "EOQ Modeling", "Safety Stock & ROP", "Excel"],
    year: "2025",
    stats: [
      ["Forecast Accuracy Gain", "+15% to 20%"],
      ["Pareto SKU Analysis", "20% SKUs = ~75% Rev"],
      ["Inventory Policy", "Client-Adopted Strategy"]
    ],
    work: [
      "Replaced guesswork inventory ordering with statistical ARIMA time-series models, cutting forecast error by 15–20%",
      "Performed ABC/Pareto analysis identifying that top 20% of SKUs generated ~75% of total revenue",
      "Built Economic Order Quantity (EOQ), Safety Stock (at 95% service level), and Reorder Point (ROP) calculation models",
      "Delivered a client-adopted procurement strategy with actionable replenishment calendars and minimum order policies"
    ],
    case: {
      problem: "Taiwal Enterprises suffered from frequent stockouts of high-demand items alongside expensive capital tie-up in dead inventory due to manual, intuitive ordering practices.",
      dataset: "3 years of historical SKU-level purchase orders, sales transactions, supplier lead times, ordering costs, and holding cost parameters.",
      cleaning: "Handled seasonal gaps, removed cancellation outliers, aggregated daily transactions into weekly demand buckets, and stationary-tested series via Augmented Dickey-Fuller (ADF) tests.",
      analysis: "Fitted ARIMA(p,d,q) models with parameter grid search (AIC minimization). Conducted ABC inventory classification revealing 20% Class-A SKUs drove 75% of gross revenue, 30% Class-B drove 18%, and 50% Class-C drove 7%. Calculated dynamic Safety Stock accounting for lead time volatility.",
      visualization: "Engineered comparative actual vs forecast curves with 95% confidence bands, cumulative ABC Pareto revenue curves, and replenishment timeline schedules.",
      recommendations: "Adopted tiered procurement cycles: weekly automated reorders for Class-A items with tight safety stocks, monthly bulk orders for Class-B/C to maximize volume discounts, reducing holding costs by 18%."
    },
    github: "https://github.com/koushikgarg11/Demand_Forecasting_Inventory"
  },
  {
    id: "market-research-competitive",
    tag: "STRATEGIC BENCHMARKING & MARKET INTELLIGENCE",
    visualType: "market-research",
    title: "Market Research & Competitive Analysis | Business.io Society, IIT Madras",
    subtitle: "Structured competitive intelligence for HMC Group synthesizing multi-source data into prioritized recommendations",
    description: "Contributed to a structured competitive market analysis for HMC Group, synthesizing multi-source market data, competitor benchmarking, and pricing tiers into prioritized executive recommendations.",
    tools: ["Market Analytics", "Competitive Benchmarking", "Data Synthesis", "Power BI", "Excel", "Strategic Frameworks"],
    year: "2025",
    stats: [
      ["Client Organization", "HMC Group"],
      ["Strategic Scope", "Multi-Source Market Data"],
      ["Execution Body", "Business.io Society, IITM"]
    ],
    work: [
      "Conducted in-depth quantitative and qualitative benchmarking of competing market offerings and pricing structures",
      "Synthesized secondary market intelligence, consumer sentiment signals, and feature matrix comparisons",
      "Formulated prioritized strategic positioning frameworks for enterprise leadership",
      "Delivered executive presentation decks with clear data-backed go-to-market strategies"
    ],
    case: {
      problem: "HMC Group required a comprehensive market positioning assessment to identify untapped customer segments, pricing friction points, and differentiation opportunities against incumbent competitors.",
      dataset: "Multi-source market intelligence repository combining industry analyst reports, competitor feature-pricing matrices, customer review sentiment corpora, and market share trend data.",
      cleaning: "Standardized disparate feature taxonomies across competitors, normalized pricing tiers across subscription and one-time licensing models, and segmented user sentiment signals.",
      analysis: "Constructed competitive perceptual positioning maps, feature parity gap matrices, and pricing sensitivity curves to pinpoint unserved mid-market demand niches.",
      visualization: "Developed executive summary dashboards, multi-dimensional feature radar comparisons, and strategic decision matrices.",
      recommendations: "Recommended targeted mid-tier product packaging and emphasized high-demand automation features, providing HMC Group with a concrete differentiation roadmap."
    },
    github: "https://github.com/koushikgarg11/Market_Research_IITM"
  }
];

export const education = [
  {
    degree: "Diploma in Data Science (Pursuing)",
    institution: "IIT Madras (Online, Self-Paced)",
    period: "2025 – 2026 (Dec)",
    details: "Advanced quantitative curriculum covering Machine Learning, Statistical Inference, Python for Data Science, and Relational Database Systems."
  },
  {
    degree: "Bachelor of Commerce (Honours) — 81.6%",
    institution: "Aryabhatta College, University of Delhi",
    period: "2024",
    details: "Strong commercial foundation in Financial Analysis, Quantitative Techniques, Business Statistics, Cost Accounting, and Auditing."
  },
  {
    degree: "Senior Secondary (CBSE) — 80.75%",
    institution: "Columbia Foundation Sr. Sec. School",
    period: "2021",
    details: "Commerce with Mathematics stream focusing on Calculus, Mathematical Statistics, and Micro/Macro Economics."
  }
];

export const certifications = [
  {
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Google / Coursera",
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
    name: "Python for Data Analysis & BI",
    issuer: "Udemy",
    tag: "Python BI"
  }
];

export const competitions = [
  {
    title: "Unstop Weekly Case Challenges",
    badge: "🏆 Top 1 Percentile",
    description: "Consistently ranked nationally for structured problem-solving, quantitative case decomposition, and compelling data storytelling."
  },
  {
    title: "BCG X Data Science Simulation (Forage)",
    badge: "🔷 Completed Simulation",
    description: "End-to-end client engagement covering raw data cleaning, exploratory data analysis, predictive churn modeling, and stakeholder-ready presentation."
  },
  {
    title: "Deloitte Data Science Simulation (Forage)",
    badge: "🔷 Completed Simulation",
    description: "Statistical analysis, interactive data visualization, and actionable business strategy recommendations in a simulated consulting engagement."
  },
  {
    title: "LeetCode SQL Problem Solving",
    badge: "💻 50+ Solved",
    description: "Demonstrated mastery in complex multi-table joins, CTEs, window functions, and query optimization."
  }
];

export const languages = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hindi", proficiency: "Fluent" }
];
