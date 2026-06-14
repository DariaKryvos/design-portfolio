import type { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import HeroBubbles from "@/components/HeroBubbles";
import HeroVisual from "@/components/HeroVisual";

export const metadata: Metadata = {
  title: "Daria Kryvosheieva — UX/UI Designer",
  description:
    "UX/UI Designer with 4 years of practice across healthcare, government, and consumer products. Based in the Netherlands.",
  alternates: { canonical: "https://daria-ux.vercel.app" },
  openGraph: { url: "https://daria-ux.vercel.app" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daria Kryvosheieva",
  jobTitle: "UX/UI Designer",
  description:
    "UX/UI Designer specialising in complex systems, healthcare, and government digital services.",
  url: "https://daria-ux.vercel.app",
  sameAs: ["https://linkedin.com"],
  knowsAbout: [
    "User Experience Design",
    "UI Design",
    "Usability Testing",
    "Information Architecture",
    "Service Design",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Daria Kryvosheieva — UX/UI Designer Portfolio",
  url: "https://daria-ux.vercel.app",
  description:
    "UX/UI portfolio featuring case studies in healthcare, government, and consumer products.",
  author: { "@type": "Person", name: "Daria Kryvosheieva" },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HERO — full-width purple banner */}
      <section
        aria-labelledby="hero-heading"
        style={{ backgroundColor: "rgb(37 12 53)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-10 items-center">

            {/* Left: text */}
            <div>
              {/* Name + availability */}
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Daria Kryvosheieva · Lead UX Designer · 7 years
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Open to work · Netherlands</span>
                </div>
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-playfair)] font-bold leading-[1.08] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 5rem)" }}
              >
                <span className="text-white">Designing what </span>
                <em style={{ color: "#F5C842" }}>complex </em>
                <span className="text-white">systems </span>
                <em style={{ color: "rgba(255,255,255,0.38)" }}>should </em>
                <span className="text-white">feel like.</span>
              </h1>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: "rgba(255,255,255,0.70)" }}>
                Seven years designing for high-stakes environments — railway control rooms,
                national health infrastructure, government policy systems. Computer science background,
                currently UX Designer at{" "}
                <span className="text-white font-medium">Sopra Steria</span>.
                Open to senior IC or lead roles.
              </p>
            </div>

            {/* Right: visual */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Logo bar + work grid — white background */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <div className="pt-14 pb-6">
          <HeroBubbles />
        </div>

        {/* WORK GRID */}
        <section aria-labelledby="work-heading" className="pb-24 pt-4">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs text-zinc-400 tabular-nums">01</span>
            <h2 id="work-heading" className="text-sm font-semibold text-zinc-900">Selected work</h2>
            <div className="flex-1 border-t border-zinc-300" />
            <span className="text-xs text-zinc-400">{projects.length} projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
