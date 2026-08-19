import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FLOW = [
  { title: "Ingress", caption: "Web / API input" },
  { title: "Preprocess", caption: "Sanitize & preserve entities" },
  { title: "Model (Ollama)", caption: "Local LLM inference (future)" },
  { title: "Postprocess", caption: "Tone + formatting adjustments" },
  { title: "Output", caption: "Deliver rewritten text" },
];

const STAGES = [
  {
    step: "01",
    title: "Ingestion",
    description:
      "Raw text is normalized: whitespace, smart quotes and stray markup are cleaned so downstream stages see consistent input.",
  },
  {
    step: "02",
    title: "Analysis",
    description:
      "Sentences are segmented and scored for length variance, hedging language and the boilerplate phrasing typical of generated prose.",
  },
  {
    step: "03",
    title: "Transformation",
    description:
      "Wordy constructions are simplified, contractions are applied and run-on sentences are split. The strength setting decides how many rules fire.",
  },
  {
    step: "04",
    title: "Tone Shaping",
    description:
      "The selected tone adjusts register — Professional keeps full forms, Casual and Creative favor contractions and shorter openers.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Punctuation and capitalization are repaired before the result is rendered in the workspace and made available to copy.",
  },
];

const LAYERS = [
  {
    title: "Interface",
    detail: "Next.js App Router pages under app/, rendered with React 19 and Tailwind CSS 4.",
  },
  {
    title: "Transformation Engine",
    detail: "A pure, dependency-free module in app/lib/humanize.ts — deterministic and unit-testable.",
  },
  {
    title: "Resilience",
    detail: "Route and root error boundaries surface render failures instead of leaving a blank page.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white px-6 py-20">

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#03122b,#020617)]" />

        <div className="absolute right-20 top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-10 left-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-full opacity-40">
          <svg viewBox="0 0 1440 320" className="h-auto w-full" preserveAspectRatio="none">
            <path
              fill="rgba(59,130,246,0.15)"
              d="M0,160L80,170.7C160,181,320,203,480,202.7C640,203,800,181,960,186.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-25">
          <svg viewBox="0 0 1440 320" className="h-auto w-full" preserveAspectRatio="none">
            <path
              fill="rgba(6,182,212,0.18)"
              d="M0,256L120,240C240,224,480,192,720,208C960,224,1200,288,1320,309.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="flex items-start justify-between flex-wrap gap-6 mb-14">

          <div>
            <h1 className="text-5xl font-semibold mb-4">
              Architecture
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl">
              How text moves through Humanly, from the raw generated draft to
              the rewritten output shown in the workspace.
            </p>
          </div>

          <Link
            href="/"
            className="px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>

        <section className="mb-16 text-center">

          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400 mb-4">
            Pipeline Architecture
          </h2>

          <h3 className="font-display text-4xl md:text-5xl mb-5">
            Transformation Workflow
          </h3>

          <p className="mx-auto max-w-2xl text-slate-400 leading-7 mb-12">
            A concise overview of the transformation steps, model roles and
            integration points for the Humanly pipeline. Designed for clarity
            and future Ollama backend connectivity.
          </p>

          <ol className="flex flex-col items-stretch justify-center gap-4 lg:flex-row lg:flex-wrap lg:items-start">
            {FLOW.map((node, idx) => (
              <li
                key={node.title}
                className="flex flex-col items-center gap-4 lg:flex-row lg:items-start"
              >
                <div className="lg:w-36">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold backdrop-blur-sm">
                    {node.title}
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {node.caption}
                  </p>
                </div>

                {idx < FLOW.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 shrink-0 rotate-90 text-cyan-400/70 lg:mt-5 lg:rotate-0"
                  />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">

          <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-6">
            Processing Pipeline
          </h2>

          <ol className="space-y-4">
            {STAGES.map((stage) => (
              <li
                key={stage.step}
                className="flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-cyan-400 font-semibold text-lg">
                  {stage.step}
                </span>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-slate-400 leading-7">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>

          <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-6">
            System Layers
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {LAYERS.map((layer) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {layer.title}
                </h3>

                <p className="text-slate-400 text-sm leading-6">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
