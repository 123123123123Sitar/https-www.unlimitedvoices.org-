import type { Metadata } from "next";
import { Button, Card, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Chapters · Unlimited Voices",
  description:
    "Student-led Unlimited Voices chapters run free coaching and workshops in their schools and communities around the world.",
};

const chapters = [
  { name: "Bellarmine College Prep", location: "San Jose, CA" },
  { name: "Ecole Alpha Secondary", location: "Burnaby, BC" },
  { name: "Glenbrook North", location: "Northbrook, IL" },
  { name: "Eastside Prep", location: "East Palo Alto, CA" },
  { name: "St. Stephen's & St. Agnes", location: "Alexandria, VA" },
  { name: "Denmark High", location: "Alpharetta, GA" },
  { name: "The Athenian School", location: "Danville, CA" },
  { name: "Killarney Secondary", location: "Vancouver, BC" },
  { name: "University of Portland", location: "Portland, OR" },
  { name: "St Paul's Girls'", location: "London, UK" },
  { name: "Piedmont Hills", location: "San Jose, CA" },
  { name: "Merivale", location: "Ottawa, ON" },
  { name: "St. John's-Ravenscourt", location: "Winnipeg, MB" },
  { name: "McNeil", location: "Austin, TX" },
  { name: "University High", location: "Irvine, CA" },
];

export default function ChaptersPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Chapters</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Student-led chapters, everywhere.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Each chapter is run by students who bring free coaching, workshops, and
              practice rounds to their school and community. Find one near you, or start
              your own.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Directory */}
      <Section>
        <Reveal>
          <span className="text-kicker">Directory</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Where you&rsquo;ll find us.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => (
            <Reveal as="div" key={`${c.name}-${c.location}`} delay={(i % 3) * 0.06}>
              <Card interactive className="flex h-full flex-col p-7">
                <h3 className="font-display text-[16px] font-semibold text-ink">
                  {c.name}
                </h3>
                <p className="mt-1 text-[14px] text-body">{c.location}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                  View details
                  <ArrowRight size={15} />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Start a chapter CTA */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <Card className="p-8 sm:p-12 text-center">
            <span className="text-kicker">Get involved</span>
            <h2 className="mx-auto mt-4 max-w-[20ch] text-display-md font-semibold text-ink">
              Start a chapter at your school.
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-[16px] leading-relaxed text-body">
              Bring free speech and debate coaching to students near you. We&rsquo;ll help
              you set up, train, and get your first sessions running.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Start a chapter
              <ArrowRight size={17} />
            </Button>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
