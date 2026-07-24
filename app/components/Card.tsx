"use client";

import { ReactNode } from "react";

type CardVariant = "glass" | "feature" | "gradient";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = "glass",
  className = "",
  hover = true,
}: CardProps) {
  const variants = {
    glass:
      "bg-white/[0.06] border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.15)]",

    feature:
      "bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-lg",

    gradient:
      "bg-gradient-to-br from-blue-900/20 to-[#0A0F25] border border-cyan-500/20 shadow-[0_0_50px_rgba(37,99,235,0.12)]",
  };

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        transition-all
        duration-300
        ${hover ? "hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]" : ""}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}