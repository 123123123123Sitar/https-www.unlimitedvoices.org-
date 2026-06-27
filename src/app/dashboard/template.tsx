/** Replays the page-enter animation on each dashboard route change. */
export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
