import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="border-t border-zinc-100 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-zinc-900 mb-1">
              Daria Kryvosheieva
            </p>
            <p className="text-xs text-zinc-600">
              UX/UI Designer · Based in the Netherlands
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:krivosheevadarya@gmail.com"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/daria-kryvosheieva-3411a51ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100">
          <p className="text-xs text-zinc-500">
            © {year} Daria Kryvosheieva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
