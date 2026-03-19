import Link from "next/link";
import BlobBackground from "./components/BlobBackground";
import {
  Globe,
  Smartphone,
  Share2,
  Palette,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShoppingBag,
  BarChart3,
  Monitor,
  Gamepad2,
  Train,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    desc: "We build websites that look great, load fast, and bring you customers.",
  },
  {
    icon: Smartphone,
    title: "Apps",
    desc: "We build apps for phones and the web. iPhone, Android, you name it.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "We run your Instagram, TikTok, and ads so you get more followers and sales.",
  },
  {
    icon: Palette,
    title: "Logos and Branding",
    desc: "We design your logo, colors, and style so people recognize your brand.",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "We protect your website and data from hackers. We find and fix weak spots.",
  },
  {
    icon: Layers,
    title: "Design",
    desc: "We make your website or app look good and easy to use for everyone.",
  },
];

const benefits = [
  {
    title: "We Do Everything",
    desc: "You don't need to hire 5 different companies. We handle it all: design, building, launching, and growing your project. One team, start to finish.",
  },
  {
    title: "Built Safe From Day One",
    desc: "We don't add security later. Every website and app we build is protected from hackers from the very beginning. Your data stays safe.",
  },
  {
    title: "We've Done This Before",
    desc: "We've built things for the Dutch government, hospitals, banks, and gaming companies. We know what works and what doesn't.",
  },
];

const clients = [
  { name: "Sopra Steria", logo: "/SopraSteria.png" },
  { name: "ProRail", logo: "/ProRail.svg" },
  { name: "Ministerie VWS", logo: "/Ministerie-VWS-logo.png" },
  { name: "Asia Gaming", logo: "/agaming.webp" },
];

