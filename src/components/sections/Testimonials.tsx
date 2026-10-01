"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/data/portfolioData";
import { Quote, Star } from "lucide-react";
import { CardTilt } from "../ui/CardTilt";

export const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="section-line w-16 mb-8" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white font-display"
          >
            Endorsements<span className="text-sky-400">.</span>
          </motion.h2>
          <p className="mt-4 text-xs md:text-sm text-white/40 font-mono tracking-wider max-w-sm">
            What founders, partners, and event directors have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.2, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <CardTilt className="glass-card specular-border p-6 sm:p-7 flex flex-col justify-between group hover:border-purple-400/30 relative h-full">
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-white/20 group-hover:text-purple-400/50 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6 italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/[0.05] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 p-[1.5px] flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#050a14] flex items-center justify-center font-bold text-xs text-white">
                    {item.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors font-display">
                    {item.name}
                  </h4>
                  <p className="text-[10px] font-mono text-white/40">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
