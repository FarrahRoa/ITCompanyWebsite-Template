import { motion } from "framer-motion";

const nodes = [
  { id: "a", x: 16, y: 18, size: 16, main: true },
  { id: "b", x: 42, y: 12, size: 10 },
  { id: "c", x: 70, y: 20, size: 14, main: true },
  { id: "d", x: 24, y: 40, size: 10 },
  { id: "e", x: 52, y: 38, size: 18, main: true },
  { id: "f", x: 80, y: 48, size: 10 },
  { id: "g", x: 20, y: 70, size: 12 },
  { id: "h", x: 48, y: 78, size: 14 },
  { id: "i", x: 74, y: 72, size: 10 },
];

const edges = [
  ["a", "b"],
  ["a", "d"],
  ["b", "c"],
  ["a", "e"],
  ["d", "e"],
  ["e", "f"],
  ["d", "g"],
  ["g", "h"],
  ["e", "h"],
  ["f", "i"],
  ["h", "i"],
];

export default function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/85 shadow-2xl shadow-primary/10 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-cyan-50/50" />
      <div className="absolute left-6 top-8 h-28 w-28 rounded-[2rem] bg-cyan-200/40 blur-3xl" />
      <div className="absolute right-8 top-16 h-20 w-20 rounded-[2rem] border border-white/70 bg-white/60 blur-3xl" />
      <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full border border-cyan-200/40 bg-cyan-100/10 blur-3xl" />

      <div className="absolute inset-6 rounded-[2rem] bg-white/90 ring-1 ring-border/30 shadow-inner shadow-slate-200/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_30%)]" />

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="hero-network-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.95" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="hero-network-node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.16" />
            </radialGradient>
          </defs>

          <g stroke="url(#hero-network-line)" strokeWidth="0.4" strokeLinecap="round" opacity="0.75">
            {edges.map(([from, to], index) => {
              const source = nodes.find((node) => node.id === from);
              const target = nodes.find((node) => node.id === to);
              return source && target ? (
                <line
                  key={index}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                />
              ) : null;
            })}
          </g>

          <g stroke="hsl(var(--accent))" strokeOpacity="0.14" strokeWidth="0.18" fill="none">
            <path d="M12 28 C26 22, 38 20, 52 26" />
            <path d="M30 64 C44 58, 60 66, 78 72" />
          </g>
        </svg>

        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0.96, opacity: 0.92 }}
            animate={{ scale: [0.98, 1, 0.98], opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.12 }}
            className="absolute rounded-full"
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              marginLeft: `-${node.size / 2}px`,
              marginTop: `-${node.size / 2}px`,
              boxShadow: node.main
                ? "0 0 34px rgba(20,184,166,0.22), 0 0 18px rgba(56,189,248,0.16)"
                : "0 0 18px rgba(20,184,166,0.16)"
            }}
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.95),rgba(20,184,166,0.15))]" />
            <div className="absolute inset-0 rounded-full border border-white/60" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="absolute -left-4 top-6 w-56 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-lg shadow-primary/10 backdrop-blur-md"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Projects</div>
        <div className="mt-3 text-2xl font-heading font-bold text-foreground">250+</div>
      </motion.div>

      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="absolute right-6 top-20 w-52 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-lg shadow-primary/10 backdrop-blur-md"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Response</div>
        <div className="mt-3 text-2xl font-heading font-bold text-foreground">Fast</div>
      </motion.div>

      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="absolute left-8 bottom-10 w-64 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-lg shadow-primary/10 backdrop-blur-md"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Monitoring and Support</div>
        <div className="mt-3 text-sm leading-relaxed text-foreground">Ready for your next project</div>
      </motion.div>
    </div>
  );
}
