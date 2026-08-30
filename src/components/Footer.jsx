import React from 'react';
import { ArrowUp, BarChart2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050911] px-5 py-10 sm:px-8 relative">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-xs text-slate-500 sm:flex-row">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950">
            <BarChart2 size={13} strokeWidth={2.5} />
          </div>
          <span>
            © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. Built with precision & data.
          </span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition hover:text-cyan-300"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 transition hover:text-cyan-300"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
