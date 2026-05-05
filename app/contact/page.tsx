import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Daria Kryvosheieva",
  description: "Get in touch with Daria Kryvosheieva to discuss your UX/UI design project.",
  alternates: { canonical: "https://daria-ux.vercel.app/contact" },
  openGraph: { url: "https://daria-ux.vercel.app/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <section className="pt-20 md:pt-28 pb-24">

        {/* Heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
          Contact
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 leading-[1.05] tracking-tight mb-16">
          Let&apos;s talk<br />
          <em className="not-italic text-zinc-400">about your project.</em>
        </h1>

        {/* All details in one compact block */}
        <div className="border-t border-zinc-100">

          {/* Email */}
          <a
            href="mailto:krivosheevadarya@gmail.com"
            className="group flex items-center justify-between py-5 border-b border-zinc-100 hover:bg-zinc-50/60 -mx-2 px-2 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 w-24 shrink-0">Email</span>
              <span className="text-base font-medium text-zinc-900">krivosheevadarya@gmail.com</span>
            </div>
            <svg className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daria-kryvosheieva-3411a51ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 border-b border-zinc-100 hover:bg-zinc-50/60 -mx-2 px-2 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 w-24 shrink-0">LinkedIn</span>
              <span className="text-base font-medium text-zinc-900">Daria Kryvosheieva</span>
            </div>
            <svg className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Location */}
          <div className="flex items-center justify-between py-5 border-b border-zinc-100">
            <div className="flex items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 w-24 shrink-0">Location</span>
              <span className="text-base font-medium text-zinc-900">Netherlands · (Remote worldwide)</span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-between py-5 border-b border-zinc-100">
            <div className="flex items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 w-24 shrink-0">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-base font-medium text-zinc-900">Available for new projects</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
