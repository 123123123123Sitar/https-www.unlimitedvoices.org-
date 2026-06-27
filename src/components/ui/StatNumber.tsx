"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/lib/utils";

interface StatNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Render with thousands separators. */
  format?: boolean;
  className?: string;
}

/** Animated count-up number that starts when scrolled into view. */
export function StatNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  format = true,
  className,
}: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const current = useCountUp({ to: value, decimals, start: inView });
  const display = format ? formatNumber(current) : current.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
