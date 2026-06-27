import type { Metadata } from "next";
import { Container, Reveal, Section } from "@/components/ui";
import { MentorGrid, type Mentor } from "@/components/org/MentorGrid";

export const metadata: Metadata = {
  title: "Team · Unlimited Voices",
  description:
    "Meet the founder and student mentors behind Unlimited Voices, a team helping every student build confidence in speaking and debate.",
};

const mentors: Mentor[] = [
  {
    name: "Vinay Vellore",
    role: "Mentor",
    school: "UC Berkeley",
    major: "Economics & Data Science",
    location: "Berkeley, CA",
    bio: "Vinay coaches students on structuring clear, evidence-based arguments and enjoys helping first-time speakers find their footing.",
  },
  {
    name: "Priya Sharma",
    role: "Mentor",
    school: "Stanford",
    major: "Computer Science",
    location: "Palo Alto, CA",
    bio: "Priya runs workshops on logical reasoning and rebuttal. She believes anyone can learn to think on their feet with the right practice.",
  },
  {
    name: "Michael Chen",
    role: "Mentor",
    school: "MIT",
    major: "Physics",
    location: "Cambridge, MA",
    bio: "Michael focuses on helping students explain complex ideas simply. He mentors newcomers through their first tournaments.",
  },
  {
    name: "Sarah Johnson",
    role: "Mentor",
    school: "UCLA",
    major: "Biology",
    location: "Los Angeles, CA",
    bio: "Sarah leads group coaching sessions and loves seeing quiet students grow into confident, persuasive speakers.",
  },
  {
    name: "David Kim",
    role: "Mentor",
    school: "Harvard",
    major: "Political Science",
    location: "Boston, MA",
    bio: "David brings years of competition experience to his sessions, with a focus on case construction and cross-examination.",
  },
  {
    name: "Emily Patel",
    role: "Mentor",
    school: "NYU",
    major: "Journalism",
    location: "New York, NY",
    bio: "Emily helps students sharpen their delivery and storytelling. She works closely with speakers preparing for public forums.",
  },
  {
    name: "Alex Nguyen",
    role: "Mentor",
    school: "Caltech",
    major: "Chemical Engineering",
    location: "Pasadena, CA",
    bio: "Alex enjoys breaking down argument strategy into clear steps and supports students who are new to competitive debate.",
  },
  {
    name: "Rachel Lee",
    role: "Mentor",
    school: "Yale",
    major: "English",
    location: "New Haven, CT",
    bio: "Rachel coaches on persuasive writing and rhetoric, helping every student turn good ideas into compelling speeches.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Team</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              The people behind Unlimited Voices.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              A founder and a team of student mentors who give their time to help every
              student speak with clarity and confidence.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Founder spotlight */}
      <Section>
        <Reveal>
          <span className="text-kicker">Founder</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">Founder spotlight</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 rounded-card border border-hairline bg-surface p-8 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <span
                className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-ink font-display text-[28px] font-semibold text-[var(--bg)]"
                aria-hidden="true"
              >
                MB
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[22px] font-semibold text-ink">
                  Mittansh Bhatia
                </h3>
                <p className="mt-1 text-[15px] text-body">Founder &amp; President</p>
                <p className="mt-0.5 text-[14px] text-caption">
                  Basis Independent Silicon Valley
                </p>
                <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-body">
                  Mittansh started Unlimited Voices to make great speech and debate
                  coaching free for every student. He leads the team, runs workshops, and
                  works with chapters around the world to give more young people the chance
                  to be heard.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Mentor grid */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <span className="text-kicker">Mentors</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Meet our mentors.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-body">
            Select any mentor to read a short bio. Each one volunteers to coach students
            one on one and in groups.
          </p>
        </Reveal>
        <div className="mt-12">
          <MentorGrid mentors={mentors} />
        </div>
      </Section>
    </>
  );
}
