// The Next.js app lives at the repository root. A nested `client/` copy is a
// stale duplicate: with it present, an edited root package.json can silently
// serve the old app. Fail before the dev server or build starts.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const problems = [];

if (existsSync(join(root, "client"))) {
  problems.push(
    "A `client/` directory exists at the repo root. It is a stale duplicate of\n" +
      "  this app — delete it (`git rm -r client`) and re-run.",
  );
}

const { scripts = {} } = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);
for (const [name, command] of Object.entries(scripts)) {
  if (command.includes("--prefix client")) {
    problems.push(
      `The \`${name}\` script delegates to \`client/\`: "${command}".\n` +
        "  Root scripts must run this app directly (e.g. `next dev`).",
    );
  }
}

if (problems.length > 0) {
  console.error(
    "\nRepository layout check failed:\n\n" +
      problems.map((p) => `- ${p}`).join("\n") +
      "\n",
  );
  process.exit(1);
}
