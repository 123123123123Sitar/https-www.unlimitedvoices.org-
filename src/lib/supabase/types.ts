/** Typed Supabase models + table names. Mirrors supabase/migrations. */

export interface Profile {
  id: string;
  display_name: string | null;
  level: number;
  xp: number;
  merit: number;
  streak: number;
  coins: number;
  gems: number;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

/** Insert payload for the contact form (id/created_at are DB-generated). */
export type ContactInsert = Pick<ContactMessage, "name" | "email" | "message">;

/** Table names — single source of truth shared with the SQL migration. */
export const TABLES = {
  profiles: "profiles",
  contacts: "contacts",
} as const;
