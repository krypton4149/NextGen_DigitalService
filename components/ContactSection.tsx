"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";

export function ContactSection() {
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
          <div className="rounded-3xl border border-border bg-background p-8 lg:col-span-4 sm:p-10">
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

          <div className="rounded-3xl border border-border bg-background p-8 lg:col-span-8 sm:p-10">
            <EnquiryForm idPrefix="home" submitLabel="Send project enquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}
