import Link from "next/link";
import { services } from "../data/services";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Our Services
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
          The complete
          <br />
          <span className="text-gray-500">digital package.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          From branding and design to development, marketing, and security - we
          deliver everything your business needs to thrive online.
        </p>
      </section>

      {/* Quick overview strip */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 md:gap-3 text-gray-500 hover:text-orange-400 transition-colors group"
              >
                <service.icon size={16} strokeWidth={1.5} className="shrink-0 group-hover:text-orange-400 transition-colors" />
                <span className="text-xs md:text-sm whitespace-nowrap">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-6 md:space-y-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-card rounded-2xl p-6 md:p-10 lg:p-12 transition-all duration-300 scroll-mt-24"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-400/10 flex items-center justify-center">
                      <service.icon
                        className="text-orange-400"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-orange-400/70 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right - features */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">
                    What&apos;s included
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <CheckCircle
                          size={16}
                          className="text-orange-400/60 mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us strip */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Why work with us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built different.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "No Templates",
                desc: "Every project is custom-built from scratch. No cookie-cutter solutions, no recycled designs.",
              },
              {
                title: "Security Baked In",
                desc: "We don't bolt security on at the end. Encryption, access controls, and monitoring from day one.",
              },
              {
                title: "One Team, A to Z",
                desc: "Strategy, design, development, launch, and growth - all under one roof. No vendor juggling.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 md:p-8">
                <Zap size={18} className="text-orange-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Tell us about your project and we&apos;ll craft the perfect solution
            - from A to Z.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Start a Project
            </Link>
            <Link href="/portfolio" className="pill-button text-gray-400 text-center">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
