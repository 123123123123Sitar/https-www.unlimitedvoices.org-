"use client";

import { useEffect, useState } from "react";
import {
  useSettings,
  type FontSize,
  type Motion,
  type Theme,
} from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface Option<T> {
  value: T;
  label: string;
}

/** A small hairline segmented control. */
function Segmented<T extends string>({
  label,
  hint,
  value,
  options,
  onChange,
}: {
  label: string;
  hint: string;
  value: T;
  options: Option<T>[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-5">
      <div className="min-w-0">
        <p className="text-[14px] font-medium text-ink">{label}</p>
        <p className="mt-0.5 text-[13px] text-body">{hint}</p>
      </div>
      <div
        role="radiogroup"
        aria-label={label}
        className="inline-flex rounded-[10px] border border-hairline bg-surface p-1"
      >
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={cn(
                "rounded-[7px] px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                active ? "bg-ink text-[var(--bg)]" : "text-body hover:text-ink",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SettingsPanel() {
  const { theme, setTheme, fontSize, setFontSize, motion, setMotion } = useSettings();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Avoid a hydration flash for client-only preference state.
  if (!mounted) {
    return <div className="h-[232px] animate-pulse rounded-card bg-track" />;
  }

  return (
    <div className="divide-y divide-[var(--hairline)]">
      <Segmented<Theme>
        label="Theme"
        hint="Switch between light and true-dark."
        value={theme}
        onChange={setTheme}
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
        ]}
      />
      <Segmented<FontSize>
        label="Text size"
        hint="Make body text larger for easier reading."
        value={fontSize}
        onChange={setFontSize}
        options={[
          { value: "default", label: "Default" },
          { value: "large", label: "Large" },
          { value: "xlarge", label: "Extra large" },
        ]}
      />
      <Segmented<Motion>
        label="Motion"
        hint="Reduce animations across the site."
        value={motion}
        onChange={setMotion}
        options={[
          { value: "full", label: "Full" },
          { value: "reduce", label: "Reduced" },
        ]}
      />
    </div>
  );
}
