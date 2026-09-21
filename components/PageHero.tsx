import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";

type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  body: string;
  cta?: { href: string; label: string };
};

export function PageHero({ label, title, body, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-16 top-0 size-40" />
        <div className="agency-orb agency-orb-b absolute -right-10 bottom-0 size-32" />
      </div>
      <div className="site-wrap relative py-8 sm:py-10 lg:py-12">
        <SectionLabel className="text-coral">{label}</SectionLabel>
        <h1 className="display-title mt-3 max-w-3xl text-[clamp(1.85rem,4.2vw,3.15rem)]">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
          {body}
        </p>
        {cta ? (
          <div className="mt-5">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
