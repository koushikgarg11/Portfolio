import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, MapPin, GraduationCap, Target, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  const profileDetails = [
    { label: "Role", value: personalInfo.title, icon: User },
    { label: "Education", value: "Diploma in Data Science (IIT Madras, Online) · B.Com (Hons) DU", icon: GraduationCap },
    { label: "Location", value: personalInfo.location, icon: MapPin },
    { label: "Focus Areas", value: "Time-Series Forecasting, ML Threat Detection, BI", icon: Target },
    { label: "Core Tools", value: "Python · SQL · Power BI · Tableau · Excel", icon: Cpu }
  ];

  return (
    <section id="about" className="border-t border-white/10 px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-400" />
            ABOUT ME
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            I enjoy finding the story inside messy data.
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] items-start">
          {/* Left Column: Narrative Story */}
          <div className="space-y-5 text-[15px] leading-7 text-slate-400">
            <p>
              I am an analytical problem-solver currently pursuing a <strong className="text-white">Diploma in Data Science from IIT Madras</strong> with a strong foundation in <strong className="text-white">B.Com (Honours) from the University of Delhi (81.6%)</strong>. This blend gives me both statistical depth and sharp business intuition.
            </p>
            <p>
              My hands-on work bridges the gap between raw data engineering and executive decision-making. Whether implementing <strong className="text-cyan-300">ARIMA models</strong> for B2B demand forecasting at Taiwal Enterprises, training <strong className="text-cyan-300">Random Forest classifiers</strong> on 100K+ cybersecurity records at Unified Mentor, or building dynamic <strong className="text-cyan-300">Power BI & Tableau dashboards</strong>, I focus on measurable business ROI.
            </p>
            <p>
              I especially enjoy the investigative side of data: isolating hidden outliers, engineering domain-specific features, automating repetitive ETL pipelines, and synthesizing complex numbers into crisp, boardroom-ready narratives.
            </p>

            {/* Core Values / Strengths */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Statistical Rigour & Model Validation",
                "Automated Python & SQL Pipelines",
                "Executive KPI & Dashboard Design",
                "Quantified Business Impact Focus"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Structured Profile Card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-7 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                CANDIDATE PROFILE
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                AVAILABLE FOR HIRE
              </span>
            </div>

            <div className="space-y-4">
              {profileDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-3.5 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 text-sm text-slate-400 shrink-0">
                      <Icon size={15} className="text-cyan-300/80" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-right text-xs font-medium text-slate-200 sm:text-sm">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Quick action button inside card */}
            <div className="mt-7 pt-4 border-t border-white/10">
              <a
                href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20-%20Data%20Analyst`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Schedule an Interview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
