"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Bolt } from "@/components/ui/icons";
import { activeNavItem } from "./sample";
import type { DashProfile } from "@/lib/supabase/profile";

/** Main-area top bar: page kicker + title, a stat chip cluster, and a back link. */
export function TopBar({ profile }: { profile: DashProfile }) {
  const pathname = usePathname();
  const item = activeNavItem(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-hairline glass">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 sm:px-8 lg:px-10">
        <div className="min-w-0">
          <p className="text-kicker">{item.kicker}</p>
          <h1 className="truncate font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
            {item.title}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Stat chip cluster */}
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="inline-flex items-center gap-1 rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-body">
              <Bolt size={12} className="text-accent" />
              {profile.streak}-day streak
            </span>
            <span className="inline-flex items-center rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-body">
              Lv {profile.level}
            </span>
            <span className="inline-flex items-center rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-body">
              {profile.xp.toLocaleString()} XP
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex h-9 items-center gap-1.5 rounded-[10px] border border-hairline bg-surface px-3 text-[13px] font-medium text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-ink"
          >
            Back to site
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
