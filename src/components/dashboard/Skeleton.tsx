import { cn } from "@/lib/utils";

/** Hairline-soft loading placeholder block. Monochrome, gentle pulse. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-track motion-reduce:animate-none", className)}
      aria-hidden="true"
    />
  );
}

/** A small stack of skeleton lines for card bodies. */
export function SkeletonLines({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn("h-3.5", i === lines - 1 ? "w-2/3" : "w-full")} />
      ))}
    </div>
  );
}
