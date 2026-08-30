import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  BarChart, 
  PieChart, 
  BrainCircuit, 
  Database, 
  Briefcase, 
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';

const categoryIcons = {
  analytics: Code2,
  bi: PieChart,
  ml: BrainCircuit,
  'data-eng': Database,
  business: Briefcase,
  ai: Sparkles,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="border-t border-white/10 bg-[#080f1a] px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-400" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools I use to turn data into decisions.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            A comprehensive suite of analytical, statistical, machine learning, and business intelligence competencies honed through client engagements, simulations, and real-world datasets.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-cyan-300 text-slate-950 shadow-md shadow-cyan-300/20'
                : 'border border-white/10 bg-white/[0.02] text-slate-400 hover:border-cyan-300/30 hover:text-white'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, cat) => acc + cat.items.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === cat.category
                  ? 'bg-cyan-300 text-slate-950 shadow-md shadow-cyan-300/20'
                : 'border border-white/10 bg-white/[0.02] text-slate-400 hover:border-cyan-300/30 hover:text-white'
              }`}
            >
              {cat.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Layers;
            return (
              <div
                key={cat.title}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04] shadow-lg"
              >
                {/* Top Row: Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${cat.accent} p-[1px] shadow-sm`}>
                    <div className="rounded-2xl bg-[#0b1220] p-3 text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300 transition group-hover:border-cyan-300/20 group-hover:text-slate-100 group-hover:bg-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
