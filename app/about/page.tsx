import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "UX/UI Designer with 7 years of experience in complex systems, healthcare, and government digital services. Based in the Netherlands.",
  alternates: { canonical: "https://daria-ux.vercel.app/about" },
  openGraph: { url: "https://daria-ux.vercel.app/about" },
};

const sopraPlacements = [
  {
    period: "Apr 2024 — Jul 2025",
    role: "UX Researcher & Learning Experience Designer",
    company: "ProRail · Utrecht, NL",
    bullets: [
      "Designed an event-driven UX system for rail-traffic controllers; reduced expected work-related stress by up to 40%.",
      "Authored ProRail's UX strategy through 2030.",
      "Led cross-functional workshops and mentored junior designers across two parallel teams.",
      "Built AI-assisted research tooling (ChatGPT, Figma AI) where it removed cognitive overhead — not where it was trendy.",
    ],
  },
  {
    period: "Aug 2022 — Feb 2024",
    role: "UX/UI Engineer",
    company: "Ministerie van VWS · The Hague, NL",
    bullets: [
      "Shipped the national COVID-19 dashboard coronadashboard.rijksoverheid.nl used by millions.",
      "Translated complex epidemiological data into plain interfaces; usability studies with low-literacy and screen-reader users.",
      "Designed reusable chart and table patterns for the dashboard's design system.",
    ],
  },
  {
    period: "Feb 2022 — Apr 2022",
    role: "UX Researcher / UX Engineer",
    company: "UMCG ambulancezorg · Groningen, NL",
    bullets: [
      "Three-month research engagement on a high-stakes ambulance-care workflow.",
      "Shadowed clinical staff; tested low-fi prototypes against real clinical scenarios.",
    ],
  },
];

const work = [
  {
    period: "Dec 2019 — Jan 2022",
    role: "Career break · career transition into UX",
    company: "Netherlands",
    bullets: [
      "Moved from the Philippines to the Netherlands, became a parent, and re-specialised into UX research and design.",
    ],
  },
  {
    period: "Dec 2017 — Nov 2019",
    role: "User Experience Designer",
    company: "Asia Gaming (Intech-group.com) · Manila, Philippines",
    bullets: [
      "Designed campaign landing pages, user flows, and microcopy for a Chinese online gaming platform.",
      "Ran usability testing and competitor research to optimise conversion and engagement.",
      "Where the conversion-and-microcopy instincts I still use every week were sharpened.",
    ],
  },
];

