/**
 * Monochrome contribution-style grid (7 rows x 10 cols). Fill levels use shades
 * between the track and ink tokens — strictly grayscale, no color coding.
 */

const COLS = 10;
const ROWS = 7;

// Deterministic pseudo-random intensities so SSR and client agree.
function intensity(row: number, col: number): number {
  const seed = (row * 31 + col * 17 + 7) % 11;
  if (seed < 4) return 0;
  if (seed < 7) return 1;
  if (seed < 9) return 2;
  return 3;
}

const levelStyle: Record<number, string> = {
  0: "bg-track",
  1: "bg-[var(--hairline-strong)]",
  2: "bg-[var(--caption)]",
  3: "bg-ink",
};

export function StreakGrid() {
  const cells: { row: number; col: number; level: number }[] = [];
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      cells.push({ row, col, level: intensity(row, col) });
    }
  }

  return (
    <div>
      <div
        className="grid w-fit grid-flow-col gap-1.5"
        style={{ gridTemplateRows: `repeat(${ROWS}, 1rem)` }}
        role="img"
        aria-label="Your daily challenge streak over the last ten weeks"
      >
        {cells.map((c) => (
          <span
            key={`${c.row}-${c.col}`}
            className={`h-4 w-4 rounded-[3px] ${levelStyle[c.level]}`}
          />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-caption">
        <span>Less</span>
        {[0, 1, 2, 3].map((l) => (
          <span key={l} className={`h-3 w-3 rounded-[2px] ${levelStyle[l]}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
