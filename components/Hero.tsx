import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="home" className="grain relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute -right-16 bottom-10 size-[22rem] rounded-full bg-primary/10 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="relative z-10 lg:col-span-6">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Local Roots. Creative Reach.
          </p>
          <h1 className="font-display text-[clamp(2.6rem,10vw,6.4rem)] font-bold leading-[0.88] tracking-[-0.045em]">
            <span className="block text-foreground">
              <span className="[font-family:var(--font-hindi)]">शिको</span>
              HABAD
            </span>
            <span className="block text-accent">CREATIVE</span>
            <span className="block text-foreground">CO.</span>
          </h1>
          <p className="mt-7 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          We help local brands get {" "}
            <span className="text-accent">noticed & grow.</span>
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Social media, branding, websites and events designed to make your
            business stand out, connect and grow.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact">Start a project</Button>
            <Button href="/#work" variant="secondary" arrow={false}>
              View our work
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-xl lg:ml-auto lg:max-w-none">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/Hero_Section.png"
                alt="Shikohabad Creative Co. studio illustration — designing ideas, creating impact"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-2 text-center font-display text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs lg:text-left">
              Based in Shikohabad
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border overflow-hidden py-3 sm:mt-16">
        <div className="flex w-max marquee-track">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex items-center gap-6 px-4 font-display text-sm font-semibold uppercase tracking-[0.28em] text-muted"
            >
              {["Social Media", "Branding", "Websites", "Events", "Campaigns"].map(
                (item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-6">
                    <span>{item}</span>
                    <span className="text-accent" aria-hidden>
                      ✦
                    </span>
                  </span>
                ),
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
