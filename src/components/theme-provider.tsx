"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type FontSize = "default" | "large" | "xlarge";
export type Motion = "full" | "reduce";

interface Settings {
  theme: Theme;
  fontSize: FontSize;
  motion: Motion;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  setFontSize: (f: FontSize) => void;
  setMotion: (m: Motion) => void;
}

const SettingsContext = createContext<Settings | null>(null);

const STORAGE_KEY = "uv-settings";

interface Stored {
  theme?: Theme;
  fontSize?: FontSize;
  motion?: Motion;
}

function readStored(): Stored {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize from storage in a lazy initializer so the very first client
  // render already matches what the pre-paint script set: no flash, no flip.
  // Default is dark; we do NOT auto-follow the OS theme.
  const [theme, setThemeState] = useState<Theme>(() => readStored().theme ?? "dark");
  const [fontSize, setFontSizeState] = useState<FontSize>(
    () => readStored().fontSize ?? "default",
  );
  const [motion, setMotionState] = useState<Motion>(() => readStored().motion ?? "full");

  // Skip persisting on the first run so we never overwrite storage with defaults.
  const hydrated = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-fontsize", fontSize === "default" ? "" : fontSize);
    root.setAttribute("data-motion", motion === "reduce" ? "reduce" : "");
    root.style.colorScheme = theme;
    if (hydrated.current) {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme, fontSize, motion }),
      );
    } else {
      hydrated.current = true;
    }
  }, [theme, fontSize, motion]);

  const value = useMemo<Settings>(
    () => ({
      theme,
      fontSize,
      motion,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
      setFontSize: setFontSizeState,
      setMotion: setMotionState,
    }),
    [theme, fontSize, motion],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within ThemeProvider");
  return ctx;
}

/** Convenience hook returning the live reduced-motion preference. */
export function usePrefersReducedMotion(): boolean {
  const { motion } = useSettings();
  const [system, setSystem] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setSystem(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystem(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return motion === "reduce" || system;
}

/**
 * Inline script that applies saved preferences before first paint to avoid any
 * flash. Defaults to dark when nothing is stored. It never follows the OS theme.
 */
export const themeInitScript = `
(function(){
  try {
    var s = JSON.parse(localStorage.getItem("${STORAGE_KEY}") || "{}");
    var theme = s.theme === "light" ? "light" : "dark";
    var r = document.documentElement;
    r.setAttribute("data-theme", theme);
    r.style.colorScheme = theme;
    if (s.fontSize && s.fontSize !== "default") r.setAttribute("data-fontsize", s.fontSize);
    if (s.motion === "reduce") r.setAttribute("data-motion", "reduce");
  } catch (e) {}
})();
`;
