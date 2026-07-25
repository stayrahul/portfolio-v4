"use client";

import { selfData } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter mb-6">
              Have an idea? <br />
              <span className="text-primary">Let's build it.</span>
            </h2>
            <p className="text-white/40 max-w-sm text-sm font-light">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/30">Connect</p>
            <div className="flex flex-col gap-3">
              <a href={selfData.socials.github} target="_blank" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaGithub size={16} />
                <span className="text-sm font-semibold tracking-wide">GitHub</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
              </a>
              <a href={selfData.socials.linkedin} target="_blank" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaLinkedin size={16} />
                <span className="text-sm font-semibold tracking-wide">LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
              </a>
              <a href={selfData.socials.twitter} target="_blank" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaTwitter size={16} />
                <span className="text-sm font-semibold tracking-wide">Twitter</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
              </a>
              <a href={selfData.socials.instagram} target="_blank" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaInstagram size={16} />
                <span className="text-sm font-semibold tracking-wide">Instagram</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
              </a>
              <a href={selfData.socials.facebook} target="_blank" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <FaFacebook size={16} />
                <span className="text-sm font-semibold tracking-wide">Facebook</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-white/80 font-black tracking-tighter text-2xl flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {selfData.name}
          </p>
          <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} {selfData.name}. All rights reserved.
          </p>
        </div>
        
      </div>
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.015] select-none z-0">
        <h1 className="text-[15vw] font-black uppercase whitespace-nowrap text-white leading-none">
          {selfData.name.split(" ")[0]}
        </h1>
      </div>
    </footer>
  );
};
