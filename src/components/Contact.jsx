import React, { useState } from "react";
import { profile } from "../data/portfolioData";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Data Analyst Opportunity",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#040811]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Open to full-time Data Analyst roles, data engineering / BI opportunities, and freelance analytics consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="group p-4 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Email Address</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.email}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-blue-500/40 backdrop-blur-xl flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/koushik-garg
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
            </a>

            {/* GitHub Card */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-slate-500/40 backdrop-blur-xl flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-slate-200 flex items-center justify-center border border-slate-700 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">GitHub Repositories</div>
                  <div className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                    github.com/koushikgarg11
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
              className="group p-4 rounded-2xl bg-[#091122]/90 border border-slate-800/90 hover:border-emerald-500/40 backdrop-blur-xl flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Phone & WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {profile.phone}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
            </a>

            {/* Location Pill */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in <strong className="text-white">New Delhi, India</strong> (Open to Relocation & Remote)</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091122]/95 border border-slate-800 backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You, {formData.name}!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry has been received. You can also directly reach out at{" "}
                    <a href={`mailto:${profile.email}`} className="text-cyan-400 underline font-semibold">
                      {profile.email}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Data Analyst Opportunity", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Inquiry Purpose</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option>Data Analyst Full-Time Opportunity</option>
                      <option>Data Analyst Internship</option>
                      <option>BI / Dashboard Consulting Project</option>
                      <option>General Networking & Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discuss role details, required skillsets, or analytics challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
