"use client";

import { motion } from "framer-motion";
import { Mail, Check, Sparkles, ArrowRight, Copy } from "lucide-react";
import { useState, FormEvent } from "react";
import { selfData } from "@/data/portfolioData";
import { soundManager } from "@/lib/sound";
import { copyToClipboard } from "@/lib/clipboard";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const topicPresets = [
  "New Project",
  "Freelance Opportunity",
  "Academic & Tech",
  "Creative Collaboration",
  "Coffee & Vibe"
];

interface ContactProps {
  isSimpleCTA?: boolean;
}

export const Contact = ({ isSimpleCTA = false }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(selfData.email);
    if (success) {
      soundManager.playSuccess();
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    if (!messageText || messageText.startsWith("Hi Rahul, I'd like to discuss")) {
      setMessageText(`Hi Rahul, I'd like to connect regarding ${topic.toLowerCase()}... `);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          topic: selectedTopic || "General Inquiry",
          message: messageText,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        soundManager.playSuccess();
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessageText("");
        setSelectedTopic(null);
      } else {
        throw new Error(data.error || "Unable to deliver message automatically.");
      }
    } catch (err: unknown) {
      soundManager.playError();
      const message = err instanceof Error ? err.message : "Delivery uplink encountered a timeout. You can email directly below.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Home Page Clean Minimal CTA Version
  if (isSimpleCTA) {
    return (
      <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] specular-border text-center flex flex-col items-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Work &amp; Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display mb-3">
              Get in Touch<span className="text-sky-400">.</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/55 max-w-md leading-relaxed font-light mb-8">
              Open for full-stack web engineering, client projects, and technical collaboration.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto glass-btn-primary px-8 py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 group active:scale-95 transition-transform"
              >
                <span>Open Contact Form</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto glass-btn px-6 py-3 text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2 text-white/80 active:scale-95 transition-transform cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-sky-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={selfData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass-btn px-5 py-3 text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2 text-emerald-300 hover:text-white active:scale-95 transition-transform"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dedicated /contact Page Full Form Version
  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-sky-500/[0.05] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0.2, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="p-6 sm:p-10 rounded-3xl glass-card specular-border"
        >
          {/* Quick Topic Chips */}
          <div className="mb-6">
            <label className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1 mb-2.5 flex items-center gap-1.5">
              <Sparkles size={12} className="text-sky-400" /> Topic of discussion:
            </label>
            <div className="flex flex-wrap gap-2">
              {topicPresets.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleSelectTopic(t)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${selectedTopic === t
                    ? "bg-sky-400 text-[#050a14] font-semibold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                    : "glass-pill text-white/60 hover:text-white"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sushant Kushwaha"
                  className="w-full glass-input px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-white/20 focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="contact-email" className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="w-full glass-input px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-white/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-message" className="text-[11px] uppercase tracking-wider text-white/45 font-mono font-medium pl-1">
                Message Payload
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Share project details, requirements, or inquiries..."
                className="w-full glass-input px-4 py-2.5 rounded-xl text-xs text-white placeholder:text-white/20 focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full glass-btn-primary py-3 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? "Transmitting..." : "Send Message to Gmail"}</span>
              <Mail size={13} />
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                <Check size={14} />
                <span>Message transmitted successfully to Rahul&apos;s Gmail inbox!</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono text-center">
                <span>{errorMsg}</span>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
