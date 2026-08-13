import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const leaders = [
  {
    name: "Piyush Yadav",
    role: "Founder & CEO",
    image: "/images/ceo-piyush-yadav.png",
    alt: "Portrait of Piyush Yadav, Founder and CEO",
  },
  {
    name: "Arpan",
    role: "CTO",
    image: "/images/about-cto.png",
    alt: "Portrait of Arpan, Chief Technology Officer",
  },
  {
    name: "Shivam Yadav",
    role: "Chief Strategy Partner",
    image: "/images/shivam-yadav.png",
    alt: "Portrait of Shivam Yadav, Chief Strategy Partner",
  },
] as const;

export function AboutTeamVisionaries() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            The people
            <br />
            <span className="text-muted">behind the work.</span>
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person, index) => (
            <Reveal key={person.name} as="li" delayMs={index * 80}>
              <article className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[14rem] overflow-hidden rounded-full border border-border bg-surface sm:max-w-[15rem]">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    className="object-cover object-center"
                    sizes="240px"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  {person.role}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
