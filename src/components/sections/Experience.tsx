"use client";

import { motion } from "framer-motion";
import { experienceData, selfData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CardTilt } from "../ui/CardTilt";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-36 relative overflow-hidden">

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-sky-500/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="section-line w-12 mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white font-display"
            >
              What I Do<span className="text-sky-400">.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-xs text-white/40 font-mono tracking-wider max-w-xs md:text-right">
              Explorations across frontend, design, and creative experiments.
            </p>
            <a
              href={selfData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-sky-300/90 hover:text-white transition-colors"
            >
              <FaGithub size={14} />
              <span className="text-xs font-semibold tracking-wider uppercase">GitHub</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Role Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0.3, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="h-full"
            >
              <CardTilt className="group p-5 md:p-6 glass-card specular-border flex flex-col justify-between min-h-[120px] md:min-h-[140px] h-full">
                <span className="text-[10px] font-mono font-semibold text-sky-400/70 tracking-widest mb-auto">
                  0{exp.id}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-wider leading-snug mt-3 font-display">
                  {exp.title}
                </h3>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
