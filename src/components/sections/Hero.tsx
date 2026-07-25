"use client";

import { motion } from "framer-motion";
import { selfData } from "@/data/portfolioData";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center text-white pt-24 pb-16 overflow-hidden">

      {/* Background Decor & Spotlights */}
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full opacity-60" fill="#3b82f6" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] opacity-40" fill="#6366f1" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none z-0" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.08] pointer-events-none" style={{ backgroundSize: '80px 80px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center mt-6 md:mt-12">

        {/* Kinetic Background Watermark Text */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[18vw] font-black opacity-[0.025] pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap uppercase">
          {selfData.name.split(' ')[0]}
        </h2>

        {/* Available for Work Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-lg"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-white/80">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Floating Avatar with Neon Glow */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="group relative mb-8 animate-float"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="relative w-36 h-36 md:w-48 md:h-48 p-1 rounded-full border border-white/20 bg-black/90 backdrop-blur-md overflow-hidden shadow-2xl">
            <Image
              src="/profile.png"
              alt={selfData.name}
              fill
              priority
              sizes="(max-width: 768px) 144px, 192px"
              className="object-cover rounded-full transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 p-2.5 rounded-full bg-black/80 border border-white/20 text-blue-400 backdrop-blur-md shadow-lg">
            <Terminal size={18} />
          </div>
        </motion.div>

        {/* Roles Badge & Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-blue-500" />
          <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-blue-400 font-mono font-bold">
            {selfData.roles.join(" • ")}
          </p>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-blue-500" />
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
            Building next-generation digital products at the intersection of <span className="text-white font-medium underline decoration-blue-500 decoration-2 underline-offset-4">design & scalable engineering</span>.
          </p>
        </motion.div>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-md"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Quick Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href={selfData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={selfData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={selfData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={18} />
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-12 text-white/40 hover:text-blue-400 transition-colors flex justify-center cursor-pointer"
        >
          <a href="#skills" aria-label="Scroll to Skills section">
            <ArrowDown size={22} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
