import type { Metadata } from "next";
import { Button, Card, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Services · Unlimited Voices",
  description:
    "Free individual and team coaching, group workshops, and debate tournaments, open to every student.",
};

const services = [
  {
    title: "Free Individual & Team Coaching",
    description:
      "One-on-one and small-team sessions with a mentor who helps you build arguments, sharpen delivery, and prepare for rounds.",
    features: [
      "Personalized feedback on your speaking",
      "Flexible scheduling that fits your week",
      "Mentors matched to your goals",
      "Open to every student, no cost",
    ],
  },
  {
    title: "Free Group Workshops",
    description:
      "Live workshops on the core skills of speech and debate, from structuring a case to thinking on your feet.",
    features: [
      "Hands-on practice in a friendly group",
      "Clear, step-by-step lessons",
      "Topics for beginners and beyond",
      "Recordings and notes to keep",
    ],
  },
  {
    title: "Debate Tournaments",
    description:
      "Friendly tournaments where you can put your skills to the test, meet other students, and grow with real rounds.",
    features: [
      "Welcoming events for all levels",
      "Judged rounds with useful feedback",
      "A chance to meet other speakers",
      "Recognition for every participant",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Services</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Everything you need to find your voice.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Coaching, workshops, and tournaments, all free and all built to help every
              student speak with confidence.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Service cards */}
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="div" key={s.title} delay={i * 0.06}>
              <Card className="flex h-full flex-col p-8">
                <h2 className="font-display text-[19px] font-semibold text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  {s.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink">
                      <Check size={18} className="mt-px shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="secondary" className="mt-8 w-full">
                  Register
                  <ArrowRight size={16} />
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="alt" bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-display-md font-semibold text-ink">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-[16px] leading-relaxed text-body">
            Reach out and we&rsquo;ll help you find the right coaching, workshop, or event.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Register now
            <ArrowRight size={17} />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
