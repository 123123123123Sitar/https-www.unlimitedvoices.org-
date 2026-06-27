/** Content for /start-learning — catalog, comparison table, FAQ, testimonials. */

export type TrackKey = "code" | "data" | "compete" | "practice" | "platform";

export interface CatalogItem {
  name: string;
  href: string;
  blurb: string;
  tag?: string;
}

export interface CatalogGroup {
  title: string;
  track: TrackKey;
  items: CatalogItem[];
}

export const PATHS: { key: TrackKey | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "code", label: "Code" },
  { key: "data", label: "Data" },
  { key: "compete", label: "Compete" },
  { key: "practice", label: "Practice" },
  { key: "platform", label: "Platform" },
];

export const catalog: CatalogGroup[] = [
  {
    title: "Programming",
    track: "code",
    items: [
      { name: "Python", href: "/python-course", blurb: "Automate tasks, clean data, build projects.", tag: "Beginner" },
      { name: "Java", href: "/java-course", blurb: "Object-oriented design for AP CS and USACO.", tag: "Beginner" },
    ],
  },
  {
    title: "Data Science & AI",
    track: "data",
    items: [
      { name: "Data Science", href: "/data-science-course", blurb: "NumPy, pandas, SQL, and visualization labs.", tag: "Beginner" },
    ],
  },
  {
    title: "STEM Competitions",
    track: "compete",
    items: [
      { name: "Math", href: "/math-contests", blurb: "AMC-style algebra, geometry, number theory." },
      { name: "Physics", href: "/math-contests", blurb: "Mechanics and electromagnetism problem sets." },
      { name: "Biology", href: "/math-contests", blurb: "Olympiad-style biology practice." },
      { name: "Chemistry", href: "/math-contests", blurb: "Timed chemistry quizzes and review." },
    ],
  },
  {
    title: "Coding Competitions",
    track: "compete",
    items: [
      { name: "Programming Contests", href: "/hackathons", blurb: "Team contests with peer and mentor review." },
      { name: "Code Arena", href: "/hackathons", blurb: "Live hackathons and AI-for-good builds." },
    ],
  },
  {
    title: "Daily Practice & Games",
    track: "practice",
    items: [
      { name: "Daily Challenge", href: "/daily-challenge", blurb: "A fresh coding problem every day." },
      { name: "STEM Arcade", href: "/stem-arcade", blurb: "Puzzles and logic games that build thinking." },
      { name: "Digital SAT", href: "/sat-course", blurb: "Bluebook-style adaptive practice tests." },
    ],
  },
  {
    title: "Progress & Credentials",
    track: "platform",
    items: [
      { name: "Learning Blockchain", href: "/#blockchain", blurb: "A verified record of everything you learn." },
      { name: "Dashboard", href: "/dashboard", blurb: "Track XP, streaks, and course progress." },
    ],
  },
];

export const stages = [
  {
    n: "01",
    title: "Understand",
    body: "Short, clear lessons introduce one idea at a time, with examples you can read at your own pace.",
  },
  {
    n: "02",
    title: "Build",
    body: "Practice it right away in a browser lab. No installs, no setup, just write code and run it.",
  },
  {
    n: "03",
    title: "Show",
    body: "Finish a project, earn a verified credential, and add it to a portfolio you can show colleges.",
  },
];

export interface CompareRow {
  feature: string;
  uv: boolean | string;
  khan: boolean | string;
  codecademy: boolean | string;
  bootcamp: boolean | string;
}

export const compareColumns = ["Unlimited Voices", "Khan Academy", "Codecademy", "Bootcamps"];

export const compareRows: CompareRow[] = [
  { feature: "100% free, no tiers", uv: true, khan: true, codecademy: false, bootcamp: false },
  { feature: "Browser labs, zero installs", uv: true, khan: true, codecademy: true, bootcamp: false },
  { feature: "Outcome-based rubric", uv: true, khan: false, codecademy: false, bootcamp: true },
  { feature: "Proof-of-learning record", uv: true, khan: false, codecademy: false, bootcamp: false },
  { feature: "Live hackathons & contests", uv: true, khan: false, codecademy: false, bootcamp: true },
  { feature: "Self-paced, adjustable", uv: true, khan: true, codecademy: false, bootcamp: false },
  { feature: "Portfolio-ready projects", uv: true, khan: false, codecademy: true, bootcamp: true },
  { feature: "Monthly cost", uv: "$0", khan: "$0–4", codecademy: "$40+", bootcamp: "$500+" },
];

export const testimonials = [
  {
    quote: "I went from never writing code to shipping a project in a weekend hackathon. The labs made it click.",
    name: "Priya M.",
    detail: "Started with Python",
  },
  {
    quote: "Everything is free and actually well made. I tell all my friends to start here.",
    name: "Jordan T.",
    detail: "Data Science track",
  },
  {
    quote: "The daily challenges kept me going. I've got a 90-day streak now.",
    name: "Sam W.",
    detail: "Daily Challenge",
  },
];

export const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Every course, lab, contest, and credential is free, with no tiers and no credit card. We're a volunteer-led nonprofit.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "No. Our beginner tracks start from zero and explain each idea before you use it. If you've coded before, you can move faster.",
  },
  {
    question: "How much time does it take?",
    answer:
      "Most learners spend 2–4 hours a week. You set the pace, and pick up where you left off whenever you have time.",
  },
  {
    question: "Do I have to install anything?",
    answer:
      "No. You write and run code right in your browser. Nothing to download or set up.",
  },
  {
    question: "Should I start with Python, Java, or Data Science?",
    answer:
      "Python is the easiest place to start. Choose Java if you're aiming at AP CS or USACO, and Data Science once you're comfortable with basic Python.",
  },
];
