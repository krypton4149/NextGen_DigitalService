import Link from "next/link";

export function ServicesBottomCta() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border border-t-[3px] border-t-coral bg-surface-elevated px-8 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to scale your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Contact us today for a free digital audit of your current online presence.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-coral/30 transition hover:bg-accent-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Consult now
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition hover:border-coral hover:text-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
