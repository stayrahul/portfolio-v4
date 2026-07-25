"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolioData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ${
            scrolled 
              ? "bg-[#030712]/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] py-3 px-6 rounded-full max-w-3xl" 
              : "bg-transparent py-4 px-2 max-w-full"
          }`}
        >
          <Link href="/" className="text-xl font-black tracking-tighter text-white z-50 flex items-center gap-1.5 group">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#06b6d4]" />
            <span className="group-hover:text-cyan-400 transition-colors">RK</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.link}
                className="text-xs font-mono font-semibold tracking-widest uppercase text-white/60 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <a 
              href="#contact"
              className="hidden md:flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-cyan-400 px-5 py-2.5 rounded-full hover:scale-105 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] group"
            >
              Let's Talk
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link 
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black tracking-tighter uppercase text-white hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black bg-cyan-400 px-8 py-4 rounded-full active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
