export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-coral ${className}`}
    >
      <span className="size-1.5 rounded-full bg-coral" aria-hidden />
      {children}
    </p>
  );
}
