"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { selfData } from "@/data/portfolioData";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-cyan-400 mb-6"
          />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white">
            Let's <span className="text-cyan-400">Connect.</span>
          </h2>
          <p className="mt-4 text-xs md:text-sm text-white/50 font-mono tracking-widest uppercase max-w-md">
            Have a project in mind or want to collaborate? Send a message below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-10 md:p-12 border border-white/10 bg-[#030712]/90 rounded-3xl backdrop-blur-2xl shadow-2xl"
          >
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-mono font-semibold pl-1">
                    Your Name
                  </label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Jane Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all text-sm placeholder:text-white/20 shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-mono font-semibold pl-1">
                    Email Address
                  </label>
                  <input 
                    required 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all text-sm placeholder:text-white/20 shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-mono font-semibold pl-1">
                  Project / Message Details
                </label>
                <textarea 
                  required 
                  rows={5} 
                  placeholder="Tell me about what you want to build or achieve..." 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all text-sm resize-none placeholder:text-white/20 shadow-inner"
                />
              </div>

              <button 
                disabled={isSubmitting}
                type="submit" 
                className="group relative flex items-center justify-center gap-3 bg-cyan-400 text-black font-bold uppercase tracking-[0.15em] text-xs md:text-sm py-5 rounded-2xl hover:bg-cyan-300 transition-all disabled:opacity-50 overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </span>
                {isSubmitting ? (
                  <Clock size={18} className="animate-spin text-current" />
                ) : (
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide"
                >
                  <CheckCircle2 size={18} />
                  Message sent successfully! I will respond to you shortly.
                </motion.div>
              )}
            </form>
            
            {/* Direct Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
              <a 
                href={`mailto:${selfData.email}`} 
                className="flex items-center gap-3 text-white/60 hover:text-cyan-300 transition-colors group"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-400/40">
                  <Mail size={16} />
                </div>
                <span className="text-xs md:text-sm font-mono tracking-wide">{selfData.email}</span>
              </a>

              <div className="flex items-center gap-3 text-white/60">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <MapPin size={16} />
                </div>
                <span className="text-xs md:text-sm font-mono tracking-wide uppercase">{selfData.location}</span>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};
