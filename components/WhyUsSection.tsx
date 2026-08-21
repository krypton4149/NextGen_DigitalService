import Image from "next/image";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Local understanding",
    body: "We understand the people, businesses and culture around us.",
    image: "/images/local-shikohabad.jpg",
  },
  {
    title: "Creative thinking",
    body: "We don't believe in copy-paste marketing.",
    image: "/images/work-content.jpg",
  },
  {
    title: "Full-service",
    body: "From idea to execution, we handle the creative journey.",
    image: "/images/hero-studio.jpg",
  },
  {
    title: "Real-world execution",
    body: "Digital campaigns, content, promotions and physical events.",
    image: "/images/work-events.jpg",
  },
] as const;

export function WhyUsSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Why us
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Why Shikohabad
            <br />
            Creative Co.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <Reveal key={point.title} as="li" delayMs={index * 70}>
              <article className="group h-full">
                <div className="img-frame aspect-[4/5]">
                  <Image
                    src={point.image}
                    alt={`${point.title} at Shikohabad Creative Co.`}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent" />
                  <span className="absolute left-4 top-4 z-[3] font-display text-3xl font-extrabold text-white/70">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-[3] p-5">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {point.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
