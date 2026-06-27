import { cn } from "@/lib/utils";

function clamp(n: number): number {
  return Math.min(100, Math.max(0, n));
}

/** Monochrome horizontal progress bar — ink fill on a track. */
export function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-track", className)}
      role="progressbar"
      aria-valuenow={Math.round(clamp(value))}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-ink transition-[width] duration-500"
        style={{ width: `${clamp(value)}%` }}
      />
    </div>
  );
}

/** Monochrome circular progress ring — ink arc on a track ring. */
export function ProgressRing({
  value,
  size = 72,
  stroke = 6,
  className,
}: {
  value: number;
  size?: number;
  stroke?: number;
  className?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - clamp(value) / 100);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--track)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute font-mono text-[13px] font-bold text-ink">
        {Math.round(clamp(value))}%
      </span>
    </div>
  );
}
