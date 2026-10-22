"use client";

import { useState } from "react";
import { Check, Copy, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error" | "unavailable";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="press inline-flex items-center justify-center gap-2 min-h-11 px-5 border border-border text-foreground hover:border-muted-foreground font-semibold rounded-lg text-sm"
    >
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}

const field =
  "w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent transition-colors duration-150";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8" role="status">
        <p className="font-display text-2xl font-bold text-foreground mb-2">Message sent.</p>
        <p className="text-muted-foreground">Thanks! I&apos;ll reply to the email you left.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-6 md:p-8 space-y-4" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-muted-foreground mb-1.5">Name</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-muted-foreground mb-1.5">Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="block text-sm font-medium text-muted-foreground mb-1.5">Message</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} className={`${field} resize-y`} />
      </label>
      {/* Honeypot, hidden from people and assistive tech */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {(status === "error" || status === "unavailable") && (
        <p className="text-sm text-accent" role="alert">
          {status === "unavailable"
            ? "The form isn't connected yet. Copy my email and write me directly:"
            : "Something went wrong sending it. You can copy my email instead:"}{" "}
          <span className="text-foreground font-medium break-all">{email}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="press inline-flex items-center justify-center gap-2 min-h-11 px-6 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-lg text-sm disabled:opacity-60"
        >
          <Send size={16} aria-hidden="true" />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <CopyEmailButton email={email} />
      </div>
    </form>
  );
}
