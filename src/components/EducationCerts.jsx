import React from "react";
import { education, certifications, competitions } from "../data/portfolioData";
import { GraduationCap, Award, Trophy, CheckCircle, ShieldCheck } from "lucide-react";

export default function EducationCerts() {
  return (
    <section id="credentials" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Academic & Industry Standing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Education, Certifications & Competitions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal quantitative degrees, verified industry certifications, and national competitive case rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Formal Education</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0">
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {edu.institution}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Award className="w-4 h-4" />
              </div>
              <span>Verified Industry Certifications</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#091122]/90 border border-slate-800/90 backdrop-blur-xl space-y-3.5">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200">
                        {cert.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 shrink-0">
                    {cert.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Wide Card: Competitions & Simulations */}
        <div className="mt-12 text-left">
          <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Trophy className="w-4 h-4" />
            </div>
            <span>Competitions & Enterprise Simulations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-amber-500/30 backdrop-blur-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block text-[11px] font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full mb-2">
                    {comp.badge}
                  </div>
                  <h3 className="text-sm font-bold text-white mt-1">{comp.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-amber-400" /> National / Global
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
