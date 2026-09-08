import React, { useState, useEffect } from "react";
import { profile } from "../data/portfolioData";
import { Menu, X, FileDown, ExternalLink, BarChart3, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Live Simulator", href: "#calculator" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b14]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-2xl shadow-cyan-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 flex items-center justify-center text-[#060b14] font-black text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <BarChart3 className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center">
              Koushik<span className="text-cyan-400">.</span>Garg
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Data Analyst
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.links.streamlitApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800/80 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/15 hover:border-cyan-400 transition-all shadow-sm"
              title="View Live Interactive Streamlit Cloud App"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Streamlit App
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>

            <a
              href={profile.links.resume}
              download="Koushik_Garg_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4" />
              Resume PDF
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={profile.links.resume}
              download="Koushik_Garg_Resume.pdf"
              className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070e1b]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={profile.links.streamlitApp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-xl bg-slate-900 text-cyan-300 border border-cyan-500/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Launch Streamlit Companion App
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={profile.links.resume}
              download="Koushik_Garg_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
