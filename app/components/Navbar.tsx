"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-wider text-white">
          MEGOKRUTO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="pill-button-primary text-sm font-medium"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6 bg-[#0a0a0b]/95 backdrop-blur-xl border-t border-white/5">
          <Link
            className="text-gray-300 hover:text-white transition-colors"
            href="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition-colors"
            href="/portfolio"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition-colors"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition-colors"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 text-gray-500 text-sm pt-2 border-t border-white/5">
            <Phone size={14} />
            <a href="tel:+31627586965">+31 6 27 58 69 65</a>
          </div>
        </div>
      )}
    </nav>
  );
}
