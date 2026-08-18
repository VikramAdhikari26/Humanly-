"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Sliders,
  ShieldCheck,
  Zap,
  MessageSquare,
  Layers,
} from "lucide-react";
import Card from "./Card";

const features = [
  {
    icon: <Sliders className="h-6 w-6 text-blue-400" />,
    title: "Tone Control",
    description:
      "Fine-tune the output voice—from academic research and professional drafting to conversational.",
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-400" />,
    title: "Rewrite Strength",
    description:
      "Adjust how radically the text transforms while preserving the original semantic intent.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-sky-400" />,
    title: "Natural Sentence Flow",
    description:
      "Eliminates rigid structures and injects organic rhythm, burstiness, and phrasing.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-teal-400" />,
    title: "AI Detection Reduction",
    description:
      "Lowers synthetic probability scores by introducing natural linguistic variations.",
  },
  {
    icon: <PenTool className="h-6 w-6 text-cyan-400" />,
    title: "Context Preservation",
    description:
      "Maintains factual accuracy and core arguments through advanced semantic mapping.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    title: "Real-time Processing",
    description:
      "Watch the text evolve instantly via an optimized, low-latency rewriting pipeline.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative z-10 bg-[#020617] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 font-display text-4xl text-white md:text-5xl">
            Engineered for{" "}
            <span className="italic text-cyan-400">
              authenticity
            </span>
          </h2>

          <p className="text-lg font-light text-slate-400">
            Our models analyze semantics, adjust phrasing rhythm,
            and synthesize natural text structures while preserving
            core intent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={false}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Card
                variant="feature"
                className="group relative h-full overflow-hidden p-8 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className="relative z-10"
                  style={{
                    transform: "translateZ(30px)",
                  }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A102A] to-blue-900/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    {feature.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold tracking-wide text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}