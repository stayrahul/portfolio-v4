"use client";

import { motion } from "framer-motion";
import { selfData } from "@/data/portfolioData";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: selfData.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: selfData.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: selfData.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: selfData.socials.instagram, label: "Instagram" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center text-white overflow-hidden">

      {/* ── Ambient Light ── */}
      <div className="pointer-events-none">
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20 opacity-60" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full opacity-40" fill="#38bdf8" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] opacity-25" fill="#818cf8" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-[#050a14] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#050a14)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" style={{ backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a14]/60 to-[#050a14] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center pt-32 pb-16">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-pill mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
          </span>
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-sky-300/90">
            Creative Developer & Vibecoder
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          className="group relative mb-8"
        >
          <div className="absolute -inset-3.5 bg-gradient-to-tr from-sky-400/50 via-indigo-500/40 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-sky-400/60 via-indigo-500/40 to-purple-500/30 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#050a14]">
              <Image
                src="/profile.png"
                alt={selfData.name}
                fill
                priority
                sizes="(max-width: 768px) 112px, 144px"
                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-[#050a14] ring-2 ring-sky-400/30 text-sky-300">
            <Code2 size={14} />
          </div>
        </motion.div>

        {/* Name */}
        <TextGenerateEffect
          className="mb-5 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white"
          words={selfData.name}
        />

        {/* Bio */}
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/55 max-w-lg mx-auto leading-relaxed font-light mb-10"
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
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-sky-400 text-[#050a14] font-bold text-xs uppercase tracking-widest hover:bg-sky-300 transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full glass-pill text-white/80 font-semibold text-xs uppercase tracking-widest hover:text-white flex items-center justify-center gap-2"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 mt-10"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-white/40 hover:text-sky-300 hover:bg-white/[0.04] transition-all duration-300"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </a>
          ))}
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
    </section>
  );
};
