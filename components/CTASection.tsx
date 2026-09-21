import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import { SOCIAL_LINKS } from "@/lib/social";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-10 top-0 size-48" />
        <div className="agency-orb agency-orb-b absolute -right-8 bottom-0 size-40" />
      </div>
      <div className="site-wrap relative py-20 lg:py-24">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-coral">
            Next chapter
          </p>
          <h2 className="display-title mt-5 max-w-3xl text-[clamp(2.3rem,6vw,4.6rem)]">
            Got a brand people
            should already know?
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/70">Let&apos;s make them notice.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact">Start a project</Button>
            <Button href={CONTACT_WHATSAPP_URL} variant="secondary" arrow={false}>
              WhatsApp
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/45">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">Email</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
