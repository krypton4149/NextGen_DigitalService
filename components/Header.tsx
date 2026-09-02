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
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const html = document.documentElement;
    const { body } = document;
    const scrollY = window.scrollY;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyLeft = body.style.left;
    const prevBodyRight = body.style.right;
    const prevBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.left = prevBodyLeft;
      body.style.right = prevBodyRight;
      body.style.width = prevBodyWidth;
      document.removeEventListener("keydown", onKey);
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "border-b border-transparent bg-background/40"
        }`}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 py-3 sm:gap-3 sm:py-3.5 md:gap-4">
            <Link href="/" className="min-w-0 shrink-0" prefetch>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo1.png"
                alt="Shikohabad Creative Co."
                width={240}
                height={90}
                className="h-11 w-auto rounded-lg sm:h-12 md:h-14 lg:h-16"
              />
            </Link>

            <nav
              className="hidden flex-1 items-center justify-center md:flex md:gap-0 lg:gap-0.5"
              aria-label="Main"
            >
              {links.map(({ href, label }) => {
                const active = navLinkActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    prefetch
                    className={`group relative px-2 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.1em] transition lg:px-3 lg:text-[0.65rem] lg:tracking-[0.18em] ${
                      active
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={`absolute bottom-0 left-2 right-2 h-px origin-left bg-accent transition-transform duration-300 lg:left-3 lg:right-3 ${
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
                className="group hidden min-h-11 items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-accent transition hover:bg-accent hover:text-accent-ink sm:inline-flex md:px-4 md:text-[0.65rem] md:tracking-[0.16em]"
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
                className="flex size-11 shrink-0 items-center justify-center border border-border text-foreground transition hover:border-accent hover:text-accent md:hidden"
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
        </div>
      </header>

      <div className="h-[var(--site-header-height)] shrink-0" aria-hidden />

      {menuOpen ? (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-navy/70"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-[var(--site-header-height)] z-10 mx-3 overflow-hidden border border-border bg-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:mx-4"
            style={{
              maxHeight:
                "min(70dvh, calc(100dvh - var(--site-header-height) - 0.75rem))",
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
                    className={`flex min-h-12 items-center justify-between gap-3 px-3 py-2.5 transition active:bg-surface ${
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
                className="flex min-h-12 w-full items-center justify-center gap-2 bg-accent px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-ink transition active:brightness-95"
                onClick={() => setMenuOpen(false)}
              >
                Start a project ↗
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