export default function Home() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
        <BlobBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 w-full">
          {/* Main headline */}
          <div className="max-w-4xl">
            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-8xl  xl:text-[8rem] font-bold text-white leading-[0.9] tracking-tight">
              build
              <br />
              <span className="text-gray-500">your digital</span>
              <br />
              empire
            </h1>

            <p className="text-gray-300 mt-6 sm:mt-7 max-w-2xl text-[1.1rem] sm:text-xl md:text-2xl leading-relaxed">
              We make <span className="text-white font-semibold">websites</span>
              , <span className="text-white font-semibold">apps</span>,{" "}
              <span className="text-white font-semibold">online stores</span>,{" "}
              <span className="text-white font-semibold">social media</span>,{" "}
              <span className="text-white font-semibold">logos</span>, and{" "}
              <span className="text-white font-semibold">cybersecurity</span>.
            </p>

            <p className="text-gray-300 mt-3 sm:mt-4 max-w-lg text-sm md:text-base">
              You tell us what you need. We design it, build it, launch it, and
              grow it.
            </p>

            {/* CTA pills */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link href="/contact" className="pill-button-primary text-center">
                Get Started
              </Link>
              <Link
                href="/services"
                className="pill-button text-gray-300 text-center"
              >
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CLIENT LOGOS ========== */}
      <section className="relative py-6 sm:py-8 md:py-14 overflow-hidden border-y border-white/5">
        <p className="text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 sm:mb-6 md:mb-8">
          Trusted by
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clients, ...clients, ...clients, ...clients].map(
              (client, i) => (
                <img
                  key={`${client.name}-${i}`}
                  src={client.logo}
                  alt={client.name}
                  className="h-4 sm:h-5 md:h-8 lg:h-10 w-auto mx-4 sm:mx-6 md:mx-10 shrink-0 brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,106,0,0.5)]"
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Everything you need.
            <br />
            <span className="text-gray-500">Nothing extra.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 group transition-all duration-300 cursor-pointer"
            >
              <service.icon
                className="text-gray-500 group-hover:text-orange-400 transition-colors mb-4 sm:mb-6"
                size={24}
                strokeWidth={1.5}
              />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-sm text-gray-500 group-hover:text-orange-400 transition-colors">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
            Why choose us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why pick us?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== USE CASES ========== */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
              Use Cases
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              See what we built.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
              Real projects for real clients. Here's some of our work.
            </p>
          </div>

          {/* Featured case */}
          <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 group">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 aspect-[16/9] sm:aspect-[16/10] md:aspect-auto overflow-hidden relative">
                <img
                  src="/corona1.png"
                  alt="National Health Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6">
                  <span className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-orange-400/20 text-orange-400 border border-orange-400/30 backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:col-span-2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <BarChart3 size={14} className="text-orange-400" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-orange-400/70">
                    Ministerie van VWS
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                  National Health Dashboard
                </h3>
                <span className="text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4 block">
                  Web App / Data Visualization
                </span>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-5">
                  We built a live dashboard for the Dutch government that shows
                  health data for the whole country. Millions of data points,
                  updated in real time, used by the people who make the big
                  decisions.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["+1.5b data points", "99.9% uptime", "National scale"].map(
                    (r) => (
                      <span
                        key={r}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-400/10 text-orange-400/80 border border-orange-400/20"
                      >
                        {r}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Grid of cases */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                icon: Train,
                client: "ProRail",
                project: "Rail Monitoring Platform",
                category: "Web App / IoT",
                desc: "We built a system that watches the Dutch train tracks in real time. If something goes wrong, it sends an alert right away. Covers the entire train network.",
                results: [
                  "Live monitoring",
                  "Faster response",
                  "Full network coverage",
                ],
                image: "/prorail-1.png",
              },
              {
                icon: Gamepad2,
                client: "Asia Gaming",
                project: "Casino Gaming Platform",
                category: "Web App / Real-time",
                desc: "We built a gaming platform that handles thousands of players at the same time. Super fast, and all money transactions are safe and secure.",
                results: [
                  "1000s concurrent users",
                  "<1s response",
                  "Secure transactions",
                ],
                image: "/AG.jpg",
              },
              {
                icon: ShoppingBag,
                client: "Luxe & Co",
                project: "Premium E-commerce Store",
                category: "E-commerce / Branding",
                desc: "We built a fancy online shop where customers can customize products, pay safely, and stock updates automatically. Sales went up 180%.",
                results: [
                  "+180% conversion rate",
                  "3s avg. load time",
                  "+65k monthly visitors",
                ],
                image: "/Codecomedy.png",
              },
              {
                icon: TrendingUp,
                client: "FreshBite",
                project: "Social Media Growth Campaign",
                category: "Social Media / Content",
                desc: "We ran all social media for a food delivery startup. Started from zero, grew to 300k+ people seeing their posts every month on Instagram, TikTok, and LinkedIn.",
                results: [
                  "+300k impressions/mo",
                  "+240% engagement",
                  "50k followers in 6 months",
                ],
                image: "/reminderApp.png",
              },
            ].map((useCase) => (
              <div
                key={useCase.project}
                className="glass-card rounded-xl sm:rounded-2xl overflow-hidden group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={useCase.image}
                    alt={useCase.project}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <useCase.icon size={12} className="text-orange-400" />
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-orange-400/70">
                        {useCase.client}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                      {useCase.project}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="text-[10px] sm:text-xs text-gray-500 block mb-2 sm:mb-3">
                    {useCase.category}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">
                    {useCase.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {useCase.results.map((r) => (
                      <span
                        key={r}
                        className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-14">
            <Link
              href="/portfolio"
              className="pill-button text-gray-400 inline-flex items-center gap-2 hover:text-orange-400 hover:border-orange-400/30 transition-all"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      {/* <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              From A to Z
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "We Listen",
                desc: "You tell us what you need and what your business does",
              },
              {
                step: "02",
                title: "We Plan",
                desc: "We figure out the best way to build it and how long it takes",
              },
              {
                step: "03",
                title: "We Design",
                desc: "We make it look good and easy to use",
              },
              {
                step: "04",
                title: "We Build",
                desc: "We write the code, test everything, and make sure it works",
              },
              {
                step: "05",
                title: "We Launch",
                desc: "We put it live, watch it, and help you grow",
              },
            ].map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white/20 mb-2 sm:mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ========== CTA ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          Ready to start?
        </h2>
        <p className="text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto text-sm md:text-base">
          Tell us what you need. We'll take care of the rest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="pill-button-primary text-sm font-medium"
          >
            {/* <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-400/10 text-orange-400/80 border border-orange-400/20"> */}
            Get in Touch
            {/* </span> */}
          </Link>
          <Link
            href="/portfolio"
            className="pill-button text-gray-400 text-center"
          >
            View Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
