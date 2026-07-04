"use client";

export function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_45%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-14 mb-16">

          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                <div className="w-3 h-3 rounded-full bg-[#020617]" />
              </div>

              <h2 className="text-2xl font-semibold tracking-wide text-white">
                Humanly
              </h2>
            </div>

            <p className="text-slate-400 leading-7 text-sm">
              Humanly is an AI text humanization project focused on transforming robotic AI-generated content into natural and readable communication.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-16">

            {/* Navigation */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                Navigation
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Demo
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Architecture
                  </a>
                </li>
              </ul>
            </div>

            {/* Project */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                Project
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Repository
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Research Notes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © 2026 Humanly • Academic AI Interface Project
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Prototype Build Active
          </div>
        </div>
      </div>
    </footer>
  );
}