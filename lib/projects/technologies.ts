
export type Technology = {
  name: string;
  docsUrl: string;
  icon?: string;
};

export const technologyRegistry: Record<string, Technology> = {
  "React": {
    name: "React",
    docsUrl: "https://react.dev/",
    icon: "/icons/react.svg",
  },
  "Node.js": {
    name: "Node.js",
    docsUrl: "https://nodejs.org/docs/latest/api/",
    icon: "/icons/nodejs.svg",
  },
  "Next.js": {
    name: "Next.js",
    docsUrl: "https://nextjs.org/docs",
    icon: "/icons/nextjs.svg",
  },
  "TypeScript": {
    name: "TypeScript",
    docsUrl: "https://www.typescriptlang.org/docs/",
    icon: "/icons/typescript.svg",
  },
  "JavaScript": {
    name: "JavaScript",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/icons/javascript.svg",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    docsUrl: "https://tailwindcss.com/docs",
    icon: "/icons/tailwindcss.svg",
  },
  "Express.js": {
    name: "Express.js",
    docsUrl: "https://expressjs.com/",
    icon: "/icons/express.svg",
  },
  "MongoDB": {
    name: "MongoDB",
    docsUrl: "https://www.mongodb.com/docs/",
    icon: "/icons/mongodb.svg",
  },
  "MySQL": {
    name: "MySQL",
    docsUrl: "https://dev.mysql.com/doc/",
    icon: "/icons/mysql.svg",
  },
  "HTML": {
    name: "HTML",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "/icons/html.svg",
  },
  "CSS": {
    name: "CSS",
    docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "/icons/css.svg",
  },
  "Python": {
    name: "Python",
    docsUrl: "https://docs.python.org/3/",
    icon: "/icons/python.svg",
  },
};
