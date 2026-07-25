"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { Code2, Cpu, Layers, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Styling & Motion",
    icon: Layers,
    skills: ["Tailwind CSS", "Framer Motion", "Figma", "UI/UX Design"]
  },
  {
    title: "Backend & Ecosystem",
    icon: Cpu,
    skills: ["Node.js", "Express.js", "MongoDB", "Git", "REST APIs"]
  }
];

export const Skills = () => {
  // Split skills into two lists for dual direction marquee
  const halfLength = Math.ceil(skillsData.length / 2);
  const firstRow = [...skillsData.slice(0, halfLength), ...skillsData.slice(0, halfLength), ...skillsData.slice(0, halfLength)];
  const secondRow = [...skillsData.slice(halfLength), ...skillsData.slice(halfLength), ...skillsData.slice(halfLength)];

  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden">

      {/* Background Glow Spheres */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "40px" }}
            viewport={{ once: true }}
            className="w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent mb-6"
          />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white flex items-center gap-4">
            <Code2 className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
            Tech Arsenal<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-4 text-xs md:text-sm text-white/50 font-mono tracking-widest uppercase max-w-md">
            The core tools, languages & frameworks powering my build process.
          </p>
        </div>

        {/* CATEGORIZED SKILL CARDS */}
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-white/70 bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DUAL DIRECTION INFINITE MARQUEE */}
        <div className="relative flex flex-col gap-6 overflow-x-hidden w-full group py-4">

          {/* Gradient Masks on Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 - Forward */}
          <div className="flex space-x-6 md:space-x-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {firstRow.map((skill, index) => (
              <div
                key={`row1-${skill}-${index}`}
                className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md cursor-pointer group/item shadow-lg"
              >
                <span className="text-white/60 group-hover/item:text-white text-sm md:text-lg font-bold font-mono tracking-widest uppercase transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Marquee Row 2 - Reverse */}
          <div className="flex space-x-6 md:space-x-8 whitespace-nowrap animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {secondRow.map((skill, index) => (
              <div
                key={`row2-${skill}-${index}`}
                className="inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-md cursor-pointer group/item shadow-lg"
              >
                <span className="text-white/60 group-hover/item:text-white text-sm md:text-lg font-bold font-mono tracking-widest uppercase transition-colors">
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
