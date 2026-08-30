import React from 'react';
import { education, certifications, competitions } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, CheckCircle, ExternalLink, BookOpen } from 'lucide-react';

export default function EducationCerts() {
  return (
    <section id="education" className="border-t border-white/10 bg-[#080f1a] px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl space-y-20">
        
        {/* 1. EDUCATION */}
        <div>
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-400" />
              ACADEMIC BACKGROUND
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Education & Foundation
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04] shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-cyan-300/90">
                    {edu.institution}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 font-mono">
                    {edu.period}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-slate-400">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CERTIFICATIONS */}
        <div>
          <div className="mb-8 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-violet-300">
              <span className="h-px w-8 bg-violet-400" />
              VERIFIED CREDENTIALS
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Certifications
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/30 hover:bg-white/[0.035]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-violet-400/10 p-2.5 text-violet-300 group-hover:scale-105 transition-transform">
                    <Award size={18} />
                  </div>
                  <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-0.5 text-[10px] font-semibold text-violet-300">
                    {cert.tag}
                  </span>
                </div>
                <h4 className="mt-4 text-sm font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                  {cert.name}
                </h4>
                <p className="mt-1.5 text-xs text-slate-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COMPETITIONS & SIMULATIONS */}
        <div>
          <div className="mb-8 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-amber-300">
              <span className="h-px w-8 bg-amber-400" />
              NATIONAL RANKINGS & SIMULATIONS
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Competitions & Practical Simulations
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-amber-400/30 hover:bg-white/[0.035]"
              >
                <div className="text-xs font-bold text-amber-300">
                  {comp.badge}
                </div>
                <h4 className="mt-2 text-sm font-bold text-white">
                  {comp.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
