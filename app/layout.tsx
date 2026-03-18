import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export const metadata = {
  title: "Megokruto - Digital Agency | Web, Apps, Branding, Security",
  description:
    "Full-service digital agency delivering web development, applications, social media management, branding, and cybersecurity. From concept to launch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0b] text-gray-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
