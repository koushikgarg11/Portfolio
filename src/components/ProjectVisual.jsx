import React, { useState } from "react";
import {
  MapPin,
  TrendingUp,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Bot,
  Layers,
  BarChart,
  PieChart,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  BookOpenCheck,
  Compass,
  Briefcase
} from "lucide-react";

export default function ProjectVisual({ visualType }) {
  // ── 0A. TIER 1 ENGINEERING COLLEGE PLACEMENT DRIVERS VISUALIZER ───────────
  if (visualType === "tier1-colleges") {
    const [activeTab, setActiveTab] = useState("correlation"); // 'correlation', 'ownership', 'accreditation'

    const correlations = [
      { metric: "Placement Rate vs Max CTC", r: "+0.78", status: "Strong Positive Driver", desc: "Recruiter quality & placement volume strongly reinforce each other", color: "text-cyan-300", bar: "w-[78%] bg-cyan-400" },
      { metric: "NIRF Rank vs Placement Rate", r: "-0.55", status: "Moderate Predictor", desc: "Rank explains ~33% variance; brand alone does not dictate outcomes", color: "text-blue-300", bar: "w-[55%] bg-blue-400" },
      { metric: "Batch Intake vs Placement Rate", r: "+0.03", status: "Near Zero Correlation", desc: "Institutional student scale does not drive placement percentage", color: "text-slate-400", bar: "w-[5%] bg-slate-500" },
      { metric: "Alumni Size vs Placement Rate", r: "+0.03", status: "Near Zero Correlation", desc: "Active engagement matters far more than total alumni headcount", color: "text-slate-400", bar: "w-[5%] bg-slate-500" }
    ];

    const ownerships = [
      { type: "Autonomous", avgPlacement: "89.3%", avgMax: "₹48.5 L", edge: "Agile curriculum & flexible hiring", color: "text-emerald-400", bg: "bg-emerald-500/20 border-emerald-500/40" },
      { type: "Government", avgPlacement: "86.6%", avgMax: "₹44.2 L", edge: "Strong public brand & low fee ROI", color: "text-cyan-400", bg: "bg-cyan-500/20 border-cyan-500/40" },
      { type: "Private Tier 1", avgPlacement: "85.2%", avgMax: "₹38.9 L", edge: "High modern infrastructure investment", color: "text-purple-400", bg: "bg-purple-500/20 border-purple-500/40" }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-200">Tier 1 Placement Driver Analytics</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            44 Colleges · 18 States
          </span>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => setActiveTab("correlation")}
            className={`px-2 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
              activeTab === "correlation" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            Correlation (r)
          </button>
          <button
            onClick={() => setActiveTab("ownership")}
            className={`px-2 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
              activeTab === "ownership" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            Ownership Stats
          </button>
          <button
            onClick={() => setActiveTab("accreditation")}
            className={`px-2 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
              activeTab === "accreditation" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            NBA vs NAAC
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "correlation" && (
          <div className="space-y-2">
            {correlations.map((c, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{c.metric}</span>
                  <span className={`font-mono font-bold ${c.color}`}>{c.r}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full rounded-full ${c.bar}`} />
                </div>
                <div className="text-[10px] text-slate-400">{c.desc}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ownership" && (
          <div className="space-y-2">
            {ownerships.map((o, i) => (
              <div key={i} className={`p-2.5 rounded-lg bg-slate-900/80 border ${o.bg} text-xs space-y-1`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" /> {o.type}
                  </span>
                  <span className={`font-mono font-black text-sm ${o.color}`}>{o.avgPlacement}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-300">
                  <span>Avg Max CTC: <strong className="text-white">{o.avgMax}</strong></span>
                  <span className="text-slate-400">{o.edge}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "accreditation" && (
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">Accreditation Placement Delta</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">+2.8% Advantage</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>NBA Programmatic Accredited</span>
                <span className="font-mono text-cyan-300 font-bold">88.4% Avg Placement</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[88%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span>NAAC-Only Accredited</span>
                <span className="font-mono text-slate-300">85.6% Avg Placement</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-slate-500 rounded-full w-[85%]" />
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
              💡 100% of top-10 placement institutions hold active NBA tier credentials.
            </div>
          </div>
        )}

        <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-xs">
          <span className="text-slate-300">Campus-to-Corporate Model</span>
          <span className="text-[10px] font-mono text-cyan-300 font-bold">Analytics Career Connect</span>
        </div>
      </div>
    );
  }

  // ── 0B. DATAYUG BRANCH-WISE SKILL GAP VISUALIZER ──────────────────────────
  if (visualType === "branch-skill-gap") {
    const [selectedBranch, setSelectedBranch] = useState(0);

    const branches = [
      { name: "Civil", gap: 39.5, placement: "60.5%", avgSalary: "₹4.2 L", missing: "BIM / Revit, ETABS, Primavera P6, Drone Surveying", priority: "TIER 1 CRITICAL", color: "text-rose-400", bar: "bg-rose-500" },
      { name: "Mechanical", gap: 34.2, placement: "65.8%", avgSalary: "₹5.1 L", missing: "SolidWorks / CATIA, ANSYS FEA/CFD, GD&T, EV Dynamics", priority: "TIER 1 CRITICAL", color: "text-rose-400", bar: "bg-rose-500" },
      { name: "EEE", gap: 28.1, placement: "72.4%", avgSalary: "₹6.2 L", missing: "MATLAB/Simulink, ETAP, PLC/SCADA, EV BMS Systems", priority: "TIER 2 NEAR-TERM", color: "text-amber-400", bar: "bg-amber-500" },
      { name: "ECE", gap: 24.5, placement: "76.5%", avgSalary: "₹6.8 L", missing: "Verilog / SystemVerilog, Cadence EDA, Embedded RTOS", priority: "TIER 2 NEAR-TERM", color: "text-amber-400", bar: "bg-amber-500" },
      { name: "IT", gap: 15.2, placement: "85.5%", avgSalary: "₹8.5 L", missing: "Full-stack MERN/MEAN, Cloud Native, Automated QA", priority: "TIER 3 REFRESH", color: "text-emerald-400", bar: "bg-emerald-400" },
      { name: "CSE", gap: 11.8, placement: "88.2%", avgSalary: "₹9.8 L", missing: "System Design at scale, Docker/K8s, CI/CD, AWS/GCP", priority: "TIER 3 REFRESH", color: "text-cyan-400", bar: "bg-cyan-400" }
    ];

    const cur = branches[selectedBranch];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-200">DATAYUG Branch Skill Gap Radar</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            28,091 College Records
          </span>
        </div>

        {/* Branch Selector Chips */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
          {branches.map((b, i) => (
            <button
              key={i}
              onClick={() => setSelectedBranch(i)}
              className={`p-1.5 rounded-lg text-center text-xs transition-all ${
                selectedBranch === i
                  ? "bg-cyan-500/20 border border-cyan-400 text-white font-bold"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <div className="text-[11px]">{b.name}</div>
              <div className="text-[9px] font-mono text-slate-400 mt-0.5">{b.gap} Gap</div>
            </button>
          ))}
        </div>

        {/* Branch Metrics Panel */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-white text-sm">{cur.name} Engineering</span>
              <span className="text-[10px] font-mono ml-2 px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                {cur.priority}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-mono uppercase">Skill Gap Score: </span>
              <span className={`font-black font-mono text-sm ${cur.color}`}>{cur.gap} / 100</span>
            </div>
          </div>

          {/* Skill Gap Score Bar */}
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full ${cur.bar} transition-all duration-300`}
              style={{ width: `${cur.gap * 2}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-center pt-1">
            <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">Avg Placement Rate</div>
              <div className="text-sm font-bold text-white mt-0.5">{cur.placement}</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">Avg Graduate CTC</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">{cur.avgSalary}</div>
            </div>
          </div>

          {/* Missing Industry Tools */}
          <div className="pt-1 text-xs">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Recruiter-Demanded Missing Skills:</div>
            <div className="p-2 mt-1 rounded bg-[#060b14] border border-slate-800 text-[11px] text-rose-300 leading-snug">
              ⚠️ {cur.missing}
            </div>
          </div>
        </div>

        {/* Highest Actionable Lever Callout */}
        <div className="p-2.5 rounded-lg bg-emerald-950/25 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">Top Actionable Lever: <strong className="text-emerald-300">Internship Participation</strong></span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
            r = 0.71 Driver
          </span>
        </div>
      </div>
    );
  }

  // ── 1. CHARGEDESERT EV GEOSPATIAL VISUALIZER ──────────────────────────────
  if (visualType === "ev-geospatial") {
    const [selectedHub, setSelectedHub] = useState(0);
    const hubs = [
      { name: "NH-48 Corridor (Delhi-Jaipur)", gapScore: 92, topsis: 0.88, gridDist: "1.2 km", traffic: "44K vpd", priority: "CRITICAL" },
      { name: "NH-44 Node (Delhi-Agra)", gapScore: 84, topsis: 0.81, gridDist: "2.5 km", traffic: "52K vpd", priority: "HIGH" },
      { name: "Western Peripheral Expwy", gapScore: 78, topsis: 0.74, gridDist: "3.1 km", traffic: "38K vpd", priority: "HIGH" },
      { name: "NE-3 Hub (Delhi-Meerut)", gapScore: 65, topsis: 0.63, gridDist: "0.8 km", traffic: "29K vpd", priority: "MODERATE" }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-200">AHP/TOPSIS Corridor Ranking Engine</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            130K+ Geospatial Nodes
          </span>
        </div>

        {/* Hub Selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {hubs.map((hub, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedHub(idx)}
              className={`p-2 rounded-lg text-left text-xs transition-all ${
                selectedHub === idx
                  ? "bg-cyan-500/20 border border-cyan-400 text-white shadow-md shadow-cyan-950/40"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div className="font-semibold truncate text-[11px]">{hub.name.split(" (")[0]}</div>
              <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Score: {hub.gapScore}/100</div>
            </button>
          ))}
        </div>

        {/* Live Corridor Stats Display */}
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">Gap Index</div>
            <div className="text-base font-black text-rose-400 mt-0.5">{hubs[selectedHub].gapScore}%</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">TOPSIS Rank</div>
            <div className="text-base font-black text-cyan-300 mt-0.5">{hubs[selectedHub].topsis}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">Grid Distance</div>
            <div className="text-base font-black text-amber-300 mt-0.5">{hubs[selectedHub].gridDist}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">Traffic Flow</div>
            <div className="text-base font-black text-emerald-400 mt-0.5">{hubs[selectedHub].traffic}</div>
          </div>
        </div>

        {/* Simulated GIS map bar overlay */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-[11px] text-slate-300">
            <span>Spatial Charging Viability Index</span>
            <span className="font-mono text-cyan-300">{hubs[selectedHub].priority} PRIORITY</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${hubs[selectedHub].gapScore}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // ── 2. WATER ATM DOWNTIME ATLAS VISUALIZER ────────────────────────────────
  if (visualType === "wateratm-downtime") {
    const [filterCause, setFilterCause] = useState("all");
    const failureCauses = [
      { cause: "Power Grid Instability", share: 48, color: "bg-rose-500", text: "text-rose-400", remedy: "Install Solar-Hybrid Micro Inverters" },
      { cause: "RO Membrane Choking / Fouling", share: 31, color: "bg-amber-500", text: "text-amber-400", remedy: "Implement Pre-Filter Pressure Sensor Alerts" },
      { cause: "Hardware Vandalism & Physical Damage", share: 12, color: "bg-purple-500", text: "text-purple-400", remedy: "Enforce Tamper Housing & Geofence" },
      { cause: "Dispense Valve & Sensor Failure", share: 9, color: "bg-cyan-500", text: "text-cyan-400", remedy: "Standardize Swappable Cartridge Valves" }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-slate-200">Pan-India Downtime Root-Cause Breakdown</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Govt & Tender Data Scraped
          </span>
        </div>

        {/* Stacked Failure Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>Failure Distribution (%)</span>
            <span>Total Kiosks Modeled: 2,500+</span>
          </div>
          <div className="w-full h-4 rounded-lg bg-slate-800 flex overflow-hidden">
            {failureCauses.map((f, i) => (
              <div
                key={i}
                className={`h-full ${f.color} transition-all`}
                style={{ width: `${f.share}%` }}
                title={`${f.cause}: ${f.share}%`}
              />
            ))}
          </div>
        </div>

        {/* Breakdown List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {failureCauses.map((f, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/90 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200 truncate">{f.cause}</span>
                <span className={`font-mono font-bold ${f.text}`}>{f.share}%</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1 truncate">
                <span className="text-cyan-400 font-medium">Remedy:</span> {f.remedy}
              </div>
            </div>
          ))}
        </div>

        {/* SLA & MTTR Banner */}
        <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">Vendor SLA Breach Rate: <strong className="text-rose-400">4.2 Day Mean Lag</strong></span>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
            Target: 24h MTTR
          </span>
        </div>
      </div>
    );
  }

  // ── 3. AI-ASSISTED SALES REPORT AUTOMATION VISUALIZER ──────────────────────
  if (visualType === "ai-sales-etl") {
    const [selectedQuery, setSelectedQuery] = useState(0);
    const queries = [
      {
        q: "Which product categories saw margin erosion >5% this quarter?",
        response: "Category 'Industrial Fasteners' suffered 6.2% margin contraction due to raw steel cost escalation (+12%), offset partially by volume (+8%).",
        sqlEquivalent: "SELECT category, (margin_curr - margin_prev) AS delta FROM sales_kpi WHERE delta < -0.05",
        timeSaved: "35 mins"
      },
      {
        q: "Top 3 regional branches exceeding quarterly revenue targets",
        response: "1. North Zone (118% quota, +₹42L), 2. West Hub (109% quota, +₹28L), 3. South Delta (104% quota, +₹14L).",
        sqlEquivalent: "SELECT zone, SUM(rev) / SUM(quota) AS perf FROM zone_sales GROUP BY zone ORDER BY perf DESC LIMIT 3",
        timeSaved: "25 mins"
      }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono font-bold text-slate-200">LLM Prompt Engine & Semantic Query Console</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
            ~40% Reporting Time Saved
          </span>
        </div>

        {/* Query selection buttons */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Interactive Semantic Prompts:</div>
          <div className="flex flex-col gap-1.5">
            {queries.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedQuery(idx)}
                className={`p-2 rounded-lg text-left text-xs transition-all flex items-center justify-between ${
                  selectedQuery === idx
                    ? "bg-purple-500/20 border border-purple-400 text-white"
                    : "bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <span className="truncate flex-1 font-medium">💬 "{item.q}"</span>
                <span className="text-[10px] font-mono text-purple-300 shrink-0 ml-2">-{item.timeSaved}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Parsed Response Output */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Auto-Generated Executive Summary:
            </span>
            <span className="text-emerald-400">Confidence: 99.2%</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {queries[selectedQuery].response}
          </p>
          <div className="p-2 rounded bg-[#060b14] border border-slate-800/80 font-mono text-[10px] text-slate-400 overflow-x-auto">
            <span className="text-purple-400">Generated SQL: </span>
            {queries[selectedQuery].sqlEquivalent}
          </div>
        </div>
      </div>
    );
  }

  // ── 4. TAIWAL ARIMA & INVENTORY OPTIMIZATION VISUALIZER ────────────────────
  if (visualType === "taiwal-arima") {
    const [viewMode, setViewMode] = useState("forecast"); // 'forecast' or 'pareto'

    const forecastData = [
      { week: "W1", actual: 420, forecast: 415 },
      { week: "W2", actual: 460, forecast: 450 },
      { week: "W3", actual: 490, forecast: 485 },
      { week: "W4", actual: 430, forecast: 440 },
      { week: "W5", actual: 510, forecast: 505 },
      { week: "W6", actual: 580, forecast: 565 },
      { week: "W7", actual: 610, forecast: 595 },
      { week: "W8 (Proj)", actual: null, forecast: 640 }
    ];

    const paretoClasses = [
      { cls: "Class A", skuShare: "20% SKUs", revShare: "75% Revenue", policy: "Weekly JIT Reorders, Strict Safety Stock", color: "text-emerald-400", bg: "bg-emerald-500" },
      { cls: "Class B", skuShare: "30% SKUs", revShare: "18% Revenue", policy: "Bi-Weekly Batch Orders", color: "text-cyan-400", bg: "bg-cyan-500" },
      { cls: "Class C", skuShare: "50% SKUs", revShare: "7% Revenue", policy: "Quarterly Bulk Orders (Volume Discount)", color: "text-slate-400", bg: "bg-slate-500" }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-slate-200">
              {viewMode === "forecast" ? "ARIMA Time-Series Actual vs Forecast" : "ABC / Pareto 80/20 SKU Hierarchy"}
            </span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setViewMode("forecast")}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                viewMode === "forecast" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              ARIMA
            </button>
            <button
              onClick={() => setViewMode("pareto")}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                viewMode === "pareto" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              ABC Pareto
            </button>
          </div>
        </div>

        {viewMode === "forecast" ? (
          <div className="space-y-2.5">
            {/* Visual Bar Comparison */}
            <div className="grid grid-cols-8 gap-1.5 items-end h-28 pt-4 px-2 bg-slate-900/60 rounded-lg border border-slate-800">
              {forecastData.map((d, i) => {
                const maxVal = 650;
                const actH = d.actual ? (d.actual / maxVal) * 100 : 0;
                const fcH = (d.forecast / maxVal) * 100;
                return (
                  <div key={i} className="flex flex-col items-center h-full justify-end group">
                    <div className="flex items-end gap-0.5 w-full justify-center h-20">
                      {d.actual && (
                        <div
                          className="w-2.5 sm:w-3 bg-cyan-400 rounded-t transition-all"
                          style={{ height: `${actH}%` }}
                          title={`Actual: ${d.actual}`}
                        />
                      )}
                      <div
                        className="w-2.5 sm:w-3 bg-emerald-400/90 rounded-t border-t border-emerald-300 transition-all"
                        style={{ height: `${fcH}%` }}
                        title={`Forecast: ${d.forecast}`}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1 truncate">{d.week}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono px-1">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-cyan-400">
                  <span className="w-2 h-2 rounded-sm bg-cyan-400 inline-block" /> Actual Sales
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-sm bg-emerald-400 inline-block" /> ARIMA Forecast
                </span>
              </div>
              <span className="text-slate-400">+15–20% Accuracy</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {paretoClasses.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold">
                  <span className={item.color}>{item.cls} ({item.skuShare})</span>
                  <span className="font-mono text-white">{item.revShare}</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  <span className="text-slate-400">Procurement Policy:</span> {item.policy}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-xs">
          <span className="text-slate-300">Client-Adopted Inventory Strategy</span>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">Taiwal Enterprises</span>
        </div>
      </div>
    );
  }

  // ── 5. MARKET RESEARCH COMPETITIVE BENCHMARKING VISUALIZER ────────────────
  if (visualType === "market-research") {
    const metrics = [
      { dimension: "Price / Value Ratio", hmc: 88, compA: 72, compB: 64 },
      { dimension: "Feature Automation", hmc: 82, compA: 85, compB: 60 },
      { dimension: "Deployment Agility", hmc: 90, compA: 68, compB: 75 },
      { dimension: "Customer Support NPS", hmc: 85, compA: 78, compB: 70 }
    ];

    return (
      <div className="rounded-xl bg-[#060b14] p-4 border border-slate-800 text-left space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <BarChart className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-bold text-slate-200">HMC Group Competitive Benchmarking</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
            Business.io Society, IITM
          </span>
        </div>

        {/* Feature Bars */}
        <div className="space-y-2.5 pt-1">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-300">
                <span className="font-medium">{m.dimension}</span>
                <span className="font-mono text-cyan-300">HMC ({m.hmc} pts) vs Peers</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                <div className="h-full bg-cyan-400 rounded-l" style={{ width: `${m.hmc}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div className="text-slate-300">
            Strategic Priority: <strong className="text-white">Mid-Tier Differentiation & Automation Packaging</strong>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
            2025 Study
          </span>
        </div>
      </div>
    );
  }

  return null;
}
