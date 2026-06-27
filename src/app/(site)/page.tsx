import Link from "next/link";
import { BlockchainToast } from "@/components/home/BlockchainToast";
import { Hero } from "@/components/home/Hero";
import { DeviceShowcase } from "@/components/home/DeviceShowcase";
import { Countdown } from "@/components/home/Countdown";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { LearningChain } from "@/components/home/LearningChain";
import { Badge, Button, Card, Container, Reveal, Section, StatNumber } from "@/components/ui";
import { ArrowRight, Check } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import {
  featuredEvent,
  meritColumns,
  meritStat,
  pillars,
  stats,
  walletPreview,
} from "@/content/home";

export default function HomePage() {
  return (
    <>
      <BlockchainToast />

      {/* ===================== HERO ===================== */}
      <Hero />

      {/* ===================== STATS BAND ===================== */}
      <Section tone="alt" bordered className="border-t py-16 sm:py-20">
        <dl className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="div" key={s.label} delay={i * 0.06} className="text-center">
              <dd className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
                <StatNumber
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  format={s.format}
                />
              </dd>
              <dt className="mt-2 text-[13px] text-body">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ===================== DEVICE SHOWCASE ===================== */}
      <DeviceShowcase />

      {/* ===================== FEATURED EVENT ===================== */}
      <Section>
        <Reveal>
          <Card className="overflow-hidden bg-coal text-[#C4C4CA]">
            <div className="flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[34rem]">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B7BFF]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#A6A6AE]">
                    Featured event · Registration open
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-white">
                  {featuredEvent.name}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#C4C4CA]">
                  {featuredEvent.theme}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12px] text-[#86868C]">
                  <span>{featuredEvent.dates}</span>
                  <span>{featuredEvent.kind}</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/hackathons"
                    className="bg-white text-coal hover:bg-[#E8E8EA]"
                  >
                    Register
                  </Button>
                  <Button
                    href="/practice/hackathons"
                    variant="secondary"
                    className="border-[#34353A] bg-transparent text-white hover:border-[#5A5B60] hover:bg-[#16171A]"
                  >
                    Enter / Practice
                  </Button>
                  <Button
                    href="/hackathons"
                    variant="secondary"
                    className="border-[#34353A] bg-transparent text-white hover:border-[#5A5B60] hover:bg-[#16171A]"
                  >
                    Scores
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#86868C]">
                  Starts in
                </span>
                <Countdown target={featuredEvent.startsAt} />
              </div>
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* ===================== PILLARS ===================== */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <div className="max-w-[44ch]">
            <span className="text-kicker">Why Unlimited Voices</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Education with no barriers, by design.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-card-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal as="div" key={p.title} delay={i * 0.06} className="bg-surface p-7">
              <p.icon size={22} className="text-ink" />
              <h3 className="mt-5 font-display text-[18px] font-semibold tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-body">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== POPULAR COURSES ===================== */}
      <Section>
        <Reveal>
          <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[44ch]">
              <span className="text-kicker">Popular courses</span>
              <h2 className="mt-4 text-display-md font-semibold text-ink">
                Four tracks. Pick where you start.
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-10">
          <CoursesPreview />
        </div>
      </Section>

      {/* ===================== SUCCESS STORIES ===================== */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <div className="max-w-[44ch]">
            <span className="text-kicker">Success stories</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Real outcomes, from real students.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12">
          <StoriesCarousel />
        </div>
      </Section>

      {/* ===================== LEARNING WALLET PREVIEW ===================== */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-[46ch]">
              <span className="text-kicker">Learning Wallet</span>
              <h2 className="mt-4 text-display-md font-semibold text-ink">
                Every bit of progress, earned and tracked.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-body">
                Coins, gems, and XP reward everything you do, across courses, challenges,
                and contests. They&rsquo;re earned, never bought, and there&rsquo;s nothing
                to buy or cash out. MERIT shows the learning really happened.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] text-body">
                <span>
                  <span className="text-ink">Level {walletPreview.level}</span> · current
                </span>
                <span>
                  <span className="text-ink">{walletPreview.streak}-day</span> streak
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-kicker">Your balances</span>
                <Badge variant="outline">Preview</Badge>
              </div>
              <div className="mt-6 grid grid-cols-2">
                {walletPreview.currencies.map((c, i) => (
                  <div
                    key={c.label}
                    className={cn(
                      "py-5",
                      i % 2 === 0 ? "pr-6" : "border-l border-hairline pl-6",
                      i >= 2 && "border-t border-hairline",
                    )}
                  >
                    <div className="font-display text-[26px] font-semibold tracking-[-0.03em] text-ink">
                      {c.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.05em] text-caption">
                      {c.label}
                    </div>
                    <p className="mt-2 text-[12.5px] leading-snug text-body">{c.note}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard/wallet"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent"
              >
                Open your wallet
                <ArrowRight size={15} />
              </Link>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ===================== BLOCKCHAIN (DARK) ===================== */}
      <section id="blockchain" className="bg-coal py-24 text-[#A6A6AE] sm:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[52ch] text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#76767c]">
                Proof-of-Learning Blockchain
              </span>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-white">
                A permanent record of everything you learn.
              </h2>
              <p className="mx-auto mt-6 max-w-[46ch] text-[16px] leading-relaxed text-[#C4C4CA]">
                Your MERIT belongs to you and can&rsquo;t be bought, sold, or traded. No
                crypto wallets and no money. Just a safe record of what you&rsquo;ve done.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <LearningChain />
          </div>

          <Reveal>
            <div className="mx-auto mt-14 flex max-w-md items-stretch justify-center gap-px overflow-hidden rounded-card border border-[#26272B]">
              <div className="flex-1 bg-[#111113] px-6 py-7 text-center">
                <div className="font-display text-[34px] font-semibold tracking-[-0.03em] text-white">
                  <StatNumber value={meritStat.total} />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.06em] text-[#76767c]">
                  MERIT earned
                </div>
              </div>
              <div className="flex-1 border-l border-[#26272B] bg-[#111113] px-6 py-7 text-center">
                <div className="font-display text-[34px] font-semibold tracking-[-0.03em] text-white">
                  <StatNumber value={meritStat.blocks} />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.06em] text-[#76767c]">
                  Verified blocks
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-card-lg border border-[#26272B] bg-[#26272B] sm:grid-cols-3">
            {meritColumns.map((col, i) => (
              <Reveal as="div" key={col.title} delay={i * 0.06} className="bg-[#111113] p-7">
                <col.icon size={22} className="text-[#5B7BFF]" />
                <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.02em] text-white">
                  {col.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#9A9A9E]">{col.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <Section bordered className="border-t text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] text-display-lg font-semibold text-ink">
            Start learning today.
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[17px] text-body">
            Free forever. No credit card required.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/auth/signup" size="lg">
              Create your free account
              <ArrowRight size={17} />
            </Button>
            <Button href="/courses" variant="secondary" size="lg">
              Browse courses
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
