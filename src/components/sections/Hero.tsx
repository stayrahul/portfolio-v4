"use client";

import { motion } from "framer-motion";
import { selfData } from "@/data/portfolioData";
import { ArrowUpRight, Code2, FileText, Copy, Check, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ResumeModal } from "../ui/ResumeModal";
import { copyToClipboard } from "@/lib/clipboard";

export const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopySnippet = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await copyToClipboard("npx stayrahul");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center text-white overflow-hidden">
      {/* ── Ambient GPU Glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-sky-500/[0.12] rounded-full blur-[90px] transform-gpu" />
        <div className="absolute top-10 right-[-80px] w-[500px] h-[500px] bg-indigo-500/[0.10] rounded-full blur-[90px] transform-gpu" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-500/[0.05] rounded-full blur-[110px] transform-gpu" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-[#050a14] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#050a14)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" style={{ backgroundSize: "60px 60px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a14]/60 to-[#050a14] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center pt-32 pb-16">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-300/90">
              Available for projects
            </span>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative mb-8"
        >
          <div className="absolute -inset-3.5 bg-gradient-to-tr from-sky-400/50 via-indigo-500/40 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-sky-400/60 via-indigo-500/40 to-purple-500/30 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050a14]">
              <Image
                src="/profile.png"
                alt={selfData.name}
                fill
                priority
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-[#050a14] ring-2 ring-sky-400/30 text-sky-300">
            <Code2 size={14} />
          </div>
        </motion.div>

        {/* Name (Instant Paint) */}
        <h1 className="mb-5 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white font-display">
          {selfData.name}
        </h1>

        {/* Bio */}
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/60 max-w-lg mx-auto leading-relaxed font-light mb-10"
        >
          Crafting fun, interactive & aesthetic web experiences with{" "}
          <span className="text-sky-300/90 font-normal">creative freedom</span> — purely for the joy of building.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <Link
            href="/projects"
            prefetch={true}
            className="w-full sm:w-auto glass-btn-primary px-7 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer active:scale-95 transition-transform font-semibold"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/contact"
            prefetch={true}
            className="w-full sm:w-auto glass-btn px-6 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer text-white/90 active:scale-95 transition-transform font-semibold"
          >
            <span>Get in Touch</span>
          </Link>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="w-full sm:w-auto px-4 py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            <FileText size={13} className="text-sky-400" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* Quick Command Snippet Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-white/70 hover:border-sky-400/30 transition-all max-w-full"
        >
          <span className="text-sky-400 select-none">$</span>
          <span className="text-white/90 truncate">npx stayrahul</span>
          <button
            onClick={handleCopySnippet}
            className="ml-2 pl-2 border-l border-white/10 flex items-center gap-1 text-white/40 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Copy command to clipboard"
          >
            {copied ? (
              <>
                <Check size={11} className="text-emerald-400" />
                <span className="text-[10px] text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy size={11} />
                <span className="text-[10px]">Copy</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#skills"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="mt-12 text-white/20 hover:text-sky-300/60 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </motion.a>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
