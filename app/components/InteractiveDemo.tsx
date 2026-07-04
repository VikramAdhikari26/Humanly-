import { motion } from 'framer-motion';
import { Settings2, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function InteractiveDemo() {
  const [isRewriting, setIsRewriting] = useState(false);
  const [output, setOutput] = useState("We understand that navigating the complexities of digital transformation can be challenging. It is crucial to leverage synergistic methodologies...");
  
  const handleRewrite = () => {
    setIsRewriting(true);
    setTimeout(() => {
      setOutput("Going digital is tough. But if you bring the right teams together and focus on what matters, you'll get there faster.");
      setIsRewriting(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-32 bg-[#020617] relative perspective-[1500px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-6">
            Interactive Processing Console
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Experiment with the core rewriting engine. Adjust parameters and observe real-time transformations from rigid generation to organic prose.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_100px_-20px_rgba(37,99,235,0.3)] relative transform-gpu hover:shadow-[0_30px_120px_-20px_rgba(37,99,235,0.4)] transition-all duration-700">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel - Input */}
            <div className="flex-1 p-8 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Input (AI Generated)</span>
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                  <span>32 words</span>
                </div>
              </div>
              <textarea 
                className="w-full h-48 bg-transparent text-slate-300 resize-none outline-none text-lg leading-relaxed font-light"
                defaultValue="We understand that navigating the complexities of digital transformation can be challenging. It is crucial to leverage synergistic methodologies to ensure optimal outcomes and maximize holistic paradigm shifts across the organization."
              />
              
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-3 text-slate-400">
                    <span>Tone</span>
                    <span className="text-cyan-400">Conversational</span>
                  </div>
                  <div className="flex gap-2">
                    {['Professional', 'Conversational', 'Witty', 'Academic'].map((tone) => (
                      <button 
                        key={tone}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${tone === 'Conversational' ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-3 text-slate-400">
                    <span>Rewrite Strength</span>
                    <span>High</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>
              </div>

              <button 
                onClick={handleRewrite}
                disabled={isRewriting}
                className="w-full mt-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isRewriting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 fill-current" />}
                {isRewriting ? 'Humanizing...' : 'Humanize Text'}
              </button>
            </div>

            {/* Right Panel - Output */}
            <div className="flex-1 p-8 bg-gradient-to-br from-blue-900/10 to-transparent relative">
              {isRewriting && (
                <div className="absolute inset-0 z-10 backdrop-blur-sm bg-[#0a0f25]/50 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-cyan-400 animate-spin" />
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Output (Humanized)
                </span>
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Settings2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="relative h-48">
                <div className="relative z-10 text-white text-lg leading-relaxed font-light">
                  {output}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-sm font-medium text-slate-400 mb-4">Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-semibold text-white mb-1">0.02</div>
                    <div className="text-xs text-slate-400">Synthetic Probability</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-semibold text-white mb-1">High</div>
                    <div className="text-xs text-slate-400">Burstiness Variance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
