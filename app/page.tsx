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
    title: "Web Development",
    desc: "Custom websites, platforms & e-commerce built for performance and conversion.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    desc: "Full-stack applications from architecture to deployment, web and mobile.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Strategic management, content creation, paid ads, and community growth.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logo design, brand strategy, visual systems, and guidelines that last.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security audits, penetration testing, compliance, and secure architecture.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "User research, wireframing, prototyping, and design systems that scale.",
  },
];

const benefits = [
  {
    title: "End-to-End Delivery",
    desc: "From initial concept and strategy through design, development, and launch - we handle every step so you don't have to coordinate multiple vendors.",
  },
  {
    title: "Proactive Security",
    desc: "Security isn't an afterthought. We build with encryption, access controls, and monitoring baked in from day one to safeguard your data and users.",
  },
  {
    title: "Expertise & Industry Knowledge",
    desc: "Our team has delivered solutions for government, healthcare, finance, and gaming - bringing deep domain expertise to every project.",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BlobBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Main headline */}
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
              build
              <br />
              <span className="text-gray-500">your digital</span>
              <br />
              empire
            </h1>

            <p className="text-gray-300 mt-8 max-w-2xl text-lg md:text-xl leading-relaxed">
              We make <span className="text-white font-semibold">websites</span>,{" "}
              <span className="text-white font-semibold">apps</span>,{" "}
              <span className="text-white font-semibold">online stores</span>,{" "}
              <span className="text-white font-semibold">social media</span>,{" "}
              <span className="text-white font-semibold">logos</span>, and keep it all{" "}
              <span className="text-white font-semibold">safe from hackers</span>.
            </p>

            <p className="text-gray-500 mt-4 max-w-lg text-sm md:text-base">
              You tell us what you need. We design it, build it, launch it, and grow it.
            </p>

            {/* CTA pills */}
            <div className="flex gap-4 mt-8">
              <Link href="/contact" className="pill-button-primary">
                Get Started
              </Link>
              <Link href="/services" className="pill-button text-gray-400">
                What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CLIENT LOGOS ========== */}
      <section className="relative py-8 md:py-14 overflow-hidden border-y border-white/5">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 md:mb-8">
          Trusted by
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={client.logo}
                alt={client.name}
                className="h-5 md:h-8 lg:h-10 w-auto mx-6 md:mx-10 shrink-0 brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,106,0,0.5)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything you need.
            <br />
            <span className="text-gray-500">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="glass-card rounded-2xl p-8 group transition-all duration-300 cursor-pointer"
            >
              <service.icon
                className="text-gray-500 group-hover:text-orange-400 transition-colors mb-6"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-gray-500 group-hover:text-orange-400 transition-colors">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Why choose us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl p-8 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
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
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Real results, real clients.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
              From government dashboards to e-commerce platforms and viral social campaigns.
            </p>
          </div>

          {/* Featured case */}
          <div className="glass-card rounded-2xl overflow-hidden mb-6 group">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                <img
                  src="/corona1.png"
                  alt="National Health Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-orange-400/20 text-orange-400 border border-orange-400/30 backdrop-blur-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:col-span-2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 size={14} className="text-orange-400" />
                  <span className="text-xs uppercase tracking-widest text-orange-400/70">
                    Ministerie van VWS
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  National Health Dashboard
                </h3>
                <span className="text-xs text-gray-500 mb-4 block">Web App / Data Visualization</span>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  Built a national real-time health dashboard processing millions of data points daily with live visualizations for government decision-making across the Netherlands.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["+1.5b data points", "99.9% uptime", "National scale"].map((r) => (
                    <span key={r} className="text-xs px-3 py-1 rounded-full bg-orange-400/10 text-orange-400/80 border border-orange-400/20">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid of cases */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: Train,
                client: "ProRail",
                project: "Rail Monitoring Platform",
                category: "Web App / IoT",
                desc: "Real-time railway infrastructure monitoring with live data feeds, alerting systems, and interactive maps covering the entire Dutch rail network.",
                results: ["Live monitoring", "Faster response", "Full network coverage"],
                image: "/prorail-1.png",
              },
              {
                icon: Gamepad2,
                client: "Asia Gaming",
                project: "Casino Gaming Platform",
                category: "Web App / Real-time",
                desc: "High-performance gaming platform handling thousands of concurrent users with sub-second response times and robust financial transaction security.",
                results: ["1000s concurrent users", "<1s response", "Secure transactions"],
                image: "/AG.jpg",
              },
              {
                icon: ShoppingBag,
                client: "Luxe & Co",
                project: "Premium E-commerce Store",
                category: "E-commerce / Branding",
                desc: "End-to-end luxury fashion e-commerce platform with custom product configurator, integrated payment systems, and automated inventory management.",
                results: ["+180% conversion rate", "3s avg. load time", "+65k monthly visitors"],
                image: "/Codecomedy.png",
              },
              {
                icon: TrendingUp,
                client: "FreshBite",
                project: "Social Media Growth Campaign",
                category: "Social Media / Content",
                desc: "Complete social media strategy and content production for a food delivery startup. Grew organic reach from zero to 300k+ monthly impressions across Instagram, TikTok, and LinkedIn.",
                results: ["+300k impressions/mo", "+240% engagement", "50k followers in 6 months"],
                image: "/reminderApp.png",
              },
            ].map((useCase, i) => (
              <div key={useCase.project} className="glass-card rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={useCase.image}
                    alt={useCase.project}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <useCase.icon size={12} className="text-orange-400" />
                      <span className="text-xs uppercase tracking-widest text-orange-400/70">{useCase.client}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white">{useCase.project}</h3>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-xs text-gray-500 block mb-3">{useCase.category}</span>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {useCase.results.map((r) => (
                      <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Link href="/portfolio" className="pill-button text-gray-400 inline-flex items-center gap-2 hover:text-orange-400 hover:border-orange-400/30 transition-all">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              How we work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              From A to Z
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn your business, goals, and audience",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Plan the approach, tech stack, and timeline",
              },
              {
                step: "03",
                title: "Design",
                desc: "Craft the visual identity and user experience",
              },
              {
                step: "04",
                title: "Build",
                desc: "Develop, test, and refine every detail",
              },
              {
                step: "05",
                title: "Launch & Grow",
                desc: "Deploy, monitor, optimize, and scale",
              },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <div className="text-3xl font-bold text-white/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to build?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Let&apos;s discuss your project and find the right solution for your
          business.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="pill-button-primary">
            Get in Touch
          </Link>
          <Link href="/portfolio" className="pill-button text-gray-400">
            View Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
