function SpeechBubble({
  children,
  tail,
}: {
  children: React.ReactNode;
  tail: "bottom-right" | "top-left";
}) {
  return (
    <div className="relative">
      {tail === "top-left" && (
        <div
          className="absolute bg-white"
          style={{
            top: -9, left: 24,
            width: 18, height: 18,
            transform: "rotate(45deg)",
            borderLeft: "2.5px solid #111",
            borderTop: "2.5px solid #111",
          }}
        />
      )}
      <div
        className="bg-white px-4 py-3 max-w-[220px]"
        style={{
          border: "2.5px solid #111",
          borderRadius: 18,
        }}
      >
        {children}
      </div>
      {tail === "bottom-right" && (
        <div
          className="absolute bg-white"
          style={{
            bottom: -9, right: 24,
            width: 18, height: 18,
            transform: "rotate(45deg)",
            borderRight: "2.5px solid #111",
            borderBottom: "2.5px solid #111",
          }}
        />
      )}
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative rounded-3xl overflow-hidden mb-6"
      style={{ background: "#eddde4" }}
    >
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 520, height: 520,
          borderRadius: "50%",
          background: "rgba(215, 170, 185, 0.5)",
          filter: "blur(110px)",
          top: -120, right: 180,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 380, height: 380,
          borderRadius: "50%",
          background: "rgba(200, 150, 170, 0.4)",
          filter: "blur(90px)",
          bottom: -80, right: 40,
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_400px] gap-6 p-10 md:p-14">

        {/* ── Left: text ── */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-500 mb-5">
            UX Designer, Almere. Hi.
          </p>

          <h1 id="hero-heading" className="mb-7 leading-none">
            <span
              className="block font-black tracking-tight"
              style={{
                fontSize: "clamp(4rem, 11vw, 9.5rem)",
                color: "#0d0d14",
                fontFamily: "var(--font-geist)",
                lineHeight: 1,
              }}
            >
              Daria
            </span>
            <span
              className="block font-black tracking-tight"
              style={{
                fontSize: "clamp(2.8rem, 8.5vw, 7.5rem)",
                color: "#2b0a58",
                fontFamily: "var(--font-geist)",
                lineHeight: 1.05,
              }}
            >
              Kryvosheieva
            </span>
          </h1>

          <p className="text-base text-zinc-700 leading-relaxed mb-4 max-w-lg">
            UX designer with seven years across{" "}
            <strong>SaaS, eCommerce, games, dashboards, and public-sector systems</strong>.
            {" "}Computer science background, currently at Sopra Steria and{" "}
            <strong>open to work</strong>.
          </p>

          <p className="text-sm text-zinc-500 leading-relaxed mb-10 max-w-lg">
            I lived in Manila and Kyiv before settling in Almere. This site is hand-coded in Next.js.
          </p>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-base font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-900 transition-all w-fit"
          >
            Read the work →
          </a>
        </div>

        {/* ── Right: photo + bubbles ── */}
        <div className="flex flex-col items-center gap-5 pt-4 pb-2">

          {/* Top speech bubble */}
          <div className="self-start ml-6">
            <SpeechBubble tail="bottom-right">
              <p className="text-sm font-bold text-zinc-900 leading-snug">
                Hi 👋 welcome to my portfolio!
              </p>
            </SpeechBubble>
          </div>

          {/* Circular photo */}
          <div
            className="rounded-full overflow-hidden shrink-0"
            style={{
              width: 280, height: 280,
              boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/myphoto.jpeg"
              alt="Daria Kryvosheieva"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top center",
              }}
            />
          </div>

          {/* Bottom speech bubble */}
          <div className="self-end mr-4">
            <SpeechBubble tail="top-left">
              <p className="text-sm font-bold text-zinc-900 leading-snug">
                P.S. I&apos;m open to work, let&apos;s chat →
              </p>
            </SpeechBubble>
          </div>

        </div>
      </div>
    </section>
  );
}
