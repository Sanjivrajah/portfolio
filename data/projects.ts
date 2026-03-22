export interface Project {
  title: string;
  description: string;
  techStack: string[];
  tag: "Web" | "Mobile" | "Salesforce";
  award: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Moodee – Mental Health App",
    description:
      "A mental health accessibility app that redefines care and support for individuals navigating mental health challenges. Built for Google Solutions Challenge 2024 — Top 100 Global Finalist and KitaHack 2024 Best Technical Award winner.",
    techStack: ["Flutter", "Firebase", "AI/ML", "Google Cloud"],
    tag: "Mobile",
    award: "🏆 Top 100 Google Solutions Challenge 2024",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: true,
  },
  {
    title: "6reen – Sustainability Startup",
    description:
      "A sustainability-focused startup built as part of the Taylor's Bizpod X Amadeus Mini Accelerator Programme. Won 1st place against competing teams. Co-founded and led the technical direction.",
    techStack: ["Next.js", "Node.js", "REST API"],
    tag: "Web",
    award: "🏆 Amadeus Accelerator Programme Winner",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: true,
  },
  {
    title: "RecycleX – Smart City Platform",
    description:
      "A smart recycling platform built for the Sustainable Smart City Hackathon 2023 hosted by Taylor's Makerspace. Won 1st prize among 25 competing teams.",
    techStack: ["React", "Node.js", "IoT Integration"],
    tag: "Web",
    award: "🏆 Sustainable Smart City Hackathon 1st Prize",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: false,
  },
  {
    title: "V-Aspire – Web Platform",
    description:
      "A web platform built for Taylor's Web Design Competition 2022. Responsible for the full PHP backend, enabling users to perform complete CRUD operations. Awarded 2nd Place.",
    techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    tag: "Web",
    award: "🥈 Taylor's Web Design Competition 2nd Place",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: false,
  },
  {
    title: "CareerFinder – Career Path App",
    description:
      "A mobile app co-created at Varsity Hackathon 2023 (USM) to address the lack of career path exposure among university students and fresh graduates.",
    techStack: ["Flutter", "Firebase", "Dart"],
    tag: "Mobile",
    award: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: false,
  },
  {
    title: "Hilti ASCI – IT Competition Project",
    description:
      "A team project entered into the Hilti ITC (IT Competition) 2023, competing against 80+ teams worldwide and achieving Semi-Finalist status.",
    techStack: ["Salesforce", "Apex", "SOQL"],
    tag: "Salesforce",
    award: "🏅 Hilti ITC 2023 Semi-Finalist",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "/assets/project-placeholder.svg",
    featured: false,
  },
];
