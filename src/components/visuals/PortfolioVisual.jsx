// Geometric placeholder illustration for portfolio cards (pure SVG).
// Deterministic per index — each card gets a distinct motif and tint.
const palettes = [
  ["hsl(var(--primary))", "hsl(var(--secondary))"],
  ["hsl(var(--secondary))", "hsl(var(--chart-3))"],
  ["hsl(var(--chart-3))", "hsl(var(--primary))"],
  ["hsl(var(--chart-2))", "hsl(var(--chart-5))"],
  ["hsl(var(--accent))", "hsl(var(--primary))"],
  ["hsl(var(--primary))", "hsl(var(--accent))"],
];

export default function PortfolioVisual({ index = 0, label = "" }) {
  const [c1, c2] = palettes[index % palettes.length];
  const gid = `pv-${index}`;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-label={label ? `${label} illustration` : "Abstract illustration"}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} stopOpacity="0.85" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#${gid})`} />
      <g fill="rgba(255,255,255,0.16)">
        {index % 3 === 0 && (
          <>
            <circle cx="30" cy="32" r="22" />
            <circle cx="72" cy="68" r="16" />
          </>
        )}
        {index % 3 === 1 && (
          <>
            <rect x="10" y="14" width="34" height="34" rx="6" />
            <rect x="56" y="52" width="30" height="30" rx="6" />
          </>
        )}
        {index % 3 === 2 && (
          <>
            <path d="M50 12 L86 78 L14 78 Z" />
            <circle cx="50" cy="40" r="10" fill="rgba(255,255,255,0.22)" />
          </>
        )}
      </g>
      <g stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1="0" y1={20 + i * 16} x2="100" y2={20 + i * 16} />
        ))}
      </g>
    </svg>
  );
}