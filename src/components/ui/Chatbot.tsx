"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Sparkles, Palette } from "lucide-react";

const THEMES = [
  { id: 'lime', primary: 'bg-[#a3e635]', text: 'text-[#a3e635]', border: 'border-[#a3e635]', light: 'bg-[#a3e635]/20', hex: '#a3e635' },
  { id: 'emerald', primary: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', light: 'bg-emerald-500/20', hex: '#10b981' },
  { id: 'rose', primary: 'bg-rose-500', text: 'text-rose-500', border: 'border-rose-500', light: 'bg-rose-500/20', hex: '#f43f5e' },
  { id: 'indigo', primary: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', light: 'bg-indigo-500/20', hex: '#6366f1' },
  { id: 'amber', primary: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', light: 'bg-amber-500/20', hex: '#f59e0b' },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showThemes, setShowThemes] = useState(false);
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  
  const { messages, sendMessage, status } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    sendMessage({ text: input });
    setInput("");
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        style={{ backgroundColor: activeTheme.hex }}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full text-black shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/20 transition-all ${isOpen ? 'hidden' : 'block'}`}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Sparkles size={24} />
        </motion.div>
        
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border border-current animate-ping opacity-20" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[600px] max-h-[85vh] flex flex-col bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Top Gradient Glow */}
            <div 
              className="absolute top-0 left-0 right-0 h-32 opacity-20 pointer-events-none transition-colors duration-500" 
              style={{ background: `radial-gradient(circle at center top, ${activeTheme.hex}, transparent 70%)` }}
            />

            {/* Header */}
            <div className="relative flex items-center justify-between p-4 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${activeTheme.light} flex items-center justify-center border ${activeTheme.border} transition-colors duration-300`}>
                  <Bot size={20} className={activeTheme.text} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">AI Assistant</h3>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${activeTheme.primary} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${activeTheme.primary}`}></span>
                    </span>
                    Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button 
                    onClick={() => setShowThemes(!showThemes)}
                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    title="Change Theme"
                  >
                    <Palette size={16} />
                  </button>
                  
                  {/* Theme Picker Dropdown */}
                  <AnimatePresence>
                    {showThemes && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute right-0 top-full mt-2 p-2 bg-black/90 border border-white/10 rounded-2xl flex gap-2 shadow-xl backdrop-blur-xl"
                      >
                        {THEMES.map(theme => (
                          <button
                            key={theme.id}
                            onClick={() => { setActiveTheme(theme); setShowThemes(false); }}
                            className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${theme.id === activeTheme.id ? 'ring-2 ring-white scale-110' : ''}`}
                            style={{ backgroundColor: theme.hex }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 scroll-smooth">
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center px-4 opacity-70"
                >
                  <div className={`w-16 h-16 rounded-full ${activeTheme.light} flex items-center justify-center mb-4 border border-white/10`}>
                    <Bot size={32} className={activeTheme.text} />
                  </div>
                  <h4 className="text-white font-medium mb-2">How can I help?</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Ask me anything about Rahul's skills, experience, or recent projects.
                  </p>
                </motion.div>
              )}
              
              {messages.map((m) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={m.id} 
                  className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                    m.role === 'user' 
                      ? 'bg-white/10 border border-white/10' 
                      : `${activeTheme.light} border ${activeTheme.border} ${activeTheme.text}`
                  }`}>
                    {m.role === 'user' ? <User size={14} className="text-white/80" /> : <Bot size={14} />}
                  </div>
                  <div 
                    className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-lg backdrop-blur-md ${
                      m.role === 'user' 
                        ? `${activeTheme.primary} text-black rounded-tr-sm` 
                        : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-sm'
                    }`}
                  >
                    {m.parts ? m.parts.map((part, index) => part.type === 'text' ? <span key={index}>{part.text}</span> : null) : (m as { content?: string }).content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activeTheme.light} border ${activeTheme.border} ${activeTheme.text}`}>
                    <Bot size={14} />
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1.5">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      className={`w-1.5 h-1.5 rounded-full ${activeTheme.primary}`} 
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className={`w-1.5 h-1.5 rounded-full ${activeTheme.primary}`} 
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className={`w-1.5 h-1.5 rounded-full ${activeTheme.primary}`} 
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-14 py-3.5 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30 shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`absolute right-1.5 p-2.5 rounded-full text-black transition-all disabled:opacity-50 disabled:scale-100 ${
                    !input.trim() || isLoading ? 'bg-white/20 text-white/50' : `${activeTheme.primary} hover:scale-105 hover:shadow-lg`
                  }`}
                >
                  <Send size={16} className={(!input.trim() || isLoading) ? '' : 'translate-x-[1px] translate-y-[-1px]'} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

