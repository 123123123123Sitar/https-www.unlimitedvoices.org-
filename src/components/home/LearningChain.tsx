"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = 6;

/** Minimal animated "learning chain": hairline-linked blocks with a traveling pulse. */
export function LearningChain() {
  const reduce = useReducedMotion();

  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <div className="flex items-center">
        {Array.from({ length: NODES }).map((_, i) => (
          <div key={i} className="flex items-center">
            <motion.span
              className="relative flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#26272B] bg-[#111113]"
              initial={reduce ? false : { opacity: 0.5 }}
              animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#5B7BFF]" />
            </motion.span>
            {i < NODES - 1 && (
              <span className="relative h-px w-8 overflow-hidden bg-[#26272B] sm:w-12">
                {!reduce && (
                  <motion.span
                    className="absolute inset-y-0 left-0 w-4 bg-[#5B7BFF]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "300%" }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
