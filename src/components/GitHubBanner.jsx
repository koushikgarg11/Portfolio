import React from 'react';
import { Github, ArrowUpRight, Code, FileCode2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function GitHubBanner() {
  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 relative">
      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.08] via-blue-500/[0.04] to-violet-500/[0.08] p-8 text-center sm:p-12 shadow-2xl backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
          <Github size={28} />
        </div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Explore my code & notebooks on GitHub
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
          Inspect Jupyter notebooks, clean SQL scripts, machine learning training pipelines, and dataset preprocessing scripts for all listed projects.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 hover:scale-105 active:scale-95 shadow-lg"
          >
            <span>Visit GitHub Profile</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
