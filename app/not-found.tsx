import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 min-h-[70vh] flex items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6">
          Page not found.
        </h1>
        <p className="text-zinc-500 mb-10 max-w-sm leading-relaxed">
          This page doesn&apos;t exist — or it used to and has moved. Head back
          to see my work.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-700 transition-colors duration-200"
        >
          Back to work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
