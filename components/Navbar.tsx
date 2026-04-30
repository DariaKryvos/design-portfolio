"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Daria Kryvosheieva — home"
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors duration-200"
        >
          Daria Kryvosheieva
        </Link>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  isActive(href)
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          ref={menuButtonRef}
          className="md:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t border-zinc-100 px-6 py-4"
        >
          <ul className="flex flex-col gap-4" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block text-sm py-1 transition-colors duration-200 ${
                    isActive(href)
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
