"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { catalog, PATHS, type TrackKey } from "@/content/start-learning";
import { cn } from "@/lib/utils";

type FilterKey = TrackKey | "all";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CatalogExplorer() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [leaving, setLeaving] = useState<string | null>(null);

  const groups = filter === "all" ? catalog : catalog.filter((g) => g.track === filter);

  function go(e: React.MouseEvent, href: string, key: string) {
    // Let modified clicks (new tab, etc.) behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (leaving) return;
    if (reduce) {
      router.push(href);
      return;
    }
    setLeaving(key);
    router.prefetch?.(href);
    // Navigate once the card has slid through; the destination's page-enter
    // animation completes the hand-off.
    window.setTimeout(() => router.push(href), 560);
  }

  return (
    <div className="overflow-x-clip">
      {/* Segmented path filter with animated indicator */}
      <div
        role="tablist"
        aria-label="Filter learning paths"
        className="flex flex-wrap gap-1 rounded-[12px] border border-hairline bg-surface p-1"
      >
        {PATHS.map((p) => {
          const active = filter === p.key;
          return (
            <button
              key={p.key}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(p.key)}
              className="relative rounded-[9px] px-4 py-2 text-[14px] font-medium transition-colors"
            >
              {active && (
                <motion.span
                  layoutId="path-filter-pill"
                  className="absolute inset-0 rounded-[9px] bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={cn("relative z-10", active ? "text-[var(--bg)]" : "text-body")}>
                {p.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col gap-14">
        <AnimatePresence mode="popLayout">
          {groups.map((group) => (
            <motion.section
              key={group.title}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className="mb-5 flex items-baseline justify-between border-b border-hairline pb-3">
                <h3 className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {group.title}
                </h3>
                <span className="font-mono text-[11px] text-caption">
                  {group.items.length} {group.items.length === 1 ? "path" : "paths"}
                </span>
              </div>
              <div
                className={cn(
                  "grid gap-px rounded-card border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3",
                  // Let a leaving card slide out of the panel; clip is handled at the root.
                  leaving ? "overflow-visible" : "overflow-hidden",
                )}
              >
                {group.items.map((item) => {
                  const key = item.name + item.href;
                  const isLeaving = leaving === key;
                  const dimmed = leaving !== null && !isLeaving;
                  return (
                    <motion.a
                      key={key}
                      href={item.href}
                      onMouseEnter={() => router.prefetch?.(item.href)}
                      onClick={(e) => go(e, item.href, key)}
                      className={cn(
                        "group relative flex flex-col bg-surface p-5 transition-colors hover:bg-[var(--bg-alt)]",
                        isLeaving && "z-20",
                      )}
                      animate={
                        isLeaving
                          ? { x: "130%", opacity: 0 }
                          : dimmed
                            ? { opacity: 0.25, scale: 0.98 }
                            : { x: 0, opacity: 1, scale: 1 }
                      }
                      transition={
                        isLeaving
                          ? { duration: 0.6, ease: EASE, opacity: { delay: 0.28, duration: 0.32 } }
                          : { duration: 0.35, ease: EASE }
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[16px] font-semibold tracking-[-0.015em] text-ink">
                          {item.name}
                        </span>
                        <ArrowRight
                          size={15}
                          className="text-caption transition-transform group-hover:translate-x-1 group-hover:text-ink"
                        />
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-body">{item.blurb}</p>
                      {item.tag && (
                        <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-caption">
                          {item.tag}
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
