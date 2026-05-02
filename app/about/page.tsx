import type { Metadata } from "next";
import Tag from "@/components/Tag";

export const metadata: Metadata = {
  title: "About",
  description:
    "UX/UI Designer with 4 years of experience in complex systems, healthcare, and government digital services. Based in the Netherlands.",
  alternates: {
    canonical: "https://daria-ux.vercel.app/about",
  },
  openGraph: {
    url: "https://daria-ux.vercel.app/about",
  },
};

const skills: Record<string, string[]> = {
  "UX Research": [
    "User Interviews",
    "Usability Testing",
    "Card Sorting",
    "Field Research",
    "Surveys",
    "Eye Tracking",
    "Analytics Review",
  ],
  "Design Practice": [
    "Information Architecture",
    "Interaction Design",
    "Prototyping",
    "Service Design",
    "Design Systems",
    "Accessibility (WCAG 2.1)",
  ],
  "Tools": [
    "Figma",
    "FigJam",
    "Miro",
    "Maze",
    "Hotjar",
    "FullStory",
    "Amplitude",
    "Axure",
  ],
  "Collaboration": [
    "Agile / Scrum",
    "Design Sprints",
    "Stakeholder Facilitation",
    "Developer Handoff",
    "Cross-functional Teams",
  ],
};

const experiences = [
  {
    company: "Sopra Steria",
    role: "UX/UI Designer",
    period: "2023 — Present",
    description:
      "Embedded in client teams across healthcare (UMCG), government (Ministry of VWS), and transport (ProRail). Led end-to-end design from discovery through delivery, managing stakeholder alignment and research operations.",
  },
  {
    company: "AGaming",
    role: "Product Designer",
    period: "2022 — 2023",
    description:
      "First designer on a competitive gaming platform. Built the design system from scratch, led onboarding redesign, and established UX research practice within the startup.",
  },
  {
    company: "Freelance",
    role: "UX Designer",
    period: "2021 — 2022",
    description:
      "Independent UX work for early-stage startups and SMEs. Delivered end-to-end product design for clients in e-commerce, fintech, and health tech.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <section aria-labelledby="about-heading" className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
              About me
            </p>
            <h1
              id="about-heading"
              className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-8"
            >
              I make complex systems feel approachable.
            </h1>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                I&apos;m a UX/UI designer with seven years of experience working
                on systems that genuinely matter — patient portals, government
                dashboards, railway disruption flows. The common thread is
                complexity: these are products where poor design has real
                consequences, and where the user is often stressed, time-pressed,
                or vulnerable.
              </p>
              <p>
                My process starts with deep research. I spend a lot of time
                understanding the mental models users already have before I start
                designing solutions. I find that most UX problems are actually
                communication problems — the product speaks in the language of
                its creators, not its users.
              </p>
              <p>
                I care about the reasoning behind design decisions as much as
                the decisions themselves. A design that can&apos;t be explained
                can&apos;t be improved, and a team that doesn&apos;t understand
                the &apos;why&apos; will undo good decisions as soon as they hit
                pressure. I design, but I also document, facilitate, and advocate.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div
              className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden"
              role="img"
              aria-label="Photo of Daria Kryvosheieva"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm text-zinc-600">
                  <img src="/myphoto.jpeg"/>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="py-16 md:py-24 border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              Skills
            </p>
            <h2 id="skills-heading" className="text-xl font-semibold text-zinc-900">
              What I bring
            </h2>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {items.map((skill) => (
                    <li key={skill}>
                      <Tag label={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-heading" className="py-16 md:py-24 border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              Experience
            </p>
            <h2 id="experience-heading" className="text-xl font-semibold text-zinc-900">
              Where I&apos;ve worked
            </h2>
          </div>
          <div className="md:col-span-9 space-y-10">
            {experiences.map((exp) => (
              <article key={exp.company} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6">
                <div className="sm:col-span-1">
                  <p className="text-xs text-zinc-500 mt-1">{exp.period}</p>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-sm font-semibold text-zinc-900 mb-0.5">
                    {exp.role}
                  </p>
                  <p className="text-xs text-zinc-600 mb-3">{exp.company}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section aria-labelledby="personal-heading" className="py-16 md:py-24 border-t border-zinc-100">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Outside of work
          </p>
          <h2 id="personal-heading" className="text-2xl font-semibold text-zinc-900 mb-6">
            The rest of the picture
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            I&apos;m based in the Netherlands, originally from Ukraine. I cycle
            everywhere, collect design books I don&apos;t always finish, and am
            quietly obsessed with wayfinding systems — airports, hospitals,
            transit networks. The places where good design is invisible and bad
            design causes real stress. That&apos;s where I feel most useful.
          </p>
        </div>
      </section> */}
    </div>
  );
}
