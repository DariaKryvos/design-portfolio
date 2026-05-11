"use client";

const badges = [
  { label: "Lead UX Designer", position: { top: "4%", left: "4%" }, highlight: false },
  { label: "7 years · NL", position: { top: "4%", right: "2%" }, highlight: false },
  { label: "Sopra Steria", position: { bottom: "22%", left: "0%" }, highlight: false },
  { label: "ProRail · VWS · UMCG", position: { bottom: "10%", right: "0%" }, highlight: false },
  { label: "Open to work ●", position: { bottom: "38%", right: "2%" }, highlight: true },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[340px] md:h-[400px] select-none" aria-hidden="true">

      {/* Large outline letters */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-[family-name:var(--font-playfair)] font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(8rem, 18vw, 18rem)",
            WebkitTextStroke: "2px #d4d4d8",
            color: "transparent",
            letterSpacing: "-0.04em",
          }}
        >
          DK
        </span>
      </div>

      {/* Photo */}
      <div
        className="absolute rounded-full overflow-hidden shadow-2xl"
        style={{
          width: 168,
          height: 168,
          top: "50%",
          left: "50%",
          transform: "translate(-46%, -54%)",
          border: "4px solid #f4f4f5",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/myphoto.jpeg"
          alt="Daria Kryvosheieva"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>

      {/* Floating badges */}
      {badges.map(({ label, position, highlight }) => (
        <div
          key={label}
          className="absolute"
          style={position as React.CSSProperties}
        >
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-md whitespace-nowrap ${
              highlight
                ? "bg-[#2d1547] text-white"
                : "bg-white text-zinc-800 border border-zinc-100"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
