import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Cpu,
  FileText,
  GitBranch,
  Layers,
  Lock,
  Monitor,
  Server,
  ShieldCheck,
  Sliders,
  Sparkles,
  Timer,
  Waypoints,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const FLOW = [
  { title: "Ingress", caption: "Web console or POST /api/humanize", icon: Monitor },
  { title: "Preprocess", caption: "Trim, normalize, guard input size", icon: FileText },
  { title: "Model", caption: "Local Ollama inference with prompt", icon: Cpu },
  { title: "Fallback", caption: "Deterministic rule engine", icon: GitBranch },
  { title: "Output", caption: "Rewritten text + engine tag", icon: Sparkles },
];

const STAGES = [
  {
    step: "01",
    title: "Ingestion",
    summary: "Normalize the draft before anything else touches it.",
    description:
      "Raw text is trimmed and whitespace collapsed. Smart quotes, stray markup and duplicated spacing are cleaned so every downstream stage sees a consistent shape. Inputs above 8,000 characters are rejected early with a clear error.",
    tags: ["trim", "whitespace", "8k char limit"],
  },
  {
    step: "02",
    title: "Analysis",
    summary: "Figure out what makes the draft read as machine-written.",
    description:
      "Sentences are segmented and inspected for the fingerprints of generated prose: uniform length, hedging phrases such as \u201cit is important to note\u201d, inflated verbs like \u201cutilize\u201d and \u201cfacilitate\u201d, and stacked clauses joined by \u201cand\u201d or \u201cwhich\u201d.",
    tags: ["segmentation", "hedging", "burstiness"],
  },
  {
    step: "03",
    title: "Transformation",
    summary: "Rewrite with the model, or with rules when the model is unavailable.",
    description:
      "The API first asks the local Ollama model to rewrite the text using a tone- and strength-aware prompt. If Ollama is offline, times out or returns nothing, the pure rule engine in app/lib/humanize.ts takes over: wordy constructions are simplified, contractions applied and run-on sentences split.",
    tags: ["ollama", "rule engine", "graceful fallback"],
  },
  {
    step: "04",
    title: "Tone Shaping",
    summary: "Match the register the writer asked for.",
    description:
      "Natural keeps sentence variety and drops filler. Professional preserves full forms and avoids slang. Casual and Creative favor contractions, shorter openers and a tighter sentence cap so the result reads like speech rather than a report.",
    tags: ["Natural", "Professional", "Casual", "Creative"],
  },
  {
    step: "05",
    title: "Delivery",
    summary: "Polish and return.",
    description:
      "Punctuation spacing and sentence capitalization are repaired, the response is tagged with the engine that produced it, and the result is rendered in the workspace with word counts and a one-click copy action.",
    tags: ["tidy", "engine tag", "copy"],
  },
];

const LAYERS = [
  {
    icon: Monitor,
    title: "Interface",
    detail:
      "Next.js App Router pages rendered with React 19 and Tailwind CSS 4. The console at /dashboard is a client component; documentation pages are static server components.",
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Framer Motion"],
  },
  {
    icon: Server,
    title: "API Layer",
    detail:
      "A single Node.js route, POST /api/humanize, validates the payload, calls the model with a bounded timeout and always returns a result even when the model is down.",
    stack: ["Route handler", "30s timeout", "JSON contract"],
  },
  {
    icon: Cpu,
    title: "Transformation Engine",
    detail:
      "A pure, dependency-free module. Given the same text, tone and strength it always returns the same output, which makes it trivially unit-testable and safe to run on the client.",
    stack: ["Deterministic", "Zero deps", "Isomorphic"],
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
    detail:
      "Root and route error boundaries catch render failures and show a recovery screen instead of a blank page. Model failures degrade to the rule engine rather than to an error.",
    stack: ["error.tsx", "global-error.tsx", "Fallback engine"],
  },
];

const CONTROLS = [
  {
    icon: Sliders,
    title: "Rewrite strength",
    detail:
      "A 1\u2013100 slider. Below 40 only obviously robotic wording is touched; 40\u201369 replaces stilted phrasing but keeps structure; 70+ lets the model restructure paragraphs and enables sentence splitting in the rule engine.",
  },
  {
    icon: Waypoints,
    title: "Tone selection",
    detail:
      "Each tone maps to a prompt fragment for the model and a rule set for the fallback engine, so the two paths stay stylistically aligned.",
  },
  {
    icon: Timer,
    title: "Latency budget",
    detail:
      "Model calls are wrapped in an AbortController with a configurable timeout (OLLAMA_TIMEOUT_MS). The console shows progress while waiting and never blocks on a hung request.",
  },
  {
    icon: Lock,
    title: "Content preservation",
    detail:
      "The prompt instructs the model to keep names, numbers, dates, URLs, code and technical terms exactly. The rule engine only rewrites known phrases, so it cannot invent content.",
  },
];

