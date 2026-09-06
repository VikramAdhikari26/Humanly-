import { humanize, TONES, type HumanizeRequest, type HumanizeResponse, type Tone } from "../../lib/humanize";

export const runtime = "nodejs";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://127.0.0.1:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "llama3.2";
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS ?? 30_000);
const MAX_INPUT_CHARS = 8_000;

const TONE_GUIDANCE: Record<Tone, string> = {
  Natural: "Write the way a thoughtful person would in everyday prose: clear, varied sentence length, no filler.",
  Professional: "Keep a polished, business-appropriate register. Avoid contractions and slang, but drop corporate buzzwords.",
  Casual: "Write conversationally, as if explaining to a friend. Use contractions and short sentences.",
  Creative: "Use vivid, expressive language and rhythm while keeping the meaning intact.",
};

function buildPrompt(text: string, tone: Tone, strength: number): string {
  const intensity =
    strength >= 70 ? "Rewrite freely; restructure sentences and paragraphs as needed."
    : strength >= 40 ? "Rewrite moderately; keep the original structure but replace stilted phrasing."
    : "Make light edits only; fix obviously robotic wording and leave everything else alone.";

  return [
    "You rewrite AI-generated text so it reads as if a human wrote it.",
    TONE_GUIDANCE[tone],
    intensity,
    "Preserve all names, numbers, dates, URLs, code, and technical terms exactly.",
    "Do not add commentary, headings, or quotes. Return only the rewritten text.",
    "",
    "TEXT:",
    text,
  ].join("\n");
}

async function humanizeWithOllama(text: string, tone: Tone, strength: number): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), OLLAMA_TIMEOUT_MS);
  try {
    const res = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt: buildPrompt(text, tone, strength),
        stream: false,
        options: { temperature: 0.4 + strength / 250 },
      }),
    });
    if (!res.ok) return null;
    const data: { response?: string } = await res.json();
    const output = data.response?.trim();
    return output ? output : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function isTone(value: unknown): value is Tone {
  return typeof value === "string" && (TONES as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: Partial<HumanizeRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Request body must be JSON." }, { status: 400 });
  }

  const text = typeof body.text === "string" ? body.text.trim() : "";
  if (!text) {
    return Response.json({ error: "`text` is required." }, { status: 400 });
  }
  if (text.length > MAX_INPUT_CHARS) {
    return Response.json({ error: `\`text\` must be at most ${MAX_INPUT_CHARS} characters.` }, { status: 413 });
  }

  const tone: Tone = isTone(body.tone) ? body.tone : "Natural";
  const strength = Math.min(100, Math.max(1, Math.round(Number(body.strength ?? 70)) || 70));

  const fromModel = await humanizeWithOllama(text, tone, strength);
  const payload: HumanizeResponse = fromModel
    ? { output: fromModel, engine: "ollama", model: OLLAMA_MODEL }
    : { output: humanize(text, tone, strength), engine: "rules" };

  return Response.json(payload);
}
