import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, Building, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-400" />
            WORK EXPERIENCE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Practical industry engagements.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            Proven track record of turning business requirements into predictive models, automated ETL workflows, and adopted executive dashboards.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.04] shadow-lg"
            >
              {/* Header inside card */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar size={13} className="text-slate-500" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="mt-0.5 text-sm font-semibold text-cyan-300/90 flex items-center gap-1.5">
                    <Building size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-5">
                <ul className="space-y-3">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
