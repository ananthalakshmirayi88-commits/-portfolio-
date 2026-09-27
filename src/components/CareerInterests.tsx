import React from "react";
import { Bot, Network, FileCode, Laptop, LineChart, Sparkles } from "lucide-react";
import { CAREER_INTERESTS } from "../data/portfolioData";

export const CareerInterests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-5 h-5 text-blue-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-indigo-400" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-purple-400" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-emerald-400" />;
      case "LineChart":
        return <LineChart className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="career-interests" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Career Directions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Areas I'm Interested In
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Core domains and disciplines targeted for internships, engineering projects, and career development.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* 5 Career Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {CAREER_INTERESTS.map((interest, idx) => (
            <div
              key={idx}
              className={`bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-xl group flex flex-col justify-between ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(interest.icon)}
                </div>
                
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1.5">
                  {interest.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-blue-400 text-xs font-semibold">
                <span>Active Target</span>
                <span className="font-mono text-slate-500">›</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
