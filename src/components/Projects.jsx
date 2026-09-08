import React from "react";
import { projects } from "../data/portfolioData";
import ProjectVisual from "./ProjectVisual";
import {
  ExternalLink,
  Github,
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Data Science & Analytics Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Production-grade systems, spatial intelligence platforms, ARIMA demand forecasting models, and automated reporting pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#091122]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Metadata & Project Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Category Pill & Year */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {project.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Execution Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.work.slice(0, 3).map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Key Metrics Stats */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {project.stats.map(([lbl, val], i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-mono truncate">{lbl}</div>
                        <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 truncate">{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-blue-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                        <span>Launch App</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-950" />
                      </a>
                    )}

                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 text-xs font-semibold transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>

                </div>

                {/* Right Side: Interactive Project Visualizer Widget */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#060b14]/90 border border-slate-800 p-2 shadow-inner">
                    <ProjectVisual visualType={project.visualType} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
