import React from "react";
import { GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { EDUCATION } from "../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Formal technical education in Computer Science and Engineering with specialization in AI & ML.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="relative bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">
                    {index === 0 ? "B.T" : "INT"}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/20">
                    {item.score}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-slate-400 border border-white/5">
                    {item.status}
                  </span>
                </div>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 mt-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
