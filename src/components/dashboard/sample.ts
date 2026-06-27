/**
 * Sample data for the dashboard preview. Not wired to auth or Firestore —
 * everything here is illustrative placeholder content.
 */

export interface DashNavItem {
  label: string;
  href: string;
  kicker: string;
  title: string;
}

/** Sidebar + top-bar navigation. Order is intentional. */
export const dashNav: DashNavItem[] = [
  { label: "Overview", href: "/dashboard", kicker: "Dashboard", title: "Overview" },
  { label: "Courses", href: "/dashboard/courses", kicker: "Learning", title: "Your courses" },
  { label: "Wallet", href: "/dashboard/wallet", kicker: "Rewards", title: "Wallet" },
  { label: "Contests", href: "/dashboard/contests", kicker: "Compete", title: "Contests" },
  {
    label: "Achievements",
    href: "/dashboard/achievements",
    kicker: "Records",
    title: "Achievements",
  },
  { label: "Settings", href: "/dashboard/settings", kicker: "Account", title: "Settings" },
];

/** Returns the nav item whose route best matches the current path. */
export function activeNavItem(pathname: string): DashNavItem {
  const match = [...dashNav]
    .sort((a, b) => b.href.length - a.href.length)
    .find((i) => pathname === i.href || pathname.startsWith(`${i.href}/`));
  return match ?? dashNav[0];
}

export const profile = {
  name: "Alex Rivera",
  firstName: "Alex",
  email: "alex.rivera@example.com",
  monogram: "AR",
  level: 7,
  nextLevel: 8,
  streak: 12,
  xpThisWeek: 1240,
  merit: 48,
  coursesInProgress: 3,
  /** XP banked toward the next level, and the threshold to reach it. */
  levelXp: 6400,
  levelTarget: 8000,
};

/** Last seven days of XP, oldest → newest. Used by the monochrome bar chart. */
export const weeklyXp = [
  { day: "Mon", xp: 180 },
  { day: "Tue", xp: 320 },
  { day: "Wed", xp: 120 },
  { day: "Thu", xp: 260 },
  { day: "Fri", xp: 90 },
  { day: "Sat", xp: 0 },
  { day: "Sun", xp: 170 },
];

/** Sample completion percent per course slug, for the Courses page. */
export const courseProgress: Record<string, number> = {
  "python-course": 72,
  "java-course": 34,
  "data-science-course": 15,
  "sat-course": 88,
};

export interface WalletRow {
  label: string;
  detail: string;
  amount: string;
  date: string;
}

export const walletHistory: WalletRow[] = [
  { label: "Lesson completed", detail: "Python · Loops & ranges", amount: "+80 XP", date: "Today" },
  { label: "Contest reward", detail: "Weekly Algorithms Sprint", amount: "+1 MERIT", date: "Today" },
  { label: "Daily streak bonus", detail: "12-day streak", amount: "+25 Coins", date: "Yesterday" },
  { label: "Lab finished", detail: "Data Science · Cleaning sensor data", amount: "+120 XP", date: "Jun 24" },
  { label: "Rare reward", detail: "First contest entry", amount: "+3 Gems", date: "Jun 22" },
  { label: "Lesson completed", detail: "Java · Object basics", amount: "+60 XP", date: "Jun 21" },
];

export interface AchievementRecord {
  title: string;
  detail: string;
  kind: string;
  date: string;
  block: string;
}

export const achievements: AchievementRecord[] = [
  {
    title: "Python Foundations",
    detail: "Completed all 7 modules with passing labs",
    kind: "Course",
    date: "Jun 20, 2026",
    block: "0x9f3a-21c4",
  },
  {
    title: "Weekly Algorithms Sprint · Top 10",
    detail: "Placed 7th of 412 participants",
    kind: "Contest",
    date: "Jun 15, 2026",
    block: "0x7b1e-0d88",
  },
  {
    title: "12-Day Learning Streak",
    detail: "Studied every day for two weeks",
    kind: "Streak",
    date: "Jun 12, 2026",
    block: "0x44c0-9aa2",
  },
  {
    title: "Data Science: First Capstone",
    detail: "Shipped an end-to-end retail analysis",
    kind: "Project",
    date: "Jun 2, 2026",
    block: "0x12ab-77f0",
  },
];

export const achievementsTotal = 12;

export interface Contest {
  name: string;
  detail: string;
  date: string;
  length: string;
  status: "upcoming" | "past";
  result?: string;
  registered?: boolean;
}

export const contests: Contest[] = [
  {
    name: "Weekly Algorithms Sprint",
    detail: "Six timed problems · all levels",
    date: "Jun 28, 2026 · 10:00 AM",
    length: "90 min",
    status: "upcoming",
    registered: true,
  },
  {
    name: "Summer Math Open",
    detail: "AMC-style multiple choice",
    date: "Jul 5, 2026 · 1:00 PM",
    length: "75 min",
    status: "upcoming",
    registered: false,
  },
  {
    name: "Build Night: Mini Projects",
    detail: "Ship something small in one sitting",
    date: "Jul 11, 2026 · 6:00 PM",
    length: "2 hr",
    status: "upcoming",
    registered: false,
  },
  {
    name: "Weekly Algorithms Sprint",
    detail: "Placed 7th of 412",
    date: "Jun 21, 2026",
    length: "90 min",
    status: "past",
    result: "7th place",
  },
  {
    name: "Data Challenge: Clean & Chart",
    detail: "Completed · earned 1 MERIT",
    date: "Jun 14, 2026",
    length: "2 hr",
    status: "past",
    result: "Completed",
  },
];
