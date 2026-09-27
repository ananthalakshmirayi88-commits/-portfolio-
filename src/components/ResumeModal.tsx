import React from "react";
import {
  X,
  ArrowDownToLine,
  ExternalLink,
  GraduationCap,
  Award,
  FolderGit2,
  Cpu,
  Mail,
  Linkedin,
  Github
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  CERTIFICATIONS
} from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">
              AL
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-blue-400 font-mono">
                {PERSONAL_INFO.name} • Official Source
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="modal-direct-pdf-btn"
              href={PERSONAL_INFO.resumeUrl}
              download="R_Anantha_Lakshmi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-blue-50 text-black text-xs font-bold transition-all cursor-pointer"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              id="modal-open-tab-btn"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto pr-1 py-6 space-y-6">
          
          {/* Header Block */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-blue-400 font-medium mt-0.5">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {PERSONAL_INFO.college}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/anantha-lakshmi-rayi-0a02b4378</span>
              </span>
              <span className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>github.com/ananthalakshmirayi88-commits</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 border-l-3 border-blue-500 pl-2">
              Career Objective & Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Education</span>
            </h4>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="font-mono text-blue-400">{edu.score}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 bg-zinc-900/60 rounded-xl border border-white/5">
                  <span className="font-bold text-slate-300 block mb-1">
                    {cat.category}:
                  </span>
                  <span className="text-slate-400">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <span>Projects</span>
            </h4>
            <div className="space-y-4">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm mb-1">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-blue-400">{proj.techStackDisplay}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{proj.description}</p>
                  <ul className="space-y-1">
                    {proj.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Certifications</span>
            </h4>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-center p-2.5 rounded-lg bg-zinc-900/60 border border-white/5">
                  <span className="font-medium text-white">{cert.title}</span>
                  <span className="text-blue-400 font-medium">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-shrink-0 text-xs text-slate-500">
          <span>Official Resume Data</span>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="R_Anantha_Lakshmi_Resume.pdf"
            className="text-white hover:text-blue-400 font-semibold flex items-center gap-1"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download PDF File</span>
          </a>
        </div>

      </div>
    </div>
  );
};
