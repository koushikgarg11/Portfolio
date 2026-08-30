import React, { useState } from 'react';
import { Database, TrendingUp, ShieldAlert, Cpu, Layers, Sparkles, BarChart2, CheckCircle } from 'lucide-react';

export default function ProjectVisual({ project }) {
  const { visualType, stats } = project;

  // 1. FORECAST VISUAL (Demand Forecasting - Taiwal Enterprises)
  if (visualType === 'forecast') {
    return (
      <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-emerald-400 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                ARIMA TIME-SERIES MODEL
              </div>
              <div className="text-sm font-bold text-white">Monthly Demand & Confidence Bands</div>
            </div>
            <TrendingUp size={18} className="text-cyan-300" />
          </div>

          {/* SVG Line & Area Chart for ARIMA */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-400" /> Historical Actuals
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> ARIMA Forecast
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400/40" /> 95% Confidence
              </span>
            </div>

            <svg viewBox="0 0 320 120" className="w-full h-28 overflow-visible">
              <defs>
                <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Confidence Interval Polygon */}
              <polygon
                points="180,50 210,35 245,28 280,22 315,15 315,75 280,82 245,88 210,95 180,68"
                fill="url(#forecastFill)"
              />

              {/* Historical Line (Actuals) */}
              <polyline
                fill="none"
                stroke="#64748b"
                strokeWidth="2.5"
                points="10,75 35,68 65,82 95,55 125,62 155,48 180,58"
              />

              {/* Forecast Dashed Line */}
              <polyline
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                points="180,58 210,48 245,40 280,35 315,30"
              />

              {/* Forecast points */}
              {[[180, 58], [210, 48], [245, 40], [280, 35], [315, 30]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill="#22d3ee" className="animate-pulse" />
              ))}
            </svg>
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. CLASSIFICATION VISUAL (Cybersecurity ML - Unified Mentor)
  if (visualType === 'classification') {
    return (
      <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-500 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-emerald-300 uppercase">
                MODEL PERFORMANCE BENCHMARK
              </div>
              <div className="text-sm font-bold text-white">Random Forest vs Logistic Regression</div>
            </div>
            <ShieldAlert size={18} className="text-emerald-300" />
          </div>

          {/* Model comparison bars */}
          <div className="space-y-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                <span>Random Forest (Deployed)</span>
                <span className="text-emerald-300 font-mono">Precision: 89% | Recall: 86%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" style={{ width: '89%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-400">
                <span>Logistic Regression (Baseline)</span>
                <span className="text-slate-400 font-mono">Precision: 76% | Recall: 72%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-slate-500" style={{ width: '76%' }} />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[11px] text-emerald-300/90 font-medium">
              <span>✓ False Alarms cut from 24% to 6%</span>
              <span>SMOTE Balanced</span>
            </div>
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. BARCHART VISUAL (EV Sales India)
  if (visualType === 'barchart') {
    const statesData = [
      { name: "Maharashtra", sales: 42000, growth: "+38%", tier: "High Priority" },
      { name: "Karnataka", sales: 38000, growth: "+52%", tier: "High Priority" },
      { name: "Delhi", sales: 35000, growth: "+41%", tier: "High Priority" },
      { name: "Kerala", sales: 17000, growth: "+55%", tier: "Fastest Growth" },
    ];

    return (
      <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                REGIONAL MARKET ADOPTION
              </div>
              <div className="text-sm font-bold text-white">State Volume & YoY Acceleration</div>
            </div>
            <BarChart2 size={18} className="text-cyan-300" />
          </div>

          {/* Horizontal state comparison */}
          <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            {statesData.map((st) => (
              <div key={st.name} className="flex items-center gap-2 text-xs">
                <span className="w-24 text-slate-300 font-medium truncate">{st.name}</span>
                <div className="flex-1 h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${(st.sales / 45000) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-right font-mono text-[11px] text-emerald-400">{st.growth}</span>
              </div>
            ))}
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. PIPELINE VISUAL (AI Sales Report Automation)
  if (visualType === 'pipeline') {
    const pipelineSteps = [
      { name: "1. CSV Ingest", time: "0.5m", tool: "Pandas" },
      { name: "2. Data Clean", time: "2.0m", tool: "Vector Regex" },
      { name: "3. LLM Prompt", time: "1.0m", tool: "Prompt API" },
      { name: "4. Exec PDF", time: "0.5m", tool: "Jinja2" },
    ];

    return (
      <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-500 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-300 uppercase">
                AUTOMATED WORKFLOW PIPELINE
              </div>
              <div className="text-sm font-bold text-white">Ingestion → Cleaning → LLM Synthesis</div>
            </div>
            <Sparkles size={18} className="text-blue-300" />
          </div>

          {/* Pipeline flow */}
          <div className="grid grid-cols-4 gap-1.5">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-center">
                <div className="text-[10px] font-bold text-cyan-300">{step.name}</div>
                <div className="mt-1 text-[9px] text-slate-400">{step.tool}</div>
                <div className="mt-1 rounded bg-emerald-500/10 px-1 py-0.5 text-[9px] font-mono font-semibold text-emerald-400">
                  {step.time}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-blue-400/[0.05] p-3 text-center">
            <span className="text-xs font-semibold text-white">Manual Reporting: 60m ➔ Automated: 7m (~88% Time Saved)</span>
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 5. SQL VISUAL (Restaurant Sales - Default / SQL Analytics)
  return (
    <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 opacity-15 blur-3xl" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-amber-300 uppercase">
              SQL RELATIONAL ANALYTICS
            </div>
            <div className="text-sm font-bold text-white">7-Table Relational Schema Architecture</div>
          </div>
          <Database size={18} className="text-amber-300" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["orders", "members", "meals", "restaurants", "categories", "cities"].map((tbl) => (
            <span key={tbl} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-slate-300">
              {tbl}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-3 text-center">
          <div className="text-xs font-bold tracking-[0.16em] text-white uppercase">
            COMPLEX QUERY WORKFLOW
          </div>
          <div className="mt-1 text-[10px] tracking-[0.1em] text-slate-400 font-mono">
            JOINS • WINDOW FUNCTIONS • CTEs • AGGREGATIONS
          </div>
        </div>

        {/* Metrics summary */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map(([label, val], idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
              <div className="text-base font-bold text-white">{val}</div>
              <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
