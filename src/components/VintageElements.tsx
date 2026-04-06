"use client";

export function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-16 max-w-6xl mx-auto px-6">
      <div className="flex-1 h-px bg-glass-border" />
      <div className="flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-warm-brown/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-warm-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-warm-brown/30" />
      </div>
      <div className="flex-1 h-px bg-glass-border" />
    </div>
  );
}
