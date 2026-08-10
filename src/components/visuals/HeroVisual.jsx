import { motion } from "framer-motion";

// Refined network visual for the hero. Uses SVG with subtle animated nodes and lines,
// soft background geometry, and a gentle glow. Keeps a minimal, premium look.

const nodes = [
  { x: 14, y: 20, r: 1.6 },
  { x: 38, y: 12, r: 2.6, main: true },
  { x: 66, y: 18, r: 1.8 },
  { x: 22, y: 40, r: 1.4 },
  { x: 48, y: 46, r: 3.0, main: true },
  { x: 76, y: 52, r: 1.2 },
  { x: 18, y: 68, r: 1.5 },
  { x: 46, y: 78, r: 2.0 },
  { x: 74, y: 74, r: 1.1 },
  { x: 6, y: 50, r: 1.0 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 4], [4, 5], [3, 6],
  [6, 7], [4, 7], [7, 8], [5, 8], [3, 9], [9, 6], [2, 5],
];

export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-label="Network visualization"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
          <stop offset="60%" stopColor="hsl(var(--secondary))" stopOpacity="0.04" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.95" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="hv-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.9" />
        </radialGradient>
      </defs>

      {/* subtle background geometry */}
      <g opacity="0.18">
        <rect x="-10" y="-10" width="120" height="120" fill="url(#hv-bg)" />
        <g transform="translate(10,6) rotate(-8)">
          <rect x="0" y="0" width="40" height="40" rx="6" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.04" />
        </g>
        <g transform="translate(50,20) rotate(18)">
          <rect x="0" y="0" width="28" height="28" rx="4" fill="none" stroke="hsl(var(--secondary))" strokeOpacity="0.03" />
        </g>
      </g>

      {/* connecting lines */}
      <g stroke="url(#hv-line)" strokeWidth="0.28" opacity="0.7">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} strokeLinecap="round" />
        ))}
      </g>

      {/* subtle animated paths (very low opacity) to suggest flow */}
      <g stroke="hsl(var(--primary))" strokeOpacity="0.06" strokeWidth="0.2" fill="none">
        <path d="M12 24 C28 18, 44 16, 60 24" />
        <path d="M22 60 C36 56, 52 62, 74 66" />
      </g>

      {/* soft glow behind main nodes */}
      <g fill="hsl(var(--primary))" opacity="0.12">
        {nodes.filter((n) => n.main).map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={6 + i} />
        ))}
      </g>

      {/* nodes with subtle pulsing */}
      <g>
        {nodes.map((n, i) => (
          <motion.g key={i} initial={{ scale: 0.95 }} animate={{ scale: [0.96, 1, 0.96] }} transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}>
            <circle cx={n.x} cy={n.y} r={n.r + 0.6} fill="rgba(255,255,255,0.02)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="url(#hv-node)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.08" />
            {n.main && (
              <circle cx={n.x} cy={n.y} r={n.r * 1.7} fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.18" strokeWidth="0.2" />
            )}
          </motion.g>
        ))}
      </g>

      {/* tiny accent dots for texture */}
      <g fill="hsl(var(--secondary))" opacity="0.18">
        <circle cx="82" cy="28" r="0.6" />
        <circle cx="28" cy="12" r="0.5" />
        <circle cx="10" cy="82" r="0.5" />
      </g>
    </svg>
  );
}