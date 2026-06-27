"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: EASE },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Gentle scroll-recede: the hero softens and lifts slightly as you scroll past.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <Container className="pb-20 pt-20 sm:pb-28 sm:pt-28">
        <motion.div
          style={reduce ? undefined : { opacity, y, scale }}
          className="mx-auto max-w-[860px] text-center"
        >
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.h1
              variants={item}
              className="mx-auto max-w-[16ch] text-display-xl font-semibold text-ink"
            >
              Empowering Every Student Through Unlimited Voices
            </motion.h1>
            <motion.p
              variants={item}
              className="mx-auto mt-7 max-w-[58ch] text-[18px] leading-relaxed text-body"
            >
              Free, high-quality courses in coding, AI, and STEM, open to every student. Learn
              at your own pace, earn credentials you can show, and build real projects that are
              yours to keep.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href="/start-learning" size="lg">
                Start learning free
                <ArrowRight size={17} />
              </Button>
              <Button href="/courses" variant="secondary" size="lg">
                Explore courses
              </Button>
            </motion.div>
            <motion.p variants={item} className="mt-6 font-mono text-[12px] text-caption">
              No credit card. No tiers. Free forever.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
