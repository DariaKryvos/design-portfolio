"use client";

import { useRef, useState } from "react";

const LOGOS = [
  { id: "prorail", src: "/ProRail.svg",             alt: "ProRail" },
  { id: "sopra",   src: "/SopraSteria.png",          alt: "Sopra Steria Consulting" },
  { id: "vws",     src: "/Ministerie-VWS-logo.png",  alt: "Ministerie van Volksgezondheid, Welzijn en Sport" },
  { id: "ag",      src: "/agaming.webp",              alt: "Asia Gaming" },
];

function LogoCell({ logo }: { logo: (typeof LOGOS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 18;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
    setOffset({ x, y });
  };

  const onLeave = () => {
    setOffset({ x: 0, y: 0 });
    setActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
      className="flex items-center justify-center p-6 cursor-default flex-shrink-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        style={{
          width: 200,
          height: 70,
          objectFit: "contain",
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${active ? 1.08 : 1})`,
          transition: active
            ? "transform 0.08s linear"
            : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          opacity: active ? 1 : 0.75,
        }}
      />
    </div>
  );
}

export default function HeroBubbles() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Companies I&apos;ve worked with
      </p>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {LOGOS.map((logo) => (
          <LogoCell key={logo.id} logo={logo} />
        ))}
      </div>
    </div>
  );
}
