"use client";

import { projectsData, Project } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  FolderGit2,
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Search,
  Activity,
  ArrowRight,
  ArrowDown
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { CardTilt } from "../ui/CardTilt";

type ProjectCategory = "all" | "flagship" | "commercial" | "ai" | "portfolio";

interface ProjectsProps {
  isFeaturedOnly?: boolean;
}

export const Projects = ({ isFeaturedOnly = false }: ProjectsProps) => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter projects by category and search
  const filteredProjects = projectsData.filter((project) => {
    if (isFeaturedOnly && !showAll) {
      // In initial featured mode, take top 6 projects (including active builds)
      return [1, 2, 3, 4, 5, 6].includes(project.id);
    }

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.des.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.tags && project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    if (!matchesSearch) return false;

    if (filter === "flagship") {
      return project.category === "Flagship" || project.status?.includes("Active");
    }
    if (filter === "commercial") {
      return (
        project.category === "Commercial" ||
        (project.tags &&
          (project.tags.includes("Commercial") ||
            project.tags.includes("Wholesale") ||
            project.tags.includes("Civic Tech") ||
            project.tags.includes("ERP") ||
            project.tags.includes("Executive")))
      );
    }
    if (filter === "ai") {
      return (
        project.category === "AI & Web Apps" ||
        project.title.toLowerCase().includes("ai") ||
        project.title.toLowerCase().includes("bot") ||
        (project.tags &&
          (project.tags.includes("AI") ||
            project.tags.includes("DevOps") ||
            project.tags.includes("macOS") ||
            project.tags.includes("Biometrics")))
      );
    }
    if (filter === "portfolio") {
      return (
        project.category === "Portfolio" ||
        project.title.toLowerCase().includes("portfolio") ||
        project.tags?.includes("Portfolio")
      );
    }
    return true;
  });

  const displayList = isFeaturedOnly && !showAll ? filteredProjects.slice(0, 6) : filteredProjects;

  const filters: { key: ProjectCategory; label: string; count: number }[] = [
    { key: "all", label: "All Projects", count: projectsData.length },
    {
      key: "flagship",
      label: "Active & Flagship",
      count: projectsData.filter((p) => p.category === "Flagship" || p.status?.includes("Active")).length,
    },
    {
      key: "commercial",
      label: "Commercial",
      count: projectsData.filter(
        (p) =>
          p.category === "Commercial" ||
          p.tags?.includes("Commercial") ||
          p.tags?.includes("Wholesale") ||
          p.tags?.includes("Civic Tech") ||
          p.tags?.includes("ERP")
      ).length,
    },
    {
      key: "ai",
      label: "AI & Tools",
      count: projectsData.filter(
        (p) =>
          p.category === "AI & Web Apps" ||
          p.tags?.includes("AI") ||
          p.tags?.includes("DevOps") ||
          p.tags?.includes("macOS")
      ).length,
    },
    {
      key: "portfolio",
      label: "Portfolios",
      count: projectsData.filter((p) => p.category === "Portfolio" || p.tags?.includes("Portfolio")).length,
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-28 relative">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-500/[0.05] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[350px] bg-indigo-500/[0.05] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="section-line w-12 mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white font-display">
              {isFeaturedOnly ? (showAll ? "All Projects & Builds" : "Featured Works") : "All Projects"}
              <span className="text-sky-400">.</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/50 font-mono tracking-wider max-w-md leading-relaxed">
              {isFeaturedOnly && !showAll
                ? "Flagship active builds, commercial client portals, and AI systems."
                : `Every single project (${projectsData.length}+ total), active build, commercial portal, and AI tool engineered by stayrahul.`}
            </p>
          </div>

          {/* Search/Filters on dedicated page or when expanded */}
          {(!isFeaturedOnly || showAll) && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {/* Search Input */}
              <div className="relative w-full sm:w-auto">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${projectsData.length}+ projects...`}
                  className="pl-9 pr-8 py-2 rounded-full text-xs glass-input text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400/50 w-full sm:w-56 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs cursor-pointer"
                  >
                    &times;
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-full glass-card overflow-x-auto max-w-full no-scrollbar py-1 px-1.5">
                {filters.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap active:scale-95 ${
                      filter === f.key
                        ? "bg-sky-400 text-[#050a14] shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {f.label} ({f.count})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Grid: STRICTLY 2 IN A ROW FOR PHONE */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
          <AnimatePresence>
            {displayList.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="w-full flex"
              >
                <CardTilt
                  onClick={() => handleOpenModal(project)}
                  className="flex flex-col h-full w-full p-2.5 sm:p-4 md:p-5 glass-card specular-border group cursor-pointer hover:border-sky-400/40 relative overflow-hidden transition-all duration-300 rounded-2xl"
                >
                  {/* Hover ambient top gradient */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-sky-400/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Card Thumbnail */}
                  <div className="relative flex items-center justify-center w-full overflow-hidden h-24 xs:h-28 sm:h-36 md:h-44 mb-2 sm:mb-3.5 rounded-xl bg-gradient-to-br from-[#0c1a2e] via-[#060e1c] to-[#0a0f1d] border border-white/[0.06] group-hover:border-sky-400/30 transition-all">
                    <div
                      className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.08] group-hover:opacity-[0.16] transition-opacity"
                      style={{ backgroundSize: "20px 20px" }}
                    />

                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={440}
                        height={270}
                        loading="lazy"
                        className="absolute bottom-0 z-10 w-[94%] translate-y-1 group-hover:translate-y-0 transition-transform duration-500 rounded-t-md sm:rounded-t-lg shadow-xl object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-white/30">
                        <FolderGit2 size={20} />
                        <span className="text-[9px] font-mono">Preview</span>
                      </div>
                    )}

                    {/* Status Badge (Top-Left) */}
                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-20 flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-[8px] sm:text-[9px] font-mono">
                      {project.status?.includes("Active") ? (
                        <>
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                          <span className="text-emerald-300 font-semibold hidden xs:inline">Active Build</span>
                          <span className="text-emerald-300 font-semibold xs:hidden">Active</span>
                        </>
                      ) : project.status === "Live" ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="text-sky-300 font-semibold">Live</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-purple-300 font-semibold">{project.year || "Shipped"}</span>
                        </>
                      )}
                    </div>

                    {/* View Details Badge (Top-Right) */}
                    <div className="hidden xs:flex items-center gap-1 absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-black/85 border border-sky-400/40 text-sky-300 text-[8px] sm:text-[9px] font-mono shadow-lg">
                      <Sparkles size={10} /> Specs
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      {/* Top Meta Tags */}
                      <div className="flex items-center justify-between gap-1 mb-1 sm:mb-2">
                        {project.tags && project.tags.length > 0 && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-mono bg-sky-400/10 text-sky-300 border border-sky-400/20 truncate max-w-[85px] sm:max-w-none">
                            {project.tags[0]}
                          </span>
                        )}
                        {project.year && (
                          <span className="text-[8px] sm:text-[10px] font-mono text-white/40 shrink-0">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-xs sm:text-base md:text-lg text-white group-hover:text-sky-300 transition-colors line-clamp-1 font-display mb-1">
                        {project.title}
                      </h3>

                      <p className="text-[10px] sm:text-xs text-white/60 line-clamp-2 mb-2 sm:mb-3 leading-tight sm:leading-relaxed font-light">
                        {project.des}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 sm:pt-3 border-t border-white/[0.06] flex items-center justify-between gap-1 mt-auto">
                      {/* Tech icons stack */}
                      <div className="flex items-center">
                        {project.iconLists.slice(0, 3).map((icon, i) => (
                          <div
                            key={icon}
                            className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-white/10 bg-[#050a14] -ml-1 sm:-ml-1.5 first:ml-0 p-0.5"
                            style={{ zIndex: 10 - i }}
                          >
                            <Image
                              src={icon}
                              alt="tech"
                              width={14}
                              height={14}
                              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1 sm:gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.sourceCode && (
                          <Link
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors"
                            aria-label="GitHub Repository"
                            title="GitHub Source"
                          >
                            <FaGithub size={13} className="sm:w-[15px] sm:h-[15px]" />
                          </Link>
                        )}
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-btn px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-bold text-sky-300 hover:text-white flex items-center gap-1 shrink-0"
                        >
                          <span>Live</span>
                          <ExternalLink size={9} className="sm:w-[10px] sm:h-[10px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state on search */}
        {displayList.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/40 font-mono text-sm">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-1.5 rounded-full text-xs font-mono text-sky-400 bg-sky-400/10 border border-sky-400/20 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA for Featured Mode */}
        {isFeaturedOnly && !showAll && (
          <div className="mt-10 sm:mt-12 text-center flex flex-col items-center gap-2">
            <button
              id="expand-all-projects-btn"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500/20 via-sky-400/25 to-indigo-500/20 hover:from-sky-500/35 hover:to-indigo-500/35 border border-sky-400/50 hover:border-sky-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-sky-200 hover:text-white transition-all shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] active:scale-95 group cursor-pointer"
            >
              <span>View All {projectsData.length}+ Projects &amp; Case Studies</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform text-sky-400" />
            </button>
            <p className="text-[11px] font-mono text-white/40">
              Reveals all {projectsData.length}+ active builds, commercial portals &amp; apps right here
            </p>
          </div>
        )}

        {isFeaturedOnly && showAll && (
          <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setShowAll(false);
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-mono text-white/70 hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              <span>Show Featured Only (Collapse)</span>
            </button>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sky-400/10 border border-sky-400/30 hover:border-sky-400/60 text-xs font-mono font-semibold text-sky-300 hover:text-white transition-all active:scale-95 group"
            >
              <span>Open Dedicated Projects Archive Page</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* ── Deep Project Details Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#070f1e] border border-sky-400/30 p-5 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.15)] specular-border"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/[0.05] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-20"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Status & Category */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-sky-400/10 text-sky-300 border border-sky-400/30 flex items-center gap-1.5">
                  <Activity size={12} />
                  {selectedProject.status || "Shipped"}
                </span>
                {selectedProject.category && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/30">
                    {selectedProject.category}
                  </span>
                )}
                {selectedProject.year && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono text-white/50 bg-white/[0.03] border border-white/10 flex items-center gap-1">
                    <Calendar size={11} />
                    {selectedProject.year}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display mb-3 tracking-tight">
                {selectedProject.title}
              </h2>

              {/* Hero Image in Modal */}
              {selectedProject.img && (
                <div className="relative w-full h-44 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#0c1a2e] to-[#050a14] border border-white/10 shadow-inner flex items-center justify-center">
                  <Image
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}

              {/* Long Description / Overview */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
                {selectedProject.longDes || selectedProject.des}
              </p>

              {/* Features / Highlights */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-1.5">
                    <Layers size={13} />
                    Key Architecture & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/80"
                      >
                        <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags & Tech */}
              {selectedProject.tags && (
                <div className="mb-8">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 mb-2.5">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary px-6 py-2.5 text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink size={13} />
                </Link>

                {selectedProject.sourceCode && (
                  <Link
                    href={selectedProject.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn px-5 py-2.5 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 text-white/80"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </Link>
                )}

                <button
                  onClick={handleCloseModal}
                  className="ml-auto text-xs font-mono text-white/40 hover:text-white cursor-pointer px-3 py-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
