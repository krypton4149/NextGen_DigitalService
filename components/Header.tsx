"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", num: "01" },
  { href: "/work", label: "Work", num: "02" },
  { href: "/services", label: "Services", num: "03" },
  { href: "/events", label: "Events", num: "04" },
  { href: "/about", label: "About", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
] as const;

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-background/40"
      }`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-[60] flex items-center gap-3 py-3 sm:gap-4 sm:py-3.5">
          <Link href="/" className="min-w-0 shrink-0" prefetch>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Logo1.png"
              alt="Shikohabad Creative Co."
              width={240}
              height={90}
              className="h-12 w-auto rounded-lg sm:h-14 lg:h-16"
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Main"
          >
            {links.map(({ href, label }) => {
              const active = navLinkActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className={`group relative px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition ${
                    active
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-3 right-3 h-px origin-left bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              prefetch
              className="group hidden items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-accent-ink sm:inline-flex"
            >
              Start a project
              <span
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              >
                ↗
              </span>
            </Link>
            <button
              type="button"
              className="flex size-10 shrink-0 items-center justify-center border border-border text-foreground transition hover:border-accent hover:text-accent lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.75} aria-hidden />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div
              id="mobile-nav"
              className="absolute left-0 right-0 top-full z-50 mx-0 mt-2 overflow-hidden border border-border bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:left-0 sm:right-0 lg:hidden"
              style={{
                maxHeight: "min(70dvh, 28rem)",
                paddingBottom: "max(0.25rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  Menu
                </p>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Local Roots. Creative Reach.
                </p>
              </div>

              <nav
                className="max-h-[min(48dvh,18rem)] overflow-y-auto overscroll-contain px-1.5 py-1.5"
                aria-label="Mobile"
              >
                {links.map(({ href, label, num }) => {
                  const active = navLinkActive(pathname, href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      prefetch
                      className={`flex min-h-11 items-center justify-between gap-3 px-3 py-2.5 transition active:bg-surface ${
                        active
                          ? "bg-accent/10 text-accent"
                          : "text-foreground hover:bg-surface hover:text-accent"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-display text-[0.95rem] font-semibold tracking-tight sm:text-base">
                        {label}
                      </span>
                      <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted">
                        {num}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-border p-3">
                <Link
                  href="/contact"
                  prefetch
                  className="flex min-h-11 w-full items-center justify-center gap-2 bg-accent px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-ink transition active:brightness-95"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a project ↗
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
