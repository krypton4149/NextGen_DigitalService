"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
  buildContactMailto,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const subjects = [
  "Social Media Management",
  "Branding",
  "Website Creation",
  "Event Management",
  "Other",
] as const;

const fieldClass =
  "mt-2 w-full border-0 border-b border-navy/20 bg-transparent px-0 py-3 text-base outline-none transition focus:border-coral";

export function ContactPageView() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const mailSubject = `Message from ${name || "website"} — ${subject}`;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;
    window.location.href = buildContactMailto(mailSubject, body);
    setSent(true);
  }

  return (
    <div>
      <PageHero
        label="Contact"
        title={
          <>
            Let&apos;s make your brand impossible to ignore.
          </>
        }
        body="Tell us about the project — social, branding, website or event. Based in Shikohabad. Creating beyond it."
      />

      <section className="py-12 sm:py-16">
        <div className="site-wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-2xl tracking-tight">Send a brief</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                  >
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                >
                  Service
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue={subjects[0]}
                  className={`${fieldClass} appearance-none`}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you're building..."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="min-h-11 rounded-full bg-navy px-6 py-2.5 text-[0.9rem] font-medium text-white transition hover:bg-coral"
              >
                {sent ? "Opening mail…" : "Send message"}
              </button>

              {sent ? (
                <p className="text-sm text-muted" role="status">
                  If your mail client did not open, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-coral hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal delayMs={60}>
              <div className="border border-border p-7">
                <h2 className="font-display text-xl tracking-tight">Direct lines</h2>
                <ul className="mt-6 divide-y divide-border border-y border-border">
                  <li className="py-4">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group flex gap-3 hover:text-coral"
                    >
                      <Mail className="mt-0.5 size-4 text-coral" aria-hidden />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                          Email
                        </span>
                        <span className="mt-1 block break-all text-sm">{CONTACT_EMAIL}</span>
                      </span>
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="group flex gap-3 hover:text-coral"
                    >
                      <Phone className="mt-0.5 size-4 text-coral" aria-hidden />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                          Phone
                        </span>
                        <span className="mt-1 block text-sm">{CONTACT_PHONE_DISPLAY}</span>
                      </span>
                    </a>
                  </li>
                  <li className="py-4">
                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-3 hover:text-coral"
                    >
                      <MessageCircle className="mt-0.5 size-4 text-coral" aria-hidden />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                          WhatsApp
                        </span>
                        <span className="mt-1 block text-sm">Chat with us</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-[0.9rem] font-medium text-white transition hover:bg-coral"
                >
                  Start on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="border border-border">
                <div className="relative aspect-[3/2] w-full bg-surface">
                  <Image
                    src="/images/Studio.png"
                    alt="Shikohabad Creative Co. studio"
                    fill
                    className="object-contain object-center p-3"
                    sizes="(max-width: 1024px) 100vw, 32vw"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl tracking-tight">Studio</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Shikohabad, Uttar Pradesh, India
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Meetings by appointment. Remote collaborations welcome.
                  </p>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-[0.65rem] uppercase tracking-[0.2em] text-navy transition hover:text-coral"
                  >
                    Instagram ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
