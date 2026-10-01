"use client";

import { selfData } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: FaGithub, href: selfData.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: selfData.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: selfData.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: selfData.socials.instagram, label: "Instagram" },
  { icon: FaWhatsapp, href: selfData.socials.whatsapp, label: "WhatsApp" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 sm:py-8 bg-[#040812] border-t border-white/[0.06] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Link href="/" className="font-black text-sm tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-sky-400">stay</span>
            <span>rahul</span>
            <span className="text-sky-400">.</span>
          </Link>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-xs font-mono text-white/40">
            &copy; {new Date().getFullYear()} Rahul Kushwaha • All rights reserved
          </span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full text-white/40 hover:text-sky-300 hover:bg-white/[0.05] transition-colors"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>

          <span className="text-white/10 hidden sm:inline">|</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs font-mono text-white/40 hover:text-sky-300 transition-colors cursor-pointer group"
          >
            <span>Top</span>
            <ArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
