"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  /** Final value to animate to. */
  to: number;
  /** Duration in ms. */
  duration?: number;
  /** Decimal places to display. */
  decimals?: number;
  /** Start the animation. Typically driven by an in-view flag. */
  start?: boolean;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Count-up from 0 to `to` once `start` becomes true. Respects reduced motion. */
export function useCountUp({ to, duration = 1600, decimals = 0, start = true }: Options) {
  const [value, setValue] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    const reduce =
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        document.documentElement.getAttribute("data-motion") === "reduce");

    if (reduce) {
      setValue(to);
      return;
    }

    let startTime: number | null = null;
    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(to * easeOutExpo(progress));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [to, duration, start]);

  return Number(value.toFixed(decimals));
}
