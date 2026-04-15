import Link from "next/link";

export function ServicesBottomCta() {
  return (
    <section className="border-t border-slate-200/80 bg-[#f5f6fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 border-t-[3px] border-t-brand-navy bg-[#ece8f5] px-8 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to scale your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Contact us today for a free digital audit of your current online presence.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-brand-navy/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              Consult now
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-navy bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
