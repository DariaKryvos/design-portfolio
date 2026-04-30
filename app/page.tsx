import type { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

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
        <section aria-labelledby="hero-heading" className="pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              UX/UI Designer
            </p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-8"
            >
              I design experiences that make complex things{" "}
              <em className="not-italic text-zinc-500">feel simple.</em>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
              Seven years of UX practice across healthcare, government, and
              consumer products. I research deeply, design with intention, and
              always know why I made each decision.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="text-sm text-zinc-600">Available for new projects</span>
            </div>
            <div className="h-4 w-px bg-zinc-200 hidden md:block" aria-hidden="true" />
            <span className="text-sm text-zinc-600">Netherlands · Remote worldwide</span>
          </div>
        </section>

        {/* WORK GRID */}
        <section aria-labelledby="work-heading" className="pb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                Selected work
              </p>
              <h2 id="work-heading" className="text-2xl font-semibold text-zinc-900">
                Case studies
              </h2>
            </div>
            <span
              className="text-sm text-zinc-600 hidden md:block"
              aria-label={`${projects.length} projects`}
            >
              {projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section aria-labelledby="process-heading" className="border-t border-zinc-100 py-24">
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
        </section>
      </div>
    </>
  );
}
