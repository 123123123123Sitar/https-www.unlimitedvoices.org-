import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { footerColumns, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="hairline-t bg-[var(--bg-alt)]">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[28ch] text-[14px] leading-relaxed text-body">
              Free, high-quality STEM, AI, and coding education for every young learner.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-kicker mb-4">{col.title}</h2>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-body transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="hairline-t mt-14 flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[12px] text-caption">
            © {SITE.year} {SITE.name}
          </p>
          <p className="font-mono text-[12px] text-caption">{SITE.location}</p>
        </div>
      </Container>
    </footer>
  );
}
