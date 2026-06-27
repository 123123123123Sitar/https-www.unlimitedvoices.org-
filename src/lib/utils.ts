import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, de-duplicating conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with thousands separators (e.g. 12500 -> "12,500"). */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}
