"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, [role='button'], .glass-card, .clickable")
      );
      setIsHovered(isInteractive);

      const isSpecialTarget = Boolean(
        target.closest("button, a, [role='button']")
      );
      setIsPointer(isSpecialTarget);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Spring Follower */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.9 : isHovered ? 1.4 : 1,
          borderColor: isPointer
            ? "rgba(56, 189, 248, 0.7)"
            : isHovered
            ? "rgba(129, 140, 248, 0.5)"
            : "rgba(56, 189, 248, 0.3)",
          backgroundColor: isPointer
            ? "rgba(56, 189, 248, 0.08)"
            : "rgba(56, 189, 248, 0.02)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="w-8 h-8 rounded-full border border-sky-400/40 backdrop-blur-[0.5px] pointer-events-none transition-colors"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] pointer-events-none"
      />
    </div>
  );
};
