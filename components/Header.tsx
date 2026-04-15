"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function navLinkActive(pathname: string, label: string) {
  return (
    (label === "Home" && pathname === "/") ||
    (label === "About" && pathname === "/about") ||
    (label === "Services" && pathname === "/services") ||
    (label === "Pricing" && pathname === "/pricing") ||
    (label === "Contact" && pathname === "/contact")
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const linkClass = (active: boolean, mobile = false) =>
    [
      "relative transition-colors",
      mobile
        ? `flex min-h-[3rem] items-center rounded-lg px-4 text-base font-medium ${
            active ? "pb-4" : ""
          }`
        : "shrink-0 whitespace-nowrap px-2.5 py-2 text-sm sm:px-3",
      active
        ? "font-bold text-brand-navy"
        : "font-medium text-slate-600 hover:text-brand md:text-slate-500",
    ].join(" ");

  return (
    <header className="sticky top-0 z-40">
      <div
        className="h-1 w-full bg-violet-600 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        aria-hidden
      />
      <div className="border-b border-slate-200/90 bg-[#fafafa]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#fafafa]/88">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:gap-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 md:gap-3.5"
            prefetch
          >
            <span className="relative flex h-10 shrink-0 items-center sm:h-11 md:h-12">
              <Image
                src="/images/logo.png"
                alt=""
                aria-hidden
                width={240}
                height={60}
                className="h-10 w-auto max-w-[7.25rem] object-contain object-left sm:h-11 sm:max-w-[9.5rem] md:h-12 md:max-w-[11rem]"
                priority
              />
            </span>
            <span className="hidden leading-snug min-[400px]:block sm:block">
              <span className="block max-w-[9.5rem] truncate text-[0.62rem] font-bold uppercase tracking-[0.1em] text-slate-600 sm:max-w-none sm:text-[0.7rem] md:text-xs">
                NextGen Digital Service
              </span>
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex md:gap-6 lg:gap-8"
            aria-label="Main"
          >
            {links.map(({ href, label }) => {
              const active = navLinkActive(pathname, label);
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className={linkClass(active, false)}
                >
                  {label}
                  {active ? (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-1 rounded-sm bg-brand sm:left-3 sm:right-3"
                      aria-hidden
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              prefetch
              className="hidden px-5 py-2.5 text-xs font-semibold uppercase tracking-wide min-[480px]:inline-flex sm:px-7 sm:py-3 sm:text-sm"
            >
              Get started
            </Button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-6" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="size-6" strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed bottom-0 left-0 right-0 top-[4.5rem] z-30 bg-slate-900/40 backdrop-blur-[2px] md:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav"
            className="fixed bottom-0 left-0 right-0 top-[4.5rem] z-50 flex max-h-[min(100dvh,100vh)] flex-col border-t border-slate-200 bg-white shadow-2xl md:hidden"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <nav className="flex flex-1 flex-col overflow-y-auto px-2 py-3" aria-label="Mobile">
              {links.map(({ href, label }) => {
                const active = navLinkActive(pathname, label);
                return (
                  <Link
                    key={href}
                    href={href}
                    prefetch
                    className={linkClass(active, true)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                    {active ? (
                      <span
                        className="absolute bottom-2 left-4 right-4 h-1 rounded-sm bg-brand"
                        aria-hidden
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-slate-100 p-4">
              <Button
                href="/contact"
                variant="primary"
                prefetch
                className="w-full py-3.5 text-sm font-semibold uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                Get started
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
