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
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6 rounded-full max-w-3xl" 
              : "bg-transparent py-4 px-2 max-w-full"
          }`}
        >
          <Link href="/" className="text-xl font-black tracking-tighter text-white z-50 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            RK
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.link}
                className="text-xs font-mono font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <a 
              href="#contact"
              className="hidden md:flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-white px-5 py-2.5 rounded-full hover:scale-105 hover:bg-primary hover:text-white transition-all group"
            >
              Start Project
              <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2 rounded-full bg-white/5 border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black tracking-tighter uppercase text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black bg-white px-8 py-4 rounded-full active:scale-95 transition-all"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
