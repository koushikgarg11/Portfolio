import React from "react";
import { profile } from "../data/portfolioData";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Code,
  Target,
  CheckCircle2,
  FileSpreadsheet,
  BrainCircuit
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Candidate Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Bridging quantitative analytics with commercial business strategy.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A unique blend of data science rigor from IIT Madras and commercial financial intuition from Delhi University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed text-left">
            <p>
              I am an analytical problem-solver currently pursuing a <strong className="text-white font-semibold">Diploma in Data Science from IIT Madras</strong> alongside a strong academic foundation with a <strong className="text-white font-semibold">Bachelor of Commerce (Honours) from Aryabhatta College, University of Delhi (81.6%)</strong>.
            </p>
            <p>
              My expertise spans the complete analytics lifecycle — from raw web-scraping and Python ETL data pipelines to statistical modeling, machine learning classification, and executive storytelling in Power BI & Tableau.
            </p>
            <p>
              Whether analyzing placement drivers across <strong className="text-cyan-300 font-semibold">44 Tier 1 Engineering Colleges (r = 0.78)</strong>, diagnosing employability shortfalls on <strong className="text-cyan-300 font-semibold">28,091 college-branch records</strong> (DATAYUG), engineering <strong className="text-cyan-300 font-semibold">ARIMA time-series models</strong> to improve demand forecast accuracy by 15–20% at Taiwal Enterprises, or aggregating <strong className="text-cyan-300 font-semibold">130K+ geospatial records</strong> for EV infrastructure gap recommendations, my focus is always on actionable ROI.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Statistical & ML Rigor</div>
                  <div className="text-xs text-slate-400 mt-0.5">Time-series forecasting, hypothesis testing, anomaly detection & classification.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <FileSpreadsheet className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Commercial Acumen</div>
                  <div className="text-xs text-slate-400 mt-0.5">Inventory models (EOQ/ROP), ABC/Pareto 80/20, pricing and margin analytics.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile Spec Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#091122]/90 border border-slate-800 p-6 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                    Candidate Specifications
                  </div>
                  <div className="text-lg font-bold text-white">{profile.name}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  {profile.status}
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Target className="w-4 h-4 text-cyan-400" />
                    Target Role
                  </span>
                  <span className="font-semibold text-slate-100">Data Analyst / BI Analyst</span>
                </div>

                <div className="flex items-start justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2 shrink-0">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Education
                  </span>
                  <span className="font-semibold text-slate-100 text-right">
                    IIT Madras (Data Science) <br />
                    Aryabhatta College, DU (B.Com Hons)
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    Location
                  </span>
                  <span className="font-semibold text-slate-100">{profile.location} (Open to Remote)</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    Core Stack
                  </span>
                  <span className="font-semibold text-slate-100">Python · SQL · Power BI · Excel</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    Specialization
                  </span>
                  <span className="font-semibold text-slate-100">Forecasting · ETL · Dashboards</span>
                </div>
              </div>

              {/* Verified skills summary */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">Verified Competencies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {["ARIMA / SARIMA", "AHP / TOPSIS", "Power BI / DAX", "Python ETL", "EOQ Optimization", "Semantic Search"].map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
