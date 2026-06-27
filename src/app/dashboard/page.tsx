import { Button, Card, StatNumber } from "@/components/ui";
import { ArrowRight, Bolt } from "@/components/ui/icons";
import { courses } from "@/content/courses";
import { ProgressBar } from "@/components/dashboard/Progress";
import { courseProgress, weeklyXp } from "@/components/dashboard/sample";
import { getDashProfile } from "@/lib/supabase/profile";

export default async function OverviewPage() {
  const profile = await getDashProfile();
  const quickStats: { label: string; value: number; suffix?: string }[] = [
    { label: "Total XP", value: profile.xp },
    { label: "MERIT", value: profile.merit },
    { label: "Coins", value: profile.coins },
    { label: "Day streak", value: profile.streak },
  ];
  const levelPct = (profile.levelXp / profile.levelTarget) * 100;
  const resume = courses[0];
  const peakXp = Math.max(...weeklyXp.map((d) => d.xp), 1);

  return (
    <div className="space-y-6">
      {/* Greeting + streak */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-ink">
            Welcome back, {profile.firstName}
          </h2>
          <p className="mt-1 text-[15px] text-body">
            You&apos;re on a {profile.streak}-day streak. Keep it going today.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-[10px] border border-hairline bg-surface px-3.5 py-2">
          <Bolt size={16} className="text-accent" />
          <span className="font-mono text-[13px] text-ink">{profile.streak}-day streak</span>
        </span>
      </div>

      {/* Level progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-kicker">Level progress</p>
          <span className="font-mono text-[12px] text-caption">
            {profile.levelXp.toLocaleString()} / {profile.levelTarget.toLocaleString()} XP
          </span>
        </div>
        <div className="mt-3 flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline font-mono text-[15px] font-bold text-ink">
            {profile.level}
          </span>
          <div className="flex-1">
            <ProgressBar value={levelPct} />
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-2 font-mono text-[15px] font-bold text-caption">
            {profile.nextLevel}
          </span>
        </div>
        <p className="mt-3 text-[13px] text-body">
          {(profile.levelTarget - profile.levelXp).toLocaleString()} XP to reach Level{" "}
          {profile.nextLevel}.
        </p>
      </Card>

      {/* Quick stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-kicker">{s.label}</p>
            <p className="mt-2 font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
              <StatNumber value={s.value} suffix={s.suffix} />
            </p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Continue learning */}
        <Card className="flex flex-col p-6">
          <p className="text-kicker">Continue learning</p>
          <h3 className="mt-3 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
            {resume.title}
          </h3>
          <p className="mt-1 text-[14px] text-body">{resume.pitch}</p>
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-caption">
              <span>Module 5 of {resume.modules}</span>
              <span>{courseProgress[resume.slug]}%</span>
            </div>
            <ProgressBar value={courseProgress[resume.slug]} />
          </div>
          <div className="mt-5">
            <Button href={resume.href} size="md">
              Resume course
              <ArrowRight size={16} />
            </Button>
          </div>
        </Card>

        {/* Today's challenge */}
        <Card className="flex flex-col p-6" subtle>
          <p className="text-kicker">Today&apos;s challenge</p>
          <h3 className="mt-3 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
            Balanced brackets
          </h3>
          <p className="mt-1 flex-1 text-[14px] text-body">
            Given a string of brackets, decide whether every opening bracket has a matching close.
            Solve it to earn 50 XP and keep your streak alive.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-md border border-hairline px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-body">
              +50 XP
            </span>
            <span className="rounded-md border border-hairline px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-body">
              Easy
            </span>
          </div>
          <div className="mt-5">
            <Button href="/dashboard/contests" variant="secondary" size="md">
              Start challenge
              <ArrowRight size={16} />
            </Button>
          </div>
        </Card>
      </div>

      {/* Weekly XP — monochrome bar chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-kicker">XP this week</p>
          <span className="font-mono text-[12px] text-caption">
            {weeklyXp.reduce((a, b) => a + b.xp, 0).toLocaleString()} XP total
          </span>
        </div>
        <div className="mt-5 flex h-40 items-end gap-3">
          {weeklyXp.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t-[4px] bg-ink"
                  style={{ height: `${Math.max((d.xp / peakXp) * 100, 3)}%` }}
                  title={`${d.xp} XP`}
                />
              </div>
              <span className="font-mono text-[11px] text-caption">{d.day}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
