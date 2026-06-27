import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "base" | "alt" | "dark";

const toneClass: Record<Tone, string> = {
  base: "bg-[var(--bg)]",
  alt: "bg-[var(--bg-alt)]",
  dark: "bg-coal text-[#A6A6AE] [--ink:#fff] [--hairline:#26272B] [--accent:#5B7BFF]",
};

/** A full-bleed vertical section with generous padding and an inner Container. */
export function Section({
  children,
  className,
  innerClassName,
  tone = "base",
  bordered = false,
  contain = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: Tone;
  bordered?: boolean;
  contain?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28 lg:py-32",
        toneClass[tone],
        bordered && "hairline-b",
        className,
      )}
    >
      {contain ? <Container className={innerClassName}>{children}</Container> : children}
    </section>
  );
}
