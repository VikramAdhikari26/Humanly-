import { motion } from 'framer-motion';

export function ProjectVision() {
  return (
    <section className="py-40 bg-[#020617] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-px bg-cyan-500/50 mx-auto mb-12" />
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-white leading-relaxed font-light">
            An experimental AI platform focused on transforming robotic AI-generated content into natural human communication using contextual rewriting and local language models.
          </h2>
          <div className="w-16 h-px bg-cyan-500/50 mx-auto mt-12" />
          
          <div className="mt-16 flex items-center justify-center gap-2 text-slate-500 text-sm tracking-widest uppercase font-medium">
            <span>Humanly Research Project</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50 mx-2" />
            <span>Est. 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}