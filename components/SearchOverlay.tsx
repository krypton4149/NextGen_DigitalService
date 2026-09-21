"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const QUICK_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
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
        className="absolute inset-0 bg-navy/70"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-[min(16vh,7rem)] w-[min(92vw,36rem)] -translate-x-1/2 border border-border bg-background p-7 sm:p-9">
        <div className="flex items-center gap-3 border-b border-navy/20 pb-3">
          <Search className="size-5 shrink-0 text-coral" strokeWidth={1.8} aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the studio"
            className="min-w-0 flex-1 bg-transparent text-base text-navy outline-none placeholder:text-muted"
            autoComplete="off"
          />
          <button
            type="button"
            className="flex size-8 shrink-0 items-center justify-center text-navy"
            aria-label="Close search"
            onClick={onClose}
          >
            <X className="size-4" strokeWidth={1.8} aria-hidden />
          </button>
        </div>

        <p className="mt-8 text-[0.65rem] uppercase tracking-[0.28em] text-muted">Index</p>
        {nav.length ? (
          <div className="mt-3 divide-y divide-border border-y border-border">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                prefetch
                onClick={onClose}
                className="flex min-h-12 items-center justify-between py-3 text-sm text-navy transition hover:text-coral"
              >
                {label}
                <span aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted">No matching pages.</p>
        )}

        <p className="mt-8 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
          Capabilities
        </p>
        {services.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                onClick={onClose}
                className="rounded-full border border-border px-3.5 py-1.5 text-[0.8rem] text-navy transition hover:border-navy"
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
