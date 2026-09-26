import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";

type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  body: string;
  cta?: { href: string; label: string };
  tone?: "light" | "navy";
};

export function PageHero({
  label,
  title,
  body,
  cta,
  tone = "light",
}: PageHeroProps) {
  const navy = tone === "navy";

  return (
    <section
      className={`relative overflow-hidden border-b ${
        navy
          ? "border-transparent bg-navy text-white"
          : "border-border bg-background"
      }`}
    >
      {navy ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="agency-orb agency-orb-a absolute -left-16 top-0 size-[18rem] opacity-70 sm:size-[24rem]" />
          <div className="agency-orb agency-orb-b absolute -right-12 bottom-0 size-[16rem] opacity-60 sm:size-[22rem]" />
          <div className="hero-grid absolute inset-0 opacity-[0.06]" />
        </div>
      ) : null}
      <div className="site-wrap relative py-14 sm:py-16 lg:py-20">
        <div className="hero-enter" style={{ animationDelay: "60ms" }}>
          <SectionLabel className={navy ? "text-coral" : undefined}>
            {label}
          </SectionLabel>
        </div>
        <h1
          className={`hero-enter display-title mt-6 max-w-3xl text-[clamp(2.4rem,5.5vw,4.2rem)] ${
            navy ? "text-white" : "text-navy"
          }`}
          style={{ animationDelay: "160ms" }}
        >
          {title}
        </h1>
        <p
          className={`hero-enter mt-5 max-w-lg text-[1rem] leading-[1.7] ${
            navy ? "text-white/65" : "text-muted"
          }`}
          style={{ animationDelay: "280ms" }}
        >
          {body}
        </p>
        {cta ? (
          <div className="hero-enter mt-8" style={{ animationDelay: "400ms" }}>
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
