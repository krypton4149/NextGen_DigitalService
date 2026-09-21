import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function LocalIdentitySection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="site-wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <SectionLabel>Origin</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2.1rem,5vw,4rem)] text-navy">
            From Shikohabad
            <span className="text-coral"> to everywhere.</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted">
            We understand local businesses and local audiences — then build work
            that travels digitally, without losing the place it came from.
          </p>
        </Reveal>
        <Reveal delayMs={120} className="lg:col-span-5">
          <div className="relative mx-auto aspect-[1207/1303] w-full max-w-[18rem] lg:ml-auto lg:max-w-[22rem]">
            <Image
              src="/images/City.png"
              alt="Shikohabad — local understanding, digital reach"
              fill
              className="object-contain object-center"
              sizes="352px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
