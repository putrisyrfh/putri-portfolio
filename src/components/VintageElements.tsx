"use client";

export function SectionDivider() {
  return (
    <div className="relative my-12 overflow-hidden">
      {/* Torn paper edge SVG */}
      <svg viewBox="0 0 1200 30" className="w-full h-6 text-bg-main" preserveAspectRatio="none">
        <path
          d="M0,15 Q20,5 40,12 Q60,20 80,10 Q100,2 120,14 Q140,22 160,10 Q180,2 200,16 Q220,24 240,12 Q260,4 280,14 Q300,20 320,8 Q340,0 360,14 Q380,22 400,10 Q420,2 440,16 Q460,20 480,8 Q500,2 520,14 Q540,22 560,10 Q580,4 600,16 Q620,22 640,10 Q660,2 680,14 Q700,20 720,8 Q740,2 760,14 Q780,22 800,10 Q820,4 840,16 Q860,20 880,8 Q900,2 920,14 Q940,22 960,10 Q980,4 1000,16 Q1020,22 1040,10 Q1060,2 1080,14 Q1100,20 1120,8 Q1140,2 1160,14 Q1180,22 1200,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </svg>
      <div className="flex items-center justify-center gap-3 -mt-3">
        <div className="w-12 h-px bg-accent-gold/20" />
        <div className="w-2 h-2 rotate-45 border border-accent-gold/30" />
        <div className="w-12 h-px bg-accent-gold/20" />
      </div>
    </div>
  );
}

export function TornPaperEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
        <path
          d="M0,20 Q25,8 50,18 Q75,28 100,14 Q125,4 150,18 Q175,28 200,12 Q225,4 250,20 Q275,30 300,14 Q325,4 350,18 Q375,26 400,12 Q425,2 450,18 Q475,28 500,14 Q525,4 550,20 Q575,30 600,12 Q625,2 650,18 Q675,28 700,14 Q725,6 750,20 Q775,28 800,12 Q825,4 850,18 Q875,26 900,14 Q925,4 950,20 Q975,28 1000,12 Q1025,4 1050,18 Q1075,26 1100,14 Q1125,6 1150,20 Q1175,28 1200,12 L1200,40 L0,40 Z"
          fill="currentColor"
          className="text-bg-main"
        />
      </svg>
    </div>
  );
}
