import React from "react";
import { profile } from "../data/portfolioData";
import {
  FileDown,
  ArrowDown,
  Mail,
  Linkedin,
  Github,
  Phone,
  Sparkles,
  MapPin,
  TrendingUp,
  Cpu,
  Layers
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-inner shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>{profile.title} · {profile.location}</span>
              <span className="text-cyan-500/50">•</span>
              <span className="text-emerald-400 font-bold">{profile.status}</span>
            </div>

            {/* Main Hero Header */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Koushik.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mt-3 tracking-tight">
                Turning <span className="text-cyan-400 underline decoration-cyan-400/40 underline-offset-4">raw data</span> into actionable business decisions.
              </h2>
            </div>

            {/* Summary description from Resume */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Quantitative problem-solver with hands-on experience in <strong className="text-white font-semibold">ARIMA time-series demand forecasting</strong>, <strong className="text-white font-semibold">geospatial intelligence</strong>, and <strong className="text-white font-semibold">machine learning threat classification</strong>. Proficient in <strong className="text-cyan-300 font-semibold">Python, SQL, Power BI, and Tableau</strong> to build automated ETL pipelines and executive decision dashboards.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href={profile.links.resume}
                download="Koushik_Garg_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/90 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>

              <a
                href="mailto:koushikgarg11@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-transparent text-slate-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-400 font-medium">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub Repos</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Live Intelligence Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative rounded-3xl bg-[#0b1325]/90 border border-slate-700/60 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">forecast_engine.py</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    ARIMA(2,1,2)
                  </span>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs text-slate-300 bg-[#060b14] p-4 rounded-xl border border-slate-800/80 space-y-1.5 overflow-x-auto leading-relaxed">
                  <div className="text-slate-500"># Demand Forecasting & Spatial Analytics</div>
                  <div>
                    <span className="text-purple-400">from</span> statsmodels.tsa.arima.model <span className="text-purple-400">import</span> ARIMA
                  </div>
                  <div>
                    <span className="text-cyan-300">model</span> = ARIMA(demand_series, order=(<span className="text-amber-300">2</span>, <span className="text-amber-300">1</span>, <span className="text-amber-300">2</span>))
                  </div>
                  <div>
                    <span className="text-cyan-300">fit_results</span> = model.fit()
                  </div>
                  <div className="text-emerald-400 pt-1">
                    ✓ Forecast Accuracy: +18.4% (AIC: 412.8)
                  </div>
                  <div className="text-cyan-400">
                    ✓ 130K+ Geospatial Nodes Clustered
                  </div>
                </div>

                {/* Live Micro Metric Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Forecast Gain</span>
                    </div>
                    <div className="text-lg font-black text-cyan-300 mt-1">15–20%</div>
                    <div className="text-[10px] text-slate-500">Taiwal Enterprises</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>Spatial Records</span>
                    </div>
                    <div className="text-lg font-black text-blue-300 mt-1">130K+</div>
                    <div className="text-[10px] text-slate-500">EV Infra Platform</div>
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-purple-950/40 border border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-300">Academic Background</div>
                      <div className="text-xs font-bold text-white">IIT Madras · DU (81.6%)</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">2026</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
