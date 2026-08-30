import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectVisual from './ProjectVisual';
import CaseStudyModal from './CaseStudyModal';
import { ArrowUpRight, Github, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section id="projects" className="border-t border-white/10 px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-400" />
            FEATURED PROJECTS
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Analytics in action.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            End-to-end analytical solutions and production-grade architectures — spanning higher education workforce skill gap modeling, Smart Water ATM IoT sensor telemetry, financial transaction & demand prediction, and institutional academic intelligence dashboards.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.035] via-white/[0.015] to-transparent p-1 transition-all duration-300 hover:border-cyan-300/30 hover:shadow-2xl shadow-lg"
            >
              <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] items-center">
                {/* Left: Text & Info */}
                <div className="p-6 sm:p-8">
                  {/* Category Tag */}
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {project.tag}
                  </div>

                  {/* Project Title */}
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-[14px] leading-7 text-slate-300">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2">
                    {project.work.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-5">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-200 hover:scale-105 active:scale-95 shadow-md shadow-cyan-300/10"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                      >
                        <Github size={15} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Visual Preview */}
                <div className="p-4 sm:p-6 lg:p-7">
                  <ProjectVisual project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal rendering */}
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      </div>
    </section>
  );
}
