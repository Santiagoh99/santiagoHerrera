// Mono section marker in the "… /About me …" style.
export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs md:text-sm font-medium text-muted-foreground">
      <span aria-hidden="true">… /</span>
      {children}
      <span aria-hidden="true"> …</span>
    </p>
  );
}
