import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getProjectBySlug, getAllSlugs, projects } from "@/data/projects";

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
    alternates: { canonical: `${BASE_URL}/projects/${slug}` },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/projects/${slug}`,
      title: project.title,
      description: project.description,
    },
  };
}

const LABEL = { color: "#b84c2e" } as const;

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3" style={LABEL}>
      • {text}
    </p>
  );
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
      { "@type": "ListItem", position: 1, name: "Work", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: project.title, item: `${BASE_URL}/projects/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: { "@type": "Person", name: "Daria Kryvosheieva", url: BASE_URL },
    url: `${BASE_URL}/projects/${slug}`,
  };

  return (
    <>
      <Script id={`schema-breadcrumb-${slug}`} type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id={`schema-article-${slug}`} type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="max-w-2xl mx-auto px-6 md:px-8 pt-10 pb-24">

        {/* Back */}
        <nav className="mb-12">
          <Link href="/" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors flex items-center gap-1.5">
            ← All work
          </Link>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-zinc-900 leading-tight mb-1">{project.title}</h1>
        {project.subtitle && (
          <p className="text-base text-zinc-500 mb-3">{project.subtitle}</p>
        )}

        {/* Role meta */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-400 mb-10 border-b border-zinc-100 pb-8">
          <span>{project.role}</span>
          <span>{project.timeline}</span>
          {project.tools.slice(0, 3).map(t => <span key={t}>{t}</span>)}
        </div>

        {/* Role detail block — only if rich fields present */}
        {(project.roleTeam || project.roleConstraints) && (
          <section className="mb-14 grid grid-cols-[120px_1fr] gap-4 text-sm">
            {project.roleTeam && (
              <>
                <span className="text-zinc-400">Team</span>
                <span className="text-zinc-700 leading-relaxed">{project.roleTeam}</span>
              </>
            )}
            {project.roleConstraints && (
              <>
                <span className="text-zinc-400">Constraints</span>
                <span className="text-zinc-700 leading-relaxed">{project.roleConstraints}</span>
              </>
            )}
          </section>
        )}

        {/* 1. OVERVIEW */}
        <section className="mb-16">
          <SectionLabel text="Overview" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">In short</h2>
          <blockquote className="text-base text-zinc-600 italic leading-relaxed border-l-2 border-zinc-200 pl-5 mb-8">
            {project.summary}
          </blockquote>
          <div className="rounded-xl overflow-hidden bg-zinc-100 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="w-full object-cover" />
          </div>
          <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
            <span className="text-[11px] uppercase tracking-widest text-zinc-400">{project.metric.label}</span>
            <span className="text-sm font-medium text-zinc-700">{project.metric.value}</span>
          </div>
        </section>

        {/* 2. CONTEXT */}
        <section className="mb-16">
          <SectionLabel text="Context" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Context</h2>
          {project.contextParagraphs ? (
            <div className="space-y-4">
              {project.contextParagraphs.map((p, i) => (
                <p key={i} className="text-sm text-zinc-600 leading-relaxed">{p}</p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-600 leading-relaxed">{project.context}</p>
          )}
        </section>

        {/* 3. PROBLEM */}
        <section className="mb-16">
          <SectionLabel text="Problem" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">The problem</h2>
          {project.problemIntro ? (
            <>
              <p className="text-sm text-zinc-600 leading-relaxed mb-5">{project.problemIntro}</p>
              <ul className="space-y-3">
                {project.problemBullets?.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-[7px]" />
                    <span className="text-sm text-zinc-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-zinc-600 leading-relaxed">{project.problem}</p>
          )}
        </section>

        {/* 4. APPROACH */}
        <section className="mb-16">
          <SectionLabel text="Approach" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">My approach</h2>
          {project.approachSections ? (
            <div className="space-y-10">
              {project.approachSections.map((section) => (
                <div key={section.number}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-zinc-300 shrink-0">{section.number}.</span>
                    <h3 className="text-sm font-bold text-zinc-900">{section.title}</h3>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-zinc-600 leading-relaxed mb-3">{section.body}</p>
                    {section.bullets && (
                      <ul className="space-y-2 mb-3">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-zinc-300 shrink-0 mt-0.5">·</span>
                            <span className="text-sm text-zinc-600 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.closing && (
                      <p className="text-sm text-zinc-400 italic leading-relaxed">{section.closing}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-4">
              {project.approach.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-[7px]" />
                  <span className="text-sm text-zinc-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 5. LEADERSHIP — optional */}
        {project.leadership && (
          <section className="mb-16">
            <SectionLabel text="Leadership" />
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Leadership</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mb-5">{project.leadership.intro}</p>
            <ul className="space-y-3">
              {project.leadership.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-[7px]" />
                  <span className="text-sm text-zinc-600 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 6. ITERATIONS */}
        <section className="mb-16">
          <SectionLabel text={`Iterations — N=${project.iterations.length}`} />
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Three drafts in.</h2>
          <div className="space-y-4">
            {project.iterations.map((iter, i) => (
              <div key={i} className="border border-zinc-200 rounded-xl p-5 bg-white">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold text-zinc-400 uppercase">{iter.version}</span>
                  <h3 className="text-sm font-bold text-zinc-900">{iter.change}</h3>
                  {iter.shipped && (
                    <span className="text-xs text-emerald-600 font-medium ml-auto">· shipped</span>
                  )}
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{iter.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. OUTCOME */}
        <section className="mb-16">
          <SectionLabel text="Outcome" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Outcome</h2>
          <div className="border-l-4 border-teal-400 pl-6">
            <ul className="space-y-4">
              {project.outcomePoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-teal-500 shrink-0 mt-0.5 text-xs">↑</span>
                  <span className="text-sm text-zinc-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. IMPACT — optional */}
        {project.impactStatement && (
          <section className="mb-16">
            <SectionLabel text="Impact" />
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Impact</h2>
            <p className="text-base text-zinc-700 leading-relaxed font-medium">{project.impactStatement}</p>
          </section>
        )}

        {/* 9. MORE SCREENS */}
        {project.finalPrototype.length > 0 && (
          <section className="mb-16">
            <SectionLabel text="Visuals" />
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">More screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.finalPrototype.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${project.title} screen ${i + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        <div className="border-t border-zinc-100 pt-10">
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Next project</p>
          <Link href={`/projects/${nextProject.slug}`} className="group block">
            <h2 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-500 transition-colors">
              {nextProject.title} →
            </h2>
          </Link>
        </div>

      </article>
    </>
  );
}
