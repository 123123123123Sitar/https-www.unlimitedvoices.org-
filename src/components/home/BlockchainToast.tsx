"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Close, Cube } from "@/components/ui/icons";
import { announcement } from "@/content/home";

// Distinct from the old top-bar key so a prior dismissal doesn't suppress this.
const KEY = "uv-blockchain-toast-dismissed";

/**
 * A quiet toast that slides in from the right once the visitor scrolls past the
 * hero, replacing the old top announcement bar. Dismissible and remembered.
 */
export function BlockchainToast() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem(KEY) === "1") return;
    setDismissed(false);

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    window.localStorage.setItem(KEY, "1");
    setShow(false);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="complementary"
          aria-label="Announcement"
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 48 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, x: 48 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-4 z-40 w-[min(92vw,330px)] sm:right-6"
        >
          <div className="relative rounded-card border border-hairline bg-surface p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={close}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-md text-caption transition-colors hover:text-ink"
            >
              <Close size={15} />
            </button>

            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-hairline bg-surface-2">
                <Cube size={16} className="text-accent" />
              </span>
              <span className="text-kicker">{announcement.eyebrow}</span>
            </div>

            <p className="mt-3.5 font-display text-[15px] font-semibold tracking-[-0.015em] text-ink">
              {announcement.title}
            </p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-body">{announcement.body}</p>

            <Link
              href={announcement.href}
              onClick={() => setShow(false)}
              className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent"
            >
              {announcement.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
