import Image from "next/image";
import { Reveal } from "./Reveal";

export function LocalIdentitySection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Where we create from
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            FROM SHIKOHABAD
            <br />
            <span className="text-accent">TO EVERYWHERE.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Based in Shikohabad. Creating beyond it. We understand local
            businesses, local audiences — and build work that travels digitally.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <div className="relative aspect-[5/4] overflow-hidden border border-border">
            <Image
              src="/images/local-shikohabad.jpg"
              alt="Local streets near Shikohabad, Uttar Pradesh — where we create from"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-background/35" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold tracking-tight">
                Shikohabad, Uttar Pradesh
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                Local understanding · Digital reach
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
