import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const BASE_URL = "https://daria-ux.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Daria Kryvosheieva — UX/UI Designer",
    template: "%s · Daria Kryvosheieva",
  },
  description:
    "UX/UI Designer specialising in complex systems, healthcare, and government digital services. Based in the Netherlands.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "Portfolio",
    "Healthcare UX",
    "Government Design",
    "Netherlands",
  ],
  authors: [{ name: "Daria Kryvosheieva", url: BASE_URL }],
  creator: "Daria Kryvosheieva",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Daria Kryvosheieva — UX/UI Designer",
    title: "Daria Kryvosheieva — UX/UI Designer",
    description:
      "UX/UI Designer specialising in complex systems, healthcare, and government digital services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daria Kryvosheieva — UX/UI Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daria Kryvosheieva — UX/UI Designer",
    description:
      "UX/UI Designer specialising in complex systems, healthcare, and government digital services.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-gray-100 text-zinc-900 font-[family-name:var(--font-geist)] min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
