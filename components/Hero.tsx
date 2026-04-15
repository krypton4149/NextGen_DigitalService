import Image from "next/image";
import { Button } from "./Button";

const heroImage = "/images/hero.png";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[#f8f9ff] via-[#f7f8fb] to-[#f4f6f9] pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <span
              className="inline-block size-1.5 shrink-0 rounded-full bg-brand"
              aria-hidden
            />
            Future ready digital
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:text-[3.35rem]">
            Grow Your{" "}
            <span className="text-brand">Business Online</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4b5563]">
            Complete Digital Solutions for Your Business. We transform your
            physical presence into a digital powerhouse with precision and
            modern aesthetics.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Get started</Button>
            <Button href="#portfolio" variant="secondary">
              View portfolio
            </Button>
          </div>
        </div>
        <div className="relative min-w-0 w-full max-w-md justify-self-end sm:max-w-xl md:max-w-2xl lg:max-w-none lg:justify-self-stretch">
          <div className="group relative aspect-[3/4] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={heroImage}
              alt="Isometric 3D illustration of a laptop with charts on tiered teal platforms, floating data panels, rocket, and spheres"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              priority
              className="object-contain object-center opacity-100 contrast-[1.08] brightness-[1.04] saturate-[1.1] transition-[transform,filter] duration-500 ease-out [transform:translateZ(0)] group-hover:scale-[1.02] group-hover:drop-shadow-[0_18px_40px_rgba(15,60,68,0.12)] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:drop-shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
