import type { ArchitectureSpec } from "@/data/architecture";
import { cn } from "@/lib/cn";

const COLS = 2;

export function ArchitectureDiagram({
  spec,
  className,
}: {
  spec: ArchitectureSpec;
  className?: string;
}) {
  const positions = layoutNodes(spec.nodes);

  return (
    <figure
      className={cn(
        "not-prose my-8 w-full max-w-none border border-site-border bg-site-paper",
        className,
      )}
    >
      <figcaption className="border-b border-site-border px-4 py-3">
        <p className="font-display text-base text-site-ink">{spec.title}</p>
        <p className="mt-1 font-mono text-[0.65rem] text-site-muted">
          {spec.sourceNote}
        </p>
      </figcaption>
      <svg
        viewBox="0 0 520 280"
        className="h-auto w-full bg-site-surface/40"
        role="img"
        aria-label={spec.title}
      >
        <defs>
          <marker
            id="kb-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" className="text-site-muted" />
          </marker>
        </defs>
        {spec.edges.map((edge) => {
          const from = positions.get(edge.from);
          const to = positions.get(edge.to);
          if (!from || !to) return null;
          const x1 = from.x + from.w / 2;
          const y1 = from.y + from.h;
          const x2 = to.x + to.w / 2;
          const y2 = to.y;
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1"
                className="text-site-border"
                markerEnd="url(#kb-arrow)"
              />
              {edge.label ? (
                <text
                  x={(x1 + x2) / 2}
                  y={(y1 + y2) / 2 - 4}
                  textAnchor="middle"
                  className="fill-site-muted text-[9px] font-mono"
                >
                  {edge.label}
                </text>
              ) : null}
            </g>
          );
        })}
        {spec.nodes.map((node) => {
          const pos = positions.get(node.id);
          if (!pos) return null;
          return (
            <g key={node.id}>
              <rect
                x={pos.x}
                y={pos.y}
                width={pos.w}
                height={pos.h}
                rx="2"
                fill="var(--site-paper)"
                stroke="var(--site-border)"
                strokeWidth="1"
              />
              <text
                x={pos.x + pos.w / 2}
                y={pos.y + 22}
                textAnchor="middle"
                className="fill-site-ink text-[11px] font-medium"
              >
                {node.label}
              </text>
              {node.sub ? (
                <text
                  x={pos.x + pos.w / 2}
                  y={pos.y + 38}
                  textAnchor="middle"
                  className="fill-site-muted text-[9px] font-mono"
                >
                  {node.sub}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function layoutNodes(nodes: ArchitectureSpec["nodes"]) {
  const w = 200;
  const h = 52;
  const gapX = 40;
  const gapY = 36;
  const map = new Map<string, { x: number; y: number; w: number; h: number }>();

  nodes.forEach((node, index) => {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    map.set(node.id, {
      x: 40 + col * (w + gapX),
      y: 24 + row * (h + gapY),
      w,
      h,
    });
  });

  return map;
}
