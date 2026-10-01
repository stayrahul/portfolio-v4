"use client";

import React, { useRef, useCallback } from "react";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  onClick?: () => void;
}

export const CardTilt = ({
  children,
  className = "",
  maxTilt = 3.5,
  onClick,
}: CardTiltProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!rectRef.current || !cardRef.current) return;
      const rect = rectRef.current;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width - 0.5) * maxTilt;
      const yPct = (y / rect.height - 0.5) * -maxTilt;

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = `perspective(800px) rotateX(${yPct.toFixed(1)}deg) rotateY(${xPct.toFixed(1)}deg) translateY(-2px)`;
        }
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transition: "transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.15s ease, box-shadow 0.15s ease",
        willChange: "transform",
      }}
      className={`relative overflow-hidden transform-gpu ${className}`}
    >
      {children}
    </div>
  );
};
