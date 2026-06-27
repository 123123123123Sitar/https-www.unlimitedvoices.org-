import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { getDashProfile } from "@/lib/supabase/profile";

export const metadata = {
  title: "Dashboard",
  description: "Your learning overview, wallet, courses, and records.",
};

/** Standalone app shell — its own sidebar chrome, not the marketing Nav/Footer. */
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  // Redirects to /auth/signin when Supabase is configured but no user is signed in.
  const profile = await getDashProfile();

  return (
    <div className="min-h-screen bg-bg lg:flex">
      <Sidebar profile={profile} />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar profile={profile} />
        <main className="flex-1 px-5 py-7 sm:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
          {profile.demo && (
            <p className="mx-auto mt-12 w-full max-w-5xl border-t border-hairline pt-5 font-mono text-[11px] text-caption">
              Preview with sample data, not connected to a live account.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
