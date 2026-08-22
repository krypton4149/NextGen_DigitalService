import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-coral focus-visible:outline-coral",
  secondary:
    "border border-foreground/25 bg-transparent text-foreground hover:border-accent hover:text-accent focus-visible:outline-accent",
  ghost:
    "bg-transparent text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline-accent",
};

type ButtonProps = {
  variant?: Variant;
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function Button({
  variant = "primary",
  href,
  children,
  className,
  arrow = true,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      prefetch
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...props}
    >
      <span>{children}</span>
      {arrow ? (
        <span className="relative inline-grid size-[1em] place-items-center" aria-hidden>
          <span className="col-start-1 row-start-1 transition duration-300 group-hover:opacity-0">
            →
          </span>
          <span className="col-start-1 row-start-1 opacity-0 transition duration-300 group-hover:opacity-100">
            ↗
          </span>
        </span>
      ) : null}
    </Link>
  );
}
