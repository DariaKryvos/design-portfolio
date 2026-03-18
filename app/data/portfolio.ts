export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  year: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "national-health-dashboard",
    name: "National Health Dashboard",
    client: "Ministerie van VWS",
    category: "Web App",
    image: "/corona1.png",
    description: "Real-time national health data platform for government policy and decision-making.",
    fullDescription:
      "A mission-critical dashboard built for the Dutch Ministry of Health to aggregate and visualize national health data in real time. The platform processed over 1.5 billion data points and served as the primary analytics tool for policy makers across agencies.",
    challenge:
      "The Dutch government needed a centralized, real-time system to aggregate public health data from multiple sources and present it in an actionable format for policy makers across agencies.",
    solution:
      "We built a high-performance web application with live data pipelines, interactive charts, and drill-down capabilities. The system was designed for 99.9% uptime with automatic failover and could handle millions of concurrent data updates.",
    results: ["+1.5b data points processed", "99.9% uptime", "National scale deployment", "Used by government decision-makers"],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js", "Docker"],
    year: "2022",
  },
  {
    id: "prorail-monitoring",
    name: "Monitoring App Dashboard",
    client: "ProRail",
    category: "Web App",
    image: "/prorail-1.png",
    description: "Infrastructure monitoring platform for the Dutch railway network.",
    fullDescription:
      "A comprehensive monitoring platform built for ProRail to provide real-time visibility into the Dutch railway infrastructure. The system detects anomalies before they escalate, reducing downtime and improving safety across the network.",
    challenge:
      "ProRail needed real-time visibility into their vast railway infrastructure to detect potential issues before they caused delays or safety incidents affecting millions of daily commuters.",
    solution:
      "Developed a monitoring platform with live data feeds from IoT sensors, intelligent alerting systems, and interactive maps covering the entire Dutch rail network. The dashboard provides instant visibility into track conditions, signal status, and maintenance needs.",
    results: ["Real-time infrastructure monitoring", "Reduced incident response time", "Full network coverage", "Live IoT data integration"],
    tech: ["React", "TypeScript", ".NET", "Azure", "SignalR", "Leaflet"],
    year: "2022",
  },
  {
    id: "code-comedy",
    name: "Code & Comedy",
    client: "Sopra Steria",
    category: "Web Development",
    image: "/Codecomedy.png",
    description: "Internal event platform blending tech talks with entertainment.",
    fullDescription:
      "A custom-built internal platform for Sopra Steria that combined technical presentations with entertainment events. The platform handled event registration, live streaming, and post-event content sharing across the organization.",
    challenge:
      "Sopra Steria wanted to boost internal knowledge sharing and team engagement by creating a platform that made tech talks feel less like lectures and more like events people actually wanted to attend.",
    solution:
      "Built a sleek event platform with registration, calendar integration, live stream embedding, speaker profiles, and a content library for recordings. The design was intentionally playful to match the Code & Comedy brand.",
    results: ["Increased event attendance by 3x", "200+ employees engaged", "Streamlined event management", "Reusable content library"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    year: "2022",
  },
  {
    id: "reminder-app",
    name: "Reminder App",
    client: "Sopra Steria",
    category: "Mobile App",
    image: "/reminderApp.png",
    description: "Cross-platform mobile app for task and schedule management.",
    fullDescription:
      "A cross-platform mobile application built for Sopra Steria employees to manage tasks, deadlines, and schedules. The app features push notifications, recurring reminders, and team sharing capabilities.",
    challenge:
      "Employees were juggling multiple tools for task management. The company needed a simple, unified mobile solution that integrated with their existing calendar systems.",
    solution:
      "Designed and built a clean, intuitive mobile app with push notifications, recurring reminder support, and calendar sync. The cross-platform approach ensured both iOS and Android users had a native-feeling experience.",
    results: ["Cross-platform iOS & Android", "Push notification system", "Calendar integration", "Adopted company-wide"],
    tech: ["React Native", "TypeScript", "Node.js", "Firebase", "Push Notifications"],
    year: "2021",
  },
  {
    id: "nierkeuze",
    name: "Nierkeuze.nl",
    client: "UMCG",
    category: "Web Development",
    image: "/UMCGN.png",
    description: "Patient decision-aid tool for kidney treatment options.",
    fullDescription:
      "A sensitive, accessibility-first web application built for UMCG (University Medical Center Groningen) that helps kidney patients understand and compare their treatment options. The tool guides patients through complex medical decisions with clear, empathetic content.",
    challenge:
      "Kidney patients face life-changing treatment decisions but often struggle to understand their options. UMCG needed a digital tool that could present complex medical information in an accessible, non-overwhelming way.",
    solution:
      "Created a step-by-step decision-aid tool with plain language explanations, visual comparisons, and personalized recommendations. The platform was built with WCAG AAA accessibility standards and tested extensively with real patients.",
    results: ["WCAG AAA accessible", "Used by patients nationwide", "Reduced decision anxiety", "Endorsed by medical professionals"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Accessibility Testing"],
    year: "2023",
  },
  {
    id: "casino-platform",
    name: "Casino Gaming Platform",
    client: "Asia Gaming",
    category: "Web App",
    image: "/AG.jpg",
    description: "High-performance real-time gaming platform serving thousands of concurrent users.",
    fullDescription:
      "A high-stakes, high-performance gaming platform built for Asia Gaming that handles thousands of concurrent players with sub-second response times. The platform manages real-time game state, secure financial transactions, and a seamless user experience.",
    challenge:
      "Asia Gaming needed a platform that could handle massive concurrent loads with zero downtime, process financial transactions securely, and deliver a seamless real-time gaming experience to users across Asia.",
    solution:
      "Engineered a real-time platform with WebSocket connections, optimized database queries, and a microservices architecture. Implemented robust security for financial transactions and built a responsive UI that works flawlessly under high load.",
    results: ["1000s concurrent users", "Sub-second response times", "Secure financial transactions", "99.9% uptime"],
    tech: ["React", "TypeScript", "Node.js", "WebSocket", "Redis", "PostgreSQL"],
    year: "2021",
  },
  {
    id: "gaming-redesign",
    name: "Gaming Platform Redesign",
    client: "Asia Gaming",
    category: "UI/UX Design",
    image: "/AGaming.png",
    description: "Complete UX overhaul and interface redesign for improved player engagement.",
    fullDescription:
      "A complete UI/UX redesign of Asia Gaming's player-facing platform. The project focused on improving navigation, reducing friction in key flows, and creating a more immersive visual experience that increased player engagement and session duration.",
    challenge:
      "The existing platform had high bounce rates and low session duration. Player feedback indicated the interface was confusing and outdated compared to competitors.",
    solution:
      "Conducted user research with real players, created detailed wireframes and prototypes, and delivered a completely new design system. The redesign simplified navigation, improved the game lobby experience, and introduced a modern visual language.",
    results: ["+45% session duration", "-30% bounce rate", "New design system", "Player-tested and validated"],
    tech: ["Figma", "User Research", "Prototyping", "Design Systems", "A/B Testing"],
    year: "2021",
  },
  {
    id: "luxe-ecommerce",
    name: "Premium E-commerce Store",
    client: "Luxe & Co",
    category: "E-commerce",
    image: "/Codecomedy.png",
    description: "Luxury fashion e-commerce with custom product configurator and +180% conversion lift.",
    fullDescription:
      "An end-to-end luxury fashion e-commerce platform for Luxe & Co featuring a custom product configurator, integrated payment systems, automated inventory management, and a brand experience that matches the premium positioning of the products.",
    challenge:
      "Luxe & Co was losing sales to competitors with better online experiences. Their existing site had a 1.2% conversion rate and didn't reflect the premium quality of their products.",
    solution:
      "Built a custom e-commerce platform with a product configurator that lets customers personalize items, high-quality product galleries with 360-degree views, a streamlined checkout flow, and automated inventory sync with their warehouse system.",
    results: ["+180% conversion rate", "+65k monthly visitors", "3s average load time", "Custom product configurator"],
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Headless CMS", "Cloudinary"],
    year: "2024",
  },
  {
    id: "freshbite-social",
    name: "Social Media Growth Campaign",
    client: "FreshBite",
    category: "Social Media",
    image: "/reminderApp.png",
    description: "Organic social strategy growing reach from zero to 300k+ monthly impressions.",
    fullDescription:
      "A comprehensive social media strategy and content production project for FreshBite, a food delivery startup. We built their entire social presence from scratch across Instagram, TikTok, and LinkedIn, focusing on organic growth and community engagement.",
    challenge:
      "FreshBite had zero social media presence and a limited marketing budget. They needed to build brand awareness and acquire customers organically in a highly competitive food delivery market.",
    solution:
      "Developed a content strategy mixing behind-the-scenes kitchen content, user-generated reviews, trending audio formats, and local community partnerships. Created a consistent posting schedule with platform-specific content optimized for each algorithm.",
    results: ["+300k impressions/month", "+240% engagement rate", "50k followers in 6 months", "30% of new customers from social"],
    tech: ["Content Strategy", "Instagram", "TikTok", "LinkedIn", "Canva", "Analytics"],
    year: "2024",
  },
];
