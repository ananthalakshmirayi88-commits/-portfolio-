import React from "react";
import { Brain, Code, Sparkles, BarChart3, GraduationCap, Award, FolderGit2, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, CORE_HIGHLIGHTS } from "../data/portfolioData";

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-blue-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-indigo-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Summary Card */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-4 border-blue-500 pl-3">
              Professional Summary
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {PERSONAL_INFO.summary}
            </p>

            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Hands-on AI/ML & Python Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Robotics, Vision & Conversational AI Projects</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Seeking Internship Opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick Academic & Project Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Fact 1: Academic Standing */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Education Status
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    B.Tech CSM (3rd Year)
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    KIET College, Kakinada • CGPA: <strong className="text-slate-200">7.85</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 2: Projects Built */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                    Project Work
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    6 Practical Applications
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Agriculture Rover, Smart Warehouse, Emergency Systems, Traffic Vision, Sales Models, Chatbot
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 3: Certifications */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Industry Credentials
                  </span>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    IBM SkillsBuild, EY & Infosys
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Design Thinking, EY Certificate & Infosys Springboard Python
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Competency Cards */}
        <div className="mt-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-l-4 border-blue-500 pl-3">
            Core Areas of Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5 hover:border-white/10 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
