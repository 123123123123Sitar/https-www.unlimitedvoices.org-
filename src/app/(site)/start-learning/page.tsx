import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/start-learning/CatalogExplorer";
import { ComparisonTable } from "@/components/start-learning/ComparisonTable";
import { UnderstandBuildShow } from "@/components/start-learning/UnderstandBuildShow";
import { Accordion, Button, Card, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";
import { faqs, testimonials } from "@/content/start-learning";

export const metadata: Metadata = {
  title: "Start Learning · Free Coding, Data & STEM Paths",
  description:
    "Pick a learning path and start for free: programming, data science, competitions, daily practice, and credentials. No installs, no cost.",
};

export default function StartLearningPage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">Start learning</span>
            <h1 className="mt-5 max-w-[18ch] text-display-lg font-semibold text-ink">
              Pick a path. Start in your browser.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Every path is free and runs in your browser, with no installs or setup. Choose
              where you want to start, or browse everything below.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Catalog explorer */}
      <Section tone="alt">
        <CatalogExplorer />
      </Section>

      {/* Understand → Build → Show */}
      <Section>
        <Reveal>
          <div className="max-w-[44ch]">
            <span className="text-kicker">How it works</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Understand, build, then show what you can do.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12">
          <UnderstandBuildShow />
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <div className="max-w-[46ch]">
            <span className="text-kicker">How we compare</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Everything you need, none of the cost.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="mt-12 p-5 sm:p-8">
            <ComparisonTable />
          </Card>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section>
        <Reveal>
          <div className="max-w-[44ch]">
            <span className="text-kicker">From learners</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Students start here every day.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={t.name} delay={i * 0.06}>
              <Card className="flex h-full flex-col p-7">
                <p className="flex-1 text-[16px] leading-relaxed text-ink">“{t.quote}”</p>
                <footer className="mt-6">
                  <div className="font-display text-[14px] font-semibold text-ink">{t.name}</div>
                  <div className="mt-0.5 text-[13px] text-body">{t.detail}</div>
                </footer>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt" bordered className="border-t">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <Reveal>
            <div>
              <span className="text-kicker">FAQ</span>
              <h2 className="mt-4 text-display-md font-semibold text-ink">
                Questions, answered.
              </h2>
              <p className="mt-5 max-w-[36ch] text-[16px] leading-relaxed text-body">
                Still curious? Reach out any time. We&rsquo;re happy to help you get started.
              </p>
              <Button href="/contact" variant="secondary" className="mt-6">
                Contact us
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-lg font-semibold text-ink">
            Ready when you are.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/auth/signup" size="lg">
              Create your free account
              <ArrowRight size={17} />
            </Button>
            <Button href="/courses" variant="secondary" size="lg">
              Browse courses
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
