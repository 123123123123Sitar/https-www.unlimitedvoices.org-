import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Centered max-width content column with responsive gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
