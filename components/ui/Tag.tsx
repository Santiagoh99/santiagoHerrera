// Stack names are data, so they're set in mono.
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block max-w-full break-words px-2.5 py-1 font-mono text-xs text-muted-foreground bg-background/60 border border-border rounded-md">
      {children}
    </span>
  );
}
