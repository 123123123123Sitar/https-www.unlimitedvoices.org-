import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "muted" | "solid" | "outline";

const variants: Record<Variant, string> = {
  muted: "text-caption",
  solid: "bg-ink text-[var(--bg)] rounded-md px-2 py-1",
  outline: "border border-hairline text-body rounded-md px-2 py-1",
};

/** Tiny uppercase letter-spaced tag (mono). */
export function Badge({
  children,
  variant = "muted",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[10px] uppercase tracking-[0.08em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
