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
  const [hovered, setHovered] = useState(false);

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

  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View case study: ${project.title}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image block ── */}
      <div
        className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-5"
        style={{
          boxShadow: hovered
            ? "0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.07)"
            : "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Project index */}
        <span className="absolute top-4 left-4 z-10 font-mono text-[11px] text-white/60 select-none">
          {num}
        </span>

        {/* Sliding strip */}
        {slideImages.length > 0 ? (
          <>
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
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

            {hasSlides && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {slideImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(idx); }}
                      className={`rounded-full transition-all duration-300 ${
                        idx === current ? "w-4 h-1.5 bg-white shadow" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* ── Text block — visually separate from image ── */}
      <div className="px-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} variant="outline" />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-zinc-900 leading-snug mb-2 group-hover:text-zinc-500 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-500 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-400">{project.timeline}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 group-hover:gap-3 transition-all duration-300">
            View case study
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
