/** Global site configuration: navigation + footer. Typed so pages stay in sync. */

export interface NavLink {
  label: string;
  href: string;
}

export const SITE = {
  name: "Unlimited Voices",
  tagline: "Empowering Every Student Through Unlimited Voices",
  location: "San Jose, CA",
  year: 2025,
} as const;

export const primaryNav: NavLink[] = [
  { label: "Courses", href: "/courses" },
  { label: "Start learning", href: "/start-learning" },
  { label: "Code Arena", href: "/hackathons" },
  { label: "Daily Challenge", href: "/daily-challenge" },
  { label: "Team", href: "/team" },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Learn",
    links: [
      { label: "All courses", href: "/courses" },
      { label: "Start learning", href: "/start-learning" },
      { label: "Python", href: "/python-course" },
      { label: "Java", href: "/java-course" },
      { label: "Data Science", href: "/data-science-course" },
      { label: "Digital SAT", href: "/sat-course" },
    ],
  },
  {
    title: "Compete",
    links: [
      { label: "Code Arena", href: "/hackathons" },
      { label: "Practice bank", href: "/practice/hackathons" },
      { label: "Daily Challenge", href: "/daily-challenge" },
      { label: "Math Contests", href: "/math-contests" },
      { label: "STEM Arcade", href: "/stem-arcade" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "Team", href: "/team" },
      { label: "Chapters", href: "/chapters" },
      { label: "Partners", href: "/partners" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "/auth/signin" },
      { label: "Sign up", href: "/auth/signup" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Learning Wallet", href: "/dashboard/wallet" },
    ],
  },
];
