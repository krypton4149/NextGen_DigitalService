import Link from "next/link";

export function ServicesPricingTeaser() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-slate-200/80 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Pricing tailored to your scope
        </h2>
        <p className="mt-4 text-muted sm:text-lg">
          We scope every engagement after a short discovery call—no generic price
          lists, just a clear proposal aligned with your goals.
        </p>
        <Link
          href="/pricing"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-brand/30 transition hover:brightness-110"
        >
          View plans
        </Link>
      </div>
    </section>
  );
}
