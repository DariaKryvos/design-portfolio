import type { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import HeroBubbles from "@/components/HeroBubbles";

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

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* HERO */}
        <section aria-labelledby="hero-heading" className="pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-xs text-zinc-400 tracking-widest uppercase mb-8">
            UX/UI Designer · Portfolio 2026
          </p>

          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-playfair)] font-bold leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 6rem)" }}
          >
            <span className="text-zinc-800">Designing what </span>
            <em style={{ color: "#2d1547" }}>complex </em>
            <span className="text-zinc-800">systems </span>
            <em className="text-zinc-400">should </em>
            <span className="text-zinc-800">feel like.</span>
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 max-w-2xl mb-12">
            <p className="text-sm text-zinc-600 leading-relaxed">
              Seven years across SaaS, eCommerce, games, dashboards, and public-sector systems.
              Computer science background. <span className="text-zinc-900 font-medium">Open to work.</span>
            </p>
            <p className="text-xs text-zinc-500">Available · Netherlands</p>
          </div>

          <HeroBubbles />
        </section>

        {/* WORK GRID */}
        <section aria-labelledby="work-heading" className="pb-24">
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

        {/* PROCESS */}
        {/* <section aria-labelledby="process-heading" className="border-t border-zinc-100 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                How I work
              </p>
              <h2
                id="process-heading"
                className="text-3xl font-semibold text-zinc-900 leading-tight mb-6"
              >
                Research first. Always.
              </h2>
              <p className="text-zinc-600 leading-relaxed">
                Good design isn&apos;t about beautiful pixels — it&apos;s about
                understanding the problem so deeply that the solution becomes
                obvious. Every decision I make is grounded in evidence, and I
                keep the reasoning visible throughout the design process.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-4" role="list">
              {[
                { label: "User Research", detail: "Interviews, surveys, field studies" },
                { label: "Systems Thinking", detail: "IA, service design, complex flows" },
                { label: "Interaction Design", detail: "Prototyping, micro-interactions" },
                { label: "Usability Testing", detail: "Moderated, unmoderated, A/B" },
              ].map(({ label, detail }) => (
                <li key={label} className="p-5 rounded-xl bg-zinc-50 border border-zinc-100">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">{label}</p>
                  <p className="text-xs text-zinc-600 leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section> */}
      </div>
    </>
  );
}
