import { AtSign, Award } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/contact";

const INSTAGRAM_URL = "https://www.instagram.com/nextgen_digital._/";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const solutions = [
  "Web Development",
  "Mobile Applications",
  "SEO & Performance",
  "UI/UX Design",
] as const;

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/#about", label: "Why Choose Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 py-12 sm:py-16">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="min-w-0">
          <p className="text-xl font-bold">
            <span className="text-brand-navy">Next</span>
            <span className="text-brand">Gen</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Elevating small businesses through strategic digital architecture and
            design-led growth.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-brand">
            <a
              href="#"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand transition hover:border-brand/40"
              aria-label="Awards"
            >
              <Award className="size-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow NextGen on Instagram @nextgen_digital._ (opens in a new tab)"
              className="inline-flex min-h-10 items-center gap-2.5 rounded-full border border-sky-200/90 bg-sky-50 px-4 py-2 text-sm font-bold text-brand shadow-sm transition hover:border-sky-300 hover:bg-sky-100/80"
            >
              <InstagramGlyph className="size-5 shrink-0" />
              <span>@nextgen_digital._</span>
            </a>
            <a
              href="#"
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand transition hover:border-brand/40"
              aria-label="Social"
            >
              <AtSign className="size-5" />
            </a>
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-900">Solutions</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {solutions.map((item) => (
              <li key={item}>
                <Link
                  href="/services"
                  className="transition hover:text-brand"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-900">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition hover:text-brand"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href="tel:+918218058950" className="transition hover:text-brand">
                +91 8218058950
              </a>
            </li>
            <li>Available 24/7 for support.</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-slate-200/90 px-4 pt-8 text-center text-sm text-muted sm:px-6 lg:px-8">
        © {new Date().getFullYear()} NextGen. All rights reserved.
      </div>
    </footer>
  );
}
