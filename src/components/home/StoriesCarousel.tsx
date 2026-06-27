"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { stories } from "@/content/home";
import { cn } from "@/lib/utils";

export function StoriesCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index || (index === stories.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + stories.length) % stories.length);
  };

  const story = stories[index];

  return (
    <div>
      <div className="relative min-h-[260px] overflow-hidden rounded-card-lg border border-hairline bg-surface p-8 sm:p-12">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-prose font-display text-[22px] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[26px]">
              “{story.quote}”
            </p>
            <footer className="mt-7 flex items-center gap-3">
              <span className="font-display text-[15px] font-semibold text-ink">{story.name}</span>
              <span className="h-3 w-px bg-[var(--hairline-strong)]" />
              <span className="text-[14px] text-body">{story.detail}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show story ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-ink" : "w-1.5 bg-[var(--hairline-strong)]",
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous story"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-hairline bg-surface text-body transition-colors hover:text-ink"
          >
            <ArrowRight size={16} className="rotate-180" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next story"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-hairline bg-surface text-body transition-colors hover:text-ink"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
