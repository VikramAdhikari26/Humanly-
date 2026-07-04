import { motion } from 'framer-motion';
import { ArrowDown, Cpu, FileText, Languages, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-slate-300" />,
    title: "Input AI Text",
    description: "Raw generation from external LLM sources.",
    glow: "bg-slate-500/20"
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Analyze Tone & Structure",
    description: "Semantic mapping and predictability scoring.",
    glow: "bg-blue-500/20"
  },
  {
    icon: <Languages className="w-6 h-6 text-indigo-400" />,
    title: "Contextual Rewriting",
    description: "Injecting natural variation and perplexity.",
    glow: "bg-indigo-500/20"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    title: "Humanized Output",
    description: "Authentic, editorial-grade prose.",
    glow: "bg-cyan-500/20"
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-[#020617] relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.5),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <h2 className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-4">Pipeline Architecture</h2>
          <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] text-white">
            Transformation Workflow
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-blue-900/50 to-cyan-900/50 -translate-x-1/2" />
          
          <div className="space-y-16 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                className="flex flex-col items-center group"
              >
                <div className="w-full max-w-md relative">
                  <div className={`absolute -inset-4 ${step.glow} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="bg-[#0a0f25]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform-gpu group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-400 font-light">{step.description}</p>
                    </div>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 -bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center text-slate-500"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}