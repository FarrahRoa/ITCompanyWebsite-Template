import { motion } from "framer-motion";

export default function WirelessSurveyVisual() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.12)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-100/80 to-slate-200/70" />
        <svg
          viewBox="0 0 440 400"
          role="img"
          aria-label=""
          preserveAspectRatio="xMidYMid meet"
          className="relative block h-auto w-full"
        >
          <defs>
            <radialGradient id="wirelessSurveyHeatA" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#14b8a6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wirelessSurveyHeatB" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="wirelessSurveyHeatC" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="10" y="10" width="420" height="310" rx="12" fill="#eef2f7" stroke="#dbe2ea" />

          <g stroke="#CBD5E1" strokeWidth="1.5" fill="none">
            <rect x="40" y="46" width="360" height="238" />
            <line x1="180" y1="46" x2="180" y2="170" />
            <line x1="180" y1="170" x2="300" y2="170" />
            <line x1="300" y1="46" x2="300" y2="170" />
            <line x1="40" y1="210" x2="150" y2="210" />
            <line x1="150" y1="210" x2="150" y2="284" />
          </g>

          <circle cx="120" cy="120" r="95" fill="url(#wirelessSurveyHeatA)" />
          <circle cx="330" cy="230" r="88" fill="url(#wirelessSurveyHeatB)" />
          <circle cx="250" cy="90" r="60" fill="url(#wirelessSurveyHeatC)" />

          <g>
            <circle cx="120" cy="120" r="6" fill="#14b8a6" />
            <motion.circle
              cx="120"
              cy="120"
              r="11"
              fill="none"
              stroke="#14b8a6"
              strokeOpacity="0.4"
              animate={{ strokeOpacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <circle cx="330" cy="230" r="6" fill="#14b8a6" />
            <motion.circle
              cx="330"
              cy="230"
              r="11"
              fill="none"
              stroke="#14b8a6"
              strokeOpacity="0.4"
              animate={{ strokeOpacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </g>

          <text
            x="40"
            y="34"
            fontFamily="Geist Mono, monospace"
            fontSize="11"
            letterSpacing="1.5"
            fill="#5b6c85"
          >
            WIRELESS SURVEY — SITE 04
          </text>

          <g>
            <rect x="240" y="264" width="180" height="126" rx="10" fill="#0a1628" />
            <text
              x="258"
              y="290"
              fontFamily="Geist Mono, monospace"
              fontSize="10"
              letterSpacing="1.5"
              fill="#8494ab"
            >
              RACK ELEVATION — R2
            </text>

            <g fill="none" stroke="#4b5a70" strokeWidth="1">
              <rect x="258" y="300" width="144" height="14" rx="2" />
              <rect x="258" y="318" width="144" height="14" rx="2" />
              <rect x="258" y="336" width="144" height="14" rx="2" />
              <rect x="258" y="354" width="144" height="14" rx="2" />
            </g>

            <g fill="#2DD4BF">
              <circle cx="266" cy="307" r="2.5" />
              <circle cx="274" cy="307" r="2.5" />
              <circle cx="266" cy="325" r="2.5" />
              <circle cx="274" cy="325" r="2.5" />
              <circle cx="266" cy="343" r="2.5" />
              <circle cx="266" cy="361" r="2.5" />
              <circle cx="274" cy="361" r="2.5" />
            </g>

            <g fill="#475569">
              <rect x="330" y="303" width="66" height="8" rx="1" />
              <rect x="330" y="321" width="66" height="8" rx="1" />
              <rect x="330" y="339" width="66" height="8" rx="1" />
              <rect x="330" y="357" width="66" height="8" rx="1" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
