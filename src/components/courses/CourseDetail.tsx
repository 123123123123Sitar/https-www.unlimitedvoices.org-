import Link from "next/link";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Reveal,
  Section,
  StatNumber,
} from "@/components/ui";
import type { AccordionItem } from "@/components/ui";
import { ArrowRight, Check } from "@/components/ui/icons";
import { courses, getCourse } from "@/content/courses";
import { courseDetails } from "@/content/course-details";

export function CourseDetail({ slug }: { slug: string }) {
  const course = getCourse(slug);
  const detail = courseDetails[slug];

  if (!course || !detail) {
    return (
      <Section>
        <p className="text-body">Course not found.</p>
      </Section>
    );
  }

  const otherCourses = courses.filter((c) => c.slug !== slug);

  const moduleItems: AccordionItem[] = detail.modules.map((m) => ({
    question: m.title,
    answer: (
      <div className="flex flex-col gap-2">
        {m.comingSoon && (
          <span>
            <Badge variant="outline">Coming soon</Badge>
          </span>
        )}
        <span>{m.lessons}</span>
      </div>
    ),
  }));

  return (
    <>
      {/* ===================== HEADER ===================== */}
      <Section>
        {/* Breadcrumb */}
        <Reveal>
          <nav className="flex flex-wrap items-center gap-2 text-caption" aria-label="Breadcrumb">
            <Link href="/" className="text-[13px] text-caption transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-[13px] text-caption">/</span>
            <Link
              href="/courses"
              className="text-[13px] text-caption transition-colors hover:text-ink"
            >
              Courses
            </Link>
            <span className="text-[13px] text-caption">/</span>
            <span className="text-[13px] text-ink">{course.title}</span>
          </nav>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex items-center gap-3">
            <Badge variant="solid">{course.category}</Badge>
            <Badge variant="muted">{course.level}</Badge>
          </div>
          <h1 className="mt-6 text-display-lg font-semibold text-ink">{course.title}</h1>
          <p className="mt-5 max-w-prose text-[20px] font-medium leading-snug text-ink">
            {course.pitch}
          </p>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-body">
            {course.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/auth/signup" size="lg">
              Start free
              <ArrowRight size={17} />
            </Button>
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-4">
            <div className="bg-surface p-6">
              <dd className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink">
                <StatNumber value={course.modules} />
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-caption">
                Modules
              </dt>
            </div>
            <div className="bg-surface p-6">
              <dd className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink">
                {course.lessons.split(" ")[0]}
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-caption">
                Lessons
              </dt>
            </div>
            <div className="bg-surface p-6">
              <dd className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink">
                <StatNumber value={course.hours} suffix="h" />
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-caption">
                Est. hours
              </dt>
            </div>
            <div className="bg-surface p-6">
              <dd className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink">
                {course.level}
              </dd>
              <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-caption">
                Level
              </dt>
            </div>
          </dl>
        </Reveal>
      </Section>

      {/* ===================== WHAT YOU'LL LEARN ===================== */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <span className="text-kicker">What you&rsquo;ll learn</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Skills you&rsquo;ll walk away with.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {detail.whatYouLearn.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 0.04} className="flex items-start gap-3">
              <Check size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-[15px] leading-relaxed text-body">{item}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ===================== WHO IT'S FOR ===================== */}
      <Section>
        <Reveal>
          <span className="text-kicker">Who it&rsquo;s for</span>
          <Card subtle className="mt-6 p-7 sm:p-8">
            <p className="max-w-prose text-[16px] leading-relaxed text-body">{detail.whoFor}</p>
          </Card>
        </Reveal>
      </Section>

      {/* ===================== MODULES ===================== */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <span className="text-kicker">Course outline</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            {course.modules} modules, step by step.
          </h2>
        </Reveal>
        <Reveal>
          <Accordion items={moduleItems} defaultOpen={0} className="mt-10 max-w-3xl" />
        </Reveal>
      </Section>

      {/* ===================== MORE COURSES ===================== */}
      <Section>
        <Reveal>
          <span className="text-kicker">More courses</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">Keep going.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {otherCourses.map((c, i) => (
            <Reveal as="div" key={c.slug} delay={i * 0.06}>
              <Card href={c.href} interactive className="flex h-full flex-col p-6">
                <span className="text-kicker">{c.category}</span>
                <h3 className="mt-3 font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">{c.pitch}</p>
                <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-caption">
                  <span>{c.lessons}</span>
                  <ArrowRight size={15} className="text-ink" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== FINAL CTA ===================== */}
      <Section tone="dark" bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-md font-semibold text-white">
            Start {course.title} today.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[17px] text-[#C4C4CA]">
            Free forever. No credit card required.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/auth/signup" size="lg" className="bg-white text-coal hover:bg-[#E8E8EA]">
              Start free
              <ArrowRight size={17} />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
