---
name: humanly-runtime-testing
description: Run Humanly locally and distinguish homepage API humanization from dashboard behavior.
---

# Local runtime setup
- At the repository root, source `~/.nvm/nvm.sh` before npm commands.
  Next.js requires Node >=20.9.
- Install dependencies if missing, then run `npm run dev` on port 3000.
- The public homepage demo is at `http://localhost:3000/#demo`; no login.
  `/dashboard` is a different workspace; do not substitute it for demo coverage.

# Real engine coverage
- Check whether Ollama is actually available before interpreting the engine badge.
  The backend defaults to `http://127.0.0.1:11434`, model `llama3.2`;
  configuration uses OLLAMA_URL, OLLAMA_MODEL, OLLAMA_TIMEOUT_MS.
- Without Ollama, test genuine API rule fallback. Do not describe rule results
  as proof of model generation. If testing a model is needed, run a real model.
- Use high and low strength on identical text containing "leverage" and "optimal"
  to distinguish effective slider changes. Capture a drag while held.
- Confirm the actual POST payload/response in addition to the visible badge:
  the UI also falls back locally on HTTP/network errors.
- Loading can be brief on warmed routes. Capture first request for the spinner,
  and report cold compile timing separately from warmed request timings.

# Devin Secrets Needed
None for local public demo and default local Ollama.
