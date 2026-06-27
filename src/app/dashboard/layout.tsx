import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";

export const metadata = {
  title: "Dashboard",
  description: "Your learning overview, wallet, courses, and records.",
};

/** Standalone app shell — its own sidebar chrome, not the marketing Nav/Footer. */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg lg:flex">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-5 py-7 sm:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
          <p className="mx-auto mt-12 w-full max-w-5xl border-t border-hairline pt-5 font-mono text-[11px] text-caption">
            Preview with sample data, not connected to a live account.
          </p>
        </main>
      </div>
    </div>
  );
}
