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
import { Reveal } from "./Reveal";

const services = [
  "Social Media Management",
  "Branding",
  "Website Creation",
  "Event Management",
  "Other",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = "Proposal request — Shikohabad Creative Co.";
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;
    window.location.href = buildContactMailto(subject, body);
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-border bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
                Contact
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Tell us what
                <br />
                you&apos;re building.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted lg:col-span-5 lg:text-right">
              Prefer a quick chat? Call, WhatsApp or email — we reply fast.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="border border-border bg-background p-8 lg:col-span-4 sm:p-10">
            <div className="space-y-8">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="group flex gap-4 transition hover:text-accent"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-border text-accent">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm">{CONTACT_PHONE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex gap-4 transition hover:text-accent"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-border text-accent">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm">{CONTACT_EMAIL}</span>
                </span>
              </a>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 transition hover:text-accent"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-border text-accent">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm">Chat with us</span>
                </span>
              </a>
            </div>
          </div>

          <div className="border border-border bg-background p-8 lg:col-span-8 sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="home-name"
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="home-email"
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="home-service"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  Service
                </label>
                <select
                  id="home-service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full appearance-none border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="home-message"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="home-message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink transition hover:bg-white"
              >
                {sent ? "Opening mail…" : "Send message"}
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
