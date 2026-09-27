import React from "react";
import { Award, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Industry and enterprise recognized certifications validating software engineering, design thinking, and technical acumen.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Certification Cards Grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-semibold text-blue-400 mb-3">
                  Issuer: {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
                <span className="font-mono text-slate-500">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
