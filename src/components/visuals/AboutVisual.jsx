// Abstract layered-arc illustration (pure SVG). Used as the About visual.
export default function AboutVisual() {
  const arcs = [
    { r: 44, opacity: 0.10, rotate: 0 },
    { r: 36, opacity: 0.16, rotate: 18 },
    { r: 28, opacity: 0.24, rotate: 36 },
    { r: 20, opacity: 0.34, rotate: 54 },
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-label="Abstract layered illustration"
    >
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.10" />
          <stop offset="100%" stopColor="hsl(var(--chart-3))" stopOpacity="0.10" />
        </linearGradient>
        <linearGradient id="av-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" fill="url(#av-bg)" />

      <g transform="translate(50 52)" fill="none" stroke="url(#av-arc)" strokeWidth="2.2" strokeLinecap="round">
        {arcs.map((a, i) => (
          <circle key={i} r={a.r} opacity={a.opacity} transform={`rotate(${a.rotate})`} strokeDasharray={`${a.r * 1.4} ${a.r * 4}`} />
        ))}
      </g>

      {/* dot grid accent */}
      <g fill="hsl(var(--primary))" opacity="0.18">
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 14} cy={8 + r * 14} r="0.7" />
          ))
        )}
      </g>
    </svg>
  );
}