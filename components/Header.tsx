"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { BrandLockup } from "@/components/BrandLockup";
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
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
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

  const floating = scrolled && !menuOpen;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute top-7 left-0 h-px w-px"
      />
      <header
        data-scrolled={floating ? "true" : "false"}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "top-0 border-b border-white/10 bg-[#0c060a]/90 pt-[env(safe-area-inset-top)] backdrop-blur-md"
            : floating
              ? "top-3 px-3 sm:top-4 sm:px-5"
              : "top-0 pt-[env(safe-area-inset-top)]"
        }`}
      >
        <div
          className={`mx-auto flex items-center transition-all duration-500 ${
            floating
              ? "h-14 max-w-6xl gap-2 rounded-full border border-white/[0.08] bg-[#12080e]/88 px-2.5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:h-16 sm:gap-4 sm:px-4"
              : "site-wrap h-16 gap-5 lg:h-[4.75rem]"
          }`}
          style={{ minHeight: floating ? "3.5rem" : "4rem" }}
        >
          <Link
            href="/"
            className="min-w-0"
            prefetch
            aria-label="Shikohabad Creative Co."
          >
            <BrandLockup compact={floating} />
          </Link>

          <nav
            className={`hidden flex-1 items-center justify-center lg:flex ${
              floating ? "gap-6" : "gap-9"
            }`}
            aria-label="Main"
          >
            {links.map(({ href, label }) => {
              const active = navLinkActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className={`nav-underline font-medium tracking-[-0.01em] transition ${
                    floating ? "text-[0.84rem]" : "text-[0.92rem]"
                  } ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  data-active={active ? "true" : "false"}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="flex size-10 items-center justify-center text-white/55 transition hover:text-white"
              aria-label="Search"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              <Search className="size-[1.1rem]" strokeWidth={1.5} aria-hidden />
            </button>
            <Link
              href="/contact"
              prefetch
              className="btn-shine relative hidden min-h-10 items-center gap-1.5 overflow-hidden rounded-full bg-coral px-4 text-[0.84rem] font-semibold text-white transition duration-300 hover:bg-accent-dim hover:shadow-[0_10px_28px_-12px_rgba(255,61,110,0.85)] lg:inline-flex"
            >
              Get started →
            </Link>
            <button
              type="button"
              className="flex size-10 items-center justify-center text-white lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.5} aria-hidden />
              ) : (
                <Menu className="size-5" strokeWidth={1.5} aria-hidden />
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
                className="mt-6 inline-flex min-h-11 items-center rounded-full bg-coral px-5 text-[0.9rem] font-semibold text-white"
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
