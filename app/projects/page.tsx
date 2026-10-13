import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Layers3,
  NotebookPen,
  Orbit,
  Stethoscope,
} from "lucide-react";
import ProjectsCollection from "@/components/projects/ProjectsCollection";
import {
  getProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "@/lib/projects/service";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected digital products, web applications, and websites built by Shashank Tirandas.",
};

const projects = [
  {
    number: "01",
    name: "BRD",
    category: "Digital product",
    description:
      "A wildlife photography platform bringing photographers, their work, and a community of wildlife enthusiasts together.",
    stack: ["React", "Node.js", "MongoDB"],
    href: "/projects/brd",
    tone: "brd",
    Icon: Layers3,
    kind: "case-study",
  },
  {
    number: "02",
    name: "CHAAM Notes",
    category: "Web application",
    description:
      "A web application exploring a simpler way to capture notes and organize information digitally.",
    stack: ["Web development"],
    
    href: "/projects/chaam-notes",
liveUrl: "https://chaam-notes-app.vercel.app/",
kind: "case-study",
    tone: "chaam",
    Icon: NotebookPen,
  },
  {
    number: "03",
    name: "Thaara Theeram",
    category: "Community",
    description:
      "A digital presence created around community, connection, and shared experiences.",
    stack: ["Web development"],
    href: "/projects/thaara-theeram",
liveUrl: "https://thaara-theeram.vercel.app/",

    tone: "thaara",
    Icon: Orbit,
    kind: "case-study",
  },
  {
    number: "04",
    name: "Mrudula ENT Care",
    category: "Healthcare website",
    description:
      "A clinic website focused on clear information, patient usability, and a welcoming digital experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "/projects/mrudula-ent-care",
liveUrl: "https://mrudula-ent-care.vercel.app/",

    tone: "mrudula",
    Icon: Stethoscope,
    kind: "case-study",
  },
];

function BotanicalIllustration() {
  return (
    <svg
      className="collection-botanical"
      viewBox="0 0 360 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M176 380C179 316 176 249 191 184C202 133 223 83 262 31" />

        <path d="M187 220C145 211 119 181 119 145C155 151 183 179 187 220Z" />
        <path d="M187 220C167 188 145 165 119 145" />

        <path d="M199 177C241 174 270 151 280 116C245 121 215 143 199 177Z" />
        <path d="M199 177C224 151 251 133 280 116" />

        <path d="M212 130C181 112 167 83 177 52C203 70 217 99 212 130Z" />
        <path d="M212 130C201 100 191 76 177 52" />

        <path d="M228 94C261 89 281 69 286 40C258 46 237 65 228 94Z" />
        <path d="M228 94C247 71 267 53 286 40" />

        <path d="M177 282C134 281 106 259 94 224C130 227 162 248 177 282Z" />
        <path d="M177 282C153 257 124 239 94 224" />

        <path d="M177 329C218 319 241 292 244 257C210 271 186 296 177 329Z" />
        <path d="M177 329C201 303 224 280 244 257" />

        <path d="M183 247C220 240 242 217 248 186C216 196 193 219 183 247Z" />
        <path d="M183 247C204 225 227 204 248 186" />

        <path d="M176 380C169 354 159 332 143 310" />
        <path d="M143 310C127 304 115 291 111 273" />
        <path d="M176 380C183 351 195 331 215 313" />
      </g>

      <g fill="currentColor" opacity="0.12">
        <circle cx="177" cy="52" r="3" />
        <circle cx="286" cy="40" r="3" />
        <circle cx="94" cy="224" r="3" />
        <circle cx="244" cy="257" r="3" />
      </g>
    </svg>
  );
}

export default async function ProjectsPage() {
  const [projects, categories, technologies] = await Promise.all([
    getProjects(),
    getProjectCategories(),
    getProjectTechnologies(),
  ]);

  return (
    <main className="collection-page">
      <header className="collection-header">
        <Link href="/" className="collection-back">
          <ArrowLeft size={16} strokeWidth={1.5} />
          <span>Back home</span>
        </Link>

        <Link
          href="/"
          className="collection-wordmark"
          aria-label="Shashank Tirandas — home"
        >
          ST<span>.</span>
        </Link>
      </header>

      <section className="collection-intro">
        <div className="collection-intro-copy">
          <p className="collection-eyebrow">
            <span className="collection-eyebrow-dot" />
            A COLLECTION OF WORK
          </p>

          <h1 className="collection-title">
            Things I&apos;ve
            <br />
            <em>made real.</em>
          </h1>

          <p className="collection-description">
            A collection of things I&apos;ve built, explored, and learned
            from. Every project is a step forward, and there&apos;s always
            something new to make.
          </p>

          <div className="collection-intro-bottom">
            <span className="collection-count">
              {String(projects.length).padStart(2, "0")} PROJECTS
              <span aria-hidden="true"> &nbsp;·&nbsp; </span>
              AND COUNTING
            </span>

            <a href="#selected-work" className="collection-scroll">
              Explore the work
              <ArrowDownRight size={15} />
            </a>
          </div>
        </div>

        <aside className="collection-intro-art" aria-label="A note about my work">
          <span className="collection-art-index">A LITTLE NOTE TO SELF</span>

          <BotanicalIllustration />

          <p className="collection-handwriting">
            Stay curious.
            <br />
            <em>Keep making.</em>
          </p>

          <span className="collection-art-caption">
            IDEAS INTO SOMETHING REAL
          </span>
        </aside>
      </section>

      <section
        className="collection-work"
        id="selected-work"
        aria-label="All projects"
      >
        <div className="collection-section-heading">
          <div>
            <p className="collection-eyebrow">THE COLLECTION</p>
            <h2>Selected work<span>.</span></h2>
          </div>

          <span className="collection-section-note">
            A growing archive of experiments and ideas.
          </span>
        </div>

        <ProjectsCollection
  projects={projects}
  categories={categories}
  technologies={technologies}
/>
      </section>

      <section className="collection-outro">
        <div className="collection-outro-mark">
          <Code2 size={24} strokeWidth={1.2} />
        </div>

        <div className="collection-outro-copy">
          <p className="collection-eyebrow">THIS IS ONLY THE BEGINNING</p>
          <h2>
            More ideas.
            <br />
            <em>More things made real.</em>
          </h2>
        </div>

        <Link href="/contact" className="collection-contact-link">
          Have an idea?
          <span>
            Let&apos;s talk <ArrowUpRight size={16} />
          </span>
        </Link>
      </section>

      <footer className="collection-footer">
        <Link href="/" className="collection-footer-name">
          Shashank Tirandas<span>.</span>
        </Link>

        <span>Made with curiosity and care.</span>

        <Link href="/" className="collection-footer-top">
          Back to home <ArrowUpRight size={13} />
        </Link>
      </footer>
    </main>
  );
}