"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface Mentor {
  name: string;
  role: string;
  school: string;
  major: string;
  location: string;
  bio: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function MentorGrid({ mentors }: { mentors: Mentor[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {mentors.map((m, i) => {
        const isOpen = open === i;
        const panelId = `mentor-bio-${i}`;
        return (
          <li key={m.name}>
            <div
              className={cn(
                "h-full rounded-card border border-hairline bg-surface p-6 transition-colors duration-200",
                isOpen ? "border-[var(--hairline-strong)]" : "",
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start gap-4 text-left focus:outline-none focus-visible:outline-2"
              >
                <span
                  className={cn(
                    "grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-hairline font-display text-[15px] font-semibold",
                    "text-caption transition-colors duration-200 grayscale",
                    "group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--bg)] group-hover:grayscale-0",
                    isOpen && "border-accent bg-accent text-[var(--bg)] grayscale-0",
                  )}
                  aria-hidden="true"
                >
                  {initials(m.name)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[15px] font-semibold text-ink">
                    {m.name}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-body">{m.role}</span>
                  <span className="mt-1 block text-[13px] text-caption">
                    {m.school} &middot; {m.major}
                  </span>
                </span>
              </button>

              <div
                id={panelId}
                hidden={!isOpen}
                className={cn("overflow-hidden", isOpen ? "mt-5" : "")}
              >
                <p className="border-t border-hairline pt-4 text-[14px] leading-relaxed text-body">
                  {m.bio}
                </p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.08em] text-caption">
                  {m.location}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
