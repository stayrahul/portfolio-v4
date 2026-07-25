"use client";

import { motion } from "framer-motion";
import { experienceData, selfData } from "@/data/portfolioData";
import { Download, Briefcase, Award } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-36 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              viewport={{ once: true }}
              className="h-[2px] bg-blue-500"
            />
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white flex items-center gap-3">
              Experience & Roles<span className="text-blue-500">.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 leading-relaxed font-mono md:text-right max-w-xs">
              Diverse specializations across design, frontend engineering & AI workflows.
            </p>

            {/* Curriculum Download Button */}
            <a
              href={selfData.resume}
              target="_blank"
              download
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/10 transition-all shadow-lg backdrop-blur-md"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white group-hover:text-blue-400 transition-colors">
                Get Curriculum / CV
              </span>
              <Download className="w-4 h-4 text-white/70 group-hover:text-blue-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ROLES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative flex flex-col items-start justify-between p-6 border border-white/10 bg-[#0a0a0a]/80 rounded-2xl md:rounded-3xl hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-xl shadow-xl min-h-[140px]"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-[10px] font-mono font-bold text-blue-400 tracking-widest px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  0{exp.id}
                </span>
                <Briefcase size={16} className="text-white/30 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-sm md:text-base font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-wider leading-snug">
                {exp.title}
              </h3>

              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-blue-500/0 group-hover:border-blue-500/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
