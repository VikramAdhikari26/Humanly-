import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function AITransformationShowcase() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden flex items-center justify-center perspective-[1200px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Before & After
            </div>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
              The anatomy of <span className="italic text-cyan-400">human</span> text
            </h2>
          </motion.div>
        </div>

        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          <motion.div 
            initial={{ opacity: 0, rotateX: 20, y: 40 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-8 items-stretch relative"
          >
            {/* AI Side */}
            <div className="flex-1 bg-gradient-to-br from-[#050A1A] to-[#0A0F25] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full blur-2xl" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">Raw AI Output</span>
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold">Robotic</span>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  <span className="bg-red-500/10 text-red-200 rounded px-1">It is crucial to note that</span> the 
                  <span className="bg-red-500/10 text-red-200 rounded px-1 ml-1">ever-evolving landscape</span> of digital marketing requires a 
                  <span className="bg-red-500/10 text-red-200 rounded px-1 ml-1">multifaceted approach</span>.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Furthermore, businesses must <span className="bg-red-500/10 text-red-200 rounded px-1">leverage synergistic strategies</span> to <span className="bg-red-500/10 text-red-200 rounded px-1">unlock unprecedented growth</span>.
                </p>
              </div>
            </div>

            {/* Transform Arrow */}
            <div className="hidden lg:flex items-center justify-center relative z-20 w-16 -mx-12 shrink-0">
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] border-4 border-[#020617]"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Human Side */}
            <div className="flex-1 bg-gradient-to-br from-blue-900/20 to-[#0A0F25] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-bl-full blur-3xl" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Humanly Output</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Natural
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-white text-lg leading-relaxed font-medium">
                  <span className="text-cyan-300">Digital marketing changes fast,</span> so your strategy needs to adapt.
                </p>
                <p className="text-white text-lg leading-relaxed font-medium">
                  If you want to grow, you need teams that <span className="text-cyan-300">actually work together.</span>
                </p>
              </div>
              
              {/* Floating success metric */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">1.0</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Authenticity Index</div>
                  <div className="text-slate-400 text-xs">High Perplexity</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
