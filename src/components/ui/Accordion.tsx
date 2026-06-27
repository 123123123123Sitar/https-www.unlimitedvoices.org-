"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

/** Hairline accordion with smooth height + a + → × rotate indicator. */
export function Accordion({
  items,
  className,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("hairline-t", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="hairline-b">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-[17px] font-medium text-ink">
                  {item.question}
                </span>
                <span className="relative h-4 w-4 shrink-0 text-caption">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                  <motion.span
                    className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current"
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-prose pb-5 text-[15px] leading-relaxed text-body">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
