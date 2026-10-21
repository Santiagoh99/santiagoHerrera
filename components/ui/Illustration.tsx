"use client";

import { useEffect, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import type { Project } from "@/lib/data";

// Small explanatory sequences for the case studies. The resting (and SSR) state
// is the final frame; "Replay" steps through the frames. Movement only runs
// without reduced motion (`.demo-fx` in globals.css); state changes are color.

/** Frame index + replay. `delays[i]` is how long frame i is held. */
function useFrames(delays: number[]) {
  const last = delays.length;
  const [frame, setFrame] = useState(last);
  useEffect(() => {
    if (frame >= last) return;
    const t = setTimeout(() => setFrame((f) => f + 1), delays[frame]);
    return () => clearTimeout(t);
  }, [frame, last, delays]);
  return { frame, done: frame >= last, replay: () => setFrame(0) };
}

function Frame({
  caption,
  status,
  reset,
  onReplay,
  children,
}: {
  caption: string;
  status: string;
  reset: boolean;
  onReplay: () => void;
  children: React.ReactNode;
}) {
  return (
    <figure className="rounded-xl border border-border bg-background/40 p-4" data-reset={reset || undefined}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-medium text-muted-foreground">Illustration</span>
        <button
          type="button"
          onClick={onReplay}
          className="press -my-2 -mr-2 inline-flex items-center gap-1.5 min-h-11 px-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg"
        >
          <RotateCcw size={14} aria-hidden="true" />
          Replay<span className="sr-only"> illustration</span>
        </button>
      </div>
      <div aria-hidden="true">{children}</div>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      {caption && <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed break-words">{caption}</figcaption>}
    </figure>
  );
}

const RACE = [250, 750];

function Race({ caption }: { caption: string }) {
  const { frame, done, replay } = useFrames(RACE);
  const [winner, setWinner] = useState(0);
  const lanes = ["Request A", "Request B"];

  return (
    <Frame
      caption={caption}
      reset={frame === 0}
      status={done ? `${lanes[winner]} got the last spot; ${lanes[1 - winner]} was refused.` : ""}
      onReplay={() => {
        setWinner(Math.random() < 0.5 ? 0 : 1);
        replay();
      }}
    >
      <div className="space-y-3">
        {lanes.map((lane, i) => {
          const won = done && i === winner;
          const lost = done && i !== winner;
          return (
            <div key={lane} className="flex items-center gap-3 text-sm">
              <span className="w-[5.5rem] flex-shrink-0 text-muted-foreground">{lane}</span>
              <span className="relative h-px flex-1 bg-border">
                {/* Track wrapper is the lane minus the dot, so translateX(100%) lands on the end. */}
                <span
                  className="demo-fx absolute inset-y-0 left-0 right-3"
                  style={{
                    transform: frame >= 1 && !lost ? "translateX(100%)" : "none",
                    transitionDelay: frame === 1 && i !== winner ? "60ms" : undefined,
                  }}
                >
                  <span
                    className={`demo-fx absolute -top-1.5 left-0 size-3 rounded-full border ${
                      won ? "bg-accent border-accent" : "bg-surface-elevated border-muted-foreground"
                    }`}
                  />
                </span>
              </span>
              <span
                className={`demo-fx w-[4.5rem] flex-shrink-0 text-right font-mono text-xs ${
                  won ? "text-accent" : "text-muted-foreground"
                } ${done ? "" : "opacity-0"}`}
              >
                {won ? "reserved" : "sold out"}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        spots left{" "}
        <span className={`demo-fx tabular ${done ? "text-accent" : "text-foreground"}`}>{done ? 0 : 1}</span>
      </p>
    </Frame>
  );
}

const PAYMENT_STEPS: [string, string][] = [
  ["Create order", "server"],
  ["Buyer approves", "PayPal"],
  ["Capture", "server"],
  ["Webhook", "PayPal → server"],
  ["Order paid", "once"],
];
const PAYMENT = [250, 450, 450, 450, 450];

function Payment({ caption }: { caption: string }) {
  const { frame, done, replay } = useFrames(PAYMENT);

  return (
    <Frame caption={caption} reset={frame === 0} status={done ? "Order paid, updated once." : ""} onReplay={replay}>
      <div className="relative">
        <span className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
        <span
          className="demo-fx absolute left-[5px] top-2 bottom-2 w-px bg-accent origin-top"
          style={{ transform: `scaleY(${Math.max(0, frame - 1) / (PAYMENT_STEPS.length - 1)})` }}
        />
        <ol className="relative space-y-3">
        {PAYMENT_STEPS.map(([label, detail], i) => {
          const on = frame > i;
          return (
            <li key={label} className="relative flex items-baseline gap-3 text-sm">
              <span
                className={`demo-fx relative top-px size-[11px] flex-shrink-0 rounded-full border ${
                  on ? "bg-accent border-accent" : "bg-background border-border"
                }`}
              />
              <span className={`demo-fx flex-1 min-w-0 ${on ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
              <span className="font-mono text-xs text-muted-foreground text-right">{detail}</span>
            </li>
          );
        })}
        </ol>
      </div>
    </Frame>
  );
}

// TODO(Santiago): swap in a real message and the bot's real field names.
const MESSAGE = "paid 12,500 for groceries, split it in half";
const FIELDS: [string, string][] = [
  ["type", '"expense"'],
  ["amount", "12500"],
  ["category", '"groceries"'],
  ["split", '"50/50"'],
];
const PARSE = [300, 500, 120, 120, 120, 300];

function Parse({ caption }: { caption: string }) {
  const { frame, done, replay } = useFrames(PARSE);
  const shown = (i: number) => frame > i + 1;

  return (
    <Frame caption={caption} reset={frame === 0} status={done ? "Message parsed into four validated fields." : ""} onReplay={replay}>
      <p
        className="demo-fx ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-surface-elevated px-3 py-2 text-sm text-foreground"
        style={{ transform: frame >= 1 ? "none" : "translateY(4px)", opacity: frame >= 1 ? 1 : 0 }}
      >
        {MESSAGE}
      </p>
      <dl className="mt-3 space-y-1 rounded-lg border border-border px-3 py-2 font-mono text-xs">
        {FIELDS.map(([k, v], i) => (
          <div
            key={k}
            className="demo-fx flex gap-4"
            style={{ transform: shown(i) ? "none" : "translateY(4px)", opacity: shown(i) ? 1 : 0 }}
          >
            <dt className="w-[4.5rem] flex-shrink-0 text-muted-foreground">{k}</dt>
            <dd className="min-w-0 text-foreground break-all">{v}</dd>
          </div>
        ))}
      </dl>
      <p className={`demo-fx mt-2 flex items-center gap-1.5 font-mono text-xs text-accent ${done ? "" : "opacity-0"}`}>
        <Check size={12} aria-hidden="true" />
        Zod schema valid
      </p>
    </Frame>
  );
}

export default function Illustration({ illustration }: { illustration: NonNullable<Project["illustration"]> }) {
  const { kind, caption } = illustration;
  if (kind === "race") return <Race caption={caption} />;
  if (kind === "payment") return <Payment caption={caption} />;
  return <Parse caption={caption} />;
}
