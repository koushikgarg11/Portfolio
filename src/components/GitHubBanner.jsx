import React from "react";
import { Github, Sparkles, ExternalLink, Star } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function GitHubBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-950/60 via-[#071124] to-indigo-950/60 border-b border-cyan-500/20 py-2 px-4 text-xs font-medium text-slate-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="truncate">
            <strong className="text-white">Dual-Stack Data Analyst Portfolio:</strong> Fast React + Vite UI & Python Streamlit Cloud App.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Star on GitHub</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
