import Image from "next/image";
import { Reveal } from "./Reveal";

export function LocalIdentitySection() {
  return (
    <section className="relative border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Where we create from
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.9] tracking-tight sm:text-6xl">
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
          <div className="relative mx-auto aspect-[1207/1303] w-full max-w-lg lg:ml-auto lg:max-w-none">
            <Image
              src="/images/City.png"
              alt="Shikohabad — local streets, local understanding, digital reach"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 48vw"
              priority={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