const education = [
  {
    school: "Donetsk National Technical University",
    degrees: [
      {
        field: "Media system programming — Computer design",
        qualification: "Bachelor's degree",
        location: "Donetsk, Ukraine",
        period: "2008 — 2011",
      },
      {
        field: "Computer ecological-economic and Computer Science",
        qualification: "Master's degree",
        location: "Donetsk, Ukraine",
        period: "2011 — 2012",
      },
    ],
  },
  {
    school: "Language Institute Regina Coeli",
    degrees: [
      {
        field: "Dutch / Flemish Language",
        qualification: "Certificate",
        location: "Netherlands",
        period: "Feb 2024",
      },
    ],
  },
];

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-xs text-zinc-400 tabular-nums">{num}</span>
      <span className="text-sm font-semibold text-zinc-900">{title}</span>
      <div className="flex-1 border-t border-zinc-300" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-20 md:pb-32">

      {/* 01 About */}
      <section className="mb-20">
        <SectionHeader num="01" title="About" />
        <div className="flex gap-8 items-start mb-6">
          <div
            className="rounded-2xl overflow-hidden shrink-0"
            style={{ width: 120, height: 120 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/myphoto.jpeg"
              alt="Daria Kryvosheieva"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
            <p>
              UX designer with seven years across SaaS, eCommerce, games,
              dashboards, and public-sector systems. Computer science background.
              Currently at Sopra Steria and open to work.
            </p>
            <p>
              I lived in Manila and Kyiv before settling in Almere. I care about
              the reasoning behind decisions as much as the decisions themselves —
              a design that can&apos;t be explained can&apos;t be improved.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Work */}
      <section className="mb-20">
        <SectionHeader num="02" title="Work" />
        <div className="space-y-12">

          {/* Sopra Steria — parent */}
          <div className="grid grid-cols-[160px_1fr] gap-6 items-start">
            <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">Feb 2022 — Present</p>
            <div>
              <p className="text-sm font-bold text-zinc-900 leading-snug mb-0.5">Software Engineer / UX Designer</p>
              <p className="text-xs text-zinc-500 mb-3">Sopra Steria · Nieuwegein, NL · Full-time</p>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                Consulting role — embedded as UX designer across Dutch public-sector clients in healthcare, government, and rail.
              </p>

              {/* Client placements nested under Sopra Steria */}
              <div className="border-l-2 border-zinc-200 pl-5 space-y-10">
                {sopraPlacements.map((job) => (
                  <div key={job.role + job.period}>
                    <p className="text-xs text-zinc-400 mb-1">{job.period}</p>
                    <p className="text-sm font-bold text-zinc-900 leading-snug mb-0.5">{job.role}</p>
                    <p className="text-xs text-zinc-500 mb-3">{job.company}</p>
                    <ul className="space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-zinc-600 leading-relaxed">
                          <span className="text-zinc-400 shrink-0 mt-0.5">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other jobs */}
          {work.map((job) => (
            <div key={job.role + job.period} className="grid grid-cols-[160px_1fr] gap-6 items-start">
              <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">{job.period}</p>
              <div>
                <p className="text-sm font-bold text-zinc-900 leading-snug mb-0.5">{job.role}</p>
                <p className="text-xs text-zinc-500 mb-3">{job.company}</p>
                {job.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-zinc-600 leading-relaxed">
                        <span className="text-zinc-400 shrink-0 mt-0.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 Education */}
      <section className="mb-20">
        <SectionHeader num="03" title="Education" />
        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.school}>
              <p className="text-sm font-bold text-zinc-900 mb-3">{edu.school}</p>
              <div className="space-y-4">
                {edu.degrees.map((d) => (
                  <div key={d.period}>
                    <p className="text-sm text-zinc-700 leading-snug">
                      {d.field}{" "}
                      <span className="text-zinc-400">({d.qualification})</span>
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">{d.location} · {d.period}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 Skills */}
      <section className="mb-20">
        <SectionHeader num="04" title="Skills" />
        <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
          <p>
            User interviews, usability testing, IA, interaction design,
            prototyping, design systems, data visualisation, and plain-language
            UX writing across SaaS, eCommerce, games, healthcare, and
            government. WCAG 2.2 AA in the first wireframe, not the last sprint.
            Figma, FigJam, Miro, Maze, ChatGPT, and HTML/CSS where it speeds
            delivery.
          </p>
          <p>
            Prompt-engineering for image generation models (Midjourney, Stable Diffusion) — iterating on outputs systematically to reach production-quality visual assets.
            AI-powered Figma plugins including Magician and Relume for accelerating ideation and component generation.
            Experience creating and contributing to AI-assisted design systems and component libraries.
          </p>
          <p>
            English (professional), Dutch (working), Ukrainian (native), Russian
            (native).
          </p>
        </div>
      </section>

      {/* 05 References */}
      <section className="mb-16">
        <SectionHeader num="05" title="References" />
        <p className="text-sm text-zinc-600 leading-relaxed">
          Available on request. Happy to put you in touch with leads at Sopra
          Steria, ProRail, the Ministerie van VWS, or UMCG.
        </p>
      </section>

      {/* Footer note */}
      <p className="text-xs text-zinc-400 text-center">
        Last updated May 2026
      </p>
    </div>
  );
}
