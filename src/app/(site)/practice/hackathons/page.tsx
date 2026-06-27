import type { Metadata } from "next";
import { ProblemFilters } from "@/components/compete/ProblemFilters";
import { Container, Reveal, Section, StatNumber } from "@/components/ui";

export const metadata: Metadata = {
  title: "Practice Problem Bank · Code Arena",
  description:
    "A verified bank of practice problems for Code Arena. Filter by topic, difficulty, event, and division, then start solving in your browser.",
};

const stats = [
  { value: 26, label: "verified problems", animate: true },
  { value: 15, label: "easy", animate: false },
  { value: 9, label: "medium", animate: false },
  { value: 2, label: "hard", animate: false },
];

export default function PracticeProblemBankPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Practice problem bank</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Practice problems, verified and ready to solve.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Sharpen your skills between contests. Every problem runs in your browser and
              counts toward your learning record.
            </p>
          </Reveal>

          {/* Stat row */}
          <Reveal delay={0.08}>
            <dl className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[13px] text-body">
              <span className="inline-flex items-baseline gap-1.5">
                <dd className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                  <StatNumber value={26} />
                </dd>
                <dt>verified problems</dt>
              </span>
              {stats.slice(1).map((s) => (
                <span key={s.label} className="inline-flex items-baseline gap-1.5">
                  <span aria-hidden="true" className="text-caption">
                    ·
                  </span>
                  <dd className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                    {s.value}
                  </dd>
                  <dt>{s.label}</dt>
                </span>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Filters + list */}
      <Section>
        <ProblemFilters />
      </Section>
    </>
  );
}
