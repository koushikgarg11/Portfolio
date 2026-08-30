export const personalInfo = {
  name: "Koushik",
  lastName: "Garg",
  title: "Data Analyst",
  location: "Delhi, India",
  headline: "Data Analyst turning raw data into actionable insights & predictive decisions.",
  bio: "Specialized in statistical modeling, IoT telemetry analytics, workforce skill disparity analysis, academic BI dashboards, and automated Python & SQL data pipelines.",
  email: "koushikgarg11@gmail.com",
  phone: "+91-7428668469",
  linkedin: "https://linkedin.com/in/koushik-garg-b034442a9",
  github: "https://github.com/koushikgarg11",
  resumeUrl: "#", // or direct pdf link
  currentFocus: "IoT Analytics & Business Intelligence"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education & Certs" },
  { id: "contact", label: "Contact" }
];

export const keyMetrics = [
  { value: "5+ Disciplines", label: "Branches Analyzed", sub: "Curriculum vs Skill Gap Modeling" },
  { value: "25+ Kiosks", label: "IoT Telemetry Nodes", sub: "Smart Water ATM Network" },
  { value: "4,500+", label: "Student Records Modeled", sub: "Multi-Department Academic BI" },
  { value: "94.2%", label: "System Operational Uptime", sub: "Automated Telemetry Monitoring" },
  { value: "Top 1%", label: "National Unstop Ranking", sub: "Weekly Case Competition Series" }
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
    title: "Statistical Modeling & ML",
    category: "ml",
    accent: "from-emerald-400 to-teal-500",
    items: ["Time Series Analysis", "Hypothesis Testing", "Linear & Logistic Regression", "Scikit-Learn", "Feature Engineering", "Clustering"]
  },
  {
    title: "Databases & Data Engineering",
    category: "data-eng",
    accent: "from-amber-300 to-orange-500",
    items: ["MySQL", "PostgreSQL", "Relational Modeling", "ETL Pipelines", "Multi-Table Joins", "Query Optimization"]
  },
  {
    title: "IoT & Utility Analytics",
    category: "business",
    accent: "from-pink-400 to-rose-500",
    items: ["IoT Telemetry Ingestion", "Flow Rate & Volume Tracking", "Consumption Modeling", "Peak Demand Analysis", "Downtime Diagnostics"]
  },
  {
    title: "AI & Automation",
    category: "ai",
    accent: "from-blue-400 to-indigo-500",
    items: ["LLM Prompt Engineering", "Automated Reporting", "Python Scripting", "Jinja2 Templates", "Anomaly Detection"]
  }
];

