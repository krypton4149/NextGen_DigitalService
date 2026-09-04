"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
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
  "mt-2 w-full rounded-xl bg-surface px-4 py-3.5 text-base text-foreground outline-none ring-1 ring-transparent transition placeholder:text-muted/70 focus:ring-coral";

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
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-first`}
            className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted"
          >
            Who is this from?
          </label>
          <input
            id={`${idPrefix}-first`}
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="My name is..."
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-last`}
            className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted"
          >
            Your family name
          </label>
          <input
            id={`${idPrefix}-last`}
            name="lastName"
            autoComplete="family-name"
            placeholder="My family name is..."
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-email`}
          className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Where can we reach you?
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="My email is..."
          className={fieldClass}
        />
      </div>

      <fieldset>
        <legend className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
          What services do you need?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((service) => {
            const on = selected.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`rounded-full border px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition ${
                  on
                    ? "border-coral bg-coral text-white"
                    : "border-border bg-white text-muted hover:border-coral hover:text-navy"
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
          className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Tell us your story
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          placeholder="Here's what I have in mind..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-coral sm:w-auto"
      >
        {sent ? "Opening mail…" : submitLabel}
        <Send className="size-3.5" strokeWidth={2.25} aria-hidden />
      </button>
    </form>
  );
}
