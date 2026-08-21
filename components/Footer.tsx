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
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" prefetch>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo.png"
                alt="Shikohabad Creative Co."
                width={240}
                height={96}
                className="h-16 w-auto sm:h-20"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Creative studio in Shikohabad — social media, branding, websites
              and events for brands that want to be noticed.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-foreground transition hover:text-accent"
            >
              Start a project ↗
            </Link>
          </div>

          {/* Pages */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all transition hover:text-accent"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="transition hover:text-accent"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-5 pt-1">
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                >
                  WhatsApp
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted">
              Shikohabad, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Shikohabad Creative Co. All rights
            reserved.
          </p>
          <p className="tracking-[0.14em] uppercase">Based in Shikohabad</p>
        </div>
      </div>
    </footer>
  );
}
