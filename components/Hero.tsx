import Image from "next/image";
import { AnimatedWord } from "./AnimatedWord";
import { Button } from "./Button";
import { CountUp } from "./CountUp";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-16 top-10 size-[22rem] sm:size-[28rem]" />
        <div className="agency-orb agency-orb-b absolute -right-10 bottom-0 size-[18rem] sm:size-[24rem]" />
      </div>

      <div className="site-wrap relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="size-1.5 animate-pulse rounded-full bg-coral" />
            Digital growth agency
          </p>
          <h1 className="display-title mt-6 text-[clamp(2.7rem,7vw,5.4rem)]">
            We grow brands people{" "}
            <AnimatedWord words={["notice.", "trust.", "remember.", "choose."]} />
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/70">
            Social, branding, websites, ads and events from Shikohabad — built
            to get local businesses seen, and keep them growing.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="secondary" arrow={false}>
              See the work
            </Button>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="font-display text-3xl font-bold">
                <CountUp end={5} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">Years</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">
                <CountUp end={150} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">Brands</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">
                <CountUp end={14} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">Services</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:ml-auto lg:max-w-none">
            <div className="float-slow relative h-full">
              <Image
                src="/images/Hero.png"
                alt="Shikohabad Creative Co. — social media, websites, branding and events"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
