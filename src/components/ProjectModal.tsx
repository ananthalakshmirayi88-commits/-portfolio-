import React from "react";
import { X, Sparkles, Code2, CheckCircle2, Layers } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded uppercase font-bold text-[10px] bg-blue-500/20 text-blue-300 mb-2.5">
            <span>{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-blue-400 mt-1.5">
            {project.techStackDisplay}
          </p>
        </div>

        {/* Overview Box */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4.5 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Project Overview</span>
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features & Implementation from Resume */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Key Implementation Details (from Resume)</span>
          </h4>
          <div className="space-y-2.5">
            {project.bulletPoints.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/40 border border-white/5"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-blue-400">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Technologies & Tools Applied</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-zinc-900 rounded-lg text-xs border border-white/5 text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            Source: Official Resume
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-white border border-white/10 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
