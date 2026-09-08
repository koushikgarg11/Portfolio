import React, { useEffect } from "react";
import {
  X,
  BookOpen,
  Github,
  CheckCircle2,
  AlertCircle,
  Database,
  LineChart,
  Lightbulb,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#070e1c] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#091122] border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 uppercase">
                {project.tag}
              </span>
              <span className="text-xs font-mono text-slate-500">{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Key Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.stats.map(([label, val], idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase">{label}</div>
                <div className="text-base font-bold text-cyan-300 mt-0.5">{val}</div>
              </div>
            ))}
          </div>

          {/* Section 1: Business Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <h3>1. Business & Operational Problem</h3>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
              {project.case.problem}
            </div>
          </div>

          {/* Section 2: Dataset & Data Preparation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
              <Database className="w-5 h-5 text-cyan-400 shrink-0" />
              <h3>2. Dataset Architecture & ETL Cleaning</h3>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div>
                <strong className="text-white">Dataset Scope: </strong>
                <span>{project.case.dataset}</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <strong className="text-white">ETL & Data Hygiene: </strong>
                <span>{project.case.cleaning}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Analytical Methodology & Modeling */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-base">
              <LineChart className="w-5 h-5 text-blue-400 shrink-0" />
              <h3>3. Quantitative Analysis & Modeling Methodology</h3>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
              {project.case.analysis}
            </div>
          </div>

          {/* Section 4: Visualizations & Dashboards */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-base">
              <BookOpen className="w-5 h-5 text-purple-400 shrink-0" />
              <h3>4. Visual Analytics & Executive Reporting</h3>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
              {project.case.visualization}
            </div>
          </div>

          {/* Section 5: Strategic Recommendations & ROI */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3>5. Business Impact & Strategic Recommendations</h3>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-slate-200">
              {project.case.recommendations}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used:</div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#091122] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-blue-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Launch Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all border border-slate-700"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors border border-slate-700"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
