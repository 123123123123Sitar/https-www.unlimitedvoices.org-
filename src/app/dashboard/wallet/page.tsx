import { Card } from "@/components/ui";
import { Shield } from "@/components/ui/icons";
import { walletPreview } from "@/content/home";
import { ProgressBar } from "@/components/dashboard/Progress";
import { profile, walletHistory } from "@/components/dashboard/sample";

/** Five headline balances: the four currencies plus the current level. */
const balances: { label: string; value: string; note: string }[] = [
  ...walletPreview.currencies.map((c) => ({ label: c.label, value: c.value, note: c.note })),
  { label: "Level", value: String(profile.level), note: "Grows as you earn XP" },
];

export default function WalletPage() {
  const levelPct = (profile.levelXp / profile.levelTarget) * 100;

  return (
    <div className="space-y-6">
      {/* Balances — 5-up */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {balances.map((b) => (
          <Card key={b.label} className="flex flex-col p-5">
            <p className="text-kicker">{b.label}</p>
            <p className="mt-2 font-display text-[24px] font-semibold tracking-[-0.02em] text-ink">
              {b.value}
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-caption">{b.note}</p>
          </Card>
        ))}
      </div>

      {/* MERIT note */}
      <Card className="flex items-start gap-3 p-5" subtle>
        <Shield size={18} className="mt-0.5 shrink-0 text-accent" />
        <p className="text-[14px] text-body">
          <span className="font-medium text-ink">MERIT belongs to you</span> and can&apos;t be bought,
          sold, or traded. It&apos;s simply a record of what you&apos;ve learned.
        </p>
      </Card>

      {/* Progress to next level */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-kicker">Progress to Level {profile.nextLevel}</p>
          <span className="font-mono text-[12px] text-caption">
            {profile.levelXp.toLocaleString()} / {profile.levelTarget.toLocaleString()} XP
          </span>
        </div>
        <div className="mt-4">
          <ProgressBar value={levelPct} />
        </div>
        <p className="mt-3 text-[13px] text-body">
          {(profile.levelTarget - profile.levelXp).toLocaleString()} XP to go, about three more
          lessons.
        </p>
      </Card>

      {/* History */}
      <Card className="p-6">
        <p className="text-kicker">Recent activity</p>
        <ul className="mt-4 divide-y divide-[var(--hairline)]">
          {walletHistory.map((row, i) => (
            <li key={i} className="flex items-center justify-between gap-4 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-[14px] font-medium text-ink">{row.label}</p>
                <p className="truncate text-[13px] text-body">{row.detail}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-[13px] text-ink">{row.amount}</p>
                <p className="font-mono text-[11px] text-caption">{row.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
