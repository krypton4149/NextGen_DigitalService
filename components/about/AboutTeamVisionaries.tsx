import Image from "next/image";

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
    <section className="border-t border-slate-200/80 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Meet the Visionaries
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
          Our diverse team of strategists, designers, and developers are united by
          a single goal: your success.
        </p>
        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          {leaders.map((person, index) => (
            <li
              key={person.name}
              className={
                index === leaders.length - 1
                  ? "sm:col-span-2 sm:flex sm:justify-center lg:col-span-1 lg:block"
                  : undefined
              }
            >
              <article className="text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[13.5rem] overflow-hidden rounded-full border-[5px] border-white bg-slate-200 shadow-lg shadow-slate-900/20 ring-1 ring-slate-200/90 sm:max-w-[15rem] md:max-w-[16.5rem]">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 45vw, 240px"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900 sm:text-xl">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {person.role}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
