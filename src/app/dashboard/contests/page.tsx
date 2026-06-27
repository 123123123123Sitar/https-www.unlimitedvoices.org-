import { Button, Card, Badge } from "@/components/ui";
import { contests } from "@/components/dashboard/sample";

export default function ContestsPage() {
  const upcoming = contests.filter((c) => c.status === "upcoming");
  const past = contests.filter((c) => c.status === "past");

  return (
    <div className="space-y-10">
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-[16px] font-semibold tracking-[-0.015em] text-ink">
            Upcoming
          </h2>
          <span className="font-mono text-[11px] text-caption">{upcoming.length} open</span>
        </div>
        <Card className="overflow-hidden">
          <ul className="divide-y divide-[var(--hairline)]">
            {upcoming.map((c, i) => (
              <li
                key={i}
                className="flex flex-wrap items-center justify-between gap-4 p-5"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <p className="font-display text-[15px] font-semibold tracking-[-0.015em] text-ink">
                      {c.name}
                    </p>
                    {c.registered && <Badge variant="outline">Registered</Badge>}
                  </div>
                  <p className="mt-1 text-[13px] text-body">{c.detail}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-caption">
                    {c.date} · {c.length}
                  </p>
                </div>
                <Button
                  variant={c.registered ? "secondary" : "primary"}
                  className="h-9 px-4 text-[13px]"
                >
                  {c.registered ? "View details" : "Register"}
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 font-display text-[16px] font-semibold tracking-[-0.015em] text-ink">
          Past results
        </h2>
        <Card className="overflow-hidden">
          <ul className="divide-y divide-[var(--hairline)]">
            {past.map((c, i) => (
              <li key={i} className="flex items-center justify-between gap-4 p-5">
                <div className="min-w-0">
                  <p className="truncate font-display text-[15px] font-semibold tracking-[-0.015em] text-ink">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[13px] text-body">{c.detail}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-[13px] text-ink">{c.result}</p>
                  <p className="font-mono text-[11px] text-caption">{c.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
