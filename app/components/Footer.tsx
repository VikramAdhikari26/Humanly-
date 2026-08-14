"use client";

import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Demo", href: "/#demo" },
  { label: "Architecture", href: "/architecture" },
];

const projectLinks = [
  { label: "Repository", href: "#" },
  { label: "Documentation", href: "/docs" },
  { label: "Research Notes", href: "/research" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#020617] pt-20 pb-10">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top */}
        <div className="mb-16 flex flex-col justify-between gap-14 lg:flex-row">
          {/* Brand */}
          <div className="max-w-md">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <div className="h-3 w-3 rounded-full bg-[#020617]" />
              </div>

              <h2 className="text-2xl font-semibold tracking-wide text-white">
                Humanly
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-400">
              Humanly is an AI text humanization project focused on transforming
              robotic AI-generated content into natural and readable
              communication.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-16">
            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Navigation
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Project
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
                {projectLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Humanly • Academic AI Interface Project
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Prototype Build Active
          </div>
        </div>
      </div>
    </footer>
  );
}