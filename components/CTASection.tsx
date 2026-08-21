import Image from "next/image";
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-abstract.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/78" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/70">
            Next chapter
          </p>
          <h2 className="mt-4 max-w-5xl font-display text-[clamp(2.5rem,10vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.04em] text-white">
            GOT A BRAND
            <br />
            PEOPLE SHOULD
            <br />
            KNOW?
          </h2>
          <p className="mt-8 max-w-md font-display text-xl text-white/85">
            Let&apos;s make them notice.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" className="bg-white text-primary hover:bg-white/90">
              Start a project
            </Button>
            <Button
              href={CONTACT_WHATSAPP_URL}
              variant="secondary"
              arrow={false}
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              WhatsApp
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-white">
              Email
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
