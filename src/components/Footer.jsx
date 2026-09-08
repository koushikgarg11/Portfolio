import React from "react";
import { profile } from "../data/portfolioData";
import { BarChart3, Linkedin, Github, Mail, Phone, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#03060d] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Bio */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-slate-950 font-black">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-100 text-sm">
                Koushik Garg <span className="text-cyan-400">·</span> Data Analyst
              </div>
              <div className="text-[11px] text-slate-500">
                IIT Madras (Data Science) · DU B.Com (Hons 81.6%)
              </div>
            </div>
          </div>

          {/* Nav Quicklinks */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#calculator" className="hover:text-cyan-300 transition-colors">Simulator</a>
            <a href="#credentials" className="hover:text-cyan-300 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <div>
            © {new Date().getFullYear()} Koushik Garg. Built with React, Tailwind CSS, Vite & Streamlit Companion.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed for High-Conviction Analytics</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
