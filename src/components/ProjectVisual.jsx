import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Activity, 
  Droplets, 
  CreditCard, 
  TrendingUp, 
  School, 
  AlertTriangle,
  CheckCircle2,
  Zap,
  Gauge
} from 'lucide-react';

export default function ProjectVisual({ project }) {
  const { visualType, stats } = project;

  // 1. SKILL GAP VISUAL (Which Engineering Branches Face the Biggest Skill Gap?)
  if (visualType === 'skillgap') {
    const branches = [
      { name: "Civil Eng.", gap: 71, level: "Critical Gap", color: "from-rose-500 to-red-600" },
      { name: "Mechanical", gap: 68, level: "High Deficit", color: "from-amber-500 to-orange-600" },
      { name: "Chemical", gap: 54, level: "Moderate Gap", color: "from-yellow-400 to-amber-500" },
      { name: "ECE / EE", gap: 36, level: "Emerging Tools", color: "from-blue-400 to-cyan-500" },
      { name: "Computer Science", gap: 22, level: "Aligned", color: "from-emerald-400 to-teal-500" },
    ];

    return (
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-rose-500 via-amber-500 to-cyan-400 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-rose-300 uppercase">
                CURRICULUM VS INDUSTRY BENCHMARK
              </div>
              <div className="text-sm font-bold text-white">Skill Deficit Rate by Engineering Branch</div>
            </div>
            <GraduationCap size={18} className="text-rose-300" />
          </div>

          {/* Horizontal Branch Comparison Bars */}
          <div className="space-y-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            {branches.map((b) => (
              <div key={b.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-300">{b.name}</span>
                  <span className="font-mono text-[11px] font-bold text-slate-200">
                    {b.gap}% <span className="text-[9px] font-normal text-slate-400">({b.level})</span>
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${b.color} transition-all duration-500`}
                    style={{ width: `${b.gap}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-sm sm:text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. WATER ATM TELEMETRY VISUAL (Smart Water ATM: IoT Telemetry & Consumption)
  if (visualType === 'wateratm-telemetry') {
    return (
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-400 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                IOT SENSOR TELEMETRY STREAM
              </div>
              <div className="text-sm font-bold text-white">Live Kiosk Dispensing & Water Quality Node</div>
            </div>
            <Droplets size={18} className="text-cyan-300" />
          </div>

          {/* Realtime Sensor Diagnostic Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase font-semibold text-cyan-300">
                <Gauge size={13} />
                <span>Today's Volume</span>
              </div>
              <div className="mt-1 font-mono text-xl font-bold text-white">1,420 <span className="text-xs font-normal text-cyan-200">Liters</span></div>
              <div className="text-[9px] text-emerald-400 font-medium">● Dispensing Normal</div>
            </div>

            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase font-semibold text-emerald-300">
                <Activity size={13} />
                <span>Purity (TDS Level)</span>
              </div>
              <div className="mt-1 font-mono text-xl font-bold text-white">142 <span className="text-xs font-normal text-emerald-200">ppm</span></div>
              <div className="text-[9px] text-emerald-400 font-medium">✓ Optimal WHO Standard</div>
            </div>
          </div>

          {/* Telemetry Hardware Pulse Indicator */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" /> 25/25 Kiosks Active
              </span>
              <span className="font-mono text-cyan-300 text-[11px]">Flow: 8.4 L/min</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" style={{ width: '94.2%' }} />
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-sm sm:text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. WATER ATM DEMAND & RFID VISUAL (Smart Water ATM: RFID & Demand Prediction)
  if (visualType === 'wateratm-demand') {
    return (
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-15 blur-3xl" />
        
        <div className="relative space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                BIMODAL DEMAND & PAYMENT FLOW
              </div>
              <div className="text-sm font-bold text-white">24h Hourly Consumption & RFID Share</div>
            </div>
            <CreditCard size={18} className="text-indigo-300" />
          </div>

          {/* SVG Bimodal Surge Curve */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Morning Surge (6–9 AM)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-violet-400" /> Evening Surge (5–8 PM)
              </span>
            </div>

            <svg viewBox="0 0 320 80" className="w-full h-20 overflow-visible">
              <defs>
                <linearGradient id="surgeFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Bimodal Curve Fill */}
              <polygon
                points="0,75 30,72 60,40 80,18 100,22 130,55 160,65 190,58 220,25 245,15 270,30 295,65 320,75"
                fill="url(#surgeFill)"
              />

              {/* Peak Wave Outline */}
              <polyline
                fill="none"
                stroke="#818cf8"
                strokeWidth="2.5"
                points="0,75 30,72 60,40 80,18 100,22 130,55 160,65 190,58 220,25 245,15 270,30 295,65 320,75"
              />

              {/* Peak Markers */}
              <circle cx="80" cy="18" r="4" fill="#22d3ee" className="animate-pulse" />
              <circle cx="245" cy="15" r="4" fill="#a78bfa" className="animate-pulse" />
            </svg>
          </div>

          {/* Payment Method Distribution */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Payment Share:</span>
            <div className="flex items-center gap-3">
              <span className="text-cyan-300 font-mono font-semibold">💳 RFID Cards: 76%</span>
              <span className="text-slate-400 font-mono">🪙 Coin: 24%</span>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map(([label, val], idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
                <div className="text-sm sm:text-base font-bold text-white">{val}</div>
                <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. COLLEGE DASHBOARD VISUAL (College Performance & Academic Intelligence Dashboard)
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-5">
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-emerald-400 opacity-15 blur-3xl" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-300 uppercase">
              INSTITUTIONAL ACADEMIC ANALYTICS
            </div>
            <div className="text-sm font-bold text-white">Department GPA & Retention Matrix</div>
          </div>
          <School size={18} className="text-blue-300" />
        </div>

        {/* Academic Performance Highlights */}
        <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Computer Science Dept.</span>
            <span className="font-mono text-emerald-400 font-bold">8.42 Avg GPA</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Electronics & Comm.</span>
            <span className="font-mono text-cyan-300 font-bold">7.88 Avg GPA</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Mechanical Engineering</span>
            <span className="font-mono text-amber-300 font-bold">7.52 Avg GPA</span>
          </div>
        </div>

        {/* Attendance vs Performance Alert Card */}
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <CheckCircle2 size={14} className="shrink-0" />
            <span>Attendance &gt; 75%: 8.2 GPA</span>
          </div>
          <div className="flex items-center gap-1.5 text-rose-300 font-medium">
            <AlertTriangle size={14} className="shrink-0" />
            <span>&lt; 75%: 6.4 GPA</span>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map(([label, val], idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 text-center">
              <div className="text-sm sm:text-base font-bold text-white">{val}</div>
              <div className="mt-0.5 text-[9px] leading-3 text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

