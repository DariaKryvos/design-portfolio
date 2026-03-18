export interface Project {
  title: string;
  client: string;
  image: string;
  description: string;
  decision: string;
  uxProcess: string;
  technology: string[];
}

export const projects: Project[] = [
  {
    title: "Booking Platform",
    client: "Cleaning Company",
    image: "/images/booking.png",
    description:
      "Online booking system allowing customers to schedule services and manage appointments.",
    decision:
      "The client needed to reduce phone bookings and automate scheduling. A web-based solution allowed users to book 24/7 and reduced administrative workload.",
    uxProcess:
      "I designed a simple step-by-step booking flow: select service → choose date → confirm. User testing showed this reduced drop-off rates.",
    technology: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
  },

  {
    title: "Analytics Dashboard",
    client: "Logistics Startup",
    image: "/images/dashboard.png",
    description:
      "Dashboard to track shipments, performance metrics, and operational data in real time.",
    decision:
      "Manual reporting was slow and error-prone. A dashboard provided real-time visibility and data-driven decision making.",
    uxProcess:
      "I focused on clear charts and filters so users could quickly find insights. Feedback highlighted the importance of mobile responsiveness.",
    technology: ["React", "TypeScript", "API Integration", "Chart.js"],
  },
];
