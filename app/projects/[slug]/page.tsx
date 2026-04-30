import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getProjectBySlug, getAllSlugs, projects } from "@/data/projects";
import Tag from "@/components/Tag";
import CaseStudySection from "@/components/CaseStudySection";
import ImageBlock from "@/components/ImageBlock";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://daria-ux.vercel.app";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${BASE_URL}/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/projects/${slug}`,
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Work",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.title,
        item: `${BASE_URL}/projects/${slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Daria Kryvosheieva",
      url: BASE_URL,
    },
    url: `${BASE_URL}/projects/${slug}`,
  };

  return (
    <>
      <Script
        id={`schema-breadcrumb-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`schema-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-6xl mx-auto px-6 md:px-8">
        {/* BREADCRUMB / BACK */}
        <nav aria-label="Breadcrumb" className="pt-10 pb-0">
          <ol className="flex items-center gap-2 text-sm" role="list">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All work
              </Link>
            </li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li>
              <span className="text-zinc-600" aria-current="page">{project.title}</span>
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="max-w-3xl mb-10">
            <div className="flex flex-wrap gap-2 mb-6" aria-label="Project tags">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                Role
              </dt>
              <dd className="text-sm text-zinc-900">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                Timeline
              </dt>
              <dd className="text-sm text-zinc-900">{project.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                Tools
              </dt>
              <dd className="text-sm text-zinc-900">{project.tools.join(", ")}</dd>
            </div>
          </dl>
        </header>

        {/* COVER IMAGE */}
        <div className="mb-8">
          <ImageBlock
            src={project.image}
            alt={`${project.title} — project overview`}
            aspectRatio="wide"
          />
        </div>

        {/* 1. THE PROBLEM */}
        <CaseStudySection number="01" label="The Problem" title="What was wrong and why it mattered">
          <p className="text-lg text-zinc-600 leading-relaxed">
            {project.problem}
          </p>
          <ul className="space-y-4 mt-6" role="list">
            {project.problemDetails.map((detail, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed">{detail}</p>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        {/* 2. RESEARCH OBJECTIVES */}
        <CaseStudySection number="02" label="Research Objectives" title="What I set out to understand">
          <p className="text-sm text-zinc-600 mb-5 leading-relaxed">
            Through user interviews, surveys, and contextual inquiry, I wanted to understand:
          </p>
          <ol className="space-y-3" role="list">
            {project.researchObjectives.map((objective, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-xs font-mono text-zinc-500 mt-1 flex-shrink-0 w-5" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-zinc-700 leading-relaxed">{objective}</p>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        {/* 3. TARGET USERS */}
        <CaseStudySection number="03" label="Target Users" title="Who I was designing for">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.targetUsers.map((user) => (
              <div
                key={user.name}
                className="p-6 rounded-xl bg-zinc-50 border border-zinc-100"
              >
                <h3 className="text-sm font-semibold text-zinc-900 mb-3">
                  {user.name}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 4. RESEARCH FINDINGS */}
        <CaseStudySection number="04" label="Research Findings" title="What the research revealed">
          <div className="space-y-6">
            {project.researchFindings.map((finding, i) => (
              <div
                key={i}
                className="border-l-2 border-zinc-200 pl-6 py-1"
              >
                <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                  {finding.insight}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {finding.detail}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 5. IDEATION */}
        <CaseStudySection number="05" label="Ideation" title="Early thinking and exploration">
          <div className="space-y-10">
            {project.ideation.map((item, i) => (
              <div key={i} className="space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                <ImageBlock
                  src={item.image}
                  alt={item.image ? `Ideation sketch ${i + 1} for ${project.title}` : `Ideation exploration ${i + 1} — placeholder for ${project.title}`}
                  caption={`Exploration ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 6. WIREFRAMES */}
        <CaseStudySection number="06" label="Wireframes & User Flows" title="Low-fidelity design and flow structure">
          <div className="space-y-10">
            {project.wireframes.map((wire, i) => (
              <div key={i} className="space-y-4">
                <ImageBlock
                  src={wire.image}
                  alt={wire.image ? `Wireframe ${i + 1} for ${project.title}` : `Wireframe ${i + 1} placeholder — ${project.title}`}
                  caption={`Wireframe ${i + 1}`}
                />
                <p className="text-sm text-zinc-600 leading-relaxed">{wire.description}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 7. DESIGN DECISIONS */}
        <CaseStudySection number="07" label="Design Decisions" title="Why I made the choices I made">
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Every significant decision has a reason rooted in research. Here are the
            key calls and the evidence behind them.
          </p>
          <div className="space-y-6">
            {project.designDecisions.map((decision, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-100 overflow-hidden"
              >
                <div className="bg-zinc-50 px-6 py-4 border-b border-zinc-100">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {decision.decision}
                  </h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                    Reasoning
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {decision.reasoning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 8. ITERATIONS */}
        <CaseStudySection number="08" label="Iterations & Refinement" title="How the design evolved">
          <ol className="space-y-8" role="list">
            {project.iterations.map((iter, i) => (
              <li key={i} className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 text-white text-xs font-semibold"
                    aria-label={`Version ${iter.version}`}
                  >
                    {iter.version}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">
                    {iter.change}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {iter.reason}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        {/* 9. FINAL PROTOTYPE */}
        <CaseStudySection number="09" label="Final Prototype" title="High-fidelity UI">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Final design screens">
            {project.finalPrototype.map((src, i) => (
              <div key={i} role="listitem">
                <ImageBlock
                  src={src}
                  alt={`Final design screen ${i + 1} of ${project.finalPrototype.length} — ${project.title}`}
                  aspectRatio="wide"
                />
              </div>
            ))}
          </div>
        </CaseStudySection>
        

        {/* 10. USABILITY RESULTS
        <CaseStudySection number="10" label="Usability Results" title="What improved and what I learned">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {project.usabilityResults.map((result, i) => (
              <li
                key={i}
                className="p-6 rounded-xl bg-zinc-900 text-white"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                  {result.metric}
                </p>
                <p className="text-sm leading-relaxed text-zinc-200">
                  {result.outcome}
                </p>
              </li>
            ))}
          </ul>
        </CaseStudySection> */}

        {/* NEXT PROJECT */}
        <section className="py-16 md:py-24 border-t border-zinc-100" aria-label="Next project">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Next project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            aria-label={`Next project: ${nextProject.title}`}
            className="group block"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-3" aria-label="Project tags">
                  {nextProject.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag} label={tag} variant="outline" />
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 group-hover:text-zinc-500 transition-colors duration-300 leading-tight">
                  {nextProject.title}
                </h2>
              </div>
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-300"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </section>
      </article>
    </>
  );
}
