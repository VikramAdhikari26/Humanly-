"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { AITransformationShowcase } from "./components/AITransformationShowcase";
import { ProcessingVisualization } from "./components/ProcessingVisualization";
import { ProjectVision } from "./components/ProjectVision";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <InteractiveDemo />
      <AITransformationShowcase />
      <ProcessingVisualization />
      <ProjectVision />
      <Footer />
    </main>
  );
}