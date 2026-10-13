import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "mrudula-ent-care",
    slug: "mrudula-ent-care",
    name: "Mrudula ENT Care",
    tagline: "A patient-focused clinic website.",
    summary:
      "Explore the clinic website and its patient-facing experience.",
    description:
      "A healthcare website project focused on presenting clinic information clearly and making essential patient actions easy to find.",
    category: "Healthcare",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://mrudula-ent-care.vercel.app/",
    priority: 100,
    featured: true,
    status: "published",
    createdAt: "2026-01-04",

    coverImage: {
      src: "/projects/mrudula-ent-care/home.png",
      alt: "Mrudula ENT Care website homepage",
      caption: "The clinic's main website experience",
    },

    screenshots: [
      {
        src: "/projects/mrudula-ent-care/home.png",
        alt: "Mrudula ENT Care homepage with its hero section and doctor profile",
        caption: "01 — Homepage",
      },
      {
        src: "/projects/mrudula-ent-care/about.png",
        alt: "Mrudula ENT Care about page describing the clinic's approach",
        caption: "02 — About the clinic",
      },
      {
        src: "/projects/mrudula-ent-care/book.png",
        alt: "Mrudula ENT Care consultation booking page",
        caption: "03 — Book a consultation",
      },
    ],
  },

  {
    id: "thaara-theeram",
    slug: "thaara-theeram",
    name: "Thaara Theeram",
    tagline: "A distinct digital identity.",
    summary: "Explore the Thaara Theeram website.",
    description:
      "A web project presented through a live website and a reusable portfolio template.",
    category: "Website",
    technologies: ["Web Development"],
    liveUrl: "https://thaara-theeram.vercel.app/",
    priority: 90,
    featured: true,
    status: "published",
    createdAt: "2026-01-03",
  },

  {
    id: "brd",
    slug: "brd",
    name: "BRD",
    tagline: "A digital product built around a focused user experience.",
    summary: "Explore the BRD project and its live experience.",
    description:
      "A portfolio project with a live deployment and a reusable project detail page.",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://brd-app-seven.vercel.app/",
    repositoryUrl: "https://github.com/shashanktirandas/BRD-App",
    priority: 80,
    featured: true,
    status: "published",
    createdAt: "2026-01-01",
  },

  {
    id: "chaam-notes",
    slug: "chaam-notes",
    name: "CHAAM Notes",
    tagline: "A notes experience designed for the web.",
    summary: "Visit the live CHAAM Notes application.",
    description:
      "A web application with a live deployment and a dedicated project detail page.",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://chaam-notes-app.vercel.app/",
    repositoryUrl:
      "https://github.com/shashanktirandas/chaam-notes-app",
    priority: 70,
    featured: true,
    status: "published",
    createdAt: "2026-01-02",
  },
];