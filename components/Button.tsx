import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-md shadow-brand/30 hover:brightness-110 focus-visible:outline-brand",
  secondary:
    "border border-slate-200 bg-white text-brand hover:border-brand/40 hover:bg-slate-50 focus-visible:outline-brand",
};

type ButtonProps = {
  variant?: Variant;
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      prefetch
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
