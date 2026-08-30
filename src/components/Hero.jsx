import React from 'react';
import { ArrowDown, Mail, Download, Linkedin, Github, Phone, Sparkles, TrendingUp, Database, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="grid-bg relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        {/* Left Column: Text & CTAs */}
        <div>
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span>{personalInfo.title} · {personalInfo.location}</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] text-white sm:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {personalInfo.name}.
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-slate-200 sm:text-3xl lg:text-4xl">
            Data Analyst turning{' '}
            <span className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-8">
              raw data
            </span>{' '}
            into actionable insights.
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400 sm:text-base">
            I work with <strong className="text-slate-200">Python, SQL, Power BI, Excel, and Machine Learning</strong> to clean complex datasets, build predictive time-series models, design interactive dashboards, and deliver data-backed business strategy.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
            >
              <span>View My Projects</span>
              <ArrowDown size={16} />
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Data%20Analyst%20Opportunity%20-%20Koushik%20Garg`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
            >
              <Mail size={16} className="text-cyan-300" />
              <span>Email Me</span>
            </a>

            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/5 px-5 py-3.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              <Sparkles size={16} />
              <span>Explore Profile</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-4 text-slate-400">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Phone size={18} />
            </a>
            <span className="text-xs text-slate-500 font-mono pl-2">koushikgarg11@gmail.com</span>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Glowing backdrop halo */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl">
            {/* Visual Graphic Representation of Data Analyst Workspace */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#0b1424] to-[#060b14] p-6 border border-white/5">
              {/* Header inside graphic card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">analytics_engine.py</span>
                </div>
                <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                  LIVE
                </span>
              </div>

              {/* Dynamic Code & Model Visualization */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="rounded-lg bg-black/40 p-3 text-slate-300 border border-white/5">
                  <p className="text-slate-500"># Skill Gap & IoT Telemetry Pipeline</p>
                  <p className="text-cyan-300">df_telemetry = pd.read_sql(query, conn)</p>
                  <p className="text-violet-300">gap_score = anova_test(curriculum, industry)</p>
                  <p className="text-emerald-400 mt-1">✓ Network Uptime: 94.2% | Nodes: 25</p>
                </div>

                {/* Simulated Mini Chart Bars */}
                <div className="rounded-lg bg-white/[0.02] p-3 border border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-sans font-medium">
                    <span>Dispensing & Demand Curve</span>
                    <span className="text-cyan-300">Live Telemetry</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[45, 60, 52, 78, 65, 88, 92, 84, 96, 110, 105, 118].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          style={{ height: `${(h / 120) * 100}%` }}
                          className={`w-full rounded-t-sm transition-all ${
                            i >= 8
                              ? 'bg-gradient-to-t from-cyan-500 to-cyan-300'
                              : 'bg-slate-600'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick metrics grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 text-center font-sans">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Top Unstop Rank</span>
                    <span className="text-sm font-bold text-amber-300">Top 1%</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 text-center font-sans">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Student Records</span>
                    <span className="text-sm font-bold text-emerald-400">4,500+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom floating focus tag */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3.5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                    CURRENT FOCUS
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-white">
                    {personalInfo.currentFocus}
                  </div>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300 border border-cyan-400/20">
                  <TrendingUp size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
