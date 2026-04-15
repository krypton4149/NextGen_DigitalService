import type { Metadata } from "next";
import Image from "next/image";
import { AboutJourneyGrid } from "@/components/about/AboutJourneyGrid";
import { AboutTeamVisionaries } from "@/components/about/AboutTeamVisionaries";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our mission at NextGen Digital Service: empowering small business evolution through websites, brand, SEO, and apps.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50/95 via-[#f7f8fb] to-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              Our mission
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Empowering{" "}
              <span className="text-brand">Small Business</span> Evolution.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We bridge the gap between complex technology and small business
              success. At NextGen, we don&apos;t just build websites; we architect
              digital growth engines.
            </p>
          </div>
          <div className="relative mx-auto flex w-full max-w-sm flex-col items-center lg:ml-auto lg:mr-0 lg:max-w-md">
            <div className="relative aspect-square w-full overflow-hidden rounded-full border-[5px] border-white bg-slate-200 shadow-xl shadow-slate-900/20 ring-1 ring-slate-200/90">
              <Image
                src="/images/ceo-piyush-yadav.png"
                alt="Piyush Yadav, Founder and CEO of NextGen Digital Service"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 384px, 448px"
                priority
              />
            </div>
            <div className="mt-6 w-full max-w-[15rem] rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-100/95 p-5 text-center shadow-lg shadow-slate-900/10 sm:p-6">
              <p className="text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                5+ Years
              </p>
              <p className="mt-1.5 text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.16em] text-slate-600 sm:text-xs">
                Of proven digital excellence
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutJourneyGrid />
      <AboutTeamVisionaries />
      <CTASection />
    </main>
  );
}
