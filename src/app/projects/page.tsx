import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AIAssistant } from "@/components/ui/AIAssistant";
import Link from "next/link";
import { ArrowLeft, Sparkles, FolderGit2, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "All 15+ Projects & Active Builds",
  description:
    "Explore 15+ production web applications, active builds, commercial platforms, AI tools, and creative portfolios engineered by stayrahul (Rahul Kushwaha).",
  keywords: [
    "stayrahul projects",
    "Rahul Kushwaha projects",
    "Simraungadh App",
    "Hostel Management App",
    "Face ID for Mac",
    "PocketOps DevOps",
    "Ice & Fire Cafe Simraungadh",
    "ChatBot AI Gemini",
    "Octave Event Esports",
    "Rabindra Store Wholesale",
    "Portfolio v4",
    "Full Stack Next.js projects"
  ],
};

export default function ProjectsPage() {
  const liveCount = projectsData.filter((p) => p.status === "Live").length;
  const activeCount = projectsData.filter((p) => p.status?.includes("Active")).length;

  return (
    <main className="min-h-screen bg-[#050a14] w-full overflow-x-hidden text-white relative selection:bg-sky-400/30 selection:text-white pt-24">
      <ScrollProgress />
      <Navbar />

      {/* Hero Header for Projects */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-white/60 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-sky-400/30 transition-all cursor-pointer group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <span className="text-white/20 text-xs font-mono">/</span>
          <span className="text-sky-300 text-xs font-mono">Projects Showcase</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs font-mono mb-4">
            <Sparkles size={12} />
            <span>Complete Engineering Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white font-display">
            Every Project I&apos;ve Shipped<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
            From commercial client platforms like Ice &amp; Fire Cafe and Rabindra Store, to real-time AI tools and progressive design portfolios.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
            <div className="flex items-center gap-2">
              <FolderGit2 size={14} className="text-sky-400" />
              <span className="text-white/40">Total Projects:</span>
              <span className="text-white font-bold">{projectsData.length}+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40">Active Build:</span>
              <span className="text-emerald-300 font-bold">{activeCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-purple-400" />
              <span className="text-white/40">Live Production:</span>
              <span className="text-purple-300 font-bold">{liveCount}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid with Search & Filters */}
      <Projects isFeaturedOnly={false} />

      <Footer />
      <AIAssistant />
    </main>
  );
}
