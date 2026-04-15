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

const subjects = [
  "Digital Transformation",
  "Web Development",
  "Mobile Applications",
  "SEO & Performance",
  "UI/UX Design",
  "Google Business / Local SEO",
  "Content & Social",
  "Other",
] as const;

const hqLocations = [
  {
    city: "Agra",
    title: "Main HQ",
    detail: "Digital Park",
  },
  {
    city: "Noida",
    title: "NCR office",
    detail: "Noida region — by appointment",
  },
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
    <div className="bg-gradient-to-b from-slate-50 via-[#f7f8fb] to-slate-50 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-100/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              Contact us
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
              Let&apos;s build your{" "}
              <span className="text-brand">digital future.</span>
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted lg:max-w-md lg:text-right lg:text-lg">
            Have a project in mind or just want to say hello? Our team is ready to
            architect your next big digital move.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-lg shadow-slate-200/40 sm:p-10">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Send a Message
              </h2>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Subject
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      defaultValue={subjects[0]}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                      ▾
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-brand-navy px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-brand-navy/25 transition hover:brightness-110"
                >
                  Transmit request
                </button>
                {sent ? (
                  <p className="text-center text-sm text-muted" role="status">
                    If your mail client did not open, email us directly at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                ) : null}
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl bg-brand p-8 text-white shadow-lg shadow-brand/25 sm:p-9">
              <h2 className="text-lg font-bold sm:text-xl">Direct Line</h2>
              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                      Phone
                    </p>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="mt-1 block text-lg font-semibold hover:underline"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 block break-all text-sm font-semibold hover:underline sm:text-base"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-blue-50"
              >
                <MessageCircle className="size-5" aria-hidden />
                WhatsApp support
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-100/90 p-8 sm:p-9">
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Operating Hours
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-muted">
                <li className="flex justify-between gap-4 border-b border-slate-200/80 pb-3">
                  <span className="font-medium text-slate-800">Monday — Friday</span>
                  <span>09:00 — 18:00</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-slate-200/80 pb-3">
                  <span className="font-medium text-slate-800">Saturday</span>
                  <span>10:00 — 14:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="font-medium text-slate-800">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-100 via-sky-50/80 to-brand/10 p-10 sm:p-14 lg:mt-20">
          <div className="relative z-[1] max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Headquarters
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
              Agra & Noida
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              We operate from both cities across Uttar Pradesh and the NCR. Our team
              is remote-first — schedule a call or meet in person by appointment at
              either location.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {hqLocations.map((loc) => (
                <li
                  key={loc.city}
                  className="rounded-xl border border-slate-200/90 bg-white/70 px-5 py-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    {loc.city}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    {loc.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{loc.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="pointer-events-none absolute -bottom-6 -right-6 flex size-40 items-center justify-center rounded-full bg-brand/15 sm:size-48 lg:size-56"
            aria-hidden
          >
            <div className="flex size-24 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 sm:size-28">
              <svg
                viewBox="0 0 24 24"
                className="size-12 sm:size-14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
