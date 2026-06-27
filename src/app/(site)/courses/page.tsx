import type { Metadata } from "next";
import { Badge, Button, Card, Reveal, Section } from "@/components/ui";
import { ArrowRight, Check } from "@/components/ui/icons";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses · Free Coding, Data Science & SAT Prep",
  description:
    "Four free tracks for every student: Python, Java, Data Science, and Digital SAT prep. Learn at your own pace and earn a record of what you finish.",
};

export default function CoursesPage() {
  return (
    <>
      {/* ===================== HEADER ===================== */}
      <Section>
        <Reveal>
          <div className="max-w-[52ch]">
            <span className="text-kicker">Courses</span>
            <h1 className="mt-4 text-display-lg font-semibold text-ink">
              Four tracks. Pick where you start.
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-body">
              Free, self-paced courses in coding, data science, and SAT prep. Start at the
              beginning or jump to what you need. Every track is open to every student.
            </p>
          </div>
        </Reveal>

        {/* ===================== COURSE GRID ===================== */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal as="div" key={c.slug} delay={i * 0.06}>
              <Card href={c.href} interactive className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="solid">{c.category}</Badge>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-caption">
                    {c.level}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  {c.title}
                </h2>
                <p className="mt-3 text-[15px] font-medium text-ink">{c.pitch}</p>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
                  {c.description}
                </p>
                <div className="mt-6 border-t border-hairline pt-4 font-mono text-[11px] text-caption">
                  {c.modules} modules · {c.lessons} · {c.hours}h
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                  Start course
                  <ArrowRight size={15} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* ===================== MERIT CALLOUT ===================== */}
        <Reveal>
          <Card subtle className="mt-8 p-7 sm:p-8">
            <span className="text-kicker">Earn MERIT</span>
            <h3 className="mt-4 font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
              Finish a course, earn a verified record.
            </h3>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-body">
              When you complete a course, you earn a MERIT record of what you learned. It is
              yours to keep and yours to show, a simple lasting proof that the learning
              really happened.
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* ===================== CTA ===================== */}
      <Section tone="alt" bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-md font-semibold text-ink">
            Ready to start?
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[17px] text-body">
            Free forever. No credit card required.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/auth/signup" size="lg">
              Start free
              <ArrowRight size={17} />
            </Button>
            <Button href="/start-learning" variant="secondary" size="lg">
              How it works
            </Button>
          </div>
          <ul className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-body">
            {["100% free", "No installs", "Learn at your pace"].map((t) => (
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
