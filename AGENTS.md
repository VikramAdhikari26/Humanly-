<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository layout

The app lives at the repository root: `app/`, `public/`, and a single
`package.json` whose scripts run Next.js directly (`next dev`, `next build`).

There is no `client/` subdirectory. If one appears, it is a stale duplicate of
the app — delete it rather than working in it, and never point the root scripts
at it (`npm --prefix client run dev` and friends serve the old copy).
`scripts/check-layout.mjs` enforces both rules before `dev` and `build`.
