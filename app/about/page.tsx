import Link from "next/link";
import { Shield, Code, Users, Target, Heart, Rocket } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          About Us
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
          We build digital
          <br />
          <span className="text-gray-500">experiences.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          Full-service digital agency focused on building products that last -
          from first pixel to final deploy.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
              Megokruto is a full-service digital agency focused on building
              scalable digital products, brand identities, and secure
              infrastructure for startups and enterprises.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
              We specialize in modern web platforms, mobile applications, social
              media strategy, visual branding, and cybersecurity - delivering
              complete A-to-Z solutions so our clients can focus on what matters
              most: their business.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Our team has delivered solutions for government agencies,
              healthcare organizations, financial institutions, and gaming
              companies - bringing deep domain expertise to every engagement.
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <img
              src="/team.jpeg"
              alt="Megokruto team working together"
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: "+65k", label: "Users reached" },
              { value: "+1.5b", label: "Data points processed" },
              { value: "5+", label: "Industries served" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
            <div className="md:col-span-3">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                The Founder
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Engineering-driven leadership
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                A software engineer specializing in full-stack development, cloud
                architecture, and scalable systems. Over the years, working with
                organizations across multiple industries delivering modern digital
                platforms and enterprise applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                The focus is on building reliable systems, intuitive interfaces,
                and high-performance software that supports real business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/cv" className="pill-button-primary text-center">
                  View Resume
                </a>
                <a
                  href="/CV%20Daria%20Kryvosheieva.pdf"
                  download
                  className="pill-button text-gray-400 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 md:space-y-5">
                {[
                  { label: "Expertise", value: "Full-Stack Development" },
                  { label: "Cloud", value: "AWS, Azure, GCP" },
                  { label: "Industries", value: "Gov, Healthcare, Finance, Gaming" },
                  { label: "Focus", value: "Scalable & Secure Systems" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{item.label}</div>
                    <div className="text-sm md:text-base text-white font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              What drives us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: "Quality Over Quantity",
                desc: "We take on fewer projects to deliver exceptional results. Every pixel, every line of code, every strategy is crafted with care.",
              },
              {
                icon: Shield,
                title: "Security First",
                desc: "In everything we build, security is foundational - not an afterthought. Your data and your users' data deserve the highest protection.",
              },
              {
                icon: Heart,
                title: "Long-Term Partnership",
                desc: "We don't disappear after launch. We build lasting relationships, providing ongoing support, optimization, and growth strategy.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4">
                  <value.icon size={18} className="text-orange-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Whether you need a website, an app, a brand, or all of the above -
            we&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Get in Touch
            </Link>
            <Link href="/portfolio" className="pill-button text-gray-400 text-center">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
