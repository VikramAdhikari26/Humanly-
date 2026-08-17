export const TONES = ["Natural", "Professional", "Casual", "Creative"] as const;

export type Tone = (typeof TONES)[number];

type Rule = {
  pattern: RegExp;
  replacement: string;
  /** Minimum strength (1-100) at which the rule is applied. */
  threshold: number;
};

/** Wordy constructions that make generated prose read as synthetic. */
const SIMPLIFICATIONS: Rule[] = [
  { pattern: /\bin order to\b/gi, replacement: "to", threshold: 10 },
  { pattern: /\bdue to the fact that\b/gi, replacement: "because", threshold: 10 },
  { pattern: /\bat this point in time\b/gi, replacement: "now", threshold: 10 },
  { pattern: /\bfor the purpose of\b/gi, replacement: "for", threshold: 15 },
  { pattern: /\bin the event that\b/gi, replacement: "if", threshold: 15 },
  { pattern: /\bwith regard to\b/gi, replacement: "about", threshold: 20 },
  { pattern: /\bprior to\b/gi, replacement: "before", threshold: 20 },
  { pattern: /\bsubsequent to\b/gi, replacement: "after", threshold: 20 },
  { pattern: /\bthe majority of\b/gi, replacement: "most", threshold: 25 },
  { pattern: /\ba number of\b/gi, replacement: "several", threshold: 25 },
  { pattern: /\bit is crucial to\b/gi, replacement: "you should", threshold: 30 },
  { pattern: /\bit is important to note that\b/gi, replacement: "note that", threshold: 30 },
  { pattern: /\bit should be noted that\b/gi, replacement: "", threshold: 35 },
  { pattern: /\bin today's (fast-paced |modern )?world\b/gi, replacement: "today", threshold: 35 },
  { pattern: /\bleverage\b/gi, replacement: "use", threshold: 40 },
  { pattern: /\butilize\b/gi, replacement: "use", threshold: 40 },
  { pattern: /\bfacilitate\b/gi, replacement: "help", threshold: 45 },
  { pattern: /\bendeavor\b/gi, replacement: "try", threshold: 45 },
  { pattern: /\bcommence\b/gi, replacement: "start", threshold: 45 },
  { pattern: /\bdemonstrate\b/gi, replacement: "show", threshold: 50 },
  { pattern: /\bnavigating the complexities of\b/gi, replacement: "handling", threshold: 50 },
  { pattern: /\bseamlessly\b/gi, replacement: "", threshold: 55 },
  { pattern: /\bholistic\b/gi, replacement: "complete", threshold: 55 },
  { pattern: /\bsynergistic\b/gi, replacement: "combined", threshold: 60 },
  { pattern: /\bsynergy\b/gi, replacement: "teamwork", threshold: 60 },
  { pattern: /\bparadigm shift\b/gi, replacement: "change", threshold: 60 },
  { pattern: /\bcutting-edge\b/gi, replacement: "new", threshold: 65 },
  { pattern: /\bstate-of-the-art\b/gi, replacement: "modern", threshold: 65 },
  { pattern: /\brobust\b/gi, replacement: "reliable", threshold: 70 },
  { pattern: /\boptimal\b/gi, replacement: "best", threshold: 70 },
  { pattern: /\bfurthermore\b/gi, replacement: "also", threshold: 75 },
  { pattern: /\bmoreover\b/gi, replacement: "and", threshold: 75 },
  { pattern: /\badditionally\b/gi, replacement: "also", threshold: 75 },
  { pattern: /\bhowever\b/gi, replacement: "but", threshold: 80 },
  { pattern: /\btherefore\b/gi, replacement: "so", threshold: 80 },
  { pattern: /\bin conclusion\b/gi, replacement: "overall", threshold: 85 },
];

const CONTRACTIONS: Rule[] = [
  { pattern: /\bit is\b/g, replacement: "it's", threshold: 40 },
  { pattern: /\bthat is\b/g, replacement: "that's", threshold: 40 },
  { pattern: /\bthere is\b/g, replacement: "there's", threshold: 45 },
  { pattern: /\byou will\b/g, replacement: "you'll", threshold: 45 },
  { pattern: /\bwe will\b/g, replacement: "we'll", threshold: 45 },
  { pattern: /\byou are\b/g, replacement: "you're", threshold: 50 },
  { pattern: /\bwe are\b/g, replacement: "we're", threshold: 50 },
  { pattern: /\bdo not\b/g, replacement: "don't", threshold: 55 },
  { pattern: /\bdoes not\b/g, replacement: "doesn't", threshold: 55 },
  { pattern: /\bcannot\b/g, replacement: "can't", threshold: 60 },
  { pattern: /\bwill not\b/g, replacement: "won't", threshold: 60 },
];

const CASUAL_OPENERS: Rule[] = [
  { pattern: /\bIn addition,\s*/g, replacement: "Plus, ", threshold: 30 },
  { pattern: /\bAs a result,\s*/g, replacement: "So ", threshold: 30 },
  { pattern: /\bNevertheless,\s*/g, replacement: "Still, ", threshold: 30 },
];

function applyRules(text: string, rules: Rule[], strength: number): string {
  return rules.reduce(
    (acc, rule) => (strength >= rule.threshold ? acc.replace(rule.pattern, rule.replacement) : acc),
    text,
  );
}

/** Breaks run-on sentences joined by a conjunction into two shorter ones. */
function splitLongSentences(text: string, maxWords: number): string {
  return text.replace(/[^.!?]+[.!?]+|[^.!?]+$/g, (sentence) => {
    const trimmed = sentence.trim();
    if (!trimmed || trimmed.split(/\s+/).length <= maxWords) return sentence;

    const match = trimmed.match(/^(.{40,}?[a-z]),?\s+(and|but|which|while|whereas)\s+(.+)$/);
    if (!match) return sentence;

    const [, head, , tail] = match;
    const leading = sentence.slice(0, sentence.indexOf(trimmed));
    return `${leading}${head}. ${tail.charAt(0).toUpperCase()}${tail.slice(1)}`;
  });
}

function tidy(text: string): string {
  return text
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/^[ \t]+/gm, "")
    .replace(/(^|[.!?]\s+|\n)([a-z])/g, (_, prefix: string, letter: string) => prefix + letter.toUpperCase())
    .trim();
}

/**
 * Rewrites AI-sounding prose into plainer language. Strength (1-100) controls how
 * many transformations are applied; tone selects the register of the result.
 */
export function humanize(text: string, tone: Tone, strength: number): string {
  const input = text.trim();
  if (!input) return "";

  let output = applyRules(input, SIMPLIFICATIONS, strength);

  if (tone !== "Professional") {
    output = applyRules(output, CONTRACTIONS, strength);
  }

  if (tone === "Casual" || tone === "Creative") {
    output = applyRules(output, CASUAL_OPENERS, strength);
  }

  if (strength >= 50) {
    output = splitLongSentences(output, tone === "Casual" ? 18 : 26);
  }

  return tidy(output);
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
