"use client";

import { selfData } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const links = [
  { icon: FaGithub, href: selfData.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: selfData.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: selfData.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: selfData.socials.instagram, label: "Instagram" },
  { icon: FaFacebook, href: selfData.socials.facebook, label: "Facebook" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">

      {/* Top divider */}
      <div className="section-line w-full mb-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-16">

        {/* CTA + Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 leading-tight">
              Got an idea?<br />
              <span className="text-sky-400">Let's build it.</span>
            </h2>
            <p className="text-white/35 text-sm font-light leading-relaxed max-w-sm">
              Always open to connecting with fellow creators, discussing tech, or just vibing.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-medium text-white/30 mb-1">Connect</span>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/45 hover:text-sky-300 transition-colors"
              >
                <link.icon size={14} />
                <span className="text-sm font-medium tracking-wide">{link.label}</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 group-hover:translate-y-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 512 512">
              <defs>
                <linearGradient id="ft-g" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8"/>
                  <stop offset="50%" stopColor="#818cf8"/>
                  <stop offset="100%" stopColor="#c084fc"/>
                </linearGradient>
                <linearGradient id="ft-bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0c1629"/>
                  <stop offset="100%" stopColor="#050a14"/>
                </linearGradient>
              </defs>
              <rect width="512" height="512" rx="112" fill="url(#ft-bg)"/>
              <rect x="8" y="8" width="496" height="496" rx="104" fill="none" stroke="url(#ft-g)" strokeWidth="3" opacity="0.35"/>
              <path d="M168 120h120c52 0 88 36 88 84 0 38-22 66-56 78l72 110h-68l-64-102h-28v102h-64V120zm64 56v72h52c24 0 40-14 40-36s-16-36-40-36h-52z" fill="url(#ft-g)"/>
              <circle cx="380" cy="388" r="18" fill="url(#ft-g)" opacity="0.9"/>
            </svg>
            <span className="text-sm font-bold tracking-tight text-white/70">{selfData.name}</span>
          </div>

          <p className="text-white/25 text-[10px] font-mono tracking-wider">
            &copy; {new Date().getFullYear()} — Built with passion & code.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full text-white/30 hover:text-sky-300 hover:bg-white/[0.04] transition-all cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.012] select-none">
        <h1 className="text-[15vw] font-black uppercase whitespace-nowrap text-white leading-none">
          {selfData.name.split(" ")[0]}
        </h1>
      </div>
    </footer>
  );
};
