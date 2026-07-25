"use client";

import { projectsData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
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
    <section id="projects" className="py-24 md:py-36 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-[2px] bg-blue-500"
            />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white">
              Selected<br />Works<span className="text-blue-500">.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 leading-relaxed font-mono md:text-right max-w-sm">
              Crafted with performance, modular architecture, and aesthetic precision.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "all" ? "bg-blue-500 text-white shadow-lg" : "text-white/60 hover:text-white"
                }`}
              >
                All ({projectsData.length})
              </button>
              <button
                onClick={() => setFilter("apps")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "apps" ? "bg-blue-500 text-white shadow-lg" : "text-white/60 hover:text-white"
                }`}
              >
                Web Apps
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === "ai" ? "bg-blue-500 text-white shadow-lg" : "text-white/60 hover:text-white"
                }`}
              >
                AI & Tools
              </button>
            </div>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="w-full flex"
              >
                <div className="flex flex-col w-full p-6 md:p-8 bg-[#0a0a0a]/90 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 group backdrop-blur-xl shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                  {/* Image Container with Ambient Background */}
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative flex items-center justify-center w-full overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] mb-6 rounded-2xl bg-gradient-to-br from-[#121629] to-[#0a0c16] border border-white/10 group-hover:border-blue-500/40 transition-colors"
                  >
                    {/* Inner Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundSize: '40px 40px' }} />

                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={420}
                        height={260}
                        loading="lazy"
                        className="absolute bottom-0 z-10 w-11/12 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 rounded-t-xl shadow-2xl object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-white/30">
                        <FolderGit2 size={36} />
                        <span className="text-xs font-mono">Project Preview</span>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-full bg-black/80 border border-white/20 text-white backdrop-blur-md">
                      <ExternalLink size={16} />
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-bold text-xl md:text-2xl text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-light text-xs md:text-sm text-white/60 line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {project.des}
                    </p>

                    {/* Footer / Tech Icons & Links */}
                    <div className="flex items-center justify-between gap-4 pt-5 border-t border-white/10 mt-auto">

                      {/* Tech icons stack */}
                      <div className="flex items-center">
                        {project.iconLists.map((icon, i) => (
                          <div
                            key={icon}
                            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-black/90 -ml-2 first:ml-0 shadow-md backdrop-blur-md"
                            style={{ zIndex: 10 - i }}
                          >
                            <Image 
                              src={icon} 
                              alt="tech icon" 
                              width={16} 
                              height={16} 
                              className="w-4 h-4 object-contain" 
                            />
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4">
                        {project.sourceCode && (
                          <Link 
                            href={project.sourceCode} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            title="View Source Code"
                          >
                            <FaGithub className="w-5 h-5" />
                          </Link>
                        )}
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all text-xs font-mono font-bold uppercase tracking-wider text-white/80"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
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
