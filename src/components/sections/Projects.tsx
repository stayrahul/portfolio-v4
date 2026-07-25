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

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-36 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-2 sm:space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-[2px] bg-cyan-400"
            />
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white">
              Selected<br />Works<span className="text-cyan-400">.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 sm:gap-6">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/50 leading-relaxed font-mono md:text-right max-w-sm">
              Crafted with performance, modular architecture, and aesthetic precision.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md self-start md:self-auto">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "all" ? "bg-cyan-400 text-black shadow-lg font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                All ({projectsData.length})
              </button>
              <button
                onClick={() => setFilter("apps")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "apps" ? "bg-cyan-400 text-black shadow-lg font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                Apps
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "ai" ? "bg-cyan-400 text-black shadow-lg font-bold" : "text-white/60 hover:text-white"
                }`}
              >
                AI
              </button>
            </div>
          </div>
        </div>

        {/* PROJECTS GRID - 2 COLUMNS ON MOBILE & PHONE SCREENS */}
        <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 mt-6 sm:mt-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="w-full flex"
              >
                <div className="flex flex-col w-full p-3 sm:p-5 md:p-8 bg-[#030712]/90 border border-white/10 rounded-2xl md:rounded-3xl hover:border-cyan-400/50 transition-all duration-500 group backdrop-blur-xl shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]">

                  {/* Image Container */}
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative flex items-center justify-center w-full overflow-hidden h-[100px] sm:h-[170px] md:h-[260px] mb-3 sm:mb-5 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#0c1a2e] to-[#040d1a] border border-white/10 group-hover:border-cyan-400/40 transition-colors"
                  >
                    {/* Inner Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundSize: '30px 30px' }} />

                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={420}
                        height={260}
                        loading="lazy"
                        className="absolute bottom-0 z-10 w-11/12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg md:rounded-t-xl shadow-2xl object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-white/30">
                        <FolderGit2 size={24} className="sm:w-8 sm:h-8" />
                        <span className="text-[10px] font-mono">Preview</span>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 sm:p-2 rounded-full bg-black/80 border border-white/20 text-white backdrop-blur-md">
                      <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-bold text-xs sm:text-lg md:text-2xl text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1 sm:mb-2">
                      {project.title}
                    </h3>

                    <p className="font-light text-[10px] sm:text-xs md:text-sm text-white/60 line-clamp-2 mb-3 sm:mb-5 flex-grow leading-relaxed">
                      {project.des}
                    </p>

                    {/* Footer / Tech Icons & Links */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 mt-auto">

                      {/* Tech icons stack */}
                      <div className="flex items-center">
                        {project.iconLists.map((icon, i) => (
                          <div
                            key={icon}
                            className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-white/20 bg-black/90 -ml-1.5 sm:-ml-2 first:ml-0 shadow-md backdrop-blur-md"
                            style={{ zIndex: 10 - i }}
                          >
                            <Image 
                              src={icon} 
                              alt="tech icon" 
                              width={16} 
                              height={16} 
                              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 object-contain" 
                            />
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        {project.sourceCode && (
                          <Link 
                            href={project.sourceCode} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1 sm:p-2 text-white/50 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-colors"
                            title="View Source Code"
                          >
                            <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                          </Link>
                        )}
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white/80"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
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
