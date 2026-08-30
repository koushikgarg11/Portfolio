# 📊 Koushik Garg — Data Analyst Portfolio

A high-performance, dark-themed, glassmorphic Data Analyst portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** — modeled in the exact aesthetic and architecture of modern top-tier analyst portfolios.

---

## 🌟 Features & Highlights

- **Aesthetic Dark Theme:** Deep slate `#060b14` background with geometric grid overlay (`grid-bg`) and glowing cyan/violet blur gradients.
- **Glassmorphic Navigation:** Sticky responsive navbar with smooth section scrolling and mobile overlay menu.
- **Interactive Case Study Modals:** Fullscreen popup modals for every project detailing the *Business Problem, Dataset, Data Cleaning, Analytical Methodology, Visualizations, Key Findings, and Strategic Business Recommendations*.
- **Live Inventory / Optimization Calculator Widget:** Interactive slider-driven Economic Order Quantity (EOQ), Safety Stock, and Reorder Point calculator.
- **Dynamic Visualizations & Schemas:**
  - Comparative Higher Education Skill Deficit rate by engineering discipline (Civil, Mech, Chem, ECE, CSE).
  - Smart Water ATM IoT Sensor Telemetry stream monitor (Volume, Flow, TDS water purity, Node status).
  - 24-Hour Bimodal Hourly Consumption Surge curve and RFID smart card payment split.
  - Institutional College Academic GPA benchmark, attendance impact curve, and student retention monitor.
- **Structured Sections:**
  - 🟢 **Hero Section** with quantified impact tags & simulated telemetry pipeline.
  - 📈 **Key Metrics Bar** (5+ Disciplines Modeled, 25+ Kiosks, 4,500+ Records, 94.2% Uptime, Top 1% national rank).
  - 👤 **About Me** storytelling narrative & candidate profile card.
  - 🛠️ **Categorized Skills** with interactive filters (Analytics, BI, ML, Databases, IoT Utility, AI).
  - 🚀 **Featured Projects** with 4 deep-dive case studies and GitHub repository links:
    1. *Which Engineering Branches Face the Biggest Skill Gap?*
    2. *Smart Water ATM: IoT Telemetry & Consumption Analytics*
    3. *Smart Water ATM: RFID Transactions & Demand Prediction*
    4. *College Performance & Academic Intelligence Dashboard*
  - 🎓 **Education, Certifications & Competitions** (IIT Madras Data Science, DU B.Com Hons, Unstop Top 1%).
  - 📬 **Interactive Contact Form & Direct Links** (Email, LinkedIn, GitHub, WhatsApp).

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom dark theme, glowing orbs, glassmorphism)
- **Icons:** Lucide React
- **Deployment:** Netlify / Vercel / GitHub Pages

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/koushikgarg11/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment Guide

### Deploy to Netlify (Recommended - 1 Click)

#### Option 1: Via Netlify CLI
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

#### Option 2: Via Netlify Web Interface
1. Push this repository to your GitHub account (`koushikgarg11/portfolio`).
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** → **Import an existing project** → select **GitHub**.
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy Site** — your portfolio is live with free HTTPS and automatic CI/CD on every git push!

---

## 📁 Project Structure

```
portfolio/
├── index.html                     # HTML entry point with metadata & fonts
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── netlify.toml                   # Netlify redirect and build rules
├── src/
│   ├── main.jsx                   # React root entry
│   ├── App.jsx                    # Main application assembly
│   ├── index.css                  # Global styles, grid-bg, scrollbar
│   ├── data/
│   │   └── portfolioData.js       # Complete structured profile & project data
│   └── components/
│       ├── Navbar.jsx             # Sticky glass navbar
│       ├── Hero.jsx               # Hero section with animated CTAs & visual card
│       ├── MetricsBar.jsx         # Key impact metrics bar
│       ├── About.jsx              # About story + candidate profile card
│       ├── Skills.jsx             # Categorized skills grid with filters
│       ├── Projects.jsx           # Featured projects with visual previews
│       ├── ProjectVisual.jsx      # Custom SVG/chart visualizers for each project
│       ├── CaseStudyModal.jsx     # Comprehensive case study popup modal
│       ├── InteractiveWidget.jsx  # Live optimization calculator
│       ├── EducationCerts.jsx     # Education, Certifications & Competitions
│       ├── GitHubBanner.jsx       # GitHub callout banner
│       ├── Contact.jsx            # Interactive contact form & direct channels
│       └── Footer.jsx             # Footer with copyright & back-to-top
└── dist/                          # Production-ready build output
```

---

*Built with ❤️ by **Koushik Garg** · Data Analyst · Delhi, India*
