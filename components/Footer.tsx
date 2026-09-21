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
    <footer className="bg-navy pb-[env(safe-area-inset-bottom)] text-white">
      <div className="site-wrap py-16 lg:py-20">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-coral">
              Shikohabad Creative Co.
            </p>
            <p className="display-title mt-4 max-w-xl text-4xl sm:text-5xl">
              Local roots.
              <br />
              Creative reach.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-shine inline-flex min-h-12 items-center rounded-full bg-coral px-6 text-[0.85rem] font-semibold text-white"
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
                width={280}
                height={105}
                className="h-12 w-auto brightness-0 invert sm:h-14"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Creative studio in Shikohabad — social, branding, websites and
              events for brands that want to be noticed.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-coral">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-coral">Studio</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-white">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li className="pt-1 text-white/45">Shikohabad, Uttar Pradesh</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Shikohabad Creative Co.</p>
          <p>Digital growth agency</p>
        </div>
      </div>
    </footer>
  );
}
