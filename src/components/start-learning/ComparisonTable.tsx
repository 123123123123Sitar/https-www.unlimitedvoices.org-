import { Check, Dash } from "@/components/ui/icons";
import { compareColumns, compareRows, type CompareRow } from "@/content/start-learning";
import { cn } from "@/lib/utils";

function Cell({ value, accent }: { value: CompareRow["uv"]; accent?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={cn("font-mono text-[13px]", accent ? "text-ink" : "text-body")}>
        {value}
      </span>
    );
  }
  return value ? (
    <Check size={18} className={accent ? "text-accent" : "text-ink"} aria-label="Yes" />
  ) : (
    <Dash size={18} className="text-caption" aria-label="No" />
  );
}

/** Monochrome feature comparison. Highlights the Unlimited Voices column. */
export function ComparisonTable() {
  const keys: (keyof CompareRow)[] = ["uv", "khan", "codecademy", "bootcamp"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">
          How Unlimited Voices compares to other learning platforms
        </caption>
        <thead>
          <tr className="border-b border-hairline">
            <th scope="col" className="py-4 pr-4 text-[13px] font-medium text-caption">
              <span className="sr-only">Feature</span>
            </th>
            {compareColumns.map((col, i) => (
              <th
                key={col}
                scope="col"
                className={cn(
                  "px-4 py-4 text-center font-display text-[14px] font-semibold tracking-[-0.01em]",
                  i === 0 ? "text-ink" : "text-body",
                )}
              >
                {i === 0 ? (
                  <span className="inline-flex flex-col items-center gap-1">
                    {col}
                    <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-accent">
                      That&rsquo;s us
                    </span>
                  </span>
                ) : (
                  col
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row) => (
            <tr key={row.feature} className="border-b border-hairline last:border-0">
              <th
                scope="row"
                className="py-4 pr-4 text-[14px] font-normal text-body"
              >
                {row.feature}
              </th>
              {keys.map((k, i) => (
                <td
                  key={k}
                  className={cn(
                    "px-4 py-4 text-center align-middle",
                    i === 0 && "bg-[var(--bg-alt)]",
                  )}
                >
                  <span className="inline-flex justify-center">
                    <Cell value={row[k]} accent={i === 0} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
