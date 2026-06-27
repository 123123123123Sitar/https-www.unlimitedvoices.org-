"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { stages } from "@/content/start-learning";
import { cn } from "@/lib/utils";

/**
 * Pinned 3-stage scroll sequence. The right rail sticks while the left column
 * scrolls; the active stage tracks scroll progress. Reduced motion → static list.
 */
export function UnderstandBuildShow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <div className="grid gap-px overflow-hidden rounded-card-lg border border-hairline bg-hairline sm:grid-cols-3">
        {stages.map((s) => (
          <div key={s.n} className="bg-surface p-7">
            <span className="font-mono text-[12px] text-caption">{s.n}</span>
            <h3 className="mt-4 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          {/* Sticky visual: a number track that fills with progress */}
          <div className="hidden lg:block">
            <ProgressRail progress={scrollYProgress} />
          </div>
          <div className="flex flex-col gap-5">
            {stages.map((s, i) => (
              <StageCard key={s.n} index={i} progress={scrollYProgress} stage={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressRail({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useTransform(progress, [0, 1], [0.05, 1]);
  return (
    <div className="relative h-[260px]">
      <div className="absolute left-3 top-0 h-full w-px bg-hairline" />
      <motion.div
        className="absolute left-3 top-0 w-px origin-top bg-ink"
        style={{ height: "100%", scaleY }}
      />
      <div className="flex h-full flex-col justify-between">
        {stages.map((s, i) => (
          <RailDot key={s.n} index={i} progress={progress} label={s.title} num={s.n} />
        ))}
      </div>
    </div>
  );
}

function RailDot({
  index,
  progress,
  label,
  num,
}: {
  index: number;
  progress: MotionValue<number>;
  label: string;
  num: string;
}) {
  const start = index / stages.length;
  const reached = (p: number) => p >= start - 0.08;
  const bg = useTransform(progress, (p) => (reached(p) ? "var(--ink)" : "var(--surface)"));
  const color = useTransform(progress, (p) => (reached(p) ? "var(--bg)" : "var(--caption)"));

  return (
    <div className="flex items-center gap-4">
      <motion.span
        className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-hairline font-mono text-[11px]"
        style={{ backgroundColor: bg, color }}
      >
        {num}
      </motion.span>
      <span className="font-display text-[15px] font-medium text-ink">{label}</span>
    </div>
  );
}

function StageCard({
  index,
  progress,
  stage,
}: {
  index: number;
  progress: MotionValue<number>;
  stage: (typeof stages)[number];
}) {
  const start = index / stages.length;
  const opacity = useTransform(progress, (p) => (p >= start - 0.12 ? 1 : 0.35));

  return (
    <motion.div
      style={{ opacity }}
      className={cn("rounded-card-lg border border-hairline bg-surface p-7 sm:p-9")}
    >
      <span className="font-mono text-[12px] text-caption">{stage.n}</span>
      <h3 className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-[-0.025em] text-ink">
        {stage.title}
      </h3>
      <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-body">{stage.body}</p>
    </motion.div>
  );
}
