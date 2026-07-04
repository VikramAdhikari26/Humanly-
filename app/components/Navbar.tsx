"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-md border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 relative z-50 cursor-pointer">

            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">

              <div className="w-3 h-3 bg-black rounded-full" />
            </div>

            <span className="text-white text-2xl font-semibold tracking-wide">
              Humanly
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

          <Link
            href="/architecture"
            className="hover:text-white transition-colors"
          >
            Architecture
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-white transition-colors"
          >
            Console
          </Link>

          <Link
            href="/research"
            className="hover:text-white transition-colors"
          >
            Research
          </Link>

          <Link href="/docs">
            <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all backdrop-blur-sm">

              Documentation
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all font-semibold">

              Launch Platform
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="absolute top-0 left-0 w-full h-screen bg-[#020617] flex flex-col items-center justify-center gap-8 text-xl font-medium text-slate-300 z-40 md:hidden">

          <Link
            href="/architecture"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Architecture
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Console
          </Link>

          <Link
            href="/research"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Research
          </Link>

          <Link href="/docs" onClick={() => setIsOpen(false)}>

            <button className="px-8 py-3 rounded-full bg-white/10 border border-white/10 text-white">

              Documentation
            </button>
          </Link>

          <Link href="/dashboard" onClick={() => setIsOpen(false)}>

            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold">

              Launch Platform
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}