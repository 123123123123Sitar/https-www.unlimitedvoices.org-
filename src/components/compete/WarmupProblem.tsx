"use client";

import { useState } from "react";
import { Badge } from "@/components/ui";

/**
 * A sample warm-up problem with a toggleable solution. Math is rendered as plain
 * text (no KaTeX) to keep the page dependency-free.
 */
export function WarmupProblem() {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-card border border-hairline bg-surface p-7 sm:p-9">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-caption">
          Warm-up problem
        </span>
        <Badge variant="outline">AMC 10 style</Badge>
      </div>

      <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink">
        A whole number between 1 and 100 is chosen so that it is divisible by 3 and leaves
        a remainder of 2 when divided by 5. How many such numbers are there?
      </p>

      <div className="mt-6 font-mono text-[13px] text-body">
        (A) 5 &nbsp; (B) 6 &nbsp; (C) 7 &nbsp; (D) 8 &nbsp; (E) 9
      </div>

      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        aria-expanded={show}
        className="mt-7 font-mono text-[12px] uppercase tracking-[0.06em] text-accent"
      >
        {show ? "Hide solution" : "Show solution"}
      </button>

      {show && (
        <div className="mt-5 border-t border-hairline pt-5 text-[15px] leading-relaxed text-body">
          <p>
            We want numbers that satisfy n = 0 (mod 3) and n = 2 (mod 5). By the Chinese
            Remainder Theorem these repeat every 15 numbers; the smallest is 12 (since 12 is
            divisible by 3 and 12 = 2 mod 5).
          </p>
          <p className="mt-3">
            The numbers are 12, 27, 42, 57, 72, 87, that is 12 + 15k for k = 0 to 5, all at
            most 100. So there are <span className="font-medium text-ink">6</span> such
            numbers.
          </p>
          <p className="mt-3 font-medium text-ink">Answer: (B) 6.</p>
        </div>
      )}
    </div>
  );
}
