/** Practice Problem Bank — typed sample data for the Code Arena practice pages. */

export type Difficulty = "easy" | "medium" | "hard";

export type Topic =
  | "arrays"
  | "dynamic programming"
  | "graphs"
  | "greedy"
  | "math"
  | "sorting"
  | "strings";

export type Division = "novice" | "open";

export interface Problem {
  slug: string;
  title: string;
  date: string; // human-readable
  iso: string; // ISO date for sorting
  difficulty: Difficulty;
  topic: Topic;
  points: number;
  event: string;
  division: Division;
}

export const topics: Topic[] = [
  "arrays",
  "dynamic programming",
  "graphs",
  "greedy",
  "math",
  "sorting",
  "strings",
];

export const difficulties: Difficulty[] = ["easy", "medium", "hard"];

export const events: string[] = [
  "UV Hacks Summer 2026",
  "Daily Challenge",
  "Spring Sprint 2026",
  "Winter Cup 2025",
];

export const divisions: Division[] = ["novice", "open"];

export const problems: Problem[] = [
  {
    slug: "balanced-brackets",
    title: "Balanced Brackets",
    date: "Jun 24, 2026",
    iso: "2026-06-24",
    difficulty: "easy",
    topic: "strings",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "two-sum-pairs",
    title: "Two-Sum Pairs",
    date: "Jun 22, 2026",
    iso: "2026-06-22",
    difficulty: "easy",
    topic: "arrays",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "merge-the-logs",
    title: "Merge the Logs",
    date: "Jun 20, 2026",
    iso: "2026-06-20",
    difficulty: "medium",
    topic: "sorting",
    points: 100,
    event: "Spring Sprint 2026",
    division: "open",
  },
  {
    slug: "coin-rows",
    title: "Coin Rows",
    date: "Jun 18, 2026",
    iso: "2026-06-18",
    difficulty: "medium",
    topic: "dynamic programming",
    points: 100,
    event: "Spring Sprint 2026",
    division: "open",
  },
  {
    slug: "city-routes",
    title: "City Routes",
    date: "Jun 16, 2026",
    iso: "2026-06-16",
    difficulty: "hard",
    topic: "graphs",
    points: 200,
    event: "Winter Cup 2025",
    division: "open",
  },
  {
    slug: "prime-window",
    title: "Prime Window",
    date: "Jun 14, 2026",
    iso: "2026-06-14",
    difficulty: "medium",
    topic: "math",
    points: 100,
    event: "Daily Challenge",
    division: "open",
  },
  {
    slug: "greedy-tickets",
    title: "Greedy Tickets",
    date: "Jun 12, 2026",
    iso: "2026-06-12",
    difficulty: "easy",
    topic: "greedy",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "palindrome-cuts",
    title: "Palindrome Cuts",
    date: "Jun 10, 2026",
    iso: "2026-06-10",
    difficulty: "hard",
    topic: "dynamic programming",
    points: 200,
    event: "UV Hacks Summer 2026",
    division: "open",
  },
  {
    slug: "rotate-the-grid",
    title: "Rotate the Grid",
    date: "Jun 8, 2026",
    iso: "2026-06-08",
    difficulty: "medium",
    topic: "arrays",
    points: 100,
    event: "UV Hacks Summer 2026",
    division: "open",
  },
  {
    slug: "word-ladder-lite",
    title: "Word Ladder Lite",
    date: "Jun 6, 2026",
    iso: "2026-06-06",
    difficulty: "medium",
    topic: "graphs",
    points: 100,
    event: "Spring Sprint 2026",
    division: "open",
  },
  {
    slug: "sort-the-stamps",
    title: "Sort the Stamps",
    date: "Jun 4, 2026",
    iso: "2026-06-04",
    difficulty: "easy",
    topic: "sorting",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "digit-sum-game",
    title: "Digit Sum Game",
    date: "Jun 2, 2026",
    iso: "2026-06-02",
    difficulty: "easy",
    topic: "math",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "anagram-groups",
    title: "Anagram Groups",
    date: "May 31, 2026",
    iso: "2026-05-31",
    difficulty: "medium",
    topic: "strings",
    points: 100,
    event: "Winter Cup 2025",
    division: "open",
  },
  {
    slug: "subarray-budget",
    title: "Subarray Budget",
    date: "May 29, 2026",
    iso: "2026-05-29",
    difficulty: "medium",
    topic: "arrays",
    points: 100,
    event: "Winter Cup 2025",
    division: "open",
  },
  {
    slug: "island-counter",
    title: "Island Counter",
    date: "May 27, 2026",
    iso: "2026-05-27",
    difficulty: "easy",
    topic: "graphs",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
  {
    slug: "change-maker",
    title: "Change Maker",
    date: "May 25, 2026",
    iso: "2026-05-25",
    difficulty: "easy",
    topic: "greedy",
    points: 50,
    event: "Daily Challenge",
    division: "novice",
  },
];
