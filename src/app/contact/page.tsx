import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AIAssistant } from "@/components/ui/AIAssistant";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Collaboration Hub",
  description:
    "Direct contact channels for stayrahul (Rahul Kushwaha). Send messages directly to Gmail, chat on WhatsApp, or hire for full-stack web development.",
  keywords: [
    "Contact stayrahul",
    "Hire Rahul Kushwaha",
    "stayrahul email",
    "stayrahul whatsapp",
    "Full-stack developer Nepal contact",
    "hire Next.js developer"
  ],
};

export default function ContactPage() {
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
          <span className="text-sky-300 text-xs font-mono">Contact &amp; Collaboration</span>
        </div>

        {/* Intro */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
            <Sparkles size={12} />
            <span>Open for Freelance &amp; Roles</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white font-display">
            Direct Transmission<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Every submission through this form dispatches instantly to my primary Gmail. Feel free to send inquiries, project scopes, or casual tech greetings.
          </p>
        </div>
      </section>

      {/* Contact Suite */}
      <Contact />

      <Footer />
      <AIAssistant />
    </main>
  );
}
