import type { Metadata } from "next";
import { Journey } from "@/components/sections/Journey";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AIAssistant } from "@/components/ui/AIAssistant";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Journey & Education",
  description:
    "Complete academic pedigree and career journey of stayrahul (Rahul Kushwaha): BCSIT at Quest International College, +2 Science at CCRC, and Adhunik Rastriya Secondary School.",
  keywords: [
    "Rahul Kushwaha education",
    "stayrahul education",
    "Quest International College BCSIT",
    "Capital College and Research Centre CCRC",
    "Adhunik Rastriya Secondary School Hetauda",
    "stayrahul career milestones",
    "Nepal developer resume"
  ],
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#050a14] w-full overflow-x-hidden text-white relative selection:bg-sky-400/30 selection:text-white pt-24">
      <ScrollProgress />
      <Navbar />

      {/* Header Breadcrumb */}
      <section className="relative pt-12 pb-2 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-white/60 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-sky-400/30 transition-all cursor-pointer group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <span className="text-white/20 text-xs font-mono">/</span>
          <span className="text-sky-300 text-xs font-mono">Education & Milestones</span>
        </div>

        {/* Intro */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
            <GraduationCap size={13} />
            <span>Academic Qualifications & Career Trajectory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white font-display">
            The Roadmap of Growth<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Tracing the path from foundational curiosity in Hetauda to rigorous scientific discipline in Kathmandu, and advanced computer science in Lalitpur.
          </p>
        </div>
      </section>

      {/* Journey & Education Component */}
      <Journey />

      <Footer />
      <AIAssistant />
    </main>
  );
}
