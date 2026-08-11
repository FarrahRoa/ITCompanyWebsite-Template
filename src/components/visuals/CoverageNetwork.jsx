import { motion } from "framer-motion";

export default function CoverageNetwork() {
  const nodes = {
    hub: { x: 160, y: 140 },
    sites: [
      { x: 380, y: 40 },
      { x: 460, y: 100 },
      { x: 420, y: 220 },
      { x: 480, y: 260 },
    ],
  };

  return (
    <div className="relative w-full h-full max-h-[340px]">
      <svg viewBox="0 0 520 340" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <defs>
          <pattern id="dot-grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="rgba(148,163,184,0.12)" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="520" height="340" fill="url(#dot-grid)" />

        {/* connection paths */}
        {nodes.sites.map((s, i) => (
          <motion.path
            key={i}
            d={`M ${nodes.hub.x} ${nodes.hub.y} C ${nodes.hub.x + 80} ${nodes.hub.y - 60}, ${s.x - 60} ${s.y - 60}, ${s.x} ${s.y}`}
            fill="none"
            stroke="rgba(20,184,166,0.32)"
            strokeWidth="1"
            strokeDasharray="3 5"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.95, 0.7] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* hub node */}
        <g>
          <motion.circle
            cx={nodes.hub.x}
            cy={nodes.hub.y}
            r="18"
            fill="rgba(20,184,166,0.14)"
            initial={{ r: 16 }}
            animate={{ r: [16, 19, 16] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx={nodes.hub.x} cy={nodes.hub.y} r="10" fill="#14b8a6" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
          <circle cx={nodes.hub.x} cy={nodes.hub.y} r="4" fill="#064e46" />
          <text x={nodes.hub.x} y={nodes.hub.y + 36} textAnchor="middle" className="text-[11px] font-mono" fill="#0f2038">LONDON, HQ</text>
        </g>

        {/* site nodes */}
        {nodes.sites.map((s, i) => (
          <g key={i}>
            <motion.circle
              cx={s.x}
              cy={s.y}
              r="5"
              fill="#0f2038"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
            />
          </g>
        ))}

        {/* label */}
        <text x="448" y="26" className="text-[11px] font-mono" fill="#0f2038">EU SITES</text>
      </svg>
    </div>
  );
}
