"use client";

import { projectsData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "apps" | "ai">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "ai") return project.title.toLowerCase().includes("ai") || project.title.toLowerCase().includes("bot");
    if (filter === "apps") return !project.title.toLowerCase().includes("ai") && !project.title.toLowerCase().includes("bot");
    return true;
  });

  const filters = [
    { key: "all" as const, label: `All (${projectsData.length})` },
    { key: "apps" as const, label: "Apps" },
    { key: "ai" as const, label: "AI" },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 md:py-40 relative">

      {/* Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-500/[0.05] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[350px] bg-indigo-500/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-line w-12 mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white"
            >
              Projects<span className="text-sky-400">.</span>
            </motion.h2>
            <p className="mt-3 text-xs text-white/40 font-mono tracking-wider max-w-sm">
              A curated selection of my recent builds and experiments.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] self-start md:self-auto">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === f.key
                    ? "bg-sky-400 text-[#050a14] shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                    : "text-white/45 hover:text-white/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="w-full"
              >
                <div className="flex flex-col w-full p-3 sm:p-5 md:p-6 glass-card group">

                  {/* Image */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-full overflow-hidden h-[90px] sm:h-[170px] md:h-[180px] lg:h-[160px] mb-3 sm:mb-5 rounded-lg md:rounded-xl bg-gradient-to-br from-[#0a1628] via-[#060e1c] to-[#080818] border border-white/[0.05] group-hover:border-sky-400/20 transition-all"
                  >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.08] group-hover:opacity-[0.15] transition-opacity" style={{ backgroundSize: '24px 24px' }} />

                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={440}
                        height={270}
                        loading="lazy"
                        className="absolute bottom-0 z-10 w-[92%] translate-y-1.5 group-hover:translate-y-0 transition-transform duration-500 rounded-t-md md:rounded-t-lg shadow-2xl object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 text-white/30">
                        <FolderGit2 size={22} />
                        <span className="text-[10px] font-mono">Preview</span>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/70 text-sky-300">
                      <ExternalLink size={10} className="sm:w-3.5 sm:h-3.5" />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-bold text-xs sm:text-base md:text-lg text-white/85 group-hover:text-white transition-colors line-clamp-1 mb-1 sm:mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/40 line-clamp-2 mb-3 sm:mb-4 flex-grow leading-relaxed">
                      {project.des}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                      <div className="flex items-center">
                        {project.iconLists.map((icon, i) => (
                          <div
                            key={icon}
                            className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full border border-white/10 bg-[#050a14] -ml-1.5 first:ml-0"
                            style={{ zIndex: 10 - i }}
                          >
                            <Image src={icon} alt="tech" width={14} height={14} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 object-contain" />
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {project.sourceCode && (
                          <Link
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-white/35 hover:text-sky-300 transition-colors"
                          >
                            <FaGithub className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                          </Link>
                        )}
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-400 text-[#050a14] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider hover:bg-sky-300 transition-all"
                        >
                          Demo
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
