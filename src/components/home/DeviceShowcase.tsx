"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bolt, Check, Cube, Terminal, Users } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

// Visible screen height inside the phone. Each panel fills exactly this.
const SCREEN_H = 540;

const STAGES = [
  { key: "Read", label: "Read the lesson", note: "Short, focused lessons. One idea at a time." },
  { key: "Build", label: "Build it in a lab", note: "Write real code in the browser. No setup." },
  { key: "Run", label: "Run the tests", note: "Run your solution and watch the checks pass." },
  { key: "Earn", label: "Earn your record", note: "Bank XP and a verified record you keep." },
];

/* ----------------------------- phone chrome ---------------------------- */

/** Top status bar — time + signal/wifi/battery glyphs, clear of the island. */
function StatusBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3.5 text-ink">
      <span className="font-mono text-[11px] font-semibold tabular-nums">9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[5, 7, 9, 11].map((h) => (
            <span key={h} style={{ height: h }} className="w-[3px] rounded-[1px] bg-ink" />
          ))}
        </span>
        <svg
          width="15"
          height="11"
          viewBox="0 0 16 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M2.5 5.5a8 8 0 0 1 11 0" />
          <path d="M5 8a4.5 4.5 0 0 1 6 0" />
          <circle cx="8" cy="10.4" r="0.5" fill="currentColor" stroke="none" />
        </svg>
        <span className="relative flex h-[11px] w-[22px] items-center rounded-[3px] border border-ink/50 px-[2px]">
          <span className="h-[6px] w-[13px] rounded-[1px] bg-ink" />
          <span className="absolute -right-[3px] top-1/2 h-[4px] w-[2px] -translate-y-1/2 rounded-r-[1px] bg-ink/50" />
        </span>
      </span>
    </div>
  );
}

/** Bottom tab bar — masks scrolling content; "Learn" is the active tab. */
function TabBar() {
  const tabs = [
    { icon: Terminal, label: "Learn", active: true },
    { icon: Bolt, label: "Practice", active: false },
    { icon: Cube, label: "Wallet", active: false },
    { icon: Users, label: "Profile", active: false },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex items-stretch border-t border-hairline bg-surface">
      {tabs.map((t) => (
        <div
          key={t.label}
          className={cn(
            "flex flex-1 flex-col items-center gap-1 py-2.5",
            t.active ? "text-accent" : "text-caption",
          )}
        >
          <t.icon size={17} />
          <span className="font-mono text-[8px] uppercase tracking-[0.06em]">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------- panels -------------------------------- */

function Panel({ children }: { children: React.ReactNode }) {
  // Top pad clears the status bar + island; bottom pad clears the tab bar.
  return (
    <div className="flex flex-col px-5 pb-[64px] pt-[46px]" style={{ height: SCREEN_H }}>
      {children}
    </div>
  );
}

function Pill({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "accent" }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em]",
        tone === "accent" ? "border-transparent bg-ink text-[var(--bg)]" : "border-hairline text-caption",
      )}
    >
      {children}
    </span>
  );
}

function ReadPanel() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-caption">
          Python · Lesson 5
        </span>
        <Pill>4 min read</Pill>
      </div>
      <h3 className="mt-3 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
        Functions &amp; scope
      </h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-body">
        A function groups steps you can reuse. Give it{" "}
        <span className="rounded-[3px] bg-accent-soft px-1 text-ink">inputs</span>, return a
        result, and call it whenever you need it.
      </p>
      <div className="mt-4 rounded-[12px] border border-hairline bg-surface-2 p-3.5">
        <p className="font-mono text-[11px] leading-relaxed text-muted">
          def total(items):
          <br />
          &nbsp;&nbsp;return sum(items)
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-[10px] border border-hairline bg-surface p-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink text-[var(--bg)]">
          <Check size={13} />
        </span>
        <p className="text-[12px] leading-snug text-body">
          Key idea: a function&rsquo;s variables stay in its own scope.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-mono text-[10px] text-caption">Lesson 5 of 12</span>
        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-accent">
          Start the lab <ArrowRight size={11} />
        </span>
      </div>
    </Panel>
  );
}

