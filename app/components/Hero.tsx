"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import Button from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#020617] pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />

        <div className="absolute right-20 top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-10 left-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-0 left-0 w-full opacity-40">
          <svg
            viewBox="0 0 1440 320"
            className="h-auto w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(59,130,246,0.15)"
              d="M0,160L80,170.7C160,181,320,203,480,202.7C640,203,800,181,960,186.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-25">
          <svg
            viewBox="0 0 1440 320"
            className="h-auto w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(6,182,212,0.18)"
              d="M0,256L120,240C240,224,480,192,720,208C960,224,1200,288,1320,309.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid min-h-[85svh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}
        <div>
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-slate-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium">
              AI Text Humanization Platform
            </span>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Make AI
            <br />
            sound
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              like you.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-9 text-slate-400">
            Humanly transforms robotic AI-generated writing into natural,
            authentic, and human-like communication with advanced contextual
            rewriting and tone adaptation.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Button href="/dashboard" variant="primary">
              <>
                Launch Humanly
                <ArrowRight className="h-5 w-5" />
              </>
            </Button>

            <Button variant="secondary">
              Explore Demo
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_0_80px_rgba(59,130,246,0.18)] backdrop-blur-2xl">
            <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[80px]" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              <div className="mb-10 space-y-4">
                <div className="h-3 w-40 rounded-full bg-white/10" />
                <div className="h-3 w-72 rounded-full bg-white/10" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_0_30px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Analyzing
                  </span>
                </div>

                <p className="text-lg italic leading-8 text-slate-400">
                  “It is our paramount objective to ensure synergistic methodologies...”
                </p>

                <div className="my-6 h-px w-full bg-white/10" />

                <p className="text-xl font-medium leading-8 text-white">
                  “We need to work together effectively...”
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-10 hidden rounded-2xl border border-white/10 bg-[#081225]/80 px-6 py-5 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-xl md:block">
            <p className="mb-3 text-sm text-slate-400">
              Authenticity Index
            </p>

            <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
);
}