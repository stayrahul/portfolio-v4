"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, MapPin, Briefcase, GraduationCap, Code, ArrowUpRight } from "lucide-react";
import { selfData, skillsData, journeyMilestones, educationData } from "@/data/portfolioData";
import { useState, useEffect } from "react";
import { soundManager } from "@/lib/sound";
import { copyToClipboard } from "@/lib/clipboard";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(selfData.email);
    if (success) {
      soundManager.playSuccess();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-[#070f1e] border border-sky-400/30 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.2)] overflow-hidden z-10 max-h-[88vh] flex flex-col specular-border"
            role="dialog"
            aria-modal="true"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-300">
                  Curriculum Vitae · Overview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selfData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-400 hover:bg-sky-300 text-[#050a14] text-[11px] font-bold uppercase tracking-wider transition-all"
                >
                  <Download size={13} />
                  <span>GitHub Profile</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
              {/* Profile Intro */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                    {selfData.name}
                  </h2>
                  <p className="text-sky-300 font-mono text-xs mt-1">
                    {selfData.roles.join(" • ")}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-white/50 text-xs font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-sky-400" /> {selfData.location}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 hover:text-sky-300 transition-colors cursor-pointer"
                    >
                      <Mail size={13} className="text-sky-400" />
                      <span>{selfData.email}</span>
                      {copied && <span className="text-emerald-400 font-bold ml-1">(Copied!)</span>}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-white/40 mb-2 flex items-center gap-1.5">
                  Professional Summary
                </h4>
                <p className="text-white/70 leading-relaxed font-light">
                  Passionate and detail-driven Creative Developer crafting high-aesthetic, ultra-responsive web
                  applications. Specializing in modern JavaScript frameworks (React, Next.js 16), TypeScript,
                  utility-first styling with Tailwind CSS, and kinetic micro-interactions with Framer Motion.
                  Driven by the ethos of &quot;Vibe Coding&quot;—where engineering excellence pairs with creative joy.
                </p>
              </div>

              {/* Technical Arsenal */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-white/40 mb-3 flex items-center gap-1.5">
                  <Code size={14} className="text-sky-400" /> Technical Arsenal
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillsData.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.03] text-white/70 border border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-white/40 mb-3 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-sky-400" /> Experience & Milestones
                </h4>
                <div className="space-y-4">
                  {journeyMilestones.map((m) => (
                    <div key={m.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">{m.role}</span>
                        <span className="text-[10px] font-mono text-sky-400">{m.period}</span>
                      </div>
                      <span className="text-xs text-white/50 font-mono block mb-2">{m.companyOrFocus}</span>
                      <p className="text-xs text-white/60 mb-2">{m.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.03] text-white/40">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-white/40 mb-3 flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-sky-400" /> Formal Education & Academics
                </h4>
                <div className="space-y-3">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-white text-sm">{edu.degree}</span>
                        <span className="text-[10px] font-mono text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-full border border-sky-400/20 self-start sm:self-auto">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-sky-300 font-mono mb-2">
                        {edu.institutionUrl ? (
                          <a
                            href={edu.institutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-semibold hover:text-sky-100 hover:underline transition-colors"
                          >
                            <span>{edu.institution}</span>
                            <ArrowUpRight size={11} className="opacity-75" />
                          </a>
                        ) : (
                          <span>{edu.institution}</span>
                        )}
                        <span className="text-white/20">•</span>
                        <span className="text-white/50">{edu.location}</span>
                      </div>
                      <p className="text-xs text-white/65 leading-relaxed mb-2.5">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.skills.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.03] text-white/50 border border-white/[0.04]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
