import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Daria Kryvosheieva to discuss your UX/UI design project.",
  alternates: {
    canonical: "https://daria-ux.vercel.app/contact",
  },
  openGraph: {
    url: "https://daria-ux.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <section aria-labelledby="contact-heading" className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            Contact
          </p>
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6"
          >
            Let&apos;s talk about your project.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            I&apos;m currently available for new projects. Whether you have a
            clear brief or just an interesting problem, I&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="pb-24" aria-label="Contact information and form">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                  Email
                </p>
                <a
                  href="mailto:krivosheevadarya@gmail.com"
                  className="text-md text-zinc-900 hover:text-zinc-600 transition-colors duration-200 break-all underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600"
                >
                  krivosheevadarya@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                  Location
                </p>
                <p className="text-md text-zinc-600">
                  Netherlands
                  <br />
                  Available for remote work worldwide
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                  Connect
                </p>
                <ul className="flex flex-col gap-2" role="list">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/daria-kryvosheieva-3411a51ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile (opens in new tab)"
                      className="text-md text-zinc-600 hover:text-zinc-900 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      LinkedIn
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dribbble profile (opens in new tab)"
                      className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      Dribbble
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <p className="text-md text-zinc-600">
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div> */}
        </div>
      </section>
    </div>
  );
}
