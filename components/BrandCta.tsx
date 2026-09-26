import Link from "next/link";
import { Reveal } from "./Reveal";

type BrandCtaProps = {
  label?: string;
  title: React.ReactNode;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  tone?: "coral" | "navy";
};

export function BrandCta({
  label = "Next",
  title,
  body,
  primary,
  secondary,
  tone = "coral",
}: BrandCtaProps) {
  const coral = tone === "coral";

  return (
    <section
      className={`relative overflow-hidden ${
        coral ? "bg-coral text-white" : "bg-navy text-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={`absolute -right-16 -top-16 size-56 rounded-full blur-2xl ${
            coral ? "bg-white/10" : "bg-coral/25"
          }`}
        />
        <div
          className={`absolute -bottom-20 -left-10 size-64 rounded-full blur-3xl ${
            coral ? "bg-navy/20" : "bg-coral/15"
          }`}
        />
      </div>
      <div className="site-wrap relative py-16 sm:py-20">
        <Reveal>
          {label ? (
            <p
              className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                coral ? "text-white/75" : "text-coral"
              }`}
            >
              {label}
            </p>
          ) : null}
          <h2 className="display-title mt-4 text-[clamp(2rem,4vw,3.4rem)]">
            {title}
          </h2>
          {body ? (
            <p
              className={`mt-5 max-w-md ${
                coral ? "text-white/85" : "text-white/65"
              }`}
            >
              {body}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={primary.href}
              className={`inline-flex min-h-12 items-center px-6 text-[0.78rem] font-semibold uppercase tracking-[0.06em] transition ${
                coral
                  ? "bg-navy text-white hover:bg-soft-navy"
                  : "bg-coral text-white hover:bg-accent-dim"
              }`}
            >
              {primary.label} →
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex min-h-12 items-center border border-white/40 px-6 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
