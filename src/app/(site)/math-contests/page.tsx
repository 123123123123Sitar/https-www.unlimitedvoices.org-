import type { Metadata } from "next";
import { WarmupProblem } from "@/components/compete/WarmupProblem";
import { Button, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight, Bolt, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Math Contests · AMC-Style Practice",
  description:
    "Inclusive, volunteer-led, AMC-style math practice for every student. Take full-length practice tests and timed STEM quizzes with instant feedback.",
};

const contests = [
  {
    title: "AMC Practice Tests",
    body: "Full-length AMC 8, 10, and 12 practice tests with instant feedback. Work at your own pace and review every solution step by step.",
    points: ["Timed or untimed", "Instant scoring", "Worked solutions"],
  },
  {
    title: "STEM Quiz Competitions",
    body: "Short, timed quizzes across algebra, geometry, and number theory. Compete on a friendly leaderboard or just sharpen your skills.",
    points: ["Algebra · geometry · number theory", "Timed rounds", "Friendly leaderboard"],
  },
];

export default function MathContestsPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Math Contests</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              AMC-style math practice, open to every student.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Inclusive and volunteer-led. Take full-length practice tests, try timed
              quizzes, and build real problem-solving skills, free and at your own pace.
            </p>
            <div className="mt-9">
              <Button href="/auth/signup" size="lg">
                Start practicing
                <ArrowRight size={17} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Two contest cards */}
      <Section>
        <div className="grid gap-px overflow-hidden rounded-card-lg border border-hairline bg-hairline lg:grid-cols-2">
          {contests.map((c, i) => (
            <Reveal as="div" key={c.title} delay={i * 0.06} className="bg-surface p-8 sm:p-10">
              <Bolt size={22} className="text-ink" />
              <h2 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.025em] text-ink">
                {c.title}
              </h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-body">
                {c.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {c.points.map((p) => (
                  <li key={p} className="inline-flex items-center gap-2 text-[14px] text-body">
                    <Check size={15} className="text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/auth/signup" variant="secondary">
                  Open {c.title}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Warm-up problem */}
      <Section tone="alt" bordered className="border-t">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <span className="text-kicker">Try one now</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              A quick warm-up.
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-body">
              Give it a try, then reveal a full worked solution. This is the kind of problem
              you will see across the practice tests.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <WarmupProblem />
          </Reveal>
        </div>
      </Section>

      {/* Sign-up CTA */}
      <Section className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-lg font-semibold text-ink">
            Practice math contests for free.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[17px] text-body">
            Create a free account to track your scores and progress.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/auth/signup" size="lg">
              Sign up free
              <ArrowRight size={17} />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
