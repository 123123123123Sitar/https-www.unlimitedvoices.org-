import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-medium tracking-[-0.01em] " +
  "transition-colors duration-200 focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none " +
  "whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-[var(--bg)] hover:bg-[var(--muted)]",
  secondary:
    "border border-hairline bg-surface text-ink hover:border-[var(--hairline-strong)] hover:bg-[var(--bg-alt)]",
  tertiary: "text-ink hover:text-accent px-0",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px]",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", href, className, children, ...props },
  ref,
) {
  const classes = cn(
    base,
    variants[variant],
    variant !== "tertiary" && sizes[size],
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});
