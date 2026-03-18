import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Shield,
  Globe,
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const experience = [
  {
    role: "Founder & Lead Developer",
    company: "Megokruto",
    period: "2023 - Present",
    description:
      "Full-service digital agency delivering web, apps, branding, social media, and cybersecurity. Leading end-to-end project delivery for clients across government, healthcare, finance, and gaming.",
    highlights: [
      "Built and launched 7+ production applications",
      "Managed client relationships across 5+ industries",
      "Established security-first development workflows",
    ],
  },
  {
    role: "Software Engineer",
    company: "Sopra Steria",
    period: "2021 - 2023",
    description:
      "Full-stack development on enterprise applications for major Dutch organizations. Worked on government and infrastructure projects with strict compliance requirements.",
    highlights: [
      "Delivered National Health Dashboard for Ministerie van VWS",
      "Built monitoring systems for ProRail",
      "Developed internal tools and event platforms",
    ],
  },
  {
    role: "Software Developer",
    company: "Asia Gaming",
    period: "2020 - 2021",
    description:
      "Developed real-time gaming platforms handling thousands of concurrent users. Focused on performance optimization, secure financial transactions, and UI/UX improvements.",
    highlights: [
      "Engineered high-performance real-time platform",
      "Reduced response times to sub-second levels",
      "Led complete UI/UX redesign initiative",
    ],
  },
];

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Vue.js"],
  "Backend": ["Node.js", "Python", "Java", ".NET", "REST APIs", "GraphQL"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "CI/CD", "Kubernetes"],
  "Security": ["Penetration Testing", "GDPR Compliance", "ISO 27001", "Secure Architecture"],
  "Design": ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Prototyping"],
  "Other": ["Agile/Scrum", "Project Management", "Git", "PostgreSQL", "MongoDB", "Redis"],
};

const education = [
  {
    degree: "Bachelor of Science - Software Engineering",
    school: "University of Applied Sciences",
    period: "2017 - 2021",
    details: "Focus on full-stack development, cloud architecture, and software design patterns.",
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Certified Ethical Hacker (CEH)",
  "Scrum Master (PSM I)",
];

export default function CV() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Resume
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
          Daria
          <br />
          <span className="text-gray-500">Kryvosheieva</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed mb-6">
          Software engineer and founder specializing in full-stack development, cloud architecture, and secure scalable systems.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1.5"><MapPin size={14} /> The Netherlands</span>
          <span className="flex items-center gap-1.5"><Mail size={14} /> megokruto@gmail.com</span>
          <span className="flex items-center gap-1.5"><Phone size={14} /> +31 6 27 58 69 65</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/CV%20Daria%20Kryvosheieva.pdf"
            download
            className="pill-button-primary text-center inline-flex items-center justify-center gap-2"
          >
            <Download size={14} /> Download PDF
          </a>
          <Link href="/contact" className="pill-button text-gray-400 text-center">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase size={20} className="text-orange-400" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-sm text-orange-400/70">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                      <ArrowRight size={12} className="text-orange-400/60 mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-10">
            <Code size={20} className="text-orange-400" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass-card rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={20} className="text-orange-400" strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
              </div>
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h3 className="text-base md:text-lg font-semibold text-white">{edu.degree}</h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</span>
                  </div>
                  <p className="text-sm text-orange-400/70 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Shield size={20} className="text-orange-400" strokeWidth={1.5} />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Certifications</h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="glass-card rounded-2xl p-5 md:p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-400/10 flex items-center justify-center shrink-0">
                      <Shield size={14} className="text-orange-400" />
                    </div>
                    <span className="text-sm md:text-base text-white font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Whether you have a project in mind or want to explore possibilities, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Get in Touch
            </Link>
            <Link href="/portfolio" className="pill-button text-gray-400 text-center">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
