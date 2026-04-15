import Link from "next/link";

export function CTASection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#f5f6fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 border-t-[3px] border-t-brand-navy bg-[#eaeaf4] px-8 py-12 text-center shadow-sm sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug">
            Ready to start your next chapter?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Join the 150+ businesses that have trusted NextGen with their digital
            presence.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Let&apos;s build something remarkable together.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-brand-navy/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              Work with us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-brand/35 bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand transition hover:border-brand/50 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
