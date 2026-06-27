"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { dashNav, profile } from "./sample";

function isActive(pathname: string, href: string): boolean {
  // The index route (/dashboard) must match exactly so it doesn't light up on
  // every sub-route; nested routes match by prefix.
  if (href === "/dashboard") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Slim app sidebar — fixed on desktop, a scrollable link row on mobile. */
export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: fixed slim column */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-hairline bg-surface lg:flex">
        <div className="flex h-16 items-center border-b border-hairline px-5">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5" data-scroll>
          <p className="px-3 pb-2 text-kicker">Menu</p>
          <ul className="space-y-0.5">
            {dashNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex items-center rounded-[9px] px-3 py-2 text-[14px] font-medium transition-colors",
                      active
                        ? "bg-[var(--accent-soft)] text-accent"
                        : "text-body hover:bg-[var(--bg-alt)] hover:text-ink",
                    )}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-accent" />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-hairline p-3">
          <div className="flex items-center gap-3 rounded-[10px] px-2 py-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-2 font-mono text-[12px] font-bold text-ink">
              {profile.monogram}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-medium text-ink">{profile.name}</span>
              <span className="block truncate font-mono text-[11px] text-caption">
                Level {profile.level} · {profile.streak}-day streak
              </span>
            </span>
          </div>
        </div>
      </aside>

      {/* Mobile: top bar with logo + scrollable links */}
      <div className="border-b border-hairline bg-surface lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Logo />
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface-2 font-mono text-[11px] font-bold text-ink">
            {profile.monogram}
          </span>
        </div>
        <nav className="overflow-x-auto px-2 pb-2" data-scroll>
          <ul className="flex gap-1">
            {dashNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                      active
                        ? "bg-[var(--accent-soft)] text-accent"
                        : "text-body hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
