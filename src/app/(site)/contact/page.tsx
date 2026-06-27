import type { Metadata } from "next";
import { Container, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/org/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Unlimited Voices",
  description:
    "Get in touch with Unlimited Voices about coaching, workshops, tournaments, chapters, or partnerships.",
};

export default function ContactPage() {
  return (
    <section className="hairline-b">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <Reveal>
            <div>
              <span className="text-kicker">Contact</span>
              <h1 className="mt-5 max-w-[16ch] text-display-lg font-semibold text-ink">
                Let&rsquo;s talk.
              </h1>
              <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-body">
                Questions about coaching, workshops, tournaments, starting a chapter, or
                partnering with us? Send a note and we&rsquo;ll get back to you.
              </p>

              <dl className="mt-10 space-y-5 border-t border-hairline pt-8">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-caption">
                    Location
                  </dt>
                  <dd className="mt-1 text-[16px] text-ink">San Jose, CA</dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-caption">
                    Email
                  </dt>
                  <dd className="mt-1 text-[16px] text-ink">hello@unlimitedvoices.org</dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-caption">
                    Response time
                  </dt>
                  <dd className="mt-1 text-[16px] text-ink">Usually within a few days</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
