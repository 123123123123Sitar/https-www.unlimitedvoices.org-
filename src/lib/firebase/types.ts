/** Typed Firestore models. Local seed content conforms to these shapes. */

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  level: number;
  coins: number;
  gems: number;
  xp: number;
  merit: number;
  streak: number;
  createdAt: number;
}

export interface CourseProgress {
  courseSlug: string;
  completedLessons: number;
  totalLessons: number;
  percent: number;
  updatedAt: number;
}

export interface MeritRecord {
  id: string;
  uid: string;
  title: string;
  kind: "course" | "contest" | "challenge" | "lab";
  merit: number;
  block: string;
  date: string;
  transferable: false;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  createdAt: number;
}

/** Firestore collection names — single source of truth. */
export const COLLECTIONS = {
  users: "users",
  progress: "progress",
  merit: "merit",
  contacts: "contacts",
  courses: "courses",
} as const;
