import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="grain relative overflow-hidden border-b border-border bg-background py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-20 top-10 size-[28rem] rounded-full bg-accent/10 blur-[110px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-5xl font-display text-[clamp(2.5rem,10vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            GOT A BRAND
            <br />
            PEOPLE SHOULD
            <br />
            <span className="text-accent">KNOW?</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-muted">
            Let&apos;s make them notice.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Start a project</Button>
            <Button href={CONTACT_WHATSAPP_URL} variant="secondary" arrow={false}>
              WhatsApp
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition hover:text-accent"
            >
              Email
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
