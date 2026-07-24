"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: AnimationProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({
  children,
  className,
  delay = 0,
}: AnimationProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({
  children,
  className,
  delay = 0,
}: AnimationProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: -60,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}