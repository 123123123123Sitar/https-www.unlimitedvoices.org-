"use client";

import { useEffect, useState } from "react";

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Live countdown to an ISO timestamp. Renders nothing until mounted (SSR-safe). */
export function Countdown({ target }: { target: string }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const t = new Date(target).getTime();
    setParts(diff(t));
    const id = setInterval(() => setParts(diff(t)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = parts
    ? [
        ["Days", parts.days],
        ["Hrs", parts.hours],
        ["Min", parts.minutes],
        ["Sec", parts.seconds],
      ]
    : [
        ["Days", 0],
        ["Hrs", 0],
        ["Min", 0],
        ["Sec", 0],
      ];

  return (
    <div className="flex items-stretch gap-px overflow-hidden rounded-[10px] border border-hairline">
      {cells.map(([label, value], i) => (
        <div
          key={label}
          className="flex min-w-[58px] flex-col items-center bg-surface px-3 py-2.5"
          style={{ borderLeft: i === 0 ? undefined : "1px solid var(--hairline)" }}
        >
          <span className="font-mono text-[20px] font-bold tabular-nums text-ink">
            {pad(value)}
          </span>
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-caption">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
