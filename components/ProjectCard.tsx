"use client";

import Link from "next/link";
import Tag from "./Tag";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const slideImages = [project.image, ...project.finalPrototype].filter(
    (img, i, arr) => img && arr.indexOf(img) === i
  );
  const hasSlides = slideImages.length > 1;

  const [current, setCurrent] = useState(0);

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c - 1 + slideImages.length) % slideImages.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c + 1) % slideImages.length);
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View case study: ${project.title}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="relative overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 transition-all duration-500 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-100/80 hover:-translate-y-1">

        <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100">
          {slideImages.length > 0 ? (
            <>
              {/* Sliding strip */}
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(current / slideImages.length) * 100}%)`,
                  width: `${slideImages.length * 100}%`,
                }}
              >
                {slideImages.map((img) => (
                  <div
                    key={img}
                    className="relative flex-shrink-0 h-full"
                    style={{ width: `${100 / slideImages.length}%` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Arrows — visible on hover */}
              {hasSlides && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot indicators */}
              {hasSlides && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {slideImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrent(idx);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        idx === current
                          ? "w-4 h-1.5 bg-white shadow"
                          : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div
              role="img"
              aria-label={`${project.title} preview`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center" aria-hidden="true">
                <svg className="w-8 h-8 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-500 pointer-events-none" aria-hidden="true" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4" aria-label="Project tags">
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} label={tag} variant="outline" />
            ))}
          </div>

          <h3 className="text-xl font-semibold text-zinc-900 mb-2 leading-tight group-hover:text-zinc-600 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">{project.timeline}</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 group-hover:gap-2.5 transition-all duration-300" aria-hidden="true">
              View case study
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
