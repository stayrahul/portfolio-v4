"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  RotateCcw,
  User,
  GripHorizontal,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Bot
} from "lucide-react";
import { quickChatPrompts } from "@/data/portfolioData";
import { copyToClipboard } from "@/lib/clipboard";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

let messageIdCounter = 0;
const createMsgId = (prefix: string) => `${prefix}_${++messageIdCounter}`;

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi! I'm **stayrahul AI** (Rahul Kushwaha). 👋\n\nAsk me anything:\n• **Education**: Quest College (BCSIT), CCRC (+2), Adhunik (SEE)\n• **15+ Projects & Active Builds**: Simraungadh App, Hostel Management, Face ID for Mac, PocketOps, Ice & Fire Cafe\n• **Tech Stack & Skills**: Next.js, React, TypeScript\n• **Contact & Socials**`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: `Conversation reset! Ask me anything about Rahul's education, projects, or background.`,
      },
    ]);
  };

  const handleCopy = async (id: string, text: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: createMsgId("user"),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantId = createMsgId("assistant");
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const allMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!res.ok) {
        throw new Error("Network response error");
      }

      if (!res.body) {
        throw new Error("No response body");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      const chunks: string[] = [];

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        chunks.push(chunk);
        const currentContent = chunks.join("");

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: currentContent } : msg
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "I couldn't reach the server right now. Feel free to contact Rahul directly at [rahul7926963@gmail.com](mailto:rahul7926963@gmail.com) or WhatsApp at [+977 9822228722](https://wa.me/9779822228722)!",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  // Simple formatting helper for markdown links, bold, bullet points
  const formatMessage = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Parse markdown links [text](url)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const formattedLine = line.replace(
        linkRegex,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-300 underline underline-offset-2 hover:text-sky-200 transition-colors">$1</a>'
      );

      // Parse bold **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const withBold = formattedLine.replace(
        boldRegex,
        '<strong class="text-white font-semibold">$1</strong>'
      );

      if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
        return (
          <li
            key={idx}
            className="ml-3 my-0.5 list-disc marker:text-sky-400"
            dangerouslySetInnerHTML={{ __html: withBold.replace(/^[•-]\s*/, "") }}
          />
        );
      }

      if (line.trim().match(/^\d+\.\s/)) {
        return (
          <div
            key={idx}
            className="my-1 font-medium text-white/90"
            dangerouslySetInnerHTML={{ __html: withBold }}
          />
        );
      }

      if (!line.trim()) {
        return <div key={idx} className="h-1" />;
      }

      return (
        <p
          key={idx}
          className="my-0.5 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: withBold }}
        />
      );
    });
  };

  return (
    <>
      {/* ── Compact Launcher Tab (Floating in bottom-right) ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40">
        <motion.button
          onClick={handleToggle}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-[#050a14]/90 hover:bg-[#081224] text-white text-xs font-mono font-semibold tracking-wider border border-sky-400/40 hover:border-sky-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.7),0_0_28px_rgba(56,189,248,0.45)] transition-all cursor-pointer backdrop-blur-xl group"
          aria-label="Toggle AI Assistant"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles size={13} className="text-sky-400 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold text-white/90 group-hover:text-white">Ask AI</span>
        </motion.button>
      </div>

      {/* ── Smaller & Refined Chatbot Modal Tab (Draggable) ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-14 right-2.5 sm:bottom-16 sm:right-5 z-50 pointer-events-none max-w-[calc(100vw-1.25rem)]">
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.05}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`pointer-events-auto rounded-2xl bg-[#060c18]/95 backdrop-blur-2xl border border-sky-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.15)] overflow-hidden specular-border flex flex-col ${
                isExpanded
                  ? "w-[calc(100vw-1.25rem)] sm:w-[460px] h-[640px] max-h-[85vh]"
                  : "w-[calc(100vw-1.25rem)] sm:w-[350px] md:w-[365px] h-[470px] max-h-[76vh]"
              }`}
            >
              {/* Header with Integrated Drag Handle */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.07] bg-white/[0.02] cursor-grab active:cursor-grabbing select-none">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[1px] flex items-center justify-center shrink-0">
                    <div className="w-full h-full rounded-full bg-[#050a14] flex items-center justify-center">
                      <Sparkles size={11} className="text-sky-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white tracking-wide font-display">
                        stayrahul AI
                      </span>
                    </div>
                    <p className="text-[9px] text-white/40 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online</span>
                    </p>
                  </div>
                </div>

                {/* Controls & Drag Icon */}
                <div className="flex items-center gap-1 text-white/40">
                  <div className="p-1 text-white/20 hover:text-white/40" title="Drag to move">
                    <GripHorizontal size={13} />
                  </div>
                  <button
                    onClick={handleClear}
                    title="Reset chat"
                    className="p-1 rounded-md hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                  >
                    <RotateCcw size={12} />
                  </button>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    title={isExpanded ? "Collapse" : "Expand"}
                    className="p-1 rounded-md hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer hidden sm:block"
                  >
                    {isExpanded ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close"
                    className="p-1 rounded-md hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Messages Body */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2.5 scrollbar-thin text-[11.5px]">
                {messages.map((m) => {
                  const isUser = m.role === "user";
                  return (
                    <div
                      key={m.id}
                      className={`flex items-start gap-1.5 ${
                        isUser ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                          isUser
                            ? "bg-sky-400 text-[#050a14] font-bold"
                            : "bg-white/[0.06] border border-white/10 text-sky-300"
                        }`}
                      >
                        {isUser ? <User size={10} /> : <Bot size={10} />}
                      </div>

                      <div className="max-w-[86%] flex flex-col group">
                        <div
                          className={`rounded-2xl px-3 py-2 text-[11.5px] leading-relaxed ${
                            isUser
                              ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-tr-xs shadow-sm"
                              : "bg-white/[0.04] border border-white/[0.07] text-white/85 rounded-tl-xs"
                          }`}
                        >
                          {m.content ? (
                            formatMessage(m.content)
                          ) : (
                            <div className="flex items-center gap-1.5 py-1 px-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"
                                style={{ animationDelay: "180ms" }}
                              />
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"
                                style={{ animationDelay: "360ms" }}
                              />
                            </div>
                          )}
                        </div>

                        {/* Copy action for assistant response */}
                        {!isUser && m.content && (
                          <div className="flex items-center gap-1 mt-0.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleCopy(m.id, m.content)}
                              className="p-0.5 rounded text-[9px] font-mono text-white/40 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                              title="Copy response"
                            >
                              {copiedId === m.id ? (
                                <>
                                  <Check size={9} className="text-emerald-400" />
                                  <span className="text-emerald-400 text-[8px]">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy size={9} />
                                  <span className="text-[8px]">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts Chips */}
              <div className="px-2.5 py-1.5 border-t border-white/[0.05] bg-white/[0.01]">
                <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                  {quickChatPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(prompt)}
                      disabled={isLoading}
                      className="whitespace-nowrap px-2.5 py-1 rounded-full text-[9.5px] font-mono text-white/55 bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/40 hover:text-sky-300 hover:bg-sky-400/[0.04] transition-all cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSubmit}
                className="p-2.5 border-t border-white/[0.06] bg-[#050a14]/90 flex items-center gap-1.5"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about college, projects, stack..."
                  disabled={isLoading}
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] focus:border-sky-400/50 rounded-full px-3 py-1.5 text-[11.5px] text-white placeholder:text-white/30 focus:outline-none transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-7 h-7 rounded-full bg-sky-400 hover:bg-sky-300 text-[#050a14] disabled:opacity-25 transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                  aria-label="Send message"
                >
                  <Send size={11} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
