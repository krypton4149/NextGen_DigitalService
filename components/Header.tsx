"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SearchOverlay } from "@/components/SearchOverlay";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;

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
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
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
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
          scrolled || menuOpen
            ? "border-border bg-background/92 backdrop-blur-md"
            : "border-transparent bg-background"
        }`}
      >
        <div className="site-wrap flex h-[4.5rem] items-center gap-6 lg:h-[5rem]">
          <Link href="/" className="min-w-0 shrink-0" prefetch>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Logo1.png"
              alt="Shikohabad Creative Co."
              width={220}
              height={80}
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 lg:flex"
            aria-label="Main"
          >
            {links.map(({ href, label }) => {
              const active = navLinkActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className={`group relative text-[0.85rem] font-semibold transition ${
                    active ? "text-navy" : "text-muted hover:text-navy"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-coral transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              className="flex size-10 items-center justify-center text-navy/70 transition hover:text-navy"
              aria-label="Search"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              <Search className="size-[1.15rem]" strokeWidth={1.6} aria-hidden />
            </button>
            <Link
              href="/contact"
              prefetch
              className="btn-shine hidden min-h-10 items-center rounded-full bg-coral px-4 text-[0.82rem] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(255,90,60,0.85)] transition hover:bg-accent-dim lg:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              className="flex size-10 items-center justify-center text-navy lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-6" strokeWidth={1.6} aria-hidden />
              ) : (
                <Menu className="size-6" strokeWidth={1.6} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="h-[var(--site-header-height)] shrink-0" aria-hidden />

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="mobile-menu fixed inset-x-0 bottom-0 z-[55] overflow-y-auto bg-navy text-white lg:hidden"
          style={{ top: "var(--site-header-height)" }}
          role="dialog"
          aria-modal="true"
        >
          <nav className="site-wrap flex flex-col py-8" aria-label="Mobile">
            {links.map(({ href, label }, index) => (
              <Link
                key={href}
                href={href}
                prefetch
                className="flex items-baseline justify-between border-b border-white/15 py-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-display text-[2rem] tracking-tight">
                  {label}
                </span>
                <span className="text-[0.75rem] text-white/40">
                  0{index + 1}
                </span>
              </Link>
            ))}
            <div className="mt-10 space-y-2 text-sm text-white/70">
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="block hover:text-white">
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block break-all hover:text-white">
                {CONTACT_EMAIL}
              </a>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white/25 px-5 text-[0.9rem] font-medium text-white"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
