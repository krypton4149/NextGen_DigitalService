"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { buildContactMailto } from "@/lib/contact";

const NEEDS = [
  "Social Media",
  "Branding",
  "Websites",
  "Digital Presence",
  "Paid Marketing",
  "Events & Campaigns",
  "Something else",
] as const;

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
] as const;

type EnquiryFormProps = {
  idPrefix?: string;
  submitLabel?: string;
};

export function EnquiryForm({
  idPrefix = "enquiry",
  submitLabel = "Send project enquiry",
}: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const business = String(data.get("business") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const need = String(data.get("need") ?? "");
    const budget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Project enquiry from ${name || business || "website"}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Need: ${need}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");
    window.location.href = buildContactMailto(subject, body);
    setSent(true);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${idPrefix}-name`} name="name" label="Name" required autoComplete="name" />
        <Field
          id={`${idPrefix}-business`}
          name="business"
          label="Business name"
          autoComplete="organization"
        />
        <Field
          id={`${idPrefix}-phone`}
          name="phone"
          label="Phone / WhatsApp"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          id={`${idPrefix}-email`}
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-need`}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
          >
            What do you need help with?
          </label>
          <select
            id={`${idPrefix}-need`}
            name="need"
            required
            defaultValue=""
            className="mt-2 w-full appearance-none border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
          >
            <option value="" disabled>
              Select a service
            </option>
            {NEEDS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-budget`}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
          >
            Budget range
          </label>
          <select
            id={`${idPrefix}-budget`}
            name="budget"
            required
            defaultValue=""
            className="mt-2 w-full appearance-none border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGETS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink transition hover:bg-accent"
      >
        {sent ? "Opening mail…" : submitLabel}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent"
      />
    </div>
  );
}
