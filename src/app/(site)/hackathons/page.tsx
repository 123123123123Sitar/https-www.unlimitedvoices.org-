import type { Metadata } from "next";
import { Countdown } from "@/components/home/Countdown";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  Reveal,
  Section,
} from "@/components/ui";
import { ArrowRight, Check, Shield, Star, Users } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Code Arena · Hackathons & Coding Contests",
  description:
    "Inclusive coding contests and AI-for-good hackathons open to every student. Register a team, practice problems, and earn recognition on your learning record.",
};

const pastEvents = [
  { name: "Spring Sprint 2026", date: "Apr 11–13, 2026", teams: "180 teams" },
  { name: "Winter Cup 2025", date: "Dec 13–14, 2025", teams: "142 teams" },
  { name: "Autumn Algorithms 2025", date: "Oct 4–5, 2025", teams: "96 teams" },
  { name: "Summer Build 2025", date: "Jul 19–21, 2025", teams: "210 teams" },
];

const practicePreview = [
  { title: "Balanced Brackets", difficulty: "Easy", topic: "Strings", points: 50 },
  { title: "Coin Rows", difficulty: "Medium", topic: "Dynamic programming", points: 100 },
  { title: "City Routes", difficulty: "Hard", topic: "Graphs", points: 200 },
  { title: "Greedy Tickets", difficulty: "Easy", topic: "Greedy", points: 50 },
];

const steps = [
  {
    title: "Register your team",
    body: "Sign up solo or with up to three teammates in a few minutes.",
  },
  {
    title: "Join the contest",
    body: "Show up virtually or in person when the round opens.",
  },
  {
    title: "Solve the problems",
    body: "Work through graded problems in your language of choice.",
  },
  {
    title: "Earn recognition",
    body: "Verified results and MERIT land on your learning record.",
  },
];

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any student can join. Contests are free and open to every skill level.",
  },
  {
    question: "How big can a team be?",
    answer: "Teams can have 1 to 3 members. You can also compete on your own.",
  },
  {
    question: "Which languages are allowed?",
    answer: "You can submit solutions in Python, Java, C++, or C.",
  },
  {
    question: "What formats are offered?",
    answer: "Contests run virtual, in-person, and hybrid so you can join from anywhere.",
  },
];

const recognition = [
  {
    icon: Check,
    title: "Certificates",
    body: "A shareable certificate for every contest you complete.",
  },
  {
    icon: Star,
    title: "Badges",
    body: "Earn badges for milestones, streaks, and standout finishes.",
  },
  {
    icon: Shield,
    title: "MERIT recognition",
    body: "Verified results recorded on your learning record for colleges.",
  },
];

export default function HackathonsPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Code Arena</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Inclusive coding contests and AI-for-good hackathons.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Build real projects, solve graded problems, and compete with students
              everywhere. Every event is free, friendly to beginners, and open to every
              student.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/auth/signup" size="lg">
                Register
                <ArrowRight size={17} />
              </Button>
              <Button href="/practice/hackathons" variant="secondary" size="lg">
                Practice
              </Button>
              <Button href="/hackathons" variant="secondary" size="lg">
                Leaderboard
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Upcoming featured event */}
      <Section>
        <Reveal>
          <Card className="overflow-hidden bg-coal text-[#C4C4CA]">
            <div className="flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[34rem]">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B7BFF]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#A6A6AE]">
                    Upcoming · Registration open
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-white">
                  UV Hacks Summer 2026
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#C4C4CA]">
                  A weekend of building AI-for-good projects with mentors, workshops, and a
                  friendly showcase. No experience required.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12px] text-[#86868C]">
                  <span>Jul 13–15, 2026</span>
                  <span>Virtual + local hubs</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/auth/signup"
                    className="bg-white text-coal hover:bg-[#E8E8EA]"
                  >
                    Register
                  </Button>
                  <Button
                    href="/practice/hackathons"
                    variant="secondary"
                    className="border-[#34353A] bg-transparent text-white hover:border-[#5A5B60] hover:bg-[#16171A]"
                  >
                    Practice
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#86868C]">
                  Starts in
                </span>
                <Countdown target="2026-07-13T09:00:00-07:00" />
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* Past events */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <span className="text-kicker">Daily Challenge Archive</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">Past events</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <Card className="mt-10 overflow-hidden">
            <ul>
              {pastEvents.map((e, i) => (
                <li
                  key={e.name}
                  className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-5 ${
                    i !== 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <span className="font-display text-[16px] font-medium text-ink">
                    {e.name}
                  </span>
                  <span className="font-mono text-[12px] text-caption">{e.date}</span>
                  <span className="font-mono text-[12px] text-body">{e.teams}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      {/* Practice preview */}
      <Section>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[44ch]">
              <span className="text-kicker">Practice</span>
              <h2 className="mt-4 text-display-md font-semibold text-ink">
                Warm up before the next round.
              </h2>
            </div>
            <Button href="/practice/hackathons" variant="secondary">
              Open problem bank
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <Card className="mt-10 overflow-hidden">
            <ul>
              {practicePreview.map((p, i) => (
                <li
                  key={p.title}
                  className={`flex flex-wrap items-center gap-x-5 gap-y-2 px-6 py-5 ${
                    i !== 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <span className="min-w-[10rem] flex-1 font-display text-[16px] font-medium text-ink">
                    {p.title}
                  </span>
                  <Badge variant="outline">{p.difficulty}</Badge>
                  <span className="font-mono text-[12px] text-body">{p.topic}</span>
                  <span className="font-mono text-[12px] text-ink">{p.points} pts</span>
                  <a
                    href="/practice/hackathons"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent"
                  >
                    Start solving
                    <ArrowRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      {/* How it works — timeline with drawn connecting line */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <span className="text-kicker">How it works</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Four steps from sign-up to recognition.
          </h2>
        </Reveal>
        <div className="relative mt-14">
          {/* drawn connecting hairline behind the nodes */}
          <div
            className="absolute left-0 right-0 top-4 hidden h-px bg-hairline lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="relative">
                <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface font-mono text-[13px] text-ink">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="text-kicker">FAQ</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Common questions.
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-body">
              Everything you need to know before you register a team.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Accordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </Section>

      {/* Bottom band — recognition */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <Users size={20} className="text-ink" />
            <span className="text-kicker">Recognition</span>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-card-lg border border-hairline bg-hairline sm:grid-cols-3">
          {recognition.map((r, i) => (
            <Reveal as="div" key={r.title} delay={i * 0.06} className="bg-surface p-7">
              <r.icon size={22} className="text-ink" />
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
                {r.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-body">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
