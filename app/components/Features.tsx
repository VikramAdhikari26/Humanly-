import { motion } from 'framer-motion';
import { PenTool, Sliders, ShieldCheck, Zap, MessageSquare, Layers } from 'lucide-react';

const features = [
  {
    icon: <Sliders className="w-6 h-6 text-blue-400" />,
    title: "Tone Control",
    description: "Fine-tune the output voice—from academic research and professional drafting to conversational."
  },
  {
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    title: "Rewrite Strength",
    description: "Adjust how radically the text transforms while preserving the original semantic intent."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-sky-400" />,
    title: "Natural Sentence Flow",
    description: "Eliminates rigid structures and injects organic rhythm, burstiness, and phrasing."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    title: "AI Detection Reduction",
    description: "Lowers synthetic probability scores by introducing natural linguistic variations."
  },
  {
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
    title: "Context Preservation",
    description: "Maintains factual accuracy and core arguments through advanced semantic mapping."
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Real-time Processing",
    description: "Watch the text evolve instantly via an optimized, low-latency rewriting pipeline."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
            Engineered for <span className="italic text-cyan-400">authenticity</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Our models analyze semantics, adjust phrasing rhythm, and synthesize natural text structures while preserving core intent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.6, delay: idx * 0.1 },
                y: { duration: 0.6, delay: idx * 0.1, ease: "easeOut" },
                scale: { duration: 0.2 },
                hover: { type: "spring", stiffness: 300 }
              }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] hover:border-white/20 transition-all group relative overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)] backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              
              <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#0A102A] to-blue-900/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
