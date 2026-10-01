"use client";

import { motion } from "framer-motion";
import { journeyMilestones, educationData } from "@/data/portfolioData";
import { Calendar, FileText, ArrowUpRight, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { CardTilt } from "../ui/CardTilt";
import Link from "next/link";

type JourneyTab = "all" | "education" | "experience";

interface JourneyProps {
  isSpotlight?: boolean;
}

export const Journey = ({ isSpotlight = false }: JourneyProps) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<JourneyTab>("all");

  const handleTabChange = (tab: JourneyTab) => {
    setActiveTab(tab);
  };

  return (
    <section id="journey" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/[0.04] rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-purple-500/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="section-line w-12 mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white font-display">
              {isSpotlight ? "Education & Growth" : "Journey & Education"}
              <span className="text-sky-400">.</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs md:text-sm text-white/50 font-mono tracking-wider max-w-lg leading-relaxed">
              {isSpotlight
                ? "Verified academic credentials from Hetauda & Kathmandu to Gwarko, Lalitpur."
                : "Academic pedigree paired with client ventures, software engineering, and creative coding."}
            </p>
          </div>

          {/* Quick Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="glass-btn px-4 py-2 sm:px-5 sm:py-2.5 text-xs text-sky-300 hover:text-white self-start md:self-auto group active:scale-95 transition-transform cursor-pointer"
          >
            <FileText size={14} className="text-sky-400" />
            <span className="font-semibold uppercase tracking-wider">Resume</span>
            <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Tab Filters (Only on full journey page) */}
        {!isSpotlight && (
          <div className="flex items-center gap-1.5 p-1 rounded-full glass-card overflow-x-auto max-w-full no-scrollbar mb-8 sm:mb-12 py-1 px-1.5">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer whitespace-nowrap active:scale-95 ${
                activeTab === "all"
                  ? "bg-sky-400 text-[#050a14] font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Complete Roadmap
            </button>
            <button
              onClick={() => handleTabChange("education")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer whitespace-nowrap active:scale-95 ${
                activeTab === "education"
                  ? "bg-sky-400 text-[#050a14] font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <GraduationCap size={13} />
              <span>Academic & Education</span>
            </button>
            <button
              onClick={() => handleTabChange("experience")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer whitespace-nowrap active:scale-95 ${
                activeTab === "experience"
                  ? "bg-sky-400 text-[#050a14] font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Briefcase size={13} />
              <span>Career & Ventures</span>
            </button>
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-12">
          {/* Academic & Education Section */}
          {(isSpotlight || activeTab === "all" || activeTab === "education") && (
            <div>
              <div className="relative border-l border-sky-400/20 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-6 sm:space-y-8">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative group"
                  >
                    {/* Glowing Timeline Dot */}
                    <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-[#050a14] border-2 border-sky-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_#38bdf8] transition-all" />

                    <CardTilt className="glass-card specular-border p-4 sm:p-6 hover:border-sky-400/35 rounded-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            {edu.institutionUrl ? (
                              <a
                                href={edu.institutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1 font-display"
                              >
                                <span>{edu.institution}</span>
                                <ArrowUpRight size={13} className="text-sky-400 shrink-0 opacity-70 group-hover:opacity-100" />
                              </a>
                            ) : (
                              <span className="text-base sm:text-lg font-bold text-white font-display">
                                {edu.institution}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-sky-300 font-mono">
                            {edu.degree}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/60 text-[11px] font-mono self-start sm:self-auto">
                          <Calendar size={11} className="text-sky-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-3">
                        {edu.description}
                      </p>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-white/60 bg-white/[0.02] border border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardTilt>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Career Experience (Only on full journey page) */}
          {!isSpotlight && (activeTab === "all" || activeTab === "experience") && (
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-400/20 text-purple-400">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    Career Milestones &amp; Ventures
                  </h3>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Commercial client deployments &amp; open-source craft
                  </p>
                </div>
              </div>

              <div className="relative border-l border-purple-400/20 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-6 sm:space-y-8">
                {journeyMilestones.map((milestone, idx) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0.2, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-[#050a14] border-2 border-purple-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_#c084fc] transition-all" />

                    <CardTilt className="glass-card specular-border p-4 sm:p-6 hover:border-purple-400/35 rounded-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-display">
                            {milestone.role}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-purple-300 font-mono">
                            {milestone.companyOrFocus}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/60 text-[11px] font-mono self-start sm:self-auto">
                          <Calendar size={11} className="text-purple-400" />
                          <span>{milestone.period}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-3">
                        {milestone.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                        {milestone.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-white/60 bg-white/[0.02] border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardTilt>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA for Spotlight Mode */}
        {isSpotlight && (
          <div className="mt-8 text-center">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-sky-400/40 text-xs font-mono font-semibold uppercase tracking-wider text-sky-300 hover:text-white transition-all active:scale-95 group"
            >
              <span>Explore Complete Career &amp; Education Roadmap</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
