import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Github, FileSpreadsheet, ShieldAlert, TrendingUp, Sparkles, Database } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const sections = [
    { title: "Business Problem", content: project.case?.problem },
    { title: "Dataset Description", content: project.case?.dataset },
    { title: "Data Cleaning & Preprocessing", content: project.case?.cleaning },
    { title: "Analytical Methodology", content: project.case?.analysis },
    { title: "Visualization & Dashboarding", content: project.case?.visualization },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative mx-auto my-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl sm:p-8 z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            COMPREHENSIVE CASE STUDY
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {project.subtitle}
          </p>

          {/* Tools Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-xs font-medium text-cyan-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Structured Sections */}
        <div className="mt-8 space-y-6 divide-y divide-white/5">
          {sections.map(({ title, content }) => (
            <div key={title} className="pt-5 first:pt-0">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 flex items-center gap-2">
                <span className="h-1 w-3 bg-cyan-400 rounded-full" />
                {title}
              </h4>
              <p className="text-sm leading-7 text-slate-300">
                {content}
              </p>
            </div>
          ))}

          {/* Key Findings */}
          <div className="pt-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 flex items-center gap-2">
              <span className="h-1 w-3 bg-cyan-400 rounded-full" />
              Key Data-Backed Findings
            </h4>
            <ul className="space-y-2.5">
              {project.work.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-cyan-300" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Recommendations */}
          <div className="pt-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 flex items-center gap-2">
              <span className="h-1 w-3 bg-cyan-400 rounded-full" />
              Business Recommendations & Strategic Impact
            </h4>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-4 text-sm leading-7 text-slate-200">
              {project.case?.recommendations}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
            >
              <Github size={15} />
              <span>View Repository on GitHub</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
