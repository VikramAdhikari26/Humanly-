"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Card from "./Card";

export function AITransformationShowcase() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#020617] py-32 perspective-[1200px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.05),transparent)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <Sparkles className="h-4 w-4" />
              Before &amp; After
            </div>

            <h2 className="font-['Playfair_Display'] text-4xl text-white md:text-5xl">
              The anatomy of{" "}
              <span className="italic text-cyan-400">human</span> text
            </h2>
          </motion.div>
        </div>

        <div
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              rotateX: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex flex-col items-stretch gap-8 lg:flex-row"
          >
            {/* AI Card */}
            <Card
              variant="feature"
              className="group relative flex-1 overflow-hidden bg-gradient-to-br from-[#050A1A] to-[#0A0F25] p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-red-500/5 blur-2xl" />

              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-widest text-slate-400">
                  Raw AI Output
                </span>

                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                  Robotic
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed text-slate-300">
                  <span className="rounded bg-red-500/10 px-1 text-red-200">
                    It is crucial to note that
                  </span>{" "}
                  the{" "}
                  <span className="rounded bg-red-500/10 px-1 text-red-200">
                    ever-evolving landscape
                  </span>{" "}
                  of digital marketing requires a{" "}
                  <span className="rounded bg-red-500/10 px-1 text-red-200">
                    multifaceted approach
                  </span>
                  .
                </p>

                <p className="text-lg font-light leading-relaxed text-slate-300">
                  Furthermore, businesses must{" "}
                  <span className="rounded bg-red-500/10 px-1 text-red-200">
                    leverage synergistic strategies
                  </span>{" "}
                  to{" "}
                  <span className="rounded bg-red-500/10 px-1 text-red-200">
                    unlock unprecedented growth
                  </span>
                  .
                </p>
              </div>
            </Card>

            {/* Arrow */}
            <div className="relative z-20 hidden w-16 shrink-0 items-center justify-center lg:-mx-12 lg:flex">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#020617] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            {/* Human Card */}
            <Card
              variant="gradient"
              className="group relative flex-1 overflow-hidden p-8"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-cyan-500/10 blur-3xl" />

              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                  Humanly Output
                </span>

                <span className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <Sparkles className="h-3 w-3" />
                  Natural
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium leading-relaxed text-white">
                  <span className="text-cyan-300">
                    Digital marketing changes fast,
                  </span>{" "}
                  so your strategy needs to adapt.
                </p>

                <p className="text-lg font-medium leading-relaxed text-white">
                  If you want to grow, you need teams that{" "}
                  <span className="text-cyan-300">
                    actually work together.
                  </span>
                </p>
              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 right-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020617]/80 p-4 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                  <span className="font-bold text-cyan-400">1.0</span>
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    Authenticity Index
                  </div>

                  <div className="text-xs text-slate-400">
                    High Perplexity
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}