"use client";

import { Briefcase, House, Search, Star, X, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const QUICK_NAV = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: Star },
  { href: "/work", label: "Work", Icon: Briefcase },
  { href: "/services", label: "Services", Icon: Zap },
] as const;

const POPULAR = [
  { href: "/services", label: "Social media" },
  { href: "/services", label: "Branding" },
  { href: "/services", label: "Websites" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "Content" },
] as const;

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, [open]);

  const q = query.trim().toLowerCase();

  const nav = useMemo(
    () =>
      q ? QUICK_NAV.filter((item) => item.label.toLowerCase().includes(q)) : QUICK_NAV,
    [q],
  );

  const services = useMemo(
    () =>
      q ? POPULAR.filter((item) => item.label.toLowerCase().includes(q)) : POPULAR,
    [q],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <button
        type="button"
        className="absolute inset-0 bg-navy/55 backdrop-blur-[2px]"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-[min(18vh,8rem)] w-[min(92vw,34rem)] -translate-x-1/2 rounded-3xl bg-white p-5 shadow-[0_30px_80px_-24px_rgba(11,19,43,0.55)] sm:p-6">
        <div className="flex items-center gap-2 rounded-full border border-coral/70 bg-surface px-3 py-2.5 sm:px-4">
          <Search className="size-5 shrink-0 text-coral" strokeWidth={2} aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What can we help you find?"
            className="min-w-0 flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-muted sm:text-base"
            autoComplete="off"
          />
          <button
            type="button"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm ring-1 ring-border transition hover:text-coral"
            aria-label="Close search"
            onClick={onClose}
          >
            <X className="size-4" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
          Quick navigation
        </p>
        {nav.length ? (
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {nav.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                prefetch
                onClick={onClose}
                className="flex min-h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-navy transition hover:border-coral hover:text-coral"
              >
                <Icon className="size-4 text-coral" strokeWidth={2} aria-hidden />
                {label}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted">No matching pages.</p>
        )}

        <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
          Popular services
        </p>
        {services.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                onClick={onClose}
                className="rounded-full bg-surface px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-navy transition hover:bg-coral hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted">No matching services.</p>
        )}
      </div>
    </div>
  );
}
