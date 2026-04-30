interface CaseStudySectionProps {
  number?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function CaseStudySection({
  number,
  label,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="py-16 md:py-24 border-t border-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-8">
            {number && (
              <span className="text-xs font-mono text-zinc-500 mb-2 block" aria-hidden="true">
                {number}
              </span>
            )}
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 block mb-1">
              {label}
            </span>
            <h2 className="text-xl font-semibold text-zinc-900 leading-tight">
              {title}
            </h2>
          </div>
        </div>
        <div className="md:col-span-9 space-y-8">{children}</div>
      </div>
    </section>
  );
}
