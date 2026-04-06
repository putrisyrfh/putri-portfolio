"use client";

import { motion } from "framer-motion";

export default function Globe() {
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-vintage-gold/10 blur-xl" />

      {/* Globe */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Ocean */}
          <circle cx="100" cy="100" r="90" fill="#D4C5A9" stroke="#8B6F47" strokeWidth="1.5" />

          {/* Grid lines - longitude */}
          <ellipse cx="100" cy="100" rx="30" ry="88" fill="none" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="100" cy="100" rx="60" ry="88" fill="none" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="100" cy="100" rx="88" ry="88" fill="none" stroke="#A68B6B" strokeWidth="0.5" opacity="0.3" />

          {/* Grid lines - latitude */}
          <line x1="12" y1="60" x2="188" y2="60" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
          <line x1="12" y1="100" x2="188" y2="100" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
          <line x1="12" y1="140" x2="188" y2="140" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />

          {/* Simplified continents - vintage style */}
          {/* Asia / Indonesia region */}
          <path
            d="M120,75 Q135,70 145,78 Q150,85 148,95 Q145,98 140,96 Q135,100 130,105 Q125,108 120,105 Q118,100 120,95 Q115,90 118,82 Z"
            fill="#8B6F47"
            opacity="0.6"
          />
          {/* Southeast Asia islands */}
          <path d="M130,108 Q135,106 138,110 Q136,114 132,113 Z" fill="#8B6F47" opacity="0.5" />
          <path d="M140,110 Q145,108 148,112 Q150,118 145,120 Q140,118 138,114 Z" fill="#8B6F47" opacity="0.5" />
          <path d="M148,115 Q155,112 160,116 Q158,122 152,120 Z" fill="#8B6F47" opacity="0.5" />
          {/* Java / Bogor area - highlighted */}
          <path d="M138,118 Q142,116 146,118 Q148,120 144,122 Q140,121 138,118 Z" fill="#C4756E" opacity="0.7" />

          {/* Africa */}
          <path
            d="M80,80 Q85,75 92,78 Q95,85 96,95 Q95,110 90,120 Q85,125 82,118 Q78,108 77,95 Q76,85 80,80 Z"
            fill="#8B6F47"
            opacity="0.5"
          />

          {/* Europe */}
          <path
            d="M82,60 Q90,55 98,58 Q100,65 95,70 Q88,72 82,68 Z"
            fill="#8B6F47"
            opacity="0.5"
          />

          {/* Americas hint */}
          <path
            d="M35,65 Q40,55 45,60 Q48,70 46,85 Q44,95 40,100 Q35,95 34,82 Z"
            fill="#8B6F47"
            opacity="0.4"
          />
          <path
            d="M40,105 Q45,100 48,105 Q50,115 48,130 Q44,140 40,135 Q38,120 40,105 Z"
            fill="#8B6F47"
            opacity="0.4"
          />

          {/* Australia */}
          <path
            d="M150,135 Q160,130 168,135 Q170,142 165,148 Q158,150 152,145 Q148,140 150,135 Z"
            fill="#8B6F47"
            opacity="0.5"
          />

          {/* Compass rose */}
          <g opacity="0.3">
            <line x1="100" y1="8" x2="100" y2="18" stroke="#6B5335" strokeWidth="1" />
            <text x="100" y="7" textAnchor="middle" fontSize="6" fill="#6B5335" fontFamily="serif">N</text>
          </g>

          {/* Vintage border ring */}
          <circle cx="100" cy="100" r="91" fill="none" stroke="#8B6F47" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="100" r="94" fill="none" stroke="#8B6F47" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 3" />
        </svg>
      </motion.div>

      {/* Location pin - stays fixed while globe rotates */}
      <motion.div
        className="absolute"
        style={{ top: "52%", left: "68%" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <path
            d="M12 0C5.4 0 0 5.4 0 12c0 9 12 18 12 18s12-9 12-18C24 5.4 18.6 0 12 0z"
            fill="#C4756E"
          />
          <circle cx="12" cy="11" r="4" fill="#FFF8F0" />
        </svg>
        {/* Label */}
        <div className="absolute left-7 top-0 whitespace-nowrap">
          <div className="bg-paper/90 backdrop-blur-sm px-2 py-1 rounded border border-warm-brown-light/30 shadow-sm">
            <p className="text-[10px] font-mono text-warm-brown font-bold">BOGOR, ID</p>
            <p className="text-[8px] font-mono text-warm-brown-light">6.5&deg;S 106.8&deg;E</p>
          </div>
        </div>
      </motion.div>

      {/* Pulse ring around pin */}
      <motion.div
        className="absolute w-4 h-4 rounded-full border-2 border-vintage-red/40"
        style={{ top: "54%", left: "70%" }}
        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}
