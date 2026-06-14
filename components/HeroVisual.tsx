"use client";

const badges = [
  {
    label: "Lead UX Designer",
    position: { top: "4%", left: "4%" },
    bg: "#F5C842",
    text: "#1a0a3c",
    border: "none",
  },
  {
    label: "7 years · NL",
    position: { top: "4%", right: "2%" },
    bg: "rgba(255,255,255,0.12)",
    text: "white",
    border: "1px solid rgba(255,255,255,0.28)",
  },
  {
    label: "Sopra Steria",
    position: { bottom: "22%", left: "0%" },
    bg: "#0DD4C8",
    text: "#1a0a3c",
    border: "none",
  },
  {
    label: "ProRail · VWS · UMCG",
    position: { bottom: "10%", right: "0%" },
    bg: "#E8196D",
    text: "white",
    border: "none",
  },
  {
    label: "Open to work ●",
    position: { bottom: "38%", right: "2%" },
    bg: "white",
    text: "rgb(37,12,53)",
    border: "none",
  },
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
            WebkitTextStroke: "2px rgba(255,255,255,0.18)",
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
          border: "4px solid rgba(255,255,255,0.18)",
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
      {badges.map(({ label, position, bg, text, border }) => (
        <div
          key={label}
          className="absolute"
          style={position as React.CSSProperties}
        >
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap"
            style={{ backgroundColor: bg, color: text, border }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
