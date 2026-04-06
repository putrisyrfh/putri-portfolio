"use client";

import { motion } from "framer-motion";

const floatAnimation = (delay: number = 0) => ({
  animate: {
    y: [0, -8, 0],
    rotate: [0, 2, -2, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

export function VintageCoffee({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(0)}>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        {/* Saucer */}
        <ellipse cx="45" cy="72" rx="32" ry="8" fill="#D4C5A9" stroke="#8B6F47" strokeWidth="1" />
        <ellipse cx="45" cy="70" rx="28" ry="6" fill="#F5EDE3" stroke="#A68B6B" strokeWidth="0.5" />

        {/* Cup body */}
        <path d="M25,40 L28,65 Q30,70 45,70 Q60,70 62,65 L65,40 Z" fill="#F5EDE3" stroke="#8B6F47" strokeWidth="1.2" />
        <path d="M25,40 Q25,38 45,38 Q65,38 65,40" fill="#D4A843" stroke="#8B6F47" strokeWidth="1" />

        {/* Coffee surface */}
        <ellipse cx="45" cy="42" rx="18" ry="4" fill="#A68B6B" opacity="0.6" />

        {/* Cup handle */}
        <path d="M65,45 Q75,45 75,55 Q75,62 65,62" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" />

        {/* Steam - vintage swirls */}
        <path d="M38,35 Q36,28 40,22 Q42,18 38,12" fill="none" stroke="#A68B6B" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <path d="M45,33 Q43,25 47,18 Q49,13 45,8" fill="none" stroke="#A68B6B" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <path d="M52,35 Q50,28 54,22 Q56,18 52,12" fill="none" stroke="#A68B6B" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

        {/* Decorative line on cup */}
        <path d="M30,50 Q45,53 60,50" fill="none" stroke="#D4A843" strokeWidth="0.8" opacity="0.5" />
        <path d="M31,55 Q45,58 59,55" fill="none" stroke="#D4A843" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

export function VintageCamera({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(1.2)}>
      <svg width="95" height="80" viewBox="0 0 95 80" fill="none">
        {/* Camera body */}
        <rect x="15" y="25" width="65" height="42" rx="4" fill="#F5EDE3" stroke="#8B6F47" strokeWidth="1.2" />

        {/* Top viewfinder bump */}
        <rect x="35" y="18" width="20" height="10" rx="2" fill="#F5EDE3" stroke="#8B6F47" strokeWidth="1" />
        <rect x="38" y="20" width="14" height="5" rx="1" fill="#D4C5A9" stroke="#A68B6B" strokeWidth="0.5" />

        {/* Lens outer ring */}
        <circle cx="47" cy="46" r="15" fill="none" stroke="#8B6F47" strokeWidth="1.5" />
        <circle cx="47" cy="46" r="12" fill="#D4C5A9" stroke="#A68B6B" strokeWidth="1" />
        <circle cx="47" cy="46" r="8" fill="#7A8B6F" opacity="0.3" stroke="#8B6F47" strokeWidth="0.8" />
        <circle cx="47" cy="46" r="4" fill="#2C2416" opacity="0.6" />
        {/* Lens reflection */}
        <circle cx="44" cy="43" r="1.5" fill="white" opacity="0.4" />

        {/* Flash */}
        <rect x="65" y="28" width="10" height="8" rx="1" fill="#D4A843" opacity="0.5" stroke="#8B6F47" strokeWidth="0.8" />

        {/* Shutter button */}
        <circle cx="60" cy="22" r="3" fill="#C4756E" stroke="#8B6F47" strokeWidth="0.8" />

        {/* Film advance */}
        <rect x="18" y="28" width="8" height="5" rx="1" fill="#D4C5A9" stroke="#A68B6B" strokeWidth="0.5" />

        {/* Strap holder */}
        <rect x="12" y="32" width="5" height="3" rx="1" fill="#8B6F47" />
        <rect x="78" y="32" width="5" height="3" rx="1" fill="#8B6F47" />

        {/* Vintage leather texture lines */}
        <line x1="20" y1="52" x2="35" y2="52" stroke="#A68B6B" strokeWidth="0.3" opacity="0.5" />
        <line x1="20" y1="55" x2="35" y2="55" stroke="#A68B6B" strokeWidth="0.3" opacity="0.5" />
        <line x1="60" y1="52" x2="75" y2="52" stroke="#A68B6B" strokeWidth="0.3" opacity="0.5" />
        <line x1="60" y1="55" x2="75" y2="55" stroke="#A68B6B" strokeWidth="0.3" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

export function VintageYarn({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(2.5)}>
      <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
        {/* Yarn ball */}
        <circle cx="42" cy="40" r="25" fill="#F5EDE3" stroke="#C4756E" strokeWidth="1.2" />

        {/* Yarn wrap lines */}
        <path d="M20,35 Q30,20 50,25 Q65,30 62,45" fill="none" stroke="#C4756E" strokeWidth="1" opacity="0.5" />
        <path d="M22,45 Q35,55 55,50 Q65,45 60,30" fill="none" stroke="#C4756E" strokeWidth="0.8" opacity="0.4" />
        <path d="M30,18 Q42,15 55,22 Q62,30 58,42" fill="none" stroke="#C4756E" strokeWidth="0.8" opacity="0.4" />
        <path d="M25,50 Q30,60 45,58 Q58,55 62,42" fill="none" stroke="#C4756E" strokeWidth="0.7" opacity="0.3" />
        <path d="M35,16 Q25,25 25,40 Q25,55 35,62" fill="none" stroke="#C4756E" strokeWidth="0.7" opacity="0.3" />

        {/* Loose yarn tail */}
        <path d="M55,60 Q58,65 52,70 Q48,73 50,78" fill="none" stroke="#C4756E" strokeWidth="1.2" strokeLinecap="round" />

        {/* Knitting needles */}
        <line x1="10" y1="28" x2="55" y2="58" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="27" r="2.5" fill="#D4A843" stroke="#8B6F47" strokeWidth="0.8" />

        <line x1="15" y1="22" x2="60" y2="52" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="13" cy="21" r="2.5" fill="#D4A843" stroke="#8B6F47" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}

export function VintageBook({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(0.8)}>
      <svg width="80" height="85" viewBox="0 0 80 85" fill="none">
        {/* Book stack - bottom book */}
        <g transform="rotate(-5, 40, 60)">
          <rect x="15" y="55" width="50" height="10" rx="1" fill="#7A8B6F" stroke="#5C4F3A" strokeWidth="0.8" />
          <line x1="18" y1="60" x2="62" y2="60" stroke="#5C4F3A" strokeWidth="0.3" opacity="0.5" />
        </g>

        {/* Middle book */}
        <g transform="rotate(3, 40, 50)">
          <rect x="12" y="44" width="55" height="12" rx="1" fill="#D4A843" opacity="0.7" stroke="#8B6F47" strokeWidth="0.8" />
          <line x1="15" y1="50" x2="64" y2="50" stroke="#8B6F47" strokeWidth="0.3" opacity="0.5" />
          <rect x="30" y="46" width="20" height="2" rx="0.5" fill="#8B6F47" opacity="0.3" />
        </g>

        {/* Top book - open */}
        <path d="M10,20 Q10,18 12,18 L38,15 Q40,15 40,17 L40,42 Q40,44 38,44 L12,42 Q10,42 10,40 Z" fill="#FFF8F0" stroke="#8B6F47" strokeWidth="1" />
        <path d="M70,20 Q70,18 68,18 L42,15 Q40,15 40,17 L40,42 Q40,44 42,44 L68,42 Q70,42 70,40 Z" fill="#FFFCF7" stroke="#8B6F47" strokeWidth="1" />

        {/* Spine */}
        <line x1="40" y1="15" x2="40" y2="44" stroke="#8B6F47" strokeWidth="1.2" />

        {/* Text lines on pages */}
        <line x1="15" y1="24" x2="35" y2="22" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
        <line x1="15" y1="28" x2="35" y2="26" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
        <line x1="15" y1="32" x2="30" y2="30" stroke="#A68B6B" strokeWidth="0.5" opacity="0.3" />
        <line x1="45" y1="22" x2="65" y2="24" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
        <line x1="45" y1="26" x2="65" y2="28" stroke="#A68B6B" strokeWidth="0.5" opacity="0.4" />
        <line x1="45" y1="30" x2="60" y2="32" stroke="#A68B6B" strokeWidth="0.5" opacity="0.3" />

        {/* Bookmark */}
        <path d="M55,15 L55,8 L58,11 L61,8 L61,15" fill="#C4756E" stroke="none" />
      </svg>
    </motion.div>
  );
}

export function VintageVinyl({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(1.8)}>
      <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
        {/* Record sleeve */}
        <rect x="8" y="8" width="55" height="55" rx="2" fill="#F5EDE3" stroke="#8B6F47" strokeWidth="1" transform="rotate(-8, 35, 35)" />
        <rect x="12" y="12" width="47" height="47" rx="1" fill="none" stroke="#A68B6B" strokeWidth="0.5" opacity="0.3" transform="rotate(-8, 35, 35)" />

        {/* Vinyl record - peeking out */}
        <circle cx="48" cy="45" r="24" fill="#2C2416" stroke="#5C4F3A" strokeWidth="0.5" />

        {/* Grooves */}
        <circle cx="48" cy="45" r="20" fill="none" stroke="#3D3528" strokeWidth="0.3" />
        <circle cx="48" cy="45" r="17" fill="none" stroke="#3D3528" strokeWidth="0.3" />
        <circle cx="48" cy="45" r="14" fill="none" stroke="#3D3528" strokeWidth="0.3" />
        <circle cx="48" cy="45" r="11" fill="none" stroke="#3D3528" strokeWidth="0.3" />

        {/* Label */}
        <circle cx="48" cy="45" r="8" fill="#D4A843" stroke="#8B6F47" strokeWidth="0.5" />
        <circle cx="48" cy="45" r="1.5" fill="#2C2416" />

        {/* Label text */}
        <text x="48" y="43" textAnchor="middle" fontSize="3.5" fill="#8B6F47" fontFamily="serif" fontWeight="bold">MELODY</text>
        <text x="48" y="48" textAnchor="middle" fontSize="2.5" fill="#8B6F47" fontFamily="serif">records</text>

        {/* Shine on vinyl */}
        <path d="M35,30 Q48,35 60,30" fill="none" stroke="white" strokeWidth="0.3" opacity="0.15" />
      </svg>
    </motion.div>
  );
}

export function VintageCompass({ className = "" }: { className?: string }) {
  return (
    <motion.div className={className} {...floatAnimation(3)}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {/* Outer ring */}
        <circle cx="40" cy="40" r="30" fill="#F5EDE3" stroke="#8B6F47" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="27" fill="none" stroke="#A68B6B" strokeWidth="0.5" />

        {/* Degree marks */}
        {Array.from({ length: 36 }, (_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r1 = i % 9 === 0 ? 24 : 26;
          const r2 = 27;
          return (
            <line
              key={i}
              x1={40 + r1 * Math.sin(angle)}
              y1={40 - r1 * Math.cos(angle)}
              x2={40 + r2 * Math.sin(angle)}
              y2={40 - r2 * Math.cos(angle)}
              stroke="#8B6F47"
              strokeWidth={i % 9 === 0 ? "1" : "0.3"}
              opacity={i % 9 === 0 ? "0.8" : "0.4"}
            />
          );
        })}

        {/* Cardinal directions */}
        <text x="40" y="18" textAnchor="middle" fontSize="6" fill="#C4756E" fontFamily="serif" fontWeight="bold">N</text>
        <text x="40" y="67" textAnchor="middle" fontSize="5" fill="#8B6F47" fontFamily="serif">S</text>
        <text x="15" y="42" textAnchor="middle" fontSize="5" fill="#8B6F47" fontFamily="serif">W</text>
        <text x="65" y="42" textAnchor="middle" fontSize="5" fill="#8B6F47" fontFamily="serif">E</text>

        {/* Compass needle */}
        <polygon points="40,18 37,40 43,40" fill="#C4756E" />
        <polygon points="40,62 37,40 43,40" fill="#D4C5A9" stroke="#A68B6B" strokeWidth="0.5" />

        {/* Center pin */}
        <circle cx="40" cy="40" r="2.5" fill="#D4A843" stroke="#8B6F47" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}
