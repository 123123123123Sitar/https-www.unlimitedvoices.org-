"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";
import {
  difficulties,
  divisions,
  events,
  problems,
  topics,
  type Difficulty,
  type Division,
  type Problem,
  type Topic,
} from "@/content/problems";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterChip({ active, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        "rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.05em] transition-colors",
        active
          ? "border-[var(--hairline-strong)] bg-ink text-[var(--bg)]"
          : "border-hairline bg-surface text-body hover:border-[var(--hairline-strong)]",
      )}
    >
      {children}
    </button>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-caption">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

/** Monochrome difficulty tag — no color coding, just a text label. */
function DifficultyTag({ value }: { value: Difficulty }) {
  return (
    <Badge variant="outline" className="capitalize">
      {value}
    </Badge>
  );
}

const SKELETON_ROWS = 8;

export function ProblemFilters() {
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [event, setEvent] = useState<string | null>(null);
  const [division, setDivision] = useState<Division | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  const filtered = useMemo<Problem[]>(() => {
    return problems.filter(
      (p) =>
        (!topic || p.topic === topic) &&
        (!difficulty || p.difficulty === difficulty) &&
        (!event || p.event === event) &&
        (!division || p.division === division),
    );
  }, [topic, difficulty, event, division]);

  const anyActive = topic || difficulty || event || division;

  return (
    <div className="grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-14">
      {/* Filters — a sticky sidebar that sits beside the list, never over it */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex flex-col gap-7 border-b border-hairline pb-7 lg:border-0 lg:pb-0">
          <FilterGroup label="Topic">
            {topics.map((t) => (
              <FilterChip
                key={t}
                active={topic === t}
                onClick={() => setTopic(topic === t ? null : t)}
              >
                {t}
              </FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Difficulty">
            {difficulties.map((d) => (
              <FilterChip
                key={d}
                active={difficulty === d}
                onClick={() => setDifficulty(difficulty === d ? null : d)}
              >
                {d}
              </FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Event">
            {events.map((e) => (
              <FilterChip
                key={e}
                active={event === e}
                onClick={() => setEvent(event === e ? null : e)}
              >
                {e}
              </FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Division">
            {divisions.map((d) => (
              <FilterChip
                key={d}
                active={division === d}
                onClick={() => setDivision(division === d ? null : d)}
              >
                {d}
              </FilterChip>
            ))}
          </FilterGroup>
          {anyActive && (
            <button
              type="button"
              onClick={() => {
                setTopic(null);
                setDifficulty(null);
                setEvent(null);
                setDivision(null);
              }}
              className="self-start font-mono text-[11px] uppercase tracking-[0.05em] text-accent"
            >
              Clear filters
            </button>
          )}
        </div>
      </aside>

      {/* List column */}
      <div className="min-w-0">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-caption">
            {loading ? "Loading" : `${filtered.length} ${filtered.length === 1 ? "problem" : "problems"}`}
          </span>
        </div>

        {/* Header row */}
        <div className="hidden grid-cols-[6rem_1fr_5.5rem_6rem_4.5rem_6.5rem] gap-4 border-b border-hairline pb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-caption md:grid">
        <span>Date</span>
        <span>Problem</span>
        <span>Difficulty</span>
        <span>Topic</span>
        <span>Points</span>
        <span className="text-right">Action</span>
      </div>

      {/* List */}
      {loading ? (
        <ul aria-hidden="true">
          {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
            <li
              key={i}
              className="grid grid-cols-2 gap-4 border-b border-hairline py-5 md:grid-cols-[6rem_1fr_5.5rem_6rem_4.5rem_6.5rem]"
            >
              <span className="h-3 w-20 animate-pulse rounded bg-track" />
              <span className="h-3 w-40 animate-pulse rounded bg-track" />
              <span className="hidden h-3 w-14 animate-pulse rounded bg-track md:block" />
              <span className="hidden h-3 w-16 animate-pulse rounded bg-track md:block" />
              <span className="hidden h-3 w-10 animate-pulse rounded bg-track md:block" />
              <span className="hidden h-3 w-16 animate-pulse justify-self-end rounded bg-track md:block" />
            </li>
          ))}
        </ul>
      ) : filtered.length === 0 ? (
        <p className="border-b border-hairline py-10 text-center text-[15px] text-body">
          No problems match these filters.
        </p>
      ) : (
        <ul>
          {filtered.map((p) => (
            <li
              key={p.slug}
              className="grid grid-cols-2 items-center gap-x-4 gap-y-2 border-b border-hairline py-5 md:grid-cols-[6rem_1fr_5.5rem_6rem_4.5rem_6.5rem]"
            >
              <span className="order-2 font-mono text-[12px] text-caption md:order-none">
                {p.date}
              </span>
              <span className="order-1 col-span-2 font-display text-[16px] font-medium text-ink md:order-none md:col-span-1">
                {p.title}
              </span>
              <span className="order-3 md:order-none">
                <DifficultyTag value={p.difficulty} />
              </span>
              <span className="order-4 font-mono text-[12px] capitalize text-body md:order-none">
                {p.topic}
              </span>
              <span className="order-5 font-mono text-[12px] text-ink md:order-none">
                {p.points} pts
              </span>
              <Link
                href="/practice/hackathons"
                className="order-6 inline-flex items-center justify-end gap-1.5 text-[13px] font-medium text-accent md:order-none"
              >
                Start solving
                <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}
