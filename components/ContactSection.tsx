"use client";

import { Flag, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";

const details = [
  {
    label: "Email us",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    label: "Call us",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: CONTACT_WHATSAPP_URL,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "Our location",
    value: "Shikohabad, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Shikohabad,+Uttar+Pradesh",
    Icon: MapPin,
    external: true,
  },
] as const;

const socials = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: YoutubeIcon },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-border bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 md:grid-cols-12 md:gap-10 lg:gap-16 lg:px-8">
        <Reveal className="md:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <Flag className="size-3 text-coral" strokeWidth={2.2} aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Contact Us
            </span>
          </p>
          <h2 className="mt-6 font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Ready To
            <br />
            <span className="text-accent">Start A Project?</span>
          </h2>
          <span className="mt-5 block h-1 w-14 bg-navy" aria-hidden />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Have a vision? We have the tools. Let&apos;s collaborate to build
            something exceptional.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface text-coral transition group-hover:bg-coral group-hover:text-white">
                    <item.Icon className="size-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold text-navy group-hover:text-coral">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Follow our journey
          </p>
          <div className="mt-3 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-xl bg-surface text-navy transition hover:bg-coral hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={80} className="md:col-span-7">
          <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_24px_60px_-28px_rgba(11,19,43,0.22)] sm:p-8 lg:p-10">
            <EnquiryForm idPrefix="home" submitLabel="Send message" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
