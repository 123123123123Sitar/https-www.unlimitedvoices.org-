import type { Metadata } from "next";
import { Button, Card, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Partners · Unlimited Voices",
  description:
    "Schools, clubs, and community groups partner with Unlimited Voices to bring free speech and debate coaching to more students.",
};

const partners = [
  "City Public Library",
  "Valley Youth Foundation",
  "Lincoln School District",
  "Community Arts Center",
  "Regional Debate League",
  "Bay Area Education Fund",
  "Riverside STEM Club",
  "National Speech Network",
  "Harbor Community Trust",
  "Summit Learning Co-op",
  "Open Future Initiative",
  "Northgate Student Union",
];

export default function PartnersPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Partners</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Working together to reach more students.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              We team up with schools, libraries, clubs, and community groups to bring free
              coaching and workshops to students wherever they are.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Logo wall */}
      <Section>
        <Reveal>
          <span className="text-kicker">Our partners</span>
          <h2 className="mt-4 text-display-md font-semibold text-ink">
            Organizations we work with.
          </h2>
          <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-body">
            A growing network of groups that share our goal. Logos are placeholders for now.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p}
              className="grid min-h-[120px] place-items-center bg-surface px-6 py-10 text-center"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-caption grayscale">
                {p}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Become a partner CTA */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <Card className="p-8 sm:p-12 text-center">
            <span className="text-kicker">Partner with us</span>
            <h2 className="mx-auto mt-4 max-w-[20ch] text-display-md font-semibold text-ink">
              Become a partner.
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-[16px] leading-relaxed text-body">
              If your school or organization wants to bring free speech and debate coaching
              to your students, we&rsquo;d love to hear from you.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Become a partner
              <ArrowRight size={17} />
            </Button>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
