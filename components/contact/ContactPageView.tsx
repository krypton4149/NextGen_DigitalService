"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
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
import { Reveal } from "@/components/Reveal";

const subjects = [
  "Social Media Management",
  "Branding",
  "Website Creation",
  "Event Management",
  "Other",
] as const;

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
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Contact · Shikohabad Creative Co.
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s make your brand
              <br />
              <span className="text-accent">impossible to ignore.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Tell us about your project — social, branding, website or event.
              Based in Shikohabad. Creating beyond it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Send a message
            </h2>
            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  Service
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue={subjects[0]}
                  className="mt-2 w-full appearance-none border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
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
                  className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you're building..."
                  className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="bg-accent px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-ink transition hover:bg-white"
              >
                {sent ? "Opening mail…" : "Send message"}
              </button>

              {sent ? (
                <p className="text-sm text-muted" role="status">
                  If your mail client did not open, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <Reveal delayMs={60}>
              <div className="border border-border bg-surface p-6 sm:p-7">
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  Direct contact
                </h2>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group flex gap-3 transition hover:text-accent"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center border border-border text-accent">
                        <Mail className="size-4" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          Email
                        </span>
                        <span className="mt-1 block break-all text-sm">
                          {CONTACT_EMAIL}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="group flex gap-3 transition hover:text-accent"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center border border-border text-accent">
                        <Phone className="size-4" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          Phone
                        </span>
                        <span className="mt-1 block text-sm">
                          {CONTACT_PHONE_DISPLAY}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-3 transition hover:text-accent"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center border border-border text-accent">
                        <MessageCircle className="size-4" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">
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
                  className="mt-7 flex w-full items-center justify-center gap-2 bg-accent px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-ink transition hover:bg-white"
                >
                  Start on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="border border-border bg-surface p-6 sm:p-7">
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  Studio
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Shikohabad, Uttar Pradesh, India
                </p>
                <p className="mt-3 text-sm text-muted">
                  Meetings by appointment. Remote collaborations welcome.
                </p>
                <p className="mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  Local Roots. Creative Reach.
                </p>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground transition hover:text-accent"
                >
                  Instagram ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
