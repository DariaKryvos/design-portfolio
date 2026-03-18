import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
          Let&apos;s start
          <br />
          <span className="text-gray-500">something great.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          Have a project in mind? Need a complete digital solution? Reach out and
          let&apos;s discuss how we can help.
        </p>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="mailto:megokruto@gmail.com"
            className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 group hover:border-orange-400/20"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4 group-hover:bg-orange-400/20 transition-colors">
              <Mail size={18} className="text-orange-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Email</h3>
            <p className="text-sm text-gray-400">megokruto@gmail.com</p>
          </a>

          <a
            href="tel:+31627586965"
            className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 group hover:border-orange-400/20"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center mb-4 group-hover:bg-orange-400/20 transition-colors">
              <Phone size={18} className="text-orange-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Phone</h3>
            <p className="text-sm text-gray-400">+31 6 27 58 69 65</p>
          </a>

          <a
            href="https://wa.me/31627586965"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 group hover:border-[#25D366]/20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={18} className="text-[#25D366]" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-400">Quick response</p>
          </a>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <MapPin size={18} className="text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Location</h3>
            <p className="text-sm text-gray-400">The Netherlands</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              What to expect
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              From message to kickoff
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Send us a message via email, phone, or WhatsApp. Tell us about your project, timeline, and budget.",
              },
              {
                step: "02",
                title: "Discovery Call",
                desc: "We'll schedule a free 30-minute call to understand your needs, discuss the approach, and answer questions.",
              },
              {
                step: "03",
                title: "Proposal & Kickoff",
                desc: "You'll receive a clear proposal with scope, timeline, and pricing. Once approved, we start building.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 md:p-8 relative">
                <div className="text-3xl font-bold text-white/10 mb-3">{item.step}</div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services reminder */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              What we can help with
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Social Media",
                "Branding",
                "Cybersecurity",
                "UI/UX Design",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="pill-button text-gray-400 text-xs md:text-sm hover:text-orange-400 hover:border-orange-400/30 transition-all"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={16} className="text-orange-400" />
            <span className="text-sm text-gray-400">Usually respond within 24 hours</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready when you are.
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            No commitment needed - just a conversation about what you&apos;re building and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:megokruto@gmail.com" className="pill-button-primary text-center inline-flex items-center justify-center gap-2">
              Send an Email <ArrowRight size={14} />
            </a>
            <a href="https://wa.me/31627586965" target="_blank" rel="noopener noreferrer" className="pill-button text-gray-400 text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
