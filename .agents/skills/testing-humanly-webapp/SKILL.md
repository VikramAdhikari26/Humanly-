---
name: testing-humanly-webapp
description: How to run and test the Humanly Next.js 16 app locally (dev + production build), including how to exercise the app/error.tsx error boundary without breaking the build.
---

# Testing the Humanly webapp

## Layout
Next.js 16 (App Router, Turbopack, React 19) lives at the **repo root**, not in `client/`.
Routes: `/`, `/architecture`, `/dashboard`, `/docs`, `/research`. No `not-found.tsx`, so unknown routes
render Next's built-in 404.

## Running
- Dev: `npm run dev` (port 3000)
- Prod: `npm run build && npx next start -p 3100`
- Node >= 20.9 required (`engines` in package.json).

## Gotchas
- **Stale servers**: `pkill -f "next start ..."` often doesn't match. Use `ss -ltnp | grep <port>` and
  `pgrep -af next-server` to find the real PID, then `kill -9`. If the browser still shows old content
  after a rebuild, an old `next-server` is usually still bound to the port. Hard-reload with
  `ctrl+shift+r` afterwards; normal reloads serve cached RSC payloads.
- **Chaining `pkill` before `npm run build` in one exec call kills the shell** (the pattern matches the
  shell's own process tree). Run them as separate commands.

## Exercising the error boundary (`app/error.tsx`)
A plain `throw new Error(...)` at the top of a page component **fails `next build`** with
`Error occurred prerendering page` — every route is statically prerendered, so the error boundary is
never reached at runtime. To trigger it in a production build, make the throw happen *after hydration*:

```tsx
"use client";
import { useEffect, useState } from "react";
export default function Page() {
  const [boom, setBoom] = useState(false);
  useEffect(() => { setBoom(true); }, []);
  if (boom) throw new Error("Boom: test error boundary");
  return (/* ... */);
}
```

Prerender succeeds, then the client throws and `app/error.tsx` renders a "Something went wrong" card
with `error.message` and a "Try again" button. Works identically in dev and prod (the message is not
masked in prod because it's a client-side error).
Always `git checkout -- <page>` and rebuild afterwards so the tree is clean.

## Known non-blocking findings (as of PR #1)
- `/dashboard` is a **static mock**: the textarea, tone `<select>` and strength slider are wired to
  local state, but "Humanize Text" and "Copy" have no `onClick` handlers and do nothing.
- `/architecture` is a leftover red placeholder ("THIS IS THE NEW ARCHITECTURE PAGE"), pre-existing on `main`.
- `/docs` body copy has a typo: "documentationcd".

## Devin Secrets Needed
None — the app is fully local with no backend or auth.
