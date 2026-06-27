"use client";

import { useEffect, useState } from "react";
import { useSettings } from "@/components/theme-provider";
import { Moon, Sun } from "./icons";
import { cn } from "@/lib/utils";

/** Light/dark toggle. Renders a neutral placeholder until mounted to avoid hydration mismatch. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useSettings();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-hairline bg-surface text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-ink",
        className,
      )}
    >
      {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
