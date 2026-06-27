import { Card, Badge, StatNumber } from "@/components/ui";
import { Check, Cube } from "@/components/ui/icons";
import { achievements, achievementsTotal } from "@/components/dashboard/sample";

export default function AchievementsPage() {
  return (
    <div className="space-y-6">
      {/* Header stat */}
      <Card className="flex flex-wrap items-center justify-between gap-6 p-6">
        <div>
          <p className="text-kicker">Verified records</p>
          <p className="mt-2 font-display text-[34px] font-semibold tracking-[-0.03em] text-ink">
            <StatNumber value={achievementsTotal} />
          </p>
          <p className="mt-1 text-[13px] text-body">
            Every record is written to your learning chain, yours to keep and share.
          </p>
        </div>
        <Cube size={40} className="text-accent" />
      </Card>

      {/* Records list */}
      <Card className="overflow-hidden">
        <ul className="divide-y divide-[var(--hairline)]">
          {achievements.map((a, i) => (
            <li key={i} className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="flex min-w-0 items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-ink text-[var(--bg)]">
                  <Check size={15} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <p className="font-display text-[15px] font-semibold tracking-[-0.015em] text-ink">
                      {a.title}
                    </p>
                    <Badge variant="outline">{a.kind}</Badge>
                  </div>
                  <p className="mt-1 text-[13px] text-body">{a.detail}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-caption">
                    {a.date} · block {a.block}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="h-9 shrink-0 rounded-[10px] border border-hairline bg-surface px-4 text-[13px] font-medium text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-ink"
              >
                Share
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
