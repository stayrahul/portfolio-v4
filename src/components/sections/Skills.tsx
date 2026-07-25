"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { Code2, Layers, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "sky",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Design & Motion",
    icon: Layers,
    color: "indigo",
    skills: ["Tailwind CSS", "Framer Motion", "Figma", "UI/UX Design"],
  },
  {
    title: "Backend & Tools",
    icon: Cpu,
    color: "purple",
    skills: ["Node.js", "Express.js", "MongoDB", "Git", "REST APIs"],
  },
];

const colorMap: Record<string, { icon: string; border: string; badge: string; glow: string }> = {
  sky: {
    icon: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    border: "group-hover:border-sky-400/30",
    badge: "group-hover:border-sky-400/25 group-hover:text-sky-300",
    glow: "group-hover:shadow-[0_0_24px_-6px_rgba(56,189,248,0.15)]",
  },
  indigo: {
    icon: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    border: "group-hover:border-indigo-400/30",
    badge: "group-hover:border-indigo-400/25 group-hover:text-indigo-300",
    glow: "group-hover:shadow-[0_0_24px_-6px_rgba(129,140,248,0.15)]",
  },
  purple: {
    icon: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    border: "group-hover:border-purple-400/30",
    badge: "group-hover:border-purple-400/25 group-hover:text-purple-300",
    glow: "group-hover:shadow-[0_0_24px_-6px_rgba(192,132,252,0.15)]",
  },
};

export const Skills = () => {
  const halfLength = Math.ceil(skillsData.length / 2);
  const firstRow = [...skillsData.slice(0, halfLength), ...skillsData.slice(0, halfLength), ...skillsData.slice(0, halfLength)];
  const secondRow = [...skillsData.slice(halfLength), ...skillsData.slice(halfLength), ...skillsData.slice(halfLength)];

  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden">

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-500/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <div className="section-line w-16 mb-8" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white"
          >
            Tech Stack<span className="text-sky-400">.</span>
          </motion.h2>
          <p className="mt-4 text-xs md:text-sm text-white/40 font-mono tracking-wider max-w-sm">
            The tools and technologies I work with daily.
          </p>
        </div>

        {/* Category Cards */}
        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group p-6 md:p-7 glass-card ${colors.border} ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl border ${colors.icon} transition-transform group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white/90 tracking-wide uppercase">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium text-white/60 bg-white/[0.03] border border-white/[0.06] ${colors.badge} transition-all duration-300`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="relative flex flex-col gap-5 overflow-x-hidden w-full py-2">
          <div className="absolute left-0 top-0 bottom-0 w-28 md:w-48 bg-gradient-to-r from-[#050a14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 md:w-48 bg-gradient-to-l from-[#050a14] to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-5 md:space-x-7 whitespace-nowrap animate-marquee">
            {firstRow.map((skill, index) => (
              <div
                key={`r1-${skill}-${index}`}
                className="inline-flex items-center px-7 py-3.5 md:px-10 md:py-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-sky-400/20 hover:bg-sky-400/[0.04] transition-all duration-300 cursor-default"
              >
                <span className="text-white/45 hover:text-sky-300/80 text-sm md:text-base font-semibold font-mono tracking-wider uppercase transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="flex space-x-5 md:space-x-7 whitespace-nowrap animate-marquee-reverse">
            {secondRow.map((skill, index) => (
              <div
                key={`r2-${skill}-${index}`}
                className="inline-flex items-center px-7 py-3.5 md:px-10 md:py-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-indigo-400/20 hover:bg-indigo-400/[0.04] transition-all duration-300 cursor-default"
              >
                <span className="text-white/45 hover:text-indigo-300/80 text-sm md:text-base font-semibold font-mono tracking-wider uppercase transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
