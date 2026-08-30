import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Prepare mailto link as direct fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Job Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="border-t border-white/10 px-5 py-24 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-400" />
              GET IN TOUCH
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's connect.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-400">
              I am actively open to <strong className="text-white">Data Analyst roles, internships, and analytics consulting</strong>. If you are looking for someone who combines business sense with statistical modeling and Python automation, reach out!
            </p>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-3.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.04] hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex-1 truncate">
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Email Address</div>
                  <div className="font-semibold text-slate-200">{personalInfo.email}</div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.04] hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div className="flex-1 truncate">
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">LinkedIn Profile</div>
                  <div className="font-semibold text-slate-200">linkedin.com/in/koushik-garg</div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.04] hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300 group-hover:scale-105 transition-transform">
                  <Github size={18} />
                </div>
                <div className="flex-1 truncate">
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">GitHub Profile</div>
                  <div className="font-semibold text-slate-200">github.com/koushikgarg11</div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/[0.04] hover:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex-1 truncate">
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Phone / WhatsApp</div>
                  <div className="font-semibold text-slate-200">{personalInfo.phone}</div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form & Opportunities Card */}
          <div className="space-y-6">
            {/* Quick Action Opportunity Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 shadow-xl">
              <div className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                OPEN TO OPPORTUNITIES
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                Fast-track your outreach.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                For urgent hiring requirements or direct chat, click below to launch an email or LinkedIn message directly.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=Data%20Analyst%20Role%20Inquiry`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-cyan-400/20"
                >
                  <Mail size={16} />
                  <span>Email Me Directly</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-white hover:bg-white/10"
                >
                  <Linkedin size={16} className="text-cyan-300" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Interactive Message Form */}
            <div className="rounded-3xl border border-white/10 bg-[#0b1220] p-6 sm:p-8 shadow-xl">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-300" />
                <span>Send a Direct Message</span>
              </h4>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
                  >
                    <option value="Job Opportunity">Full-Time / Junior Data Analyst Role</option>
                    <option value="Internship">Data Analyst Internship</option>
                    <option value="Freelance Project">Freelance / Consulting Project</option>
                    <option value="General Inquiry">General Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Your Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell me about the role, team, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
                  />
                </div>

                {error && (
                  <p className="text-xs text-rose-400 font-medium">{error}</p>
                )}

                {submitted && (
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-300">
                    <CheckCircle2 size={16} />
                    <span>Opening your mail client with the pre-filled inquiry...</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  <Send size={14} />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
