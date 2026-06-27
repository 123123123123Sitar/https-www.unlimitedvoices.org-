/** Home page content — typed so the page renders before Firestore is wired. */
import type { ComponentType, SVGProps } from "react";
import { Cube, Globe, Heart, Shield, Star, Users } from "@/components/ui/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  format?: boolean;
}

export const stats: Stat[] = [
  { label: "Active learners", value: 14200, suffix: "+" },
  { label: "Free courses", value: 24 },
  { label: "Completion rate", value: 92, suffix: "%", format: false },
  { label: "Hours learned", value: 318000, suffix: "+" },
];

export const featuredEvent = {
  name: "UV Hacks Summer 2026",
  dates: "Jul 13–15, 2026",
  kind: "Bay Area Invitational",
  // ISO target for the live countdown.
  startsAt: "2026-07-13T09:00:00-07:00",
  theme: "Build something that helps your community. AI-for-good track open to all skill levels.",
};

export interface Pillar {
  icon: IconType;
  title: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    icon: Heart,
    title: "Free Forever",
    body: "Every course, lab, contest, and credential is free. No tiers, no trials, no credit card, ever.",
  },
  {
    icon: Shield,
    title: "Accessible",
    body: "Adjustable pacing, text size, motion, and dark mode are built in, so anyone can learn comfortably.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    body: "Learners in dozens of countries, with course material available in 10 languages and growing.",
  },
  {
    icon: Users,
    title: "Volunteer-Led",
    body: "Designed and taught by students and mentors from top universities who believe access shouldn't cost anything.",
  },
];

export interface Story {
  quote: string;
  name: string;
  detail: string;
}

export const stories: Story[] = [
  {
    quote:
      "I'm the first in my family to think college was even possible. Unlimited Voices gave me the courses and the confidence. I'm headed into engineering, and I scored in the 95th percentile on the AMC 12.",
    name: "Maya R.",
    detail: "First-gen student · UCLA Engineering",
  },
  {
    quote:
      "The way the lessons are laid out just made sense to me. I've finished more than 50 courses and now I actually look forward to learning.",
    name: "Theo K.",
    detail: "Self-paced learner · 50+ courses completed",
  },
  {
    quote:
      "My school didn't offer anything like this. I taught myself to code here, hit Level 15, and earned over 10,000 XP, all saved so I can show colleges.",
    name: "Daniel A.",
    detail: "Self-taught student · Level 15 · 10k+ XP",
  },
];

export const walletPreview = {
  level: 8,
  coins: 2847,
  gems: 156,
  xp: 12500,
  streak: 12,
  currencies: [
    { label: "Coins", value: "2,847", note: "Earned for finishing lessons & labs" },
    { label: "Gems", value: "156", note: "Rare rewards for streaks & contests" },
    { label: "XP", value: "12,500", note: "Total experience. Only ever goes up" },
    { label: "MERIT", value: "48", note: "Proof of what you've learned" },
  ],
};

export interface MeritColumn {
  icon: IconType;
  title: string;
  body: string;
}

export const meritColumns: MeritColumn[] = [
  {
    icon: Shield,
    title: "Safe for Students",
    body: "No crypto wallets and no payments. MERIT can't be bought or traded. It's made to be safe for students under 18.",
  },
  {
    icon: Cube,
    title: "Proof of Learning",
    body: "Each milestone you finish is saved to your learning record for good. Real progress that can't be faked.",
  },
  {
    icon: Star,
    title: "College-Ready Portfolio",
    body: "Export a verified record of everything you've built and learned. A credential you carry with you, owned by you.",
  },
];

export const meritStat = { total: 1284000, blocks: 96400 };

export const announcement = {
  eyebrow: "New",
  title: "Proof-of-Learning Blockchain",
  body: "Verify everything you learn.",
  href: "#blockchain",
  cta: "Learn how",
};
