"use client";

export function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-16 max-w-6xl mx-auto px-6">
      <div className="flex-1 h-px bg-accent-brown/10" />
      <div className="flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-brown/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-brown/20" />
      </div>
      <div className="flex-1 h-px bg-accent-brown/10" />
    </div>
  );
}

export function TornPaperEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none">
        <path
          d="M0,20 Q25,8 50,18 Q75,28 100,14 Q125,4 150,18 Q175,28 200,12 Q225,4 250,20 Q275,30 300,14 Q325,4 350,18 Q375,26 400,12 Q425,2 450,18 Q475,28 500,14 Q525,4 550,20 Q575,30 600,12 Q625,2 650,18 Q675,28 700,14 Q725,6 750,20 Q775,28 800,12 Q825,4 850,18 Q875,26 900,14 Q925,4 950,20 Q975,28 1000,12 Q1025,4 1050,18 Q1075,26 1100,14 Q1125,6 1150,20 Q1175,28 1200,12 L1200,40 L0,40 Z"
          className="fill-bg-page"
        />
      </svg>
    </div>
  );
}