const CONTRACT = `POST /api/humanize
Content-Type: application/json

{
  "text":     "The utilization of this approach...",
  "tone":     "Natural" | "Professional" | "Casual" | "Creative",
  "strength": 82
}

200 OK
{
  "output": "Using this approach...",
  "engine": "ollama" | "rules"
}`;

const ENV = [
  { name: "OLLAMA_URL", value: "http://127.0.0.1:11434", note: "Base URL of the local Ollama server" },
  { name: "OLLAMA_MODEL", value: "llama3.2", note: "Model tag used for generation" },
  { name: "OLLAMA_TIMEOUT_MS", value: "30000", note: "Abort the model call after this many ms" },
];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "pipeline", label: "Pipeline" },
  { id: "layers", label: "System layers" },
  { id: "controls", label: "Controls" },
  { id: "api", label: "API contract" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      {/* Hero */}
      <section
        id="overview"
        className="relative overflow-hidden border-b border-white/5 pt-36 pb-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />
          <div className="absolute right-10 top-20 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
            <Boxes className="h-3.5 w-3.5" />
            System design
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="font-display text-5xl leading-[1.05] md:text-6xl">
                How Humanly turns a draft into{" "}
                <span className="italic text-cyan-400">human prose</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                A five-stage pipeline with a local language model at its core
                and a deterministic rule engine underneath it. This page walks
                through every layer, from the request that enters the API to
                the text that lands back in the workspace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.30)] transition-all hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
                >
                  Open the console
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition-all hover:bg-white/10"
                >
                  Read the research
                </Link>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {[
                { k: "Stages", v: "5" },
                { k: "Tones", v: "4" },
                { k: "Engines", v: "2" },
                { k: "External deps", v: "0" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <dt className="text-xs uppercase tracking-widest text-slate-500">
                    {s.k}
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-white">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <nav
        aria-label="Page sections"
        className="sticky top-20 z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 text-sm text-slate-400">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Request flow */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Request flow"
          title="One request, five hops"
          description="Every rewrite follows the same path regardless of whether it started in the browser console or as a raw API call."
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {FLOW.map((node, idx) => {
            const Icon = node.icon;
            return (
              <li key={node.title} className="relative">
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{node.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {node.caption}
                  </p>
                </div>
                {idx < FLOW.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-cyan-400/60 lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Processing pipeline"
            title="Stage by stage"
            description="Each stage has a single responsibility and a clear hand-off, so behavior can be reasoned about and tested in isolation."
          />

          <ol className="relative space-y-6">
            <div
              aria-hidden
              className="absolute left-[27px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent md:block"
            />
            {STAGES.map((stage) => (
              <li
                key={stage.step}
                className="relative grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:grid-cols-[56px_1fr] md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-[#020617] font-display text-xl text-cyan-400">
                  {stage.step}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{stage.title}</h3>
                  <p className="mt-1 text-cyan-300/80">{stage.summary}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                    {stage.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {stage.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Layers */}
      <section id="layers" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="System layers"
          title="Four layers, clear boundaries"
          description="The interface never talks to the model directly, and the engine never knows about HTTP. Each layer can be swapped without touching the others."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-[#0A0F25] p-8 shadow-[0_0_50px_rgba(37,99,235,0.08)]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{layer.title}</h3>
                </div>
                <p className="leading-7 text-slate-400">{layer.detail}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {layer.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Controls */}
      <section id="controls" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Controls & guarantees"
            title="What the writer can tune, and what stays fixed"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTROLS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <Icon className="mb-4 h-6 w-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{c.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="API contract"
          title="Integrate in one call"
          description="The same endpoint the console uses is available to any HTTP client. The response always includes which engine produced the output."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <pre className="overflow-x-auto rounded-3xl border border-white/10 bg-[#050b1c] p-6 font-mono text-sm leading-6 text-slate-300 shadow-[0_0_60px_rgba(59,130,246,0.10)]">
            <code>{CONTRACT}</code>
          </pre>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Layers className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-semibold">Runtime configuration</h3>
            </div>
            <ul className="divide-y divide-white/5">
              {ENV.map((e) => (
                <li key={e.name} className="py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <code className="font-mono text-sm text-cyan-300">{e.name}</code>
                    <code className="font-mono text-xs text-slate-500">{e.value}</code>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{e.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              If the model is unreachable the request still succeeds with{" "}
              <code className="font-mono text-slate-300">engine: &quot;rules&quot;</code>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
