"use client";

import Link from "next/link";
import { useState } from "react";
import { countWords, humanize, TONES, type Tone } from "../lib/humanize";

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

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 py-20">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />

        <div className="absolute top-24 right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[120px] animate-pulse" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 shadow-[0_0_80px_rgba(37,99,235,0.18)]">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-6 mb-12">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">

              <div className="w-5 h-5 rounded-full bg-[#020617]" />
            </div>

            <div>
              <h1 className="text-4xl font-semibold">
                Humanly Workspace
              </h1>

              <p className="text-slate-400 mt-1">
                AI Humanization Console
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>

        {/* Input */}
        <div className="mb-10">

          <label className="block text-sm text-slate-400 mb-4">
            AI Generated Text
          </label>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste AI-generated content here..."
            className="w-full h-56 rounded-3xl bg-[#0b1220] border border-white/10 p-6 text-slate-200 outline-none resize-none focus:border-cyan-500 transition-all"
          />

          <p className="mt-3 text-xs text-slate-500">
            {countWords(input)} words
          </p>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Tone */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <p className="text-sm text-slate-400 mb-4">
              Tone Style
            </p>

            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone)}
              className="w-full bg-[#0b1220] border border-white/10 rounded-2xl px-5 py-4 text-slate-200 outline-none"
            >
              {TONES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Strength */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between mb-4">

              <p className="text-sm text-slate-400">
                Humanization Strength
              </p>

              <span className="text-cyan-400 text-sm font-semibold">
                {strength}%
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="100"
              value={strength}
              onChange={(e) => setStrength(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Output */}
        <div className="mb-10">

          <div className="flex items-center justify-between mb-4">

            <label className="text-sm text-slate-400">
              Humanized Output
            </label>

            <button
              onClick={handleCopy}
              disabled={!output}
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors disabled:text-slate-600 disabled:cursor-not-allowed"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="min-h-[220px] whitespace-pre-wrap rounded-3xl border border-white/10 bg-[#08111d] p-6 text-slate-300 leading-8">
            {output || (
              <span className="text-slate-500">
                Your humanized content will appear here...
              </span>
            )}
          </div>
        </div>

        {/* Action */}
        <button
          onClick={handleHumanize}
          disabled={!input.trim() || isHumanizing}
          className="w-full py-5 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:scale-[1.01] transition-all disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {isHumanizing ? "Humanizing..." : "Humanize Text"}
        </button>
      </div>
    </main>
  );
}