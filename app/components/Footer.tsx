import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white tracking-wider mb-4">
              MEGOKRUTO
            </h3>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Full-service digital agency delivering end-to-end solutions. From
              concept to launch - web, apps, branding, social media, and
              cybersecurity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:megokruto@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  megokruto@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="tel:+31627586965"
                  className="hover:text-white transition-colors"
                >
                  +31 6 27 58 69 65
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Megokruto. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
