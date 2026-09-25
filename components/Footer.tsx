import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy pb-[env(safe-area-inset-bottom)] text-white">
      <div className="site-wrap py-16 lg:py-20">
        <div className="flex flex-col gap-8 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Shikohabad Creative Co.</p>
            <p className="display-title mt-5 max-w-xl text-[clamp(2.4rem,5vw,3.8rem)]">
              Marketing. Advertising.
              <br />
              Events.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center bg-coral px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-accent-dim"
          >
            Start a project →
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" prefetch>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo1.png"
                alt="Shikohabad Creative Co."
                width={220}
                height={74}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-[1.7] text-white/60">
              Marketing agency, advertising studio and event management company
              — one team for brands that want to be seen, heard and experienced.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-coral">
              Pages
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-coral">
              Studio
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-white">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li className="pt-1">Shikohabad, Uttar Pradesh</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="site-wrap flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Shikohabad Creative Co.</p>
          <p>Marketing · Advertising · Events</p>
        </div>
      </div>
    </footer>
  );
}
