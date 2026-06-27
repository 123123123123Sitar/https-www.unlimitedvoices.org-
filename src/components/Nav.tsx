"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Close, Menu } from "./ui/icons";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close overlay on route change.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "glass hairline-b" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-6 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                    active ? "text-accent" : "text-body hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button href="/auth/signin" variant="secondary" className="h-9 px-4 text-[14px]">
            Sign in
          </Button>
          <Button href="/auth/signup" className="h-9 px-4 text-[14px]">
            Sign up
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-hairline bg-surface text-ink"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-hairline bg-surface text-ink"
              >
                <Close size={18} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between px-6 pb-10 pt-6">
              <ul className="flex flex-col">
                {primaryNav.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="hairline-b"
                  >
                    <Link
                      href={link.href}
                      className="block py-4 font-display text-[28px] font-medium tracking-[-0.03em] text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button href="/auth/signup" size="lg" className="w-full">
                  Sign up
                </Button>
                <Button href="/auth/signin" variant="secondary" size="lg" className="w-full">
                  Sign in
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
