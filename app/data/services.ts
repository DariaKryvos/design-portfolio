import {
  Globe,
  Smartphone,
  Share2,
  Palette,
  Shield,
  Layers,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: typeof Globe;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Websites that convert",
    description:
      "Custom-built websites and platforms engineered for performance, SEO, and conversion. From landing pages to complex web applications - we build it all with modern frameworks and clean code.",
    features: [
      "Custom website design & development",
      "E-commerce platforms",
      "Progressive Web Apps (PWAs)",
      "CMS integration",
      "Performance optimization",
      "SEO-first architecture",
    ],
    icon: Globe,
  },
  {
    id: "applications",
    title: "Web & Mobile Apps",
    tagline: "Full-stack applications",
    description:
      "End-to-end application development from architecture to deployment. We build scalable, secure applications that serve millions of users across web and mobile platforms.",
    features: [
      "iOS & Android native apps",
      "Cross-platform development",
      "SaaS product development",
      "API design & integration",
      "Cloud infrastructure (AWS, Azure, GCP)",
      "Real-time applications",
    ],
    icon: Smartphone,
  },
  {
    id: "social-media",
    title: "Social Media Management",
    tagline: "Grow your presence",
    description:
      "Strategic social media management that builds communities and drives engagement. We handle everything from content creation to analytics and paid advertising.",
    features: [
      "Content strategy & calendar",
      "Community management",
      "Paid advertising (Meta, Google, LinkedIn)",
      "Analytics & reporting",
      "Influencer partnerships",
      "Brand voice development",
    ],
    icon: Share2,
  },
  {
    id: "branding",
    title: "Branding & Identity",
    tagline: "Stand out, stay remembered",
    description:
      "Complete brand identity systems that tell your story and connect with your audience. From logo design to comprehensive brand guidelines that ensure consistency everywhere.",
    features: [
      "Logo design & visual identity",
      "Brand strategy & positioning",
      "Brand guidelines & style guides",
      "Packaging design",
      "Marketing collateral",
      "Brand refresh & rebranding",
    ],
    icon: Palette,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect your digital assets",
    description:
      "Comprehensive security solutions to protect your data, infrastructure, and reputation. We identify vulnerabilities before attackers do and implement robust defenses.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Secure architecture design",
      "Compliance (GDPR, ISO 27001)",
      "Incident response planning",
      "Security monitoring & alerts",
    ],
    icon: Shield,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Design that users love",
    description:
      "User-centered design that balances aesthetics with functionality. We create intuitive interfaces backed by research, testing, and proven design principles.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Interface design",
      "Design systems",
      "Usability testing",
      "Accessibility (WCAG)",
    ],
    icon: Layers,
  },
];
