"use client";

import Link from "next/link";
import { useState } from "react";
import { countWords, humanize, TONES, type Tone } from "../lib/humanize";

function strengthLabel(strength: number): string {
  if (strength < 34) return "Light";
  if (strength < 67) return "Balanced";
  return "Aggressive";
}

export default function DashboardPage() {

  const [strength, setStrength] = useState(82);
  const [input, setInput] = useState("");
  const [tone, setTone] = useState<Tone>("Natural");
  const [output, setOutput] = useState("");
  const [isHumanizing, setIsHumanizing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleHumanize = () => {
    if (!input.trim() || isHumanizing) return;

    setIsHumanizing(true);
    setCopied(false);

    const result = humanize(input, tone, strength);
    setTimeout(() => {
      setOutput(result);
      setIsHumanizing(false);
    }, 600);
  };

  const handleCopy = async () => {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setCopied(false);
  };

  return (
    <main className="relative min-h-screen bg-[#020617] text-white px-4 py-12 sm:px-6 lg:py-16">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />

        <div className="absolute top-24 right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-[0_0_80px_rgba(37,99,235,0.18)]">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 mb-8 border-b border-white/10">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">

              <div className="w-4 h-4 rounded-full bg-[#020617]" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Humanly Workspace
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                AI Humanization Console
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="px-5 py-2.5 text-sm rounded-xl border border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/10 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Editor */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Input */}
          <section className="flex flex-col rounded-2xl border border-white/10 bg-[#0b1220]/70">

            <header className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">

              <h2 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                AI Generated Text
              </h2>

              <div className="flex items-center gap-3">

                <span className="text-xs text-slate-500">
                  {countWords(input)} words
                </span>

                <button
                  onClick={handleClear}
                  disabled={!input && !output}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                  Clear
                </button>
              </div>
            </header>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste AI-generated content here..."
              className="h-72 w-full flex-1 resize-none bg-transparent p-5 text-slate-200 leading-7 outline-none placeholder:text-slate-600"
            />
          </section>

          {/* Output */}
          <section className="flex flex-col rounded-2xl border border-white/10 bg-[#08111d]/80">

            <header className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">

              <h2 className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Humanized Output
              </h2>

              <div className="flex items-center gap-3">

                <span className="text-xs text-slate-500">
                  {countWords(output)} words
                </span>

                <button
                  onClick={handleCopy}
                  disabled={!output}
                  className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </header>

            <div className="h-72 flex-1 overflow-y-auto whitespace-pre-wrap p-5 text-slate-300 leading-7">
              {output || (
                <span className="text-slate-600">
                  Your humanized content will appear here...
                </span>
              )}
            </div>
          </section>
        </div>

        {/* Controls */}
        <div className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[1.6fr_1fr]">

          {/* Tone */}
          <div>
            <div className="flex items-baseline justify-between mb-3">

              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Tone Style
              </p>

              <span className="text-sm text-cyan-400">
                {tone}
              </span>
            </div>

            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Tone style">
              {TONES.map((option) => (
                <button
                  key={option}
                  role="radio"
                  aria-checked={option === tone}
                  onClick={() => setTone(option)}
                  className={`rounded-xl px-4 py-2 text-sm transition-colors ${
                    option === tone
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]"
                      : "bg-white/[0.06] text-slate-300 hover:bg-white/[0.12]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Strength */}
          <div>
            <div className="flex items-baseline justify-between mb-3">

              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Humanization Strength
              </p>

              <span className="text-sm text-cyan-400">
                {strengthLabel(strength)} · {strength}%
              </span>
            </div>

            <div className="relative h-2 rounded-full bg-white/10">

              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{ width: `${strength}%` }}
              />

              <input
                type="range"
                min={1}
                max={100}
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value))}
                aria-label="Humanization strength"
                className="absolute inset-0 w-full cursor-pointer opacity-0"
              />
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={handleHumanize}
          disabled={!input.trim() || isHumanizing}
          className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:brightness-110 transition-all disabled:opacity-40 disabled:hover:brightness-100 disabled:cursor-not-allowed"
        >
          {isHumanizing ? "Humanizing..." : "Humanize Text"}
        </button>
      </div>
    </main>
  );
}
