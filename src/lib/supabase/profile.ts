import { cache } from "react";
import { redirect } from "next/navigation";
import { getSupabaseServer } from "./server";
import { isSupabaseConfigured } from "./client";
import { TABLES, type Profile } from "./types";

/** XP required per level (simple linear curve). */
const PER_LEVEL = 1000;

/** Normalized profile shape consumed by the dashboard UI. */
export interface DashProfile {
  name: string;
  firstName: string;
  email: string;
  monogram: string;
  level: number;
  nextLevel: number;
  xp: number;
  merit: number;
  streak: number;
  coins: number;
  gems: number;
  /** XP earned within the current level, and the XP needed to finish it. */
  levelXp: number;
  levelTarget: number;
  /** True when running without Supabase configured (illustrative data). */
  demo: boolean;
}

function monogramFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return (parts[0] ?? "U").slice(0, 2).toUpperCase();
}

/** Derive level + within-level progress from total XP, so they're always consistent. */
function shape(input: {
  name: string;
  email: string;
  xp: number;
  merit: number;
  streak: number;
  coins: number;
  gems: number;
  demo: boolean;
}): DashProfile {
  const level = Math.floor(input.xp / PER_LEVEL) + 1;
  return {
    name: input.name,
    firstName: input.name.trim().split(/\s+/)[0] || input.name,
    email: input.email,
    monogram: monogramFrom(input.name),
    level,
    nextLevel: level + 1,
    xp: input.xp,
    merit: input.merit,
    streak: input.streak,
    coins: input.coins,
    gems: input.gems,
    levelXp: input.xp % PER_LEVEL,
    levelTarget: PER_LEVEL,
    demo: input.demo,
  };
}

/** Illustrative profile used when Supabase isn't configured. */
const DEMO: DashProfile = shape({
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  xp: 12500,
  merit: 48,
  streak: 12,
  coins: 2847,
  gems: 156,
  demo: true,
});

/**
 * Returns the signed-in user's normalized profile. Redirects to /auth/signin
 * when Supabase is configured but no user is signed in. Falls back to a demo
 * profile when Supabase env vars are absent.
 */
export const getDashProfile = cache(async (): Promise<DashProfile> => {
  if (!isSupabaseConfigured) return DEMO;

  const supabase = await getSupabaseServer();
  if (!supabase) return DEMO;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/auth/signin");

  const { data } = await supabase
    .from(TABLES.profiles)
    .select("display_name, xp, merit, streak, coins, gems")
    .eq("id", user.id)
    .maybeSingle<
      Pick<Profile, "display_name" | "xp" | "merit" | "streak" | "coins" | "gems">
    >();

  const email = user.email ?? "";
  const name = data?.display_name || email.split("@")[0] || "Learner";

  return shape({
    name,
    email,
    xp: data?.xp ?? 0,
    merit: data?.merit ?? 0,
    streak: data?.streak ?? 0,
    coins: data?.coins ?? 0,
    gems: data?.gems ?? 0,
    demo: false,
  });
});
