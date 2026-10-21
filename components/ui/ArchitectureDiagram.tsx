import type { Architecture } from "@/lib/data";

// Fixed 300-unit-wide canvas: renders near 1:1 in a 375px card and in the
// one-third column on desktop, so labels stay readable without a second layout.
const W = 300;
const COLS = 3;
const GAP = 8;
const TIER_LABEL = 18;
const TIER_GAP = 34;
const ROW_GAP = 8;
const NODE_H = 32;
const NODE_H_NOTE = 46;
const LABEL_SIZE = 11.5;
const NOTE_SIZE = 9.5;
const PAD = 8;

// IBM Plex Mono advances 0.6em per glyph, so text width is predictable without measuring.
const textW = (text: string, size: number) => text.length * size * 0.6;
const nodeW = (perRow: number) => (W - GAP * (perRow - 1)) / perRow;

// Most columns (≤3) in which every label and note still fits its box.
function columnsFor(nodes: Architecture["tiers"][number]["nodes"]) {
  const widest = Math.max(
    ...nodes.map((n) => Math.max(textW(n.label, LABEL_SIZE), n.note ? textW(n.note, NOTE_SIZE) : 0))
  );
  for (let c = Math.min(nodes.length, COLS); c > 1; c--) {
    if (widest + PAD * 2 <= nodeW(c)) return c;
  }
  return 1;
}

// Last resort for a single-column node that still doesn't fit: ellipsis, full text in <title>.
function fit(text: string, size: number, width: number) {
  const max = Math.floor((width - PAD * 2) / (size * 0.6));
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

type Box = { x: number; y: number; w: number; h: number; tier: number };

function layout(arch: Architecture) {
  const boxes = new Map<string, Box>();
  const labels: { text: string; y: number }[] = [];
  let y = 0;

  arch.tiers.forEach((tier, t) => {
    labels.push({ text: tier.label, y: y + 11 });
    y += TIER_LABEL;
    const h = tier.nodes.some((n) => n.note) ? NODE_H_NOTE : NODE_H;
    const perRow = columnsFor(tier.nodes);
    const w = nodeW(perRow);
    for (let r = 0; r * perRow < tier.nodes.length; r++) {
      const row = tier.nodes.slice(r * perRow, r * perRow + perRow);
      // centre a short last row
      const offset = ((perRow - row.length) * (w + GAP)) / 2;
      row.forEach((node, i) => {
        boxes.set(node.id, { x: offset + i * (w + GAP), y, w, h, tier: t });
      });
      y += h + ROW_GAP;
    }
    y += TIER_GAP - ROW_GAP;
  });

  return { boxes, labels, height: y - TIER_GAP };
}

export default function ArchitectureDiagram({ architecture }: { architecture: Architecture }) {
  const { boxes, labels, height } = layout(architecture);
  const nodes = architecture.tiers.flatMap((t) => t.nodes);

  return (
    <figure className="diagram">
      <svg
        viewBox={`-1 -1 ${W + 2} ${height + 2}`}
        className="w-full max-w-[300px] h-auto font-mono"
        role="img"
        aria-label={architecture.summary}
      >
        {architecture.edges.map(([from, to]) => {
          const a = boxes.get(from);
          const b = boxes.get(to);
          if (!a || !b) return null;
          const x1 = a.x + a.w / 2;
          const y1 = a.y + a.h;
          const x2 = b.x + b.w / 2;
          const y2 = b.y;
          const mid = (y1 + y2) / 2;
          return (
            <path
              key={`${from}-${to}`}
              d={`M${x1} ${y1} C${x1} ${mid} ${x2} ${mid} ${x2} ${y2}`}
              pathLength={1}
              className="diagram-edge"
              style={{ "--t": b.tier } as React.CSSProperties}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity={0.55}
              strokeWidth={1.25}
            />
          );
        })}

        {labels.map((l, t) => (
          <text
            key={l.text}
            x={0}
            y={l.y}
            className="diagram-node"
            style={{ "--t": t } as React.CSSProperties}
            fontSize={10}
            fill="var(--muted-foreground)"
            letterSpacing="0.06em"
          >
            {l.text.toUpperCase()}
          </text>
        ))}

        {nodes.map((n) => {
          const b = boxes.get(n.id)!;
          return (
            <g
              key={n.id}
              className="diagram-node"
              style={{ "--t": b.tier } as React.CSSProperties}
            >
              {(fit(n.label, LABEL_SIZE, b.w) !== n.label ||
                (n.note && fit(n.note, NOTE_SIZE, b.w) !== n.note)) && (
                <title>{n.note ? `${n.label} — ${n.note}` : n.label}</title>
              )}
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx={6}
                fill="var(--surface-elevated)"
                stroke="var(--border)"
              />
              <text
                x={b.x + b.w / 2}
                y={b.y + (n.note ? 19 : 20)}
                textAnchor="middle"
                fontSize={LABEL_SIZE}
                fontWeight={500}
                fill="var(--foreground)"
              >
                {fit(n.label, LABEL_SIZE, b.w)}
              </text>
              {n.note && (
                <text
                  x={b.x + b.w / 2}
                  y={b.y + 34}
                  textAnchor="middle"
                  fontSize={NOTE_SIZE}
                  fill="var(--muted-foreground)"
                >
                  {fit(n.note, NOTE_SIZE, b.w)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
