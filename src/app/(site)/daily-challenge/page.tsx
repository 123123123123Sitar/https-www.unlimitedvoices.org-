import type { Metadata } from "next";
import { StreakGrid } from "@/components/compete/StreakGrid";
import { Badge, Button, Card, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Daily Challenge · A Free Problem Every Day",
  description:
    "A fresh coding problem every day, free. Verified on your learning record, build a streak, earn MERIT, and show colleges what you can do.",
};

const steps = [
  {
    title: "Open today's problem",
    body: "A new problem unlocks every morning, with no signup wall to read it.",
  },
  {
    title: "Solve it in your browser",
    body: "Write and run your solution in Python, Java, C++, or C.",
  },
  {
    title: "Build your streak",
    body: "Each solved day adds to your streak and earns MERIT.",
  },
  {
    title: "Show your record",
    body: "Your verified history is ready to share with colleges.",
  },
];

export default function DailyChallengePage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Daily Challenge</span>
            <h1 className="mt-5 max-w-[18ch] text-display-lg font-semibold text-ink">
              A fresh coding problem every day, free.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Every problem is verified on your learning record. Build a streak, earn MERIT,
              and show colleges a daily habit of solving real problems.
            </p>
            <div className="mt-9">
              <Button href="/auth/signup" size="lg">
                Solve today&rsquo;s problem
                <ArrowRight size={17} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Today's challenge feature */}
      <Section>
        <Reveal>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-caption">
                    Today · Jun 26, 2026
                  </span>
                  <Badge variant="outline">Medium</Badge>
                </div>
                <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-[-0.03em] text-ink">
                  Subarray Budget
                </h2>
                <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-body">
                  Given a list of prices and a budget, find the longest run of consecutive
                  items whose total stays within budget. Return its length. Aim for a single
                  pass over the list.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-caption">
                  <span>Languages: Python · Java · C++ · C</span>
                  <span>Worth 100 pts</span>
                </div>
                <div className="mt-8">
                  <Button href="/auth/signup">
                    Solve today&rsquo;s problem
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-card border border-hairline bg-surface-2 p-6">
                <pre className="overflow-x-auto font-mono text-[12.5px] leading-relaxed text-body">
                  <code>{`prices = [4, 2, 7, 1, 3]
budget = 10

# longest window with sum <= budget
# -> [2, 7, 1] has sum 10
# answer: 3`}</code>
                </pre>
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* Streak grid */}
      <Section tone="alt" bordered className="border-t">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="text-kicker">Your streak</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              One problem a day adds up fast.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-body">
              Every solved day fills a square. Keep the run going to grow your streak and
              steadily build a record colleges can trust.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-7 sm:p-8">
              <StreakGrid />
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <Reveal>
          <span className="text-kicker">How it works</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            A simple daily loop.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-card-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="div" key={s.title} delay={i * 0.06} className="bg-surface p-7">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface font-mono text-[13px] text-ink">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-body">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="alt" bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-lg font-semibold text-ink">
            Start your streak today.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[17px] text-body">
            Free forever. One fresh problem every day.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/auth/signup" size="lg">
              Solve today&rsquo;s problem
              <ArrowRight size={17} />
            </Button>
          </div>
          <ul className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-body">
            {["Free forever", "Verified on your record", "Earn MERIT"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check size={15} className="text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
