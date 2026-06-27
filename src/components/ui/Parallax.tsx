"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  /** Drift distance in px across the element's scroll travel. Negative = upward. */
  amount?: number;
  className?: string;
}

/**
 * Subtle scroll-driven vertical drift, smoothed with a spring for an
 * apple.com-style parallax. Disabled under reduced motion.
 */
export function Parallax({ children, amount = 60, className }: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      {reduce ? <div>{children}</div> : <motion.div style={{ y }}>{children}</motion.div>}
    </div>
  );
}
