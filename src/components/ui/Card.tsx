import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  /** Adds hover hairline-darken + subtle lift for interactive cards. */
  interactive?: boolean;
  /** Use the slightly off-white secondary surface (callouts). */
  subtle?: boolean;
}

/** White surface, 1px hairline, soft radius, no heavy shadow. */
export function Card({ children, className, href, interactive, subtle }: CardProps) {
  const classes = cn(
    "rounded-card border border-hairline",
    subtle ? "bg-surface-2" : "bg-surface",
    interactive &&
      "transition-[border-color,transform] duration-200 hover:border-[var(--hairline-strong)] hover:-translate-y-0.5",
    href && "block",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
