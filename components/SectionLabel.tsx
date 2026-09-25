export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${className}`}>
      {children}
    </p>
  );
}
