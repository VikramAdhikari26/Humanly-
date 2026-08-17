"use client";

import { motion } from 'framer-motion';
import { Network, GitMerge, Fingerprint, Activity, ActivitySquare } from 'lucide-react';

export function ProcessingVisualization() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden flex items-center justify-center perspective-[2000px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(6,182,212,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
            Under the Hood
          </h2>
          <p className="text-lg text-slate-400 font-light">
            A multi-stage local pipeline designed to deconstruct, map, and rebuild text structures for optimal human authenticity.
          </p>
        </div>

        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Central Hub */}
          <motion.div 
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 rounded-full border border-cyan-500/30 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
            <div className="w-32 h-32 rounded-full border border-blue-500/50 bg-[#0a0f25]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] z-10">
              <Network className="w-10 h-10 text-cyan-400" />
            </div>
            
            {/* Orbiting rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 border-dashed" style={{ transform: 'rotateX(70deg)' }} />
            <div className="absolute w-[550px] h-[550px] rounded-full border border-cyan-500/10" style={{ transform: 'rotateX(70deg) rotateY(20deg)' }} />
          </motion.div>

          {/* Floating Nodes */}
          <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            <Node 
              icon={<GitMerge className="w-5 h-5 text-blue-400" />}
              title="Semantic Analysis"
              delay={0}
              position="top-10 left-1/4"
              z={100}
            />
            <Node 
              icon={<Fingerprint className="w-5 h-5 text-indigo-400" />}
              title="Contextual Mapping"
              delay={1}
              position="top-1/4 right-1/4"
              z={150}
            />
            <Node 
              icon={<Activity className="w-5 h-5 text-teal-400" />}
              title="Linguistic Refinement"
              delay={2}
              position="bottom-1/4 right-1/3"
              z={50}
            />
            <Node 
              icon={<ActivitySquare className="w-5 h-5 text-cyan-400" />}
              title="Rewrite Pipeline"
              delay={3}
              position="bottom-1/4 left-1/4"
              z={200}
            />
          </div>
          
          {/* Data Streams */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <motion.path 
              d="M 300 200 Q 500 300 700 200" 
              fill="none" 
              stroke="url(#gradient1)" 
              strokeWidth="2"
              strokeDasharray="5 5"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 300 400 Q 500 300 700 400" 
              fill="none" 
              stroke="url(#gradient2)" 
              strokeWidth="2"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Node({ icon, title, delay, position, z }: { icon: React.ReactNode, title: string, delay: number, position: string, z: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        opacity: { duration: 0.8, delay: delay * 0.2 },
        scale: { duration: 0.8, delay: delay * 0.2 },
        y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`absolute ${position} bg-[#0a0f25]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4`}
      style={{ transform: `translateZ(${z}px)` }}
    >
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-sm font-medium text-white">{title}</div>
    </motion.div>
  );
}