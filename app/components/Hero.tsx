"use client";
import { AbstractWaves } from "./AbstractWaves";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#020617] pt-32">
<AbstractWaves />
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />

        {/* Glow blur */}
        <div className="absolute top-24 right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[120px] animate-pulse" />

        {/* Wave 1 */}
        <div className="absolute bottom-0 left-0 w-full opacity-40">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(59,130,246,0.15)"
              d="M0,160L80,170.7C160,181,320,203,480,202.7C640,203,800,181,960,186.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        {/* Wave 2 */}
        <div className="absolute bottom-0 left-0 w-full opacity-25">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center min-h-[85svh]">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 mb-10">
            <Sparkles className="w-4 h-4 text-cyan-400" />

            <span className="text-sm font-medium">
              AI Text Humanization Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-white">
            Make AI
            <br />
            sound
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              like you.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-xl text-lg leading-9 text-slate-400">
            Humanly transforms robotic AI-generated writing into natural,
            authentic, and human-like communication with advanced contextual
            rewriting and tone adaptation.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <a href="/dashboard">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">

                Launch Humanly

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 hover:bg-white/10 transition-all duration-300">
              Explore Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Main glass card */}
          <div className="relative w-full max-w-[520px] rounded-[36px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.18)] overflow-hidden p-8">

            {/* Glow */}
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-cyan-400/20 blur-[80px]" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/20 blur-[100px]" />

            {/* Card content */}
            <div className="relative z-10">

              {/* Icon */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)] mb-8">

                <Sparkles className="w-8 h-8 text-white" />
              </div>

              {/* Fake lines */}
              <div className="space-y-4 mb-10">
                <div className="h-3 rounded-full bg-white/10 w-40" />
                <div className="h-3 rounded-full bg-white/10 w-72" />
              </div>

              {/* Processing card */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(15,23,42,0.35)]">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-cyan-400 uppercase tracking-[0.18em] text-sm font-semibold">
                    Analyzing
                  </span>
                </div>

                <p className="text-slate-400 italic leading-8 text-lg">
                  “It is our paramount objective to ensure synergistic methodologies...”
                </p>

                <div className="w-full h-px bg-white/10 my-6" />

                <p className="text-white text-xl font-medium leading-8">
                  “We need to work together effectively...”
                </p>
              </div>
            </div>
          </div>

          {/* Floating small card */}
          <div className="hidden md:block absolute -bottom-6 -left-10 rounded-2xl border border-white/10 bg-[#081225]/80 backdrop-blur-xl px-6 py-5 shadow-[0_0_40px_rgba(59,130,246,0.2)]">

            <p className="text-sm text-slate-400 mb-3">
              Authenticity Index
            </p>

            <div className="w-48 h-2 rounded-full bg-white/10 overflow-hidden">

              <div className="w-[82%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}