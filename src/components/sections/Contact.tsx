"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Clock, Send, Check } from "lucide-react";
import { useState, FormEvent } from "react";
import { selfData } from "@/data/portfolioData";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(selfData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setMessageText("");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-sky-500/[0.05] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="section-line w-16 mb-8" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white"
          >
            Get in Touch<span className="text-sky-400">.</span>
          </motion.h2>
          <p className="mt-4 text-xs md:text-sm text-white/40 font-mono tracking-wider max-w-sm">
            Have an idea, want to connect, or just say hi? I'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 glass-card"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-[#050a14] font-bold uppercase tracking-widest text-xs py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Sending... <Clock size={14} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                >
                  <CheckCircle2 size={14} />
                  Sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2.5 text-white/50 hover:text-sky-300 transition-colors group cursor-pointer"
                title="Copy email"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-sky-400/25 transition-all">
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Mail size={13} />}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-mono">{selfData.email}</span>
                  <span className="text-[10px] font-mono text-sky-400/50">{copiedEmail ? "Copied!" : "Click to copy"}</span>
                </div>
              </button>

              <div className="flex items-center gap-2.5 text-white/50">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <MapPin size={13} />
                </div>
                <span className="text-xs font-mono">{selfData.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
