"use client";

import { forwardRef, useId, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FieldShared {
  label: string;
  error?: string;
  className?: string;
}

const fieldBase =
  "peer w-full rounded-[10px] border border-hairline bg-surface px-3.5 pt-6 pb-2 text-[15px] " +
  "text-ink placeholder-transparent transition-colors duration-150 " +
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

const labelBase =
  "pointer-events-none absolute left-3.5 top-2 font-mono text-[10px] uppercase tracking-[0.08em] text-caption " +
  "transition-all duration-150 " +
  "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case " +
  "peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.08em] peer-focus:text-accent";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & FieldShared;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...props },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cn("relative", className)}>
      <input
        ref={ref}
        id={inputId}
        placeholder={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={cn(fieldBase, error && "border-red-500 focus:border-red-500")}
        {...props}
      />
      <label htmlFor={inputId} className={labelBase}>
        {label}
      </label>
      {error && (
        <p id={`${inputId}-err`} className="mt-1.5 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FieldShared;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, rows = 5, ...props },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cn("relative", className)}>
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        placeholder={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={cn(fieldBase, "resize-none", error && "border-red-500 focus:border-red-500")}
        {...props}
      />
      <label htmlFor={inputId} className={labelBase}>
        {label}
      </label>
      {error && (
        <p id={`${inputId}-err`} className="mt-1.5 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

/** Tracks focus/blur — small helper kept for symmetry with future fields. */
export function useFocus() {
  const [focused, setFocused] = useState(false);
  return {
    focused,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };
}
