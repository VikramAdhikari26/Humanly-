import { motion } from 'framer-motion';

export function AbstractWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 perspective-[1000px]">
      <motion.div 
        className="absolute w-[150%] h-[150%] -left-1/4 -top-1/4"
        animate={{ 
          rotateX: [60, 65, 60], 
          rotateZ: [0, 5, 0],
          y: [-50, 0, -50] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="url(#grad1)"
            opacity="0.6"
            animate={{
              d: [
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z",
                "M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,60 Q30,80 60,60 T100,60 L100,100 L0,100 Z"
            fill="url(#grad2)"
            opacity="0.8"
            animate={{
              d: [
                "M0,60 Q30,80 60,60 T100,60 L100,100 L0,100 Z",
                "M0,60 Q30,40 60,60 T100,60 L100,100 L0,100 Z",
                "M0,60 Q30,80 60,60 T100,60 L100,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,40 Q40,20 70,50 T100,40 L100,100 L0,100 Z"
            fill="url(#grad3)"
            opacity="0.4"
            animate={{
              d: [
                "M0,40 Q40,20 70,50 T100,40 L100,100 L0,100 Z",
                "M0,40 Q40,60 70,50 T100,40 L100,100 L0,100 Z",
                "M0,40 Q40,20 70,50 T100,40 L100,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
              <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(14, 165, 233, 0.5)" />
              <stop offset="100%" stopColor="rgba(30, 58, 138, 0)" />
            </linearGradient>
            <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}