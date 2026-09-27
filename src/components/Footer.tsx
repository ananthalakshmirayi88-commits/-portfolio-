import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#030303] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">
                AL
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.college}
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "#education")}
              className="hover:text-white transition-colors"
            >
              Education
            </a>
            <a
              href="#certifications"
              onClick={(e) => handleNavClick(e, "#certifications")}
              className="hover:text-white transition-colors"
            >
              Certifications
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-slate-400 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-slate-400 hover:text-blue-400 border border-white/5 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-slate-400 hover:text-blue-400 border border-white/5 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
              className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & status */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Anantha Lakshmi. Built with Clean Minimalism.</p>
          <div className="flex items-center gap-4">
            <span>Available for Internships</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Open to Work</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
