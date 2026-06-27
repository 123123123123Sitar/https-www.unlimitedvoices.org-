import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when the public Supabase env vars are present. */
export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

/**
 * Browser Supabase client (singleton). Returns null when env vars are absent so
 * the app still renders from local seed content and auth/contact fall back to a
 * friendly demo mode.
 */
export function getSupabaseBrowser(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) client = createBrowserClient(url!, anonKey!);
  return client;
}
