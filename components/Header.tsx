"use client";

import {
  Calendar,
  ChevronLeft,
  House,
  LayoutGrid,
  Mail,
  Menu,
  Phone,
  Rocket,
  Search,
  Star,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/SocialBrandIcons";
import { SearchOverlay } from "@/components/SearchOverlay";

const links = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: Star },
  { href: "/services", label: "Services", Icon: Zap },
  { href: "/work", label: "Work", Icon: LayoutGrid },
  { href: "/events", label: "Events", Icon: Calendar },
  { href: "/contact", label: "Contact", Icon: Mail },
] as const;

const socials = [
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: YoutubeIcon },
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
      <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="bg-navy text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3 text-[0.7rem]">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition hover:text-coral sm:text-[0.7rem] sm:font-normal sm:normal-case sm:tracking-normal"
              >
                <Phone className="size-3.5 shrink-0 text-coral" strokeWidth={2} aria-hidden />
                <span className="hidden sm:inline">{CONTACT_PHONE_DISPLAY}</span>
                <span className="sm:hidden">Call now</span>
              </a>
              <span className="hidden h-3 w-px bg-white/25 md:block" aria-hidden />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hidden min-w-0 items-center gap-1.5 md:inline-flex"
              >
                <Mail className="size-3.5 shrink-0 text-coral" strokeWidth={2} aria-hidden />
                <span className="truncate transition hover:text-coral">{CONTACT_EMAIL}</span>
              </a>
            </div>

            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="proposal-btn inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_18px_rgba(255,90,60,0.45)] transition hover:bg-accent-dim sm:px-4 sm:text-[0.65rem] sm:tracking-[0.14em]"
            >
              Get a proposal
              <Rocket className="rocket-launch size-3.5" strokeWidth={2.25} aria-hidden />
            </a>

            <div className="hidden items-center justify-end gap-2.5 sm:flex">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hidden text-white/85 transition hover:text-coral sm:inline-flex"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`px-3 pb-2 pt-1.5 sm:px-4 lg:px-6 ${
            scrolled || menuOpen ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 rounded-full border border-border bg-white px-2.5 py-1 shadow-[0_10px_30px_-12px_rgba(11,19,43,0.28)] sm:px-3 sm:py-1.5">
            <Link href="/" className="min-w-0 shrink-0" prefetch>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo1.png"
                alt="Shikohabad Creative Co."
                width={220}
                height={80}
                className="h-8 w-auto rounded-full sm:h-9 lg:h-10"
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
                    className={`group relative px-2.5 py-1.5 text-[0.78rem] font-medium tracking-wide transition lg:px-3 ${
                      active ? "text-navy" : "text-muted hover:text-navy"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={`absolute bottom-1 left-3 right-3 h-px origin-left bg-coral transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-navy transition hover:text-coral"
                aria-label="Search"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
              >
                <Search className="size-5" strokeWidth={1.85} aria-hidden />
              </button>
              <Link
                href="/contact"
                prefetch
                className="hidden min-h-9 items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-coral sm:inline-flex lg:px-4"
              >
                Start a project
                <Zap className="size-3.5 text-coral" strokeWidth={2.25} aria-hidden />
              </Link>
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-navy transition hover:border-coral hover:text-coral lg:hidden"
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
        <div
          className="fixed inset-x-0 bottom-0 z-[55] lg:hidden"
          style={{ top: "var(--site-topbar-height)" }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/55"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav"
            className="mobile-drawer absolute inset-y-0 left-0 flex w-[min(86vw,22rem)] flex-col bg-white shadow-[12px_0_40px_-16px_rgba(11,19,43,0.45)]"
            style={{
              borderBottomRightRadius: "3.25rem",
              paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex items-center gap-3 px-4 pb-3 pt-4">
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-navy"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <ChevronLeft className="size-5" strokeWidth={2} aria-hidden />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo1.png"
                alt="Shikohabad Creative Co."
                width={180}
                height={64}
                className="h-8 w-auto rounded-full"
              />
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-2" aria-label="Mobile">
              {links.map(({ href, label, Icon }) => {
                const active = navLinkActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    prefetch
                    className="flex min-h-[3.35rem] items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        active ? "bg-coral text-white" : "bg-surface text-muted"
                      }`}
                    >
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span
                      className={`text-[0.95rem] font-bold uppercase tracking-[0.08em] ${
                        active ? "text-coral" : "text-navy"
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="absolute right-0 top-1/2 flex size-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-navy text-coral shadow-md"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <ChevronLeft className="size-4" strokeWidth={2.5} aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
