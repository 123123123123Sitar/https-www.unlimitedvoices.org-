"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "@/components/ui/icons";
import { courses, type Course } from "@/content/courses";
import { cn } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "code", label: "Code" },
  { key: "data", label: "Data" },
  { key: "practice", label: "Prep" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function CoursesPreview() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const shown: Course[] =
    filter === "all" ? courses : courses.filter((c) => c.track === filter);

  return (
    <div>
      <div className="mb-8 inline-flex rounded-[12px] border border-hairline bg-surface p-1">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="relative rounded-[9px] px-4 py-2 text-[14px] font-medium transition-colors"
            >
              {active && (
                <motion.span
                  layoutId="course-filter-pill"
                  className="absolute inset-0 rounded-[9px] bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={cn("relative z-10", active ? "text-[var(--bg)]" : "text-body")}>
                {f.label}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((c) => (
          <motion.div key={c.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card href={c.href} interactive className="flex h-full flex-col p-6">
              <span className="text-kicker">{c.category}</span>
              <h3 className="mt-3 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">{c.pitch}</p>
              <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-caption">
                <span>{c.lessons}</span>
                <ArrowRight size={15} className="text-ink" />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent"
        >
          View all courses
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
