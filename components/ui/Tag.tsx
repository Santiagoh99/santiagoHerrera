"use client";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent border border-accent/20"
      : "bg-surface-elevated text-muted-foreground border border-border";

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
