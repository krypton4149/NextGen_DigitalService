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

const services = [
  "SaaS / Product platforms",
  "Web Development",
  "Mobile Applications",
  "SEO & Performance",
  "UI/UX Design",
  "Google Business / Local SEO",
  "Content & Social",
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
    const subject = "Proposal request — NextGen";
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;
    window.location.href = buildContactMailto(subject, body);
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200/80 bg-[#f8f9fb] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-300/40 ring-1 ring-slate-200/60">
          <div className="grid lg:grid-cols-5">
            <div className="relative flex flex-col justify-between bg-brand p-10 text-white lg:col-span-2 lg:min-h-[520px]">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Get In Touch</h2>
                <div className="mt-8 flex flex-col items-center text-center sm:mt-9">
                  <div className="relative size-[5.5rem] shrink-0 overflow-hidden rounded-full border-[3px] border-white/90 shadow-lg shadow-slate-900/30 ring-1 ring-white/30 sm:size-28">
                    <Image
                      src="/images/ceo-piyush-yadav.png"
                      alt="Portrait of Piyush Yadav, Founder and CEO"
                      fill
                      className="object-cover object-center"
                      sizes="112px"
                    />
                  </div>
                  <p className="mt-4 text-base font-bold text-white sm:text-lg">
                    Piyush Yadav
                  </p>
                  <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Founder & CEO
                  </p>
                </div>
                <div className="mt-10 space-y-8">
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
                        className="mt-1 block text-lg font-medium hover:underline"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <Mail className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-1 block break-all text-sm font-medium hover:underline sm:text-base"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-blue-50"
              >
                <MessageCircle className="size-5" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
            <div className="bg-white p-10 lg:col-span-3">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Service Interested In
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="service"
                      name="service"
                      defaultValue={services[0]}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                    >
                      {services.map((s) => (
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
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none ring-brand/30 transition focus:border-brand focus:bg-white focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-brand/25 transition hover:bg-blue-700"
                >
                  Send proposal
                </button>
                {sent ? (
                  <p className="text-center text-sm text-muted" role="status">
                    If your mail client did not open, email us directly at
                    {CONTACT_EMAIL}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
