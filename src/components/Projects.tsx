import React, { useState } from "react";
import {
  ArrowRight,
  ShieldAlert,
  Video,
  TrendingUp,
  Bot,
  Code,
  Activity,
  Layers,
  Radio,
  Boxes
} from "lucide-react";
import { PROJECTS, Project } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "agriculture-rover":
        return <Radio className="w-5 h-5 text-lime-400" />;
      case "smart-warehouse":
        return <Boxes className="w-5 h-5 text-amber-400" />;
      case "emergency-response":
        return <ShieldAlert className="w-5 h-5 text-blue-400" />;
      case "traffic-monitoring":
        return <Video className="w-5 h-5 text-purple-400" />;
      case "sales-prediction":
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case "ai-assistant":
        return <Bot className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  const getCategoryBadgeColor = (id: string) => {
    switch (id) {
      case "agriculture-rover":
        return "bg-lime-500/20 text-lime-300";
      case "smart-warehouse":
        return "bg-amber-500/20 text-amber-300";
      case "emergency-response":
        return "bg-blue-500/20 text-blue-300";
      case "traffic-monitoring":
        return "bg-purple-500/20 text-purple-300";
      case "sales-prediction":
        return "bg-emerald-500/20 text-emerald-300";
      case "ai-assistant":
        return "bg-cyan-500/20 text-cyan-300";
      default:
        return "bg-blue-500/20 text-blue-300";
    }
  };

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const standardProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Projects
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Practical AI/ML, robotics, computer vision, predictive analytics, and Python web applications developed with real-world utility in mind.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* 1. FEATURED PROJECT SHOWCASE (Clean Minimalism) */}
        <div className="mb-12">
          <div className="relative rounded-3xl bg-zinc-900/50 border border-white/5 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md overflow-hidden group">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Project Info */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded uppercase font-bold text-[10px] bg-blue-500/20 text-blue-300 mb-4">
                  <span>Featured AI System</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-blue-400 mb-4">
                  {featuredProject.techStackDisplay}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Key Bullet Points from Resume */}
                <div className="space-y-2 mb-6 w-full">
                  {featuredProject.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] bg-black px-2 py-1 rounded border border-white/5 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  id="view-featured-project-btn"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-blue-50 text-black text-xs font-bold transition-all shadow-sm transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Architectural Illustration */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-zinc-950 rounded-2xl border border-white/5 p-5 shadow-xl">
                  
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span>emergency_system.py</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">Incident Detection</span>
                      </div>
                      <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        AI Vision
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-medium">Severity Analysis</span>
                      </div>
                      <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        ML Model
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-medium">Resource Identification</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        Dispatch
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Centralized Dashboard</span>
                    <span className="text-blue-400 font-mono">Flask + REST</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. OTHER PROJECTS GRID (Clean Minimalism Cards — All remaining projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standardProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Category & Icon */}
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${getCategoryBadgeColor(project.id)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>

                {/* Tech display */}
                <p className="text-xs font-mono text-blue-400 mb-3">
                  {project.techStackDisplay}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Resume Bullets */}
                <div className="space-y-1.5 mb-5">
                  {project.bulletPoints.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-white/5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] bg-black px-1.5 py-0.5 rounded border border-white/5 text-slate-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  id={`view-details-${project.id}-btn`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-full bg-zinc-800 hover:bg-white hover:text-black text-slate-200 text-xs font-semibold border border-white/5 transition-all cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
