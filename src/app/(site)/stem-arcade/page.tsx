import type { Metadata } from "next";
import { GameBoard, type BoardKind } from "@/components/compete/GameBoard";
import { Button, Container, Reveal, Section } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "STEM Arcade · Puzzles & Logic Games",
  description:
    "Puzzles and logic games, from Queens to Tango, that build critical thinking, spatial reasoning, and pattern recognition. Free for every student.",
};

interface Game {
  kind: BoardKind;
  name: string;
  desc: string;
  plays: string;
}

const games: Game[] = [
  {
    kind: "queens",
    name: "Queens",
    desc: "Place one marker in every row, column, and region without conflicts.",
    plays: "12.4k plays",
  },
  {
    kind: "tango",
    name: "Tango",
    desc: "Fill the grid so each line stays balanced, with no three in a row.",
    plays: "9.8k plays",
  },
  {
    kind: "light-logic",
    name: "Light Logic",
    desc: "Switch cells on and off to satisfy every clue around the board.",
    plays: "7.1k plays",
  },
  {
    kind: "tilt-maze",
    name: "Tilt Maze",
    desc: "Tilt the board to roll the marker through walls to the goal.",
    plays: "6.3k plays",
  },
  {
    kind: "pattern-lab",
    name: "Pattern Lab",
    desc: "Spot the rule, then extend the sequence one step at a time.",
    plays: "5.5k plays",
  },
  {
    kind: "circuit",
    name: "Circuit",
    desc: "Connect the nodes into one path without crossing any wires.",
    plays: "4.2k plays",
  },
];

export default function StemArcadePage() {
  return (
    <>
      {/* Header */}
      <section className="hairline-b">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <span className="text-kicker">STEM Arcade</span>
            <h1 className="mt-5 max-w-[20ch] text-display-lg font-semibold text-ink">
              Puzzles and logic games that train how you think.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-body">
              Queens, Tango, spatial reasoning, and more. Every game builds critical
              thinking, spatial reasoning, and pattern recognition, and it&rsquo;s free for
              every student.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Game grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <Reveal as="div" key={g.kind} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col rounded-card border border-hairline bg-surface p-6 transition-colors duration-200 hover:border-[var(--hairline-strong)]">
                <GameBoard kind={g.kind} />
                <h2 className="mt-6 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  {g.name}
                </h2>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
                  {g.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-caption">
                    {g.plays}
                  </span>
                  <Button href="/auth/signup" variant="secondary" size="md">
                    Play
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Note band */}
      <Section tone="alt" bordered className="border-t">
        <Reveal>
          <div className="mx-auto max-w-[52ch] text-center">
            <span className="text-kicker">Free for all</span>
            <h2 className="mt-4 text-display-md font-semibold text-ink">
              Your progress saves to your learning record.
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-[16px] leading-relaxed text-body">
              Every game you play and puzzle you solve is recorded. Pick up where you left
              off, build streaks, and earn MERIT, at no cost, ever.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/auth/signup" size="lg">
                Start playing free
                <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
