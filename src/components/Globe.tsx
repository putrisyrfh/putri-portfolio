"use client";

import { motion } from "framer-motion";

export default function Globe() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56">
      <div className="absolute inset-0 rounded-full bg-warm-gold/5 blur-xl" />

      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="#2D3E32" stroke="#C4A97D" strokeWidth="0.8" />

          <ellipse cx="100" cy="100" rx="30" ry="88" fill="none" stroke="#C4A97D" strokeWidth="0.3" opacity="0.3" />
          <ellipse cx="100" cy="100" rx="60" ry="88" fill="none" stroke="#C4A97D" strokeWidth="0.3" opacity="0.3" />

          <line x1="12" y1="60" x2="188" y2="60" stroke="#C4A97D" strokeWidth="0.3" opacity="0.3" />
          <line x1="12" y1="100" x2="188" y2="100" stroke="#C4A97D" strokeWidth="0.3" opacity="0.3" />
          <line x1="12" y1="140" x2="188" y2="140" stroke="#C4A97D" strokeWidth="0.3" opacity="0.3" />

          <path d="M120,75 Q135,70 145,78 Q150,85 148,95 Q145,98 140,96 Q135,100 130,105 Q125,108 120,105 Q118,100 120,95 Q115,90 118,82 Z" fill="#C4A97D" opacity="0.3" />
          <path d="M130,108 Q135,106 138,110 Q136,114 132,113 Z" fill="#C4A97D" opacity="0.25" />
          <path d="M140,110 Q145,108 148,112 Q150,118 145,120 Q140,118 138,114 Z" fill="#C4A97D" opacity="0.25" />
          <path d="M148,115 Q155,112 160,116 Q158,122 152,120 Z" fill="#C4A97D" opacity="0.25" />
          <path d="M138,118 Q142,116 146,118 Q148,120 144,122 Q140,121 138,118 Z" fill="#D4817A" opacity="0.5" />

          <path d="M80,80 Q85,75 92,78 Q95,85 96,95 Q95,110 90,120 Q85,125 82,118 Q78,108 77,95 Q76,85 80,80 Z" fill="#C4A97D" opacity="0.25" />
          <path d="M82,60 Q90,55 98,58 Q100,65 95,70 Q88,72 82,68 Z" fill="#C4A97D" opacity="0.25" />
          <path d="M35,65 Q40,55 45,60 Q48,70 46,85 Q44,95 40,100 Q35,95 34,82 Z" fill="#C4A97D" opacity="0.2" />
          <path d="M40,105 Q45,100 48,105 Q50,115 48,130 Q44,140 40,135 Q38,120 40,105 Z" fill="#C4A97D" opacity="0.2" />
          <path d="M150,135 Q160,130 168,135 Q170,142 165,148 Q158,150 152,145 Q148,140 150,135 Z" fill="#C4A97D" opacity="0.25" />

          <g opacity="0.4">
            <text x="100" y="7" textAnchor="middle" fontSize="6" fill="#C4A97D" fontFamily="serif">N</text>
          </g>

          <circle cx="100" cy="100" r="91" fill="none" stroke="#C4A97D" strokeWidth="0.5" opacity="0.2" />
          <circle cx="100" cy="100" r="94" fill="none" stroke="#C4A97D" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 3" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ top: "52%", left: "68%" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 18 12 18s12-9 12-18C24 5.4 18.6 0 12 0z" fill="#D4817A" />
          <circle cx="12" cy="11" r="4" fill="#1C2B1F" />
        </svg>
        <div className="absolute left-7 top-0 whitespace-nowrap">
          <div className="glass px-2 py-1 rounded shadow-sm">
            <p className="text-[10px] font-mono text-warm-gold font-bold">BOGOR, ID</p>
            <p className="text-[8px] font-mono text-text-muted">6.5&deg;S 106.8&deg;E</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-4 h-4 rounded-full border-2 border-vintage-red/40"
        style={{ top: "54%", left: "70%" }}
        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}
