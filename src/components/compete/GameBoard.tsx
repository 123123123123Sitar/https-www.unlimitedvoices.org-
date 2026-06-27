/**
 * Small monochrome board previews for STEM Arcade game cards. Strictly grayscale
 * (track / hairline / ink), rendered as CSS grids or simple SVG. Pure markup so
 * the hover micro-interaction can be driven by the parent card's `group` class.
 */

export type BoardKind =
  | "queens"
  | "tango"
  | "light-logic"
  | "tilt-maze"
  | "pattern-lab"
  | "circuit";

function Cell({ fill }: { fill: "empty" | "soft" | "ink" }) {
  const tone =
    fill === "ink" ? "bg-ink" : fill === "soft" ? "bg-[var(--hairline-strong)]" : "bg-track";
  return <span className={`rounded-[2px] ${tone}`} />;
}

function Grid({
  size,
  pattern,
}: {
  size: number;
  pattern: ("empty" | "soft" | "ink")[];
}) {
  return (
    <div
      className="grid w-fit gap-1"
      style={{ gridTemplateColumns: `repeat(${size}, 1.25rem)` }}
    >
      {pattern.map((f, i) => (
        <span key={i} className="aspect-square">
          <Cell fill={f} />
        </span>
      ))}
    </div>
  );
}

// Deterministic patterns per game, 5x5 unless noted.
function buildPattern(kind: BoardKind): ("empty" | "soft" | "ink")[] {
  const n = 25;
  const out: ("empty" | "soft" | "ink")[] = Array.from({ length: n }, () => "empty");
  const set = (idx: number, v: "soft" | "ink") => {
    if (idx >= 0 && idx < n) out[idx] = v;
  };
  switch (kind) {
    case "queens":
      // one marked cell per row/col, no two in line — classic queens look
      [2, 9, 11, 18, 20].forEach((i) => set(i, "ink"));
      break;
    case "tango":
      // alternating soft/ink in a balanced pattern
      [0, 3, 6, 9, 12, 15, 18, 21, 24].forEach((i) => set(i, i % 2 ? "ink" : "soft"));
      break;
    case "light-logic":
      // a plus shape of lit cells
      [2, 7, 10, 11, 12, 13, 14, 17, 22].forEach((i) => set(i, "ink"));
      break;
    case "tilt-maze":
      // walls forming a path
      [0, 1, 2, 7, 12, 13, 14, 19, 24].forEach((i) => set(i, "soft"));
      [22].forEach((i) => set(i, "ink"));
      break;
    case "pattern-lab":
      // diagonal repeat
      [0, 6, 12, 18, 24, 4, 8, 16, 20].forEach((i) => set(i, i % 3 ? "soft" : "ink"));
      break;
    case "circuit":
      // a connecting line / node look
      [0, 1, 2, 12, 22, 23, 24, 7, 17].forEach((i) => set(i, "soft"));
      [2, 12, 22].forEach((i) => set(i, "ink"));
      break;
  }
  return out;
}

export function GameBoard({ kind }: { kind: BoardKind }) {
  return (
    <div className="rounded-card border border-hairline bg-surface-2 p-5 transition-transform duration-300 group-hover:-translate-y-0.5">
      <div className="transition-transform duration-300 group-hover:scale-[1.03]">
        <Grid size={5} pattern={buildPattern(kind)} />
      </div>
    </div>
  );
}
