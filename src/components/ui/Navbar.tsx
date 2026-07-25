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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 pointer-events-none">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mx-auto flex items-center justify-between pointer-events-auto py-2.5 px-5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#050a14]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center z-10 group">
            <span className="text-lg font-black tracking-tighter">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">R</span>
              <span className="text-white/90 group-hover:text-white transition-colors">ahul</span>
              <span className="text-sky-400 ml-[1px]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase text-white/50 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 z-10">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#050a14] bg-sky-400 hover:bg-sky-300 px-4 py-1.5 rounded-full transition-all duration-300 group"
            >
              Contact
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              className="md:hidden text-white/70 p-2 rounded-full hover:bg-white/[0.05] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050a14]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-white/80 hover:text-sky-300 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#050a14] bg-sky-400 px-8 py-3.5 rounded-full"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
