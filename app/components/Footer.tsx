import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wider mb-3 sm:mb-4">
              MEGOKRUTO
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
              We build websites, apps, online stores, logos, and run social
              media. We also keep everything safe from hackers. That's it.
              That's what we do.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 sm:mb-4">
              Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={12} className="shrink-0" />
                <a
                  href="mailto:megokruto@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  megokruto@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="shrink-0" />
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

        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Megokruto. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
