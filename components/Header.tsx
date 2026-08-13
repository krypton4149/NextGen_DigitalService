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
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-background/40"
      }`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="group shrink-0" prefetch>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Logo1.png"
            alt="Shikohabad Creative Co."
            width={140}
            height={52}
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

        <div className="ml-auto flex items-center gap-3">
          <p className="hidden text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-muted md:block lg:hidden">
            Local Roots.
          </p>
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
            className="flex size-10 items-center justify-center border border-border text-foreground transition hover:border-accent hover:text-accent lg:hidden"
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
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5 sm:px-6">
            <Link href="/" prefetch onClick={() => setMenuOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo1.png"
                alt="Shikohabad Creative Co."
                width={120}
                height={45}
              />
            </Link>
            <button
              type="button"
              className="flex size-10 items-center justify-center border border-border text-foreground"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6" aria-label="Mobile">
            <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Menu · Local Roots. Creative Reach.
            </p>
            {links.map(({ href, label, num }) => {
              const active = navLinkActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className={`flex items-baseline justify-between gap-4 border-b border-border py-4 transition ${
                    active ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {label}
                  </span>
                  <span className="font-mono text-xs tracking-[0.16em] text-muted">
                    {num}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-border p-4 sm:p-6">
            <Link
              href="/contact"
              prefetch
              className="flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-ink"
              onClick={() => setMenuOpen(false)}
            >
              Start a project ↗
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
