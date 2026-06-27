import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unlimitedvoices.org"),
  title: {
    default: "Unlimited Voices · Free STEM, AI & Coding Education for Youth",
    template: "%s · Unlimited Voices",
  },
  description:
    "Free, high-quality courses in coding, AI, and STEM for every student. Learn at your own pace, earn credentials you can show, and build a portfolio, free forever.",
  keywords: [
    "free coding courses",
    "STEM education",
    "AI for students",
    "learn to code free",
    "hackathons for teens",
    "Python course",
    "nonprofit education",
  ],
  openGraph: {
    title: "Unlimited Voices · Empowering Every Student",
    description:
      "Free, high-quality STEM, AI, and coding education for every young learner.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
