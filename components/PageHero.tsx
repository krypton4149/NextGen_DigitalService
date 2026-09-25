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
    <section className="border-b border-border bg-background">
      <div className="site-wrap py-14 sm:py-16 lg:py-20">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="display-title mt-6 max-w-3xl text-[clamp(2.4rem,5.5vw,4.2rem)] text-navy">
          {title}
        </h1>
        <p className="mt-5 max-w-lg text-[1rem] leading-[1.7] text-muted">
          {body}
        </p>
        {cta ? (
          <div className="mt-8">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
