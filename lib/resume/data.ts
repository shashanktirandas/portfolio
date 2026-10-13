
import { projects } from "@/lib/projects/data";

export const resumeData = {
  name: "Shashank Tirandas",
  headline: "Full-Stack Developer | Software Engineering Intern",
  email: "shashanktirandas53@gmail.com",
  phone: "9948329185",
  location: "Telangana, India",

  links: {
    github: "https://github.com/shashanktirandas",
    linkedin: "https://www.linkedin.com/in/shashanktirandas/",
    portfolio: "/",
  },

  summary:
    "Computer Science and Engineering student pursuing a B.Tech through lateral entry, with hands-on experience building web applications. Interested in full-stack development, backend systems, and creating practical, user-focused digital experiences.",

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (Lateral Entry)",
      institution: "Pallavi Engineering College",
      detail: "Expected graduation: 2028",
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Annamacharya Institute of Technology and Sciences",
      detail: "CGPA: 9.4",
    },
    {
      degree: "SSC (10th)",
      institution: "Z.P.H.S., Koyyalagudem",
      detail: "CGPA: 9.3",
    },
  ],

  skills: {
    Languages: ["HTML", "CSS", "JavaScript"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Databases: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman"],
  },

  // Only projects with published status are eligible for the resume.
  projectSlugs: [
    "mrudula-ent-care",
    "thaara-theeram",
    "brd",
    "chaam-notes",
  ],

  // Add verified experience and certifications here when you earn them.
  experience: [],
  certifications: [],
} as const;
export const resumeProjects = resumeData.projectSlugs
  .flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);

    return project && project.status === "published"
      ? [project]
      : [];
  });
