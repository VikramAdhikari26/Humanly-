"use client";

import { motion } from "framer-motion";
import Card from "./Card";

export function ProjectVision() {
  return (
    <section className="relative flex items-center justify-center bg-[#020617] py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Card
            hover={false}
            variant="glass"
            className="px-10 py-16 text-center md:px-16"
          >
            <div className="mx-auto mb-12 h-px w-16 bg-cyan-500/50" />

            <h2 className="font-['Playfair_Display'] text-3xl font-light leading-relaxed text-white md:text-5xl">
              An experimental AI platform focused on transforming robotic
              AI-generated content into natural human communication using
              contextual rewriting and local language models.
            </h2>

            <div className="mx-auto mt-12 h-px w-16 bg-cyan-500/50" />

            <div className="mt-16 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-slate-500">
              <span>Project Humanly</span>

              <span className="mx-2 h-1 w-1 rounded-full bg-cyan-500/50" />

              <span>Est. 2026</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}