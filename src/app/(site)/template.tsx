/**
 * A template re-mounts on every navigation, so the CSS enter animation replays
 * each time a route in the (site) group is shown. Kept as a CSS keyframe (not a
 * lingering transform) so it never breaks the sticky nav or in-page sticky rails.
 */
export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