function CodeLine({ n, children, cursor }: { n: number; children: React.ReactNode; cursor?: boolean }) {
  return (
    <div className="flex gap-2.5 font-mono text-[11px] leading-[1.7]">
      <span className="w-3 shrink-0 text-right text-[#46474C]">{n}</span>
      <span className="text-[#E2E2E6]">
        {children}
        {cursor && <span className="ml-[1px] inline-block h-[12px] w-[6px] translate-y-[2px] bg-[#5B7BFF]" />}
      </span>
    </div>
  );
}

function BuildPanel() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-caption">
          Build · your turn
        </span>
        <Pill>Hint</Pill>
      </div>
      <div className="mt-3 overflow-hidden rounded-[12px] border border-[#1C1D21] bg-coal">
        <div className="flex items-center justify-between border-b border-[#26272B] px-3 py-2">
          <span className="font-mono text-[10px] text-[#86868C]">solution.py</span>
          <span className="rounded-[6px] border border-[#3A3B40] px-2 py-0.5 font-mono text-[10px] text-[#E8E8EA]">
            Run
          </span>
        </div>
        <div className="px-3 py-3">
          <CodeLine n={1}>def total(items):</CodeLine>
          <CodeLine n={2}>&nbsp;&nbsp;result = 0</CodeLine>
          <CodeLine n={3}>&nbsp;&nbsp;for n in items:</CodeLine>
          <CodeLine n={4} cursor>
            &nbsp;&nbsp;&nbsp;&nbsp;result += n
          </CodeLine>
          <CodeLine n={5}>&nbsp;&nbsp;return result</CodeLine>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-[10px] border border-hairline bg-surface px-3 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-caption">
          Tests
        </span>
        <span className="font-mono text-[11px] text-body">0 / 3 passed</span>
      </div>
      <p className="mt-3 text-[12px] leading-relaxed text-body">
        Hint: add each item to <span className="font-mono text-[11px] text-ink">result</span>,
        then return it.
      </p>
      <span className="mt-auto font-mono text-[10px] text-caption">Press Run when ready.</span>
    </Panel>
  );
}

