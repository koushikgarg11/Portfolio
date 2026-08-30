import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, BarChart2, FileText } from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#060b14]/85 py-3 backdrop-blur-xl shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white transition hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <BarChart2 size={18} strokeWidth={2.5} />
          </div>
          <span>
            {personalInfo.name}
            <span className="text-cyan-300">.</span>
            {personalInfo.lastName}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white lg:text-sm lg:px-4 lg:py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/20 hover:scale-105"
          >
            Get In Touch
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-white/20 hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#0b1220]/95 p-3 backdrop-blur-2xl shadow-2xl md:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => scrollTo('contact')}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-2.5 text-sm font-bold text-slate-950"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
