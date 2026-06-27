"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

// A long ease-out curve in the spirit of apple.com / Linear entrances.
const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in px (default 28). */
  y?: number;
  /** Animation duration in seconds (default 0.9). */
  duration?: number;
  /** Add a subtle blur-into-focus (default true). Disable for dense text blocks. */
  blur?: boolean;
  as?: "div" | "li" | "span" | "section";
}

/**
 * Scroll-into-view entrance: opacity + rise + a faint scale and blur-into-focus,
 * on a long ease-out. Reduced motion collapses to an opacity-only fade.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  blur = true,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const hidden = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        y,
        scale: 0.985,
        ...(blur ? { filter: "blur(6px)" } : {}),
      };

  const shown = reduce
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        ...(blur ? { filter: "blur(0px)" } : {}),
      };

  return (
    <MotionTag
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduce ? 0.4 : duration, ease: APPLE_EASE, delay }}
      style={{ willChange: "transform, opacity, filter" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
