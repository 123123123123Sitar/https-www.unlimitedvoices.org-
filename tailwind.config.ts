import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--ink)",
        body: "var(--body)",
        muted: "var(--muted)",
        caption: "var(--caption)",
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
        track: "var(--track)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        // Constant dark-surface tokens (used for code panels / dark sections in both themes)
        coal: "#0B0B0C",
        "coal-2": "#16171A",
        "coal-3": "#0E0F12",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        card: "14px",
        "card-lg": "18px",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        kicker: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
