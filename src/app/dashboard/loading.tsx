import { Card } from "@/components/ui";
import { Skeleton, SkeletonLines } from "@/components/dashboard/Skeleton";

/** Route-level loading state for the dashboard segment. */
export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-56" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-5">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="mt-3 h-7 w-16" />
          </Card>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-4 w-32" />
            <div className="mt-4">
              <SkeletonLines lines={3} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
