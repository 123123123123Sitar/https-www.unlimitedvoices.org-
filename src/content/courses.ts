/** Course catalog — the canonical typed source mirrored to Firestore on seed. */

export interface Course {
  slug: string;
  href: string;
  title: string;
  category: string;
  level: string;
  pitch: string;
  description: string;
  modules: number;
  lessons: string;
  hours: number;
  track: "code" | "data" | "compete" | "practice" | "platform";
}

export const courses: Course[] = [
  {
    slug: "python-course",
    href: "/python-course",
    title: "Python",
    category: "Programming",
    level: "Beginner",
    pitch: "Build Real Things.",
    description:
      "Start from zero and learn to automate tasks, clean data, and build small projects. Variables, loops, functions, file handling, and the data structures real programmers use every day.",
    modules: 7,
    lessons: "85+ lessons & labs",
    hours: 15,
    track: "code",
  },
  {
    slug: "java-course",
    href: "/java-course",
    title: "Java",
    category: "Programming",
    level: "Beginner",
    pitch: "Build Real Applications.",
    description:
      "Master Java syntax, object-oriented design, and the collections you need for AP CS, USACO, and Android-backend work. Twelve modules of lessons, practice, and capstone projects.",
    modules: 12,
    lessons: "100+ lessons",
    hours: 20,
    track: "code",
  },
  {
    slug: "data-science-course",
    href: "/data-science-course",
    title: "Data Science",
    category: "Data Science",
    level: "Beginner",
    pitch: "From Data to Decisions.",
    description:
      "Go from raw data to real insight with NumPy, pandas, SQL, and visualization. Hands-on labs on retail and sensor datasets, an end-to-end capstone, and interview prep for a portfolio you can show.",
    modules: 10,
    lessons: "71+ lessons & labs",
    hours: 35,
    track: "data",
  },
  {
    slug: "sat-course",
    href: "/sat-course",
    title: "Digital SAT",
    category: "SAT Prep",
    level: "Adaptive",
    pitch: "Test-day ready.",
    description:
      "Bluebook-style two-module adaptive simulators for Math and Reading & Writing, with autosave and resume, plus six focused video modules covering everything from algebra foundations to test-day strategy.",
    modules: 6,
    lessons: "13 lessons · 61+ items",
    hours: 12,
    track: "practice",
  },
];

export const popularCourses = courses;

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
