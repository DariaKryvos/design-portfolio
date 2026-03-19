import Link from "next/link";
import { Shield, Code, Users, Target, Heart, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Who We Are",
  description:
    "Megokruto is a digital agency that builds websites, apps, and brands. We also keep everything safe from hackers. Based in The Netherlands.",
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-40 md:pb-24">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
          About Us
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4 sm:mb-6">
          Who
          <br />
          <span className="text-gray-500">we are.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          We're a team that builds websites, apps, and brands. We also keep
          everything safe from hackers. That's what we do, start to finish.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-5 text-sm md:text-base">
              Megokruto is a digital agency. That means we build stuff on the
              internet for businesses. Websites, apps, online stores, logos,
              social media, and security against hackers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-5 text-sm md:text-base">
              You tell us what you need, and we do everything: we design it,
              build it, put it online, and help you grow. You don't need to talk
              to 5 different companies. We're your one stop.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We've built things for the Dutch government, hospitals, banks, and
              gaming companies. We know what we're doing.
            </p>
          </div>

          <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            {[
              { value: "+65k", label: "People use what we built" },
              { value: "+1.5b", label: "Data points handled" },
              { value: "5+", label: "Different industries" },
              { value: "99.9%", label: "Our stuff stays online" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
          <div className="grid md:grid-cols-5 gap-8 sm:gap-10 md:gap-16 items-start">
            <div className="md:col-span-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
                The Founder
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                The person behind it all
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm md:text-base">
                A software developer who builds websites, apps, and online
                platforms. Has worked with big companies and governments across
                different industries for years.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm md:text-base">
                Focused on building things that work well, look good, are fast,
                and don't break. That's the standard for every project.
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
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-5">
                {[
                  { label: "What I do", value: "Build websites and apps" },
                  { label: "Cloud", value: "AWS, Azure, Google Cloud" },
                  {
                    label: "Worked with",
                    value: "Government, hospitals, banks, gaming",
                  },
                  {
                    label: "Focus",
                    value: "Fast, safe, and reliable software",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-0.5 sm:mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-white font-medium">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              What drives us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: "We Don't Rush",
                desc: "We take on fewer projects so we can do a really good job on each one. No cutting corners.",
              },
              {
                icon: Shield,
                title: "Safe From Hackers",
                desc: "Everything we build is protected. Your data, your customers' data, all of it. Safety is built in from the start.",
              },
              {
                icon: Heart,
                title: "We Stick Around",
                desc: "We don't disappear after we build your stuff. We stay and help you keep it running, fix things, and grow.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-400/10 flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon
                    size={16}
                    className="text-orange-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Want to work with us?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm md:text-base">
            Need a website, an app, a logo, or all of it? Just reach out and
            tell us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="pill-button text-gray-400 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
