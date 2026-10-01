import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "btn-shine group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[0.84rem] font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-white hover:bg-accent-dim hover:shadow-[0_14px_36px_-12px_rgba(255,61,110,0.8)] focus-visible:outline-coral",
  secondary:
    "border border-white/20 bg-white/[0.03] text-white hover:border-white/50 hover:bg-white/8 focus-visible:outline-white",
  outline:
    "border border-white/20 bg-transparent text-foreground hover:border-coral hover:text-coral focus-visible:outline-coral",
  ghost:
    "bg-transparent px-0 text-foreground hover:text-coral focus-visible:outline-coral",
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
        <span
          className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