function RunPanel() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-caption">
          Run · results
        </span>
        <span className="font-mono text-[10px] text-caption">ran in 0.04s</span>
      </div>
      <div className="mt-3 space-y-2">
        {["total([4, 8, 2]) → 14", "total([]) → 0", "total([5]) → 5"].map((row) => (
          <div
            key={row}
            className="flex items-center gap-2.5 rounded-[10px] border border-hairline bg-surface px-3 py-2.5"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-ink text-[var(--bg)]">
              <Check size={11} />
            </span>
            <span className="font-mono text-[11px] text-ink">{row}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-[10px] bg-surface-2 px-3 py-2.5">
        <span className="inline-flex items-center gap-1.5">
          <Check size={13} className="text-accent" />
          <span className="font-mono text-[11px] text-body">All tests passed</span>
        </span>
        <span className="font-mono text-[11px] font-semibold text-ink">3 / 3</span>
      </div>
      <span className="mt-auto font-mono text-[10px] text-caption">Lesson complete.</span>
    </Panel>
  );
}

function EarnPanel() {
  return (
    <Panel>
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-[var(--bg)]">
          <Check size={26} />
        </span>
        <h3 className="mt-4 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
          Lesson complete
        </h3>
        <p className="mt-1.5 text-[12.5px] text-body">Functions &amp; scope · Python</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <div className="rounded-[12px] border border-hairline bg-surface p-3">
          <p className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">+80</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.06em] text-caption">XP earned</p>
        </div>
        <div className="rounded-[12px] border border-hairline bg-surface p-3">
          <p className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">+1</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.06em] text-accent">MERIT</p>
        </div>
      </div>
      <div className="mt-2.5 rounded-[12px] border border-hairline bg-surface p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-caption">
            Level 7
          </span>
          <span className="font-mono text-[10px] text-body">6,400 / 8,000 XP</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-track">
          <div className="h-full w-[80%] rounded-full bg-ink" />
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-2 rounded-[12px] border border-hairline bg-surface-2 p-3">
        <Cube size={15} className="shrink-0 text-accent" />
        <p className="text-[11.5px] leading-snug text-body">Saved to your learning record.</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 self-center font-mono text-[10px] text-accent">
        Continue <ArrowRight size={11} />
      </span>
    </Panel>
  );
}

/* ------------------------------- phone --------------------------------- */

function Phone({ active }: { active?: number }) {
  const scrub = active !== undefined;
  return (
    <div className="relative w-[272px] shrink-0">
      <div className="rounded-[46px] border border-[#2a2a2e] bg-[#161618] p-[9px] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.55)]">
        {/* dynamic-island pill */}
        <div className="absolute left-1/2 top-[18px] z-10 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        <div
          className="relative overflow-hidden rounded-[38px] border border-hairline bg-surface"
          style={{ height: SCREEN_H }}
        >
          <StatusBar />
          {scrub ? (
            // The screen settles on the panel matching the active stage.
            <motion.div
              animate={{ y: -(active ?? 0) * SCREEN_H }}
              transition={{ type: "spring", stiffness: 150, damping: 26, mass: 0.6 }}
            >
              <ReadPanel />
              <BuildPanel />
              <RunPanel />
              <EarnPanel />
            </motion.div>
          ) : (
            <BuildPanel />
          )}
          <TabBar />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ showcase ------------------------------- */

/** Simple stacked layout — used on mobile and under reduced motion. */
function SimpleShowcase() {
  return (
    <section className="bg-[var(--bg-alt)] py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-kicker">See it in action</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Learn by building, right in your browser.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-body">
            Read a short lesson, build it in a real lab, run the tests, and keep the XP and
            records you earn.
          </p>
          <Button href="/start-learning" className="mt-8">
            Start learning free
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Phone />
        </div>
      </div>
    </section>
  );
}

/** Pinned, scroll-scrubbed layout — desktop only. */
function PinnedShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Hold the first screen during a lead-in (so the phone fully settles into view
  // before anything scrubs) and hold the last screen during a tail-out.
  const LEAD = 0.2;
  const TAIL = 0.12;
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const t = Math.min(1, Math.max(0, (p - LEAD) / (1 - LEAD - TAIL)));
    setActive(Math.min(STAGES.length - 1, Math.floor(t * STAGES.length)));
  });

  if (reduce) return <SimpleShowcase />;

  return (
    <section ref={ref} className="relative bg-[var(--bg-alt)]" style={{ height: "420vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          {/* Narrative column tracks the scroll stage */}
          <div className="order-2 lg:order-1">
            <span className="text-kicker">See it in action</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Learn by building, right in your browser.
            </h2>
            <ul className="mt-8 space-y-1">
              {STAGES.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.key} className="flex gap-4">
                    {/* rail */}
                    <div className="flex flex-col items-center pt-1">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors duration-300",
                          on ? "bg-accent" : "bg-[var(--hairline-strong)]",
                        )}
                      />
                      {i < STAGES.length - 1 && <span className="mt-1 h-10 w-px bg-hairline" />}
                    </div>
                    <div className="pb-2">
                      <p
                        className={cn(
                          "font-display text-[16px] font-semibold tracking-[-0.015em] transition-colors duration-300",
                          on ? "text-ink" : "text-caption",
                        )}
                      >
                        {s.label}
                      </p>
                      <motion.p
                        animate={{ opacity: on ? 1 : 0, height: on ? "auto" : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden text-[14px] leading-relaxed text-body"
                      >
                        {s.note}
                      </motion.p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button href="/start-learning" className="mt-8">
              Start learning free
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Pinned phone with scrubbing screen */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Phone active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mobile gets the simple stacked layout; large screens get the pinned scrub. */
export function DeviceShowcase() {
  return (
    <>
      <div className="lg:hidden">
        <SimpleShowcase />
      </div>
      <div className="hidden lg:block">
        <PinnedShowcase />
      </div>
    </>
  );
}
