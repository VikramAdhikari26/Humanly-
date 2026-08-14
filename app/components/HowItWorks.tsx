"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, FileText, Languages, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-slate-300" />,
    title: "Input AI Text",
    description: "Raw generation from external LLM sources.",
    glow: "bg-slate-500/20",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Analyze Tone & Structure",
    description: "Semantic mapping and predictability scoring.",
    glow: "bg-blue-500/20",
  },
  {
    icon: <Languages className="w-6 h-6 text-indigo-400" />,
    title: "Contextual Rewriting",
    description: "Injecting natural variation and perplexity.",
    glow: "bg-indigo-500/20",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    title: "Humanized Output",
    description: "Authentic, editorial-grade prose.",
    glow: "bg-cyan-500/20",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.5),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-24 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            PIPELINE ARCHITECTURE
          </h2>

          <h3 className="font-['Playfair_Display'] text-4xl text-white md:text-5xl">
            Transformation Workflow
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-slate-700 via-blue-700/40 to-cyan-500/40" />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="relative flex flex-col items-center group"
              >
                <div className="relative w-full max-w-md">
                  {/* Glow */}
                  <div
                    className={`absolute -inset-5 rounded-full blur-3xl ${step.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Card */}
                  <div className="relative flex items-center gap-5 rounded-3xl border border-white/10 bg-[#081225]/80 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      {step.icon}
                    </div>

                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-white">
                        {step.title}
                      </h4>

                      <p className="text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                    }}
                    className="mt-8 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#081225] text-slate-400"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}