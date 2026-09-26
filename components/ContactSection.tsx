"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
import { SectionLabel } from "./SectionLabel";

const details = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Start a chat",
    href: CONTACT_WHATSAPP_URL,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "Studio",
    value: "Shikohabad, Uttar Pradesh",
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
    <section id="contact" className="scroll-mt-24 bg-background py-20 lg:py-24">
      <div className="color-band mb-0" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="site-wrap grid items-start gap-14 pt-16 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionLabel>Enquire</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-navy">
            Tell us what
            <br />
            you&apos;re <span className="text-coral">building.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Have a vision? Send a brief. We&apos;ll come back with a clear next
            step.
          </p>

          <ul className="mt-10 border-t border-border">
            {details.map((item) => (
              <li key={item.label} className="border-b border-border">
                <a
                  href={item.href}
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 py-4"
                >
                  <item.Icon
                    className="mt-0.5 size-4 text-coral transition group-hover:scale-110"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                  <span>
                    <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-navy transition group-hover:text-coral">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-navy transition hover:scale-110 hover:text-coral"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={90} className="lg:col-span-7">
          <div className="border border-border bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,19,43,0.35)] sm:p-8 lg:p-10">
            <EnquiryForm idPrefix="home" submitLabel="Send the brief" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
