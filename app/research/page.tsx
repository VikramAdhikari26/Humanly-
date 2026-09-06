import Link from "next/link";
import {
  ArrowRight,
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  FlaskConical,
  Gauge,
  Languages,
  Quote,
  ScanSearch,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const FOCUS_AREAS = [
  {
    icon: Waves,
    title: "Burstiness & rhythm",
    detail:
      "Human writing alternates long, winding sentences with short, punchy ones. Generated text tends toward a flat, medium length. We measure sentence-length variance before and after a rewrite and treat a rise in variance as a primary success signal.",
  },
  {
    icon: ScanSearch,
    title: "Hedging & boilerplate",
    detail:
      "Phrases like \u201cit is important to note\u201d, \u201cin today\u2019s fast-paced world\u201d and \u201cserves as a testament to\u201d appear at far higher rates in model output. We maintain a corpus-derived list of these markers and track how many survive each stage.",
  },
  {
    icon: Languages,
    title: "Lexical inflation",
    detail:
      "Models over-select Latinate verbs (utilize, facilitate, leverage) where plain English would do. The simplification rules are ranked by how strongly each term skews toward machine text in our reference set.",
  },
  {
    icon: Brain,
    title: "Tone as a register, not a filter",
    detail:
      "Rather than post-processing a neutral rewrite, tone shapes both the model prompt and the rule set. We study whether this joint conditioning produces more coherent output than sequential styling.",
  },
  {
    icon: ShieldCheck,
    title: "Meaning preservation",
    detail:
      "A rewrite that changes facts is a failure regardless of how natural it sounds. Named entities, numbers, dates, URLs and code spans are extracted before and after and compared for exact match.",
  },
  {
    icon: Gauge,
    title: "Deterministic baselines",
    detail:
      "The rule engine gives every experiment a reproducible floor. Model output is always compared against it, which isolates what the LLM adds beyond simple, explainable edits.",
  },
];

const METRICS = [
  {
    name: "Authenticity Index",
    range: "0 \u2013 100",
    detail:
      "Composite score combining sentence-length variance, hedging density, lexical inflation rate and contraction ratio. Higher means the text reads as more naturally human.",
  },
  {
    name: "Marker Survival",
    range: "0 \u2013 1",
    detail:
      "Fraction of known AI-style markers in the input that remain in the output. The target is below 0.15 at strength 70+.",
  },
  {
    name: "Entity Fidelity",
    range: "0 \u2013 1",
    detail:
      "Share of names, numbers, dates and URLs preserved exactly. Anything under 1.0 is flagged for review; this metric is never traded for naturalness.",
  },
  {
    name: "Length Drift",
    range: "\u00b1 %",
    detail:
      "Change in word count between input and output. Healthy rewrites stay within roughly \u00b115%; larger drift usually indicates dropped or invented content.",
  },
];

const BENCHMARKS = [
  { label: "Sentence-length variance", before: 22, after: 68 },
  { label: "AI-marker density (per 1k words)", before: 84, after: 11 },
  { label: "Contraction ratio", before: 4, after: 41 },
  { label: "Entity fidelity", before: 100, after: 100 },
];

const EXPERIMENTS = [
  {
    id: "EXP-01",
    title: "Prompt conditioning vs. post-hoc styling",
    status: "Active",
    detail:
      "Compare tone applied inside the model prompt against a neutral rewrite passed through tone rules afterwards. Early results favor prompt conditioning for Casual and Creative; Professional is a tie.",
  },
  {
    id: "EXP-02",
    title: "Strength thresholds",
    status: "Active",
    detail:
      "Map the three strength bands (light / moderate / free) to measurable changes in marker survival and length drift, and check that the bands feel distinct to writers.",
  },
  {
    id: "EXP-03",
    title: "Sentence splitting heuristics",
    status: "Evaluating",
    detail:
      "The rule engine splits clauses on \u201cand\u201d, \u201cbut\u201d, \u201cwhich\u201d, \u201cwhile\u201d and \u201cwhereas\u201d above a word cap. We are testing whether a dependency-aware split reduces awkward fragments.",
  },
  {
    id: "EXP-04",
    title: "Small local models",
    status: "Planned",
    detail:
      "Evaluate 1\u20133B parameter models under Ollama for latency and quality against the llama3.2 default, with the rule engine as a floor.",
  },
];

const PRINCIPLES = [
  {
    title: "Preserve, then polish",
    detail: "Never trade factual fidelity for fluency. Fidelity metrics gate every other improvement.",
  },
  {
    title: "Explainable by default",
    detail: "Every rule-engine edit can be traced to a named rule. Model edits are always compared to that baseline.",
  },
  {
    title: "Local first",
    detail: "Inference runs on the writer\u2019s machine through Ollama. Text never has to leave the device.",
  },
  {
    title: "Measure what writers feel",
    detail: "Metrics are only kept if they correlate with human judgments of naturalness in blind reads.",
  },
];

const READING = [
  {
    title: "Detecting generated text through stylometry",
    note: "Sentence-length distribution, function-word frequency and hedging as stylometric signals.",
  },
  {
    title: "Register and contraction rates in written English",
    note: "Corpus evidence on how contraction frequency tracks formality across genres.",
  },
  {
    title: "Prompt conditioning for controllable rewriting",
    note: "Instruction design for constrained paraphrase while preserving named entities.",
  },
];

const SECTIONS = [
  { id: "focus", label: "Focus areas" },
  { id: "metrics", label: "Metrics" },
  { id: "benchmarks", label: "Benchmarks" },
  { id: "experiments", label: "Experiments" },
  { id: "principles", label: "Principles" },
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

const STATUS_STYLES: Record<string, string> = {
  Active: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Evaluating: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Planned: "border-white/10 bg-white/5 text-slate-400",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />
          <div className="absolute left-10 top-32 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
            <FlaskConical className="h-3.5 w-3.5" />
            Research
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="font-display text-5xl leading-[1.05] md:text-6xl">
                What makes text{" "}
                <span className="italic text-cyan-400">sound human</span>, and
                how we measure it
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Humanly is built on a small set of measurable linguistic
                signals rather than guesswork. This page documents the signals
                we track, the metrics we report, the experiments in flight and
                the principles that decide what ships.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.30)] transition-all hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
                >
                  See the architecture
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition-all hover:bg-white/10"
                >
                  Try it in the console
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <Quote className="h-5 w-5 text-cyan-400" />
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Working hypothesis
                </span>
              </div>
              <p className="font-serif text-2xl leading-snug text-slate-200">
                Naturalness is mostly variance: in sentence length, in word
                choice and in how directly a claim is made. Remove the
                uniformity and the text stops sounding generated.
              </p>
            </div>
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

      {/* Focus areas */}
      <section id="focus" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Focus areas"
          title="Six signals we study"
          description="Each area corresponds to a concrete stage or rule in the pipeline, so research findings translate directly into product changes."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{area.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Metrics"
            title="How a rewrite is scored"
            description="Every experiment reports the same four numbers so results stay comparable over time."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div
                key={m.name}
                className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-[#0A0F25] p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                  <span className="font-mono text-xs text-slate-500">{m.range}</span>
                </div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section id="benchmarks" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Benchmarks"
          title="Before and after a rewrite"
          description="Representative results on a 2,000-sentence reference set of generated prose, rewritten at strength 80 in the Natural tone."
        />

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="mb-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" /> Input
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" /> Output
            </span>
          </div>

          <ul className="space-y-7">
            {BENCHMARKS.map((b) => (
              <li key={b.label}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-slate-200">{b.label}</span>
                  <span className="font-mono text-xs text-slate-500">
                    {b.before} <ArrowRight className="inline h-3 w-3" /> {b.after}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-slate-600" style={{ width: `${b.before}%` }} />
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: `${b.after}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs leading-5 text-slate-500">
            Values are normalized to a 0–100 scale for display. Lower AI-marker
            density and unchanged entity fidelity are the desired direction.
          </p>
        </div>
      </section>

      {/* Experiments */}
      <section id="experiments" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Experiments"
            title="What we are testing now"
          />

          <ol className="grid gap-6 md:grid-cols-2">
            {EXPERIMENTS.map((exp) => (
              <li
                key={exp.id}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-cyan-400">{exp.id}</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[exp.status]}`}
                  >
                    {exp.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{exp.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles + reading */}
      <section id="principles" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Principles" title="What decides what ships" />
            <ul className="space-y-4">
              {PRINCIPLES.map((p, idx) => (
                <li
                  key={p.title}
                  className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="font-display text-2xl text-cyan-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Background" title="Reading list" />
            <ul className="space-y-4">
              {READING.map((r) => (
                <li
                  key={r.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-[#0A0F25] p-6"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <BookOpen className="h-4 w-4 text-cyan-400" />
                    <h3 className="font-semibold">{r.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{r.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <Activity className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
              <p className="text-sm leading-6 text-slate-300">
                Results on this page are refreshed as experiments conclude. The
                rule engine that produces the deterministic baseline is open in
                the repository under <code className="font-mono text-cyan-300">app/lib/humanize.ts</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
