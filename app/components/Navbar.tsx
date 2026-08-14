"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const navItems = [
  { href: "/architecture", label: "Architecture" },
  { href: "/dashboard", label: "Console" },
  { href: "/research", label: "Research" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020617]/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-3"
          aria-label="Humanly Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>

          <span className="text-2xl font-semibold tracking-wide text-white">
            Humanly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Button href="/docs" variant="secondary" size="sm">
            Documentation
          </Button>

          <Button href="/dashboard" variant="primary" size="sm">
            Launch Platform
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 text-white md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#020617] text-xl font-medium text-slate-300 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Button
            href="/docs"
            variant="secondary"
            onClick={closeMenu}
          >
            Documentation
          </Button>

          <Button
            href="/dashboard"
            variant="primary"
            onClick={closeMenu}
          >
            Launch Platform
          </Button>
        </div>
      )}
    </nav>
  );
}