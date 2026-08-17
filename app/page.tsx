"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50">
      <Navbar />

      <section aria-label="Hero">
        <Hero />
      </section>

      <section aria-label="How It Works">
        <HowItWorks />
      </section>

      <section aria-label="Features">
        <Features />
      </section>

      <InteractiveDemo />

      <Footer />
    </main>
  );
}