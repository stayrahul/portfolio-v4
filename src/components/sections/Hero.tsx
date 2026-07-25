"use client";

import { motion } from "framer-motion";
import { selfData } from "@/data/portfolioData";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const stats = [
  { label: "Projects Completed", value: "9+" },
  { label: "Tech Stack Tools", value: "13+" },
  { label: "Client Satisfaction", value: "100%" }
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center text-white pt-24 pb-16 overflow-hidden">

      {/* Ambient Decor & Spotlights */}
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full opacity-60" fill="#06b6d4" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] opacity-40" fill="#3b82f6" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-[#030712] [mask-image:radial-gradient(ellipse_at_center,transparent_15%,#030712)] pointer-events-none z-0" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07] pointer-events-none" style={{ backgroundSize: '70px 70px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center mt-4 md:mt-8">

        {/* Kinetic Watermark Text */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] md:text-[18vw] font-black opacity-[0.025] pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap uppercase">
          {selfData.name.split(' ')[0]}
        </h2>

        {/* Available for Work Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md mb-8 hover:border-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-cyan-300">
            Open for freelance & full-time roles
          </span>
        </motion.div>

        {/* Avatar with Multi-layer Glowing Ring */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="group relative mb-8 animate-float"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-700" />
          <div className="relative w-36 h-36 md:w-48 md:h-48 p-1 rounded-full border-2 border-cyan-400/40 bg-black/90 backdrop-blur-md overflow-hidden shadow-2xl">
            <Image
              src="/profile.png"
              alt={selfData.name}
              fill
              priority
              sizes="(max-width: 768px) 144px, 192px"
              className="object-cover rounded-full transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 p-2.5 rounded-full bg-[#030712] border border-cyan-500/40 text-cyan-400 backdrop-blur-md shadow-lg">
            <Code2 size={18} />
          </div>
        </motion.div>

        {/* Roles Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-500" />
          <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-cyan-400 font-mono font-bold">
            {selfData.roles.slice(0, 3).join(" • ")}
          </p>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-cyan-500" />
        </motion.div>

        {/* Dynamic Name Heading */}
        <TextGenerateEffect
          className="mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-white drop-shadow-2xl"
          words={selfData.name}
        />

        {/* Bio Paragraph */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-sm md:text-lg lg:text-xl font-light tracking-tight text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting scalable web architectures and ultra-responsive digital products with <span className="text-cyan-300 font-medium underline decoration-cyan-500 decoration-2 underline-offset-4">aesthetic precision</span>.
          </p>
        </motion.div>

        {/* Stat Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8 my-8 py-4 px-6 md:px-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl max-w-xl shadow-lg"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-xl md:text-3xl font-black font-mono text-cyan-400 tracking-tight">{s.value}</span>
              <span className="text-[9px] md:text-[11px] font-mono text-white/50 uppercase tracking-widest mt-0.5">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            Let's Collaborate
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href={selfData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={selfData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={selfData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href={selfData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            aria-label="Instagram Profile"
          >
            <FaInstagram size={18} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-10 text-white/40 hover:text-cyan-400 transition-colors flex justify-center cursor-pointer"
        >
          <a href="#skills" aria-label="Scroll to Skills section">
            <ArrowDown size={22} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
