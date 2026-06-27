import { Button, Card } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";
import { courses } from "@/content/courses";
import { ProgressRing } from "@/components/dashboard/Progress";
import { courseProgress } from "@/components/dashboard/sample";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <p className="text-[15px] text-body">
        Pick up where you left off. Progress saves automatically across every device.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {courses.map((c) => {
          const pct = courseProgress[c.slug] ?? 0;
          const done = pct >= 100;
          return (
            <Card key={c.slug} className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-kicker">{c.category}</span>
                  <h3 className="mt-2 font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-body">{c.level}</p>
                </div>
                <ProgressRing value={pct} size={64} stroke={6} />
              </div>

              <p className="mt-4 flex-1 text-[14px] leading-relaxed text-body">{c.pitch}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-caption">
                  {Math.round((pct / 100) * c.modules)} / {c.modules} modules
                </span>
                <Button href={c.href} variant="secondary" size="md">
                  {done ? "Review" : pct > 0 ? "Resume" : "Start"}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
