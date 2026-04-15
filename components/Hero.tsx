import Image from "next/image";
import { Button } from "./Button";

const heroVisual = "/images/hero-workspace.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[#f8f9ff] via-[#f7f8fb] to-[#f4f6f9] pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 xl:gap-16">
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

        <div className="relative mx-auto w-full max-w-md justify-self-center [perspective:1400px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(0,82,204,0.1),transparent_72%)] blur-2xl"
            aria-hidden
          />
          <div
            className="group relative isolate overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_56px_-24px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/90 sm:rounded-[2rem] [transform-style:preserve-3d] [transform:translateZ(0)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:shadow-[0_40px_88px_-32px_rgba(15,23,42,0.32)] hover:[transform:translateY(-0.5rem)_rotateX(5deg)_rotateY(-7deg)_scale(1.02)_translateZ(24px)] motion-reduce:transition-none motion-reduce:hover:shadow-[0_22px_56px_-24px_rgba(15,23,42,0.18)] motion-reduce:hover:[transform:translateZ(0)]"
            style={{ transformOrigin: "50% 85% 0" }}
          >
            <div className="relative aspect-[3/2] w-full max-w-[min(100%,24rem)] overflow-hidden rounded-[inherit] mx-auto sm:max-w-none">
              <Image
                src={heroVisual}
                alt="Desk with laptop, phone, and devices showing apps — creative digital workspace"
                fill
                sizes="(max-width: 1024px) 90vw, 46vw"
                priority
                className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
