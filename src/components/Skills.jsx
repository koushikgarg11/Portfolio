import React from "react";
import { skills } from "../data/portfolioData";
import { Code2, BrainCircuit, BarChart3, Bot, CheckCircle } from "lucide-react";

export default function Skills() {
  const categoryIcons = {
    technical: Code2,
    mlAnalytics: BrainCircuit,
    businessBI: BarChart3,
    aiAutomation: Bot
  };

  return (
    <section id="skills" className="py-20 relative bg-[#040811]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Tools & Methodologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive toolkit spanning relational querying, statistical modeling, machine learning, and enterprise business intelligence.
          </p>
        </div>

        {/* 4 Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([key, group]) => {
            const IconComponent = categoryIcons[key] || Code2;
            return (
              <div
                key={key}
                className="p-6 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400/80">
                        {group.items.length} Core Competencies
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-200 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PRODUCTION READY</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Hands-on Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
