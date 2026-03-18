import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} - ${project.client} | Megokruto`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div>
      {/* Hero image */}
      <section className="relative">
        <div className="w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
        </div>

        {/* Back button */}
        <div className="absolute top-24 md:top-28 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 pb-8 md:pb-12">
            <span className="text-xs uppercase tracking-widest text-orange-400/80 mb-2 block">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              {project.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-gray-400">
              <span>{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">Overview</h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4">
                <span className="text-orange-400 font-bold text-sm">01</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4">
                <span className="text-orange-400 font-bold text-sm">02</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-8">Key Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.results.map((result) => (
            <div key={result} className="glass-card rounded-2xl p-5 md:p-6 text-center">
              <CheckCircle size={18} className="text-orange-400 mx-auto mb-3" />
              <p className="text-sm md:text-base text-white font-medium">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="glass-card rounded-2xl p-5 md:p-6 group hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <ArrowLeft size={12} /> Previous
                </div>
                <p className="text-sm md:text-base text-white font-medium group-hover:text-orange-400 transition-colors truncate">
                  {prevProject.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{prevProject.client}</p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="glass-card rounded-2xl p-5 md:p-6 group hover:border-white/15 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                  Next <ArrowRight size={12} />
                </div>
                <p className="text-sm md:text-base text-white font-medium group-hover:text-orange-400 transition-colors truncate">
                  {nextProject.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{nextProject.client}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Want something similar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Let's discuss how we can build the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Start a Project
            </Link>
            <Link href="/portfolio" className="pill-button text-gray-400 text-center">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
