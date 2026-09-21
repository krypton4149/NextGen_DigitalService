import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.82rem] font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "btn-shine bg-coral text-white shadow-[0_12px_30px_-12px_rgba(255,90,60,0.8)] hover:bg-accent-dim focus-visible:outline-coral",
  secondary:
    "border border-white/25 bg-white/8 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/12 focus-visible:outline-white",
  outline:
    "border border-navy/15 bg-white text-navy hover:border-coral hover:text-coral focus-visible:outline-coral",
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
      <span className="relative z-[1]">{children}</span>
      {arrow ? (
        <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      ) : null}
    </Link>
  );
}
