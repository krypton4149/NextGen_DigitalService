"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { buildContactMailto } from "@/lib/contact";

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "Meta Ads",
  "Video Editing",
  "SEO Optimization",
  "Graphic Design",
  "Content Writing",
  "Brand Strategy",
  "Mobile App Development",
  "Social Media Management",
  "UI/UX Design",
  "Email Marketing",
  "Other",
] as const;

const fieldClass =
  "mt-2 w-full border-0 border-b border-navy/20 bg-transparent px-0 py-3 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-coral";

type EnquiryFormProps = {
  idPrefix?: string;
  submitLabel?: string;
};

export function EnquiryForm({
  idPrefix = "enquiry",
  submitLabel = "Send message",
}: EnquiryFormProps) {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggleService(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const name = [firstName, lastName].filter(Boolean).join(" ");
    const subject = `Project enquiry from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Services: ${selected.join(", ") || "Not specified"}`,
      "",
      message,
    ].join("\n");
    window.location.href = buildContactMailto(subject, body);
    setSent(true);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-first`}
            className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
          >
            First name
          </label>
          <input
            id={`${idPrefix}-first`}
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-last`}
            className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
          >
            Last name
          </label>
          <input
            id={`${idPrefix}-last`}
            name="lastName"
            autoComplete="family-name"
            placeholder="Family name"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-email`}
          className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
        >
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@studio.com"
          className={fieldClass}
        />
      </div>

      <fieldset>
        <legend className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
          What do you need?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((service) => {
            const on = selected.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`rounded-full border px-3.5 py-1.5 text-[0.78rem] transition ${
                  on
                    ? "border-navy bg-navy text-white"
                    : "border-border text-muted hover:border-navy/40 hover:text-navy"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="text-[0.62rem] uppercase tracking-[0.2em] text-muted"
        >
          The brief
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          placeholder="What should people notice?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-2.5 text-[0.9rem] font-medium text-white transition hover:bg-coral sm:w-auto"
      >
        {sent ? "Opening mail…" : submitLabel}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
