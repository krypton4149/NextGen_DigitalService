import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-white hover:bg-accent-dim focus-visible:outline-coral",
  secondary:
    "border border-white/30 text-white hover:border-white hover:bg-white/8 focus-visible:outline-white",
  outline:
    "border border-navy/20 bg-transparent text-navy hover:border-coral hover:text-coral focus-visible:outline-coral",
  ghost:
    "bg-transparent px-0 text-navy hover:text-coral focus-visible:outline-coral",
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
        <span
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
