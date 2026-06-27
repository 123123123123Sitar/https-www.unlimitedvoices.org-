import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark: a hairline-square glyph with a single accent tile + the name. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Unlimited Voices, home"
    >
      <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border-[1.5px] border-ink">
        <span className="h-2 w-2 rounded-[2px] bg-accent" />
      </span>
      <span className="font-display text-[16px] font-semibold tracking-[-0.02em] text-ink">
        Unlimited Voices
      </span>
    </Link>
  );
}
