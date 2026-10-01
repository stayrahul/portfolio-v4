"use client";

import { statsData } from "@/data/portfolioData";
import {
  Code2,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";
import { CardTilt } from "../ui/CardTilt";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Sparkles,
  Layers,
  Zap,
};

export const StatsBento = () => {
  return (
    <section id="stats" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="section-line w-12 mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white font-display">
            Impact & Metrics<span className="text-sky-400">.</span>
          </h2>
          <p className="mt-2 text-xs md:text-sm text-white/50 font-mono tracking-wider max-w-sm">
            Engineering benchmarks across production platforms, web systems, and creative tools.
          </p>
        </div>

        {/* 4 Stat Cards: STRICTLY 2 in row on phone, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {statsData.map((stat) => {
            const Icon = iconMap[stat.iconName] || Zap;
            return (
              <div
                key={stat.id}
                className="h-full"
              >
                <CardTilt className="glass-card specular-border p-4 sm:p-6 flex flex-col justify-between h-full group hover:border-sky-400/30 rounded-2xl">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      0{stat.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-1 group-hover:text-sky-300 transition-colors font-display">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-1 font-light line-clamp-2">
                      {stat.subtext}
                    </p>
                  </div>
                </CardTilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
