import Image from "next/image";
import { Button } from "./Button";
import { RotatingTypewriter } from "./RotatingTypewriter";
import { TypewriterHeadline } from "./TypewriterHeadline";

export function Hero() {
  return (
    <section id="home" className="grain hero-grid relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute -right-16 bottom-10 size-[22rem] rounded-full bg-primary/10 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:grid-cols-12 md:items-center md:gap-8 md:px-8 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="relative z-10 md:col-span-6">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Local Roots. Creative Reach.
          </p>
          <TypewriterHeadline />
          <p className="mt-6 max-w-md font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            We help local brands get{" "}
            <span className="text-accent">noticed & grow.</span>
          </p>
          <p className="mt-4 max-w-md text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-muted">
            <span className="sr-only">
              Social media, branding, websites, events, digital marketing, video
              editing and Meta ads designed to make your business stand out,
              connect and grow.
            </span>
            <span aria-hidden>
              <RotatingTypewriter
                words={[
                  "Social media",
                  "Branding",
                  "Websites",
                  "Events",
                  "Digital Marketing",
                  "Video editing",
                  "Meta ads",
                ]}
                className="whitespace-nowrap font-medium text-foreground"
              />{" "}
              designed to make your business stand out, connect and grow.
            </span>
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/contact" className="w-full sm:w-auto">
              Start a project
            </Button>
            <Button href="/work" variant="secondary" arrow={false} className="w-full sm:w-auto">
              View our work
            </Button>
          </div>
        </div>

        <div className="relative z-10 md:col-span-6">
          <div className="relative mx-auto max-w-xl md:ml-auto md:max-w-none">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/Hero.png"
                alt="Shikohabad Creative Co. — social media, websites, branding and events"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 48vw"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-3 text-center font-display text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs md:text-left">
              Based in Shikohabad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
