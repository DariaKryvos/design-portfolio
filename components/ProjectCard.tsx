"use client";

import Link from "next/link";
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
      className="group flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-zinc-100 mb-5">

        {/* Slide strip */}
        {slideImages.length > 0 ? (
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
        ) : (
          <div className="absolute inset-0 bg-zinc-200" />
        )}

        {/* Slide counter */}
        {hasSlides && (
          <span className="absolute top-3 right-3 z-10 text-[11px] font-mono text-white/70 tabular-nums select-none">
            {String(current + 1).padStart(2, "0")} / {String(slideImages.length).padStart(2, "0")}
          </span>
        )}

        {/* Arrows */}
        {hasSlides && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/40"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/40"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {hasSlides && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {slideImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(idx); }}
                className={`rounded-full transition-all duration-300 ${
                  idx === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-2 group-hover:text-zinc-600 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed">
        {project.description}
      </p>
    </Link>
  );
}