export const projects = [
  {
    id: "engineering-skill-gap",
    tag: "HIGHER EDUCATION & WORKFORCE MODELING",
    visualType: "skillgap",
    title: "Which Engineering Branches Face the Biggest Skill Gap?",
    subtitle: "Empirical workforce analysis of university curriculum alignment vs modern industry skill demand",
    description: "Evaluated skill readiness and employability gaps across 5+ major engineering streams (CSE, ECE, Mechanical, Civil, and Chemical). Quantified the disparity between university syllabus offerings and high-demand modern industry tools using statistical testing and regression.",
    tools: ["Python", "Pandas", "Seaborn", "Scikit-Learn", "Hypothesis Testing", "Power BI", "EDA"],
    stats: [
      ["Branches Modeled", "5+ Disciplines"],
      ["Top Skill Deficit", "Mech / Civil (68%)"],
      ["Placement Boost", "+42% with Tooling"]
    ],
    work: [
      "Engineered multi-variable skill readiness score combining core theory and modern software competencies",
      "Performed ANOVA and Chi-Square tests to validate statistical significance of skill gaps across departments",
      "Identified that legacy core branches face 2.4× higher skill mismatch compared to software-oriented disciplines",
      "Built interactive Power BI comparison dashboard for university curriculum boards and recruiters"
    ],
    case: {
      problem: "Graduates across various engineering disciplines encounter drastically disparate placement and employability outcomes. Academic institutions lack empirical visibility into which specific engineering branches experience the severe skill deficits and which exact tools/competencies drive the gap.",
      dataset: "Survey and placement logs across 3,200+ engineering graduates, curriculum syllabus course mappings across 5+ engineering streams (CSE, ECE, Mechanical, Civil, Chemical), and 15,000+ job posting requirement tags.",
      cleaning: "Standardized tool taxonomy across job descriptions, normalized course credit hour weights, imputed missing salary metrics using KNN regression, and one-hot encoded branch specializations.",
      analysis: "Applied statistical hypothesis testing (ANOVA & Kruskal-Wallis) to compare skill deficit distributions across disciplines. Found that Mechanical (68% gap) and Civil (71% gap) suffer from severe deficits in industry software (CAD/CAE, Python automation, BIM), while Computer Science exhibited the closest alignment (22% gap). Regression analysis revealed modern tooling proficiency increases entry-level offer compensation by 42%.",
      visualization: "Developed interactive skill disparity heatmaps, radar benchmark charts comparing university coverage vs industry requirements, and branch-by-branch employability matrices in Power BI.",
      recommendations: "Introduce mandatory industry-aligned tool electives (Python, IoT, CAD automation) in the 2nd and 3rd year for core engineering branches to bridge the 68%+ skill divide and boost institutional placement rates."
    },
    github: "https://github.com/koushikgarg11/Which-Engineering-Branches-Face-the-Biggest-Skill-Gap"
  },
  {
    id: "water-atm-telemetry",
    tag: "SMART UTILITY & IOT TELEMETRY",
    visualType: "wateratm-telemetry",
    title: "Smart Water ATM: IoT Telemetry & Consumption Analytics",
    subtitle: "Real-time dispensing monitoring, flow rate diagnostics, and predictive water quality analytics",
    description: "Architected an end-to-end telemetry analytics solution for a distributed network of 25+ automated clean water dispensing kiosks. Monitored daily dispensing volume, flow rates, TDS water purity levels, and hardware downtime to prevent service interruptions.",
    tools: ["Python", "Pandas", "IoT Telemetry", "Time Series", "SQL", "Power BI", "Anomaly Detection"],
    stats: [
      ["Kiosks Monitored", "25+ Units"],
      ["Network Uptime", "94.2%"],
      ["Water Saved", "~22% Wastage Cut"]
    ],
    work: [
      "Aggregated high-frequency sensor streams tracking dispensed volume (Liters), flow velocity, and water TDS purity",
      "Built automated anomaly detection scripts in Python to flag sudden pressure drops and flow meter discrepancies",
      "Engineered a predictive filter replacement model based on cumulative volume thresholds and TDS escalation rates",
      "Designed live kiosk health dashboards providing instant visibility into network-wide operational uptime"
    ],
    case: {
      problem: "Decentralized community Water ATMs suffered from frequent unmonitored dispensing breakdowns, delayed filter maintenance, and unmeasured water leakage, leading to service disruption in critical clean water access points.",
      dataset: "Continuous IoT sensor time-series logs from 25+ automated Water ATM kiosks over 12 months, tracking flow sensor pulses, daily dispensed liters, TDS (Total Dissolved Solids) levels, pump temperature, and valve status.",
      cleaning: "Filtered sensor packet noise, filled intermittent connectivity transmission gaps using time-weighted linear interpolation, and converted raw pulse counts into standardized volumetric liters.",
      analysis: "Modeled daily dispensing degradation patterns and identified that kiosks with TDS readings above 300 ppm experienced 3.1× faster membrane fouling. Engineered proactive alert triggers that predicted filter exhaustion 5–7 days prior to threshold failure.",
      visualization: "Constructed real-time IoT diagnostic dashboards featuring volumetric dispensing heatmaps, TDS water quality gauges, and automated downtime risk indicators.",
      recommendations: "Shift from reactive breakdown repairs to condition-based filter maintenance cycles, reducing kiosk downtime by 62% and preventing over 40,000 liters of annual water leakage."
    },
    github: "https://github.com/koushikgarg11/Water_ATM"
  },
  {
    id: "water-atm-demand",
    tag: "FINANCIAL MODELING & DEMAND FORECASTING",
    visualType: "wateratm-demand",
    title: "Smart Water ATM: RFID Transactions & Demand Prediction",
    subtitle: "Customer payment modeling, RFID smart card top-ups, and hourly peak usage forecasting",
    description: "Analyzed over 85,000 transaction records across community Water ATMs to model customer payment behavior (RFID card vs coin dispensing), peak consumption hours, and forecast weekly replenishment schedules.",
    tools: ["SQL", "Python", "ARIMA / SARIMA", "Financial Modeling", "PostgreSQL", "Tableau"],
    stats: [
      ["Transactions Analyzed", "85,000+ Records"],
      ["Peak Consumption Windows", "6–9 AM & 5–8 PM"],
      ["RFID Adoption Share", "76% Vol. Share"]
    ],
    work: [
      "Queried multi-table relational schema tracking user card recharges, vending transactions, and kiosk revenue",
      "Modeled hourly consumption curves isolating dual daily demand surges (morning 6–9 AM & evening 5–8 PM)",
      "Implemented time-series forecasting to predict kiosk tank depletion times and schedule proactive water tanker refills",
      "Segmented user cohorts by recharge frequency to design customer loyalty and digital top-up incentives"
    ],
    case: {
      problem: "Water ATM operators faced unpredictable water depletion during peak morning and evening rush hours, causing long queues, lost revenue, and inefficient water tanker logistics.",
      dataset: "85,000+ individual vending logs containing timestamped dispensed volumes, payment methods (RFID smart card vs coin), user card IDs, wallet balances, recharge amounts, and kiosk revenue summaries.",
      cleaning: "Reconciled conflicting transaction timestamps between local kiosk offline cache and central database, handled refunded dispensing attempts, and categorized payment transaction types.",
      analysis: "Identified a bimodal hourly demand distribution with 64% of total daily volume dispensed during two narrow windows (6:00–9:00 AM and 5:00–8:00 PM). RFID cardholders demonstrated 2.8× higher lifetime retention and 38% higher monthly consumption compared to coin users. Fitted SARIMA forecasting models on hourly consumption data.",
      visualization: "Created Tableau dashboards displaying revenue velocity, bimodal hourly rush hour heatmaps, RFID card balance distribution, and predictive tank refill alert schedules.",
      recommendations: "Schedule water tanker refills before 5:00 AM and 3:30 PM to guarantee 100% availability during surge periods, and incentivize RFID card adoption through 5% top-up bonus schemes."
    },
    github: "https://github.com/koushikgarg11/Water_ATM"
  },
  {
    id: "college-dashboard",
    tag: "EDUCATIONAL DATA MINING & BI",
    visualType: "college-dashboard",
    title: "College Performance & Academic Intelligence Dashboard",
    subtitle: "Enterprise institutional analytics tracking student GPA, attendance correlation, and department KPIs",
    description: "Engineered an executive Power BI & SQL dashboard tracking academic progression, semester GPA distributions, attendance impact, and department-wise performance metrics across 4,500+ student profiles.",
    tools: ["Power BI", "SQL", "DAX Formulas", "Python", "Predictive Analytics", "Excel"],
    stats: [
      ["Student Records Modeled", "4,500+ Students"],
      ["Departments Covered", "12 Disciplines"],
      ["Early Warning Precision", "89% Risk Flag"]
    ],
    work: [
      "Architected a dimensional star schema in SQL and Power BI integrating student demographics, course grades, and attendance",
      "Formulated complex DAX measures for dynamic GPA percentiles, pass rates, and semester-over-semester growth",
      "Built an Early Warning System (EWS) flagging students at risk of academic probation with 89% precision",
      "Designed role-based dashboard views tailored for Deans, Department Heads, and Academic Advisors"
    ],
    case: {
      problem: "College administration and department heads lacked centralized real-time visibility into academic performance, attendance warning signs, and department-level faculty-to-student metrics, relying on disconnected end-of-semester spreadsheets.",
      dataset: "4,500+ student records spanning 12 academic departments, 180+ courses, 65,000+ semester exam scores, and daily attendance logs over a 4-year period.",
      cleaning: "Standardized course grade conversions across relative and absolute grading scales, resolved student ID merge conflicts, and aggregated attendance logs by subject and semester.",
      analysis: "Uncovered a strong non-linear correlation between attendance and course GPAs: attendance dropping below 75% led to a steep 1.8-grade drop in final GPA. Built a logistic scoring model categorizing students into High, Moderate, and Critical academic risk tiers based on attendance velocity and midterm assessments.",
      visualization: "Developed an executive multi-page Power BI suite with drill-downs: Institutional Overview, Department Benchmarks, Individual Student Transcripts, and an At-Risk Intervention Alert table.",
      recommendations: "Implement mid-semester automated counseling alerts triggered whenever attendance drops below 80% or midterm score falls in the bottom quartile, projected to reduce academic probation by 32%."
    },
    github: "https://github.com/koushikgarg11/College_Dashboard"
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
