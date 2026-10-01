"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolioData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let last = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 25;
      if (isScrolled !== last) {
        last = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-3 sm:px-4 pointer-events-none">
        <header
          className={`mx-auto flex items-center justify-between pointer-events-auto py-2 px-4 sm:py-2.5 sm:px-5 rounded-full transition-all duration-300 specular-border ${
            scrolled
              ? "bg-[#050a14]/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.03] backdrop-blur-md border border-white/[0.08]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-1 z-10 group"
          >
            <span className="text-base sm:text-lg font-black tracking-tighter">
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                stay
              </span>
              <span className="text-white/95 group-hover:text-white transition-colors">
                rahul
              </span>
              <span className="text-sky-400 ml-[1px]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3 z-10">
            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden sm:flex glass-btn-primary px-3.5 py-1.5 text-[11px] uppercase tracking-wider group"
            >
              <span>Contact</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white/80 p-2 rounded-full hover:bg-white/[0.08] transition-colors cursor-pointer active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[#050a14]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden px-6"
          >
            <Link
              href="/"
              onClick={handleNavClick}
              className="text-xl font-bold tracking-tight text-white/80 hover:text-sky-300 transition-colors py-1 cursor-pointer active:text-sky-400"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={handleNavClick}
                className="text-xl font-bold tracking-tight text-white/80 hover:text-sky-300 transition-colors py-1 cursor-pointer active:text-sky-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={handleNavClick}
              className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#050a14] bg-sky-400 px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95 transition-transform"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
