import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Library,
  Globe,
  Wrench,
  Layers,
  Sparkles,
  Terminal
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Library":
        return <Library className="w-5 h-5 text-purple-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Core programming languages, machine learning frameworks, data science libraries, and computer science fundamentals.
          </p>
          <div className="w-10 h-0.5 bg-blue-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills - Clean Minimalism */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold shadow-sm"
                  : "bg-zinc-900/80 border border-white/5 text-slate-400 hover:text-white hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(item.iconName)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.category}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-zinc-800 rounded-lg text-xs border border-white/5 text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>{item.skills.length} competencies</span>
                <span className="font-mono text-blue-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Bar */}
        <div className="mt-12 bg-zinc-900/50 border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Practical Python & AI/ML Development
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Experienced in predictive modeling, Flask REST backends, and full-stack interactive client interfaces.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Explore Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
