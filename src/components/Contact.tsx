import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Sparkles, Check, Copy, ExternalLink, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formSubject || `Opportunity / Inquiry from ${formName || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Hello Anantha Lakshmi,\n\n${formMessage}\n\nFrom: ${formName}\nEmail: ${formEmail}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Intelligent
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Open to software engineering internships, AI/ML project collaborations, and discussions. Feel free to connect directly.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-blue-400 tracking-widest">
                      Email Address
                    </h3>
                    <a
                      id="contact-email-link"
                      href={`mailto:${PERSONAL_INFO.email}`}
                      aria-label="Email"
                      className="text-sm font-bold text-white hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                <a
                  id="direct-mailto-btn"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Open Email Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {copied && (
                  <span className="text-[11px] text-emerald-400 font-medium animate-fadeIn">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-widest">
                      GitHub Profile
                    </h3>
                    <p className="text-sm font-bold text-white mt-0.5">
                      ananthalakshmirayi88-commits
                    </p>
                  </div>
                </div>

                <a
                  id="contact-github-btn"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white border border-white/5 transition-all flex items-center gap-1.5"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-blue-400 tracking-widest">
                      LinkedIn Profile
                    </h3>
                    <p className="text-sm font-bold text-white mt-0.5">
                      anantha-lakshmi-rayi-0a02b4378
                    </p>
                  </div>
                </div>

                <a
                  id="contact-linkedin-btn"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-xs font-semibold text-blue-300 hover:text-white border border-blue-500/30 transition-all flex items-center gap-1.5"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & College */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.college} • {PERSONAL_INFO.location}</span>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Compose a message below to automatically launch an email to <strong className="text-slate-200">{PERSONAL_INFO.email}</strong>.
            </p>

            <form onSubmit={handleSendDirectEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Recruiter"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject-input"
                  type="text"
                  required
                  placeholder="e.g. Internship Opportunity / Software Development Project"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  required
                  placeholder="Hi Anantha Lakshmi, I came across your portfolio and would like to connect regarding..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                id="send-message-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs text-black bg-white hover:bg-blue-50 transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email to Anantha Lakshmi</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
