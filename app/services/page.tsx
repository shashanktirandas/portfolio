
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Compass,
  Layers3,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import "./services.css";

export const metadata: Metadata = {
  title: "Services — Digital Product Builder",
  description:
    "Website development, interactive web applications, UI implementation, prototyping, and ongoing improvements by an independent digital product builder.",
};

const services = [
  {
    number: "01",
    title: "Websites",
    subtitle: "A thoughtful home for your brand.",
    description:
      "Responsive websites that communicate what you do, establish a clear digital presence, and help visitors take the next step.",
    deliverables: [
      "Responsive page layouts",
      "Clear navigation and content structure",
      "Brand-aligned visual presentation",
      "Deployment and launch support",
    ],
    icon: Compass,
    accent: "forest",
  },
  {
    number: "02",
    title: "Web applications",
    subtitle: "Useful ideas, made interactive.",
    description:
      "Interactive browser-based products designed around practical workflows, useful features, and an understandable user experience.",
    deliverables: [
      "Interactive user interfaces",
      "Reusable UI components",
      "Search, filters, and forms",
      "API integration where required",
    ],
    icon: Blocks,
    accent: "copper",
  },
  {
    number: "03",
    title: "UI/UX & prototypes",
    subtitle: "Clarity before complexity.",
    description:
      "Turn an early idea or visual reference into a structured interface that can be explored, tested, and refined before a full build.",
    deliverables: [
      "Page structure and user flows",
      "Interface concepts and layouts",
      "Interactive web prototypes",
      "Visual and usability refinements",
    ],
    icon: Layers3,
    accent: "sage",
  },
  {
    number: "04",
    title: "Improvements & maintenance",
    subtitle: "Make an existing product better.",
    description:
      "Improve an existing website or application through focused updates instead of rebuilding everything from scratch.",
    deliverables: [
      "Responsive layout fixes",
      "UI refinements and new sections",
      "Bug fixes and feature updates",
      "Performance and accessibility improvements",
    ],
    icon: RefreshCw,
    accent: "ink",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We clarify the idea, intended audience, goals, and practical constraints.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish the scope, essential features, content, and implementation direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the experience in manageable steps, keeping the agreed priorities in focus.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We review the result, address issues, and prepare the agreed deliverables for launch.",
  },
];

const selectedProjects = [
  {
    number: "01",
    name: "Mrudula ENT Care",
    category: "Healthcare website",
    description:
      "A patient-focused clinic website designed to make essential information and patient actions easier to find.",
    href: "/projects/mrudula-ent-care",
    tone: "project-forest",
  },
  {
    number: "02",
    name: "Thaara Theeram",
    category: "Website",
    description:
      "A digital experience with its own identity and presentation.",
    href: "/projects/thaara-theeram",
    tone: "project-copper",
  },
  {
    number: "03",
    name: "BRD",
    category: "Web application",
    description:
      "A web project presented through a live application and a dedicated case study.",
    href: "/projects/brd",
    tone: "project-sage",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-topline">
          <span className="services-eyebrow">
            <span className="services-live-dot" />
            SERVICES & CAPABILITIES
          </span>
          <span className="services-edition">
            INDEPENDENT DIGITAL PRACTICE
          </span>
        </div>

        <div className="services-hero-grid">
          <div className="services-hero-copy">
            <p className="services-overline">
              GOOD IDEAS DESERVE TO BE BUILT WELL.
            </p>

            <h1>
              Ideas into
              <br />
              useful digital
              <br />
              <em>experiences.</em>
            </h1>

            <p className="services-hero-description">
              I build websites and web applications that bring together
              thoughtful interfaces, practical functionality, and a clear
              user experience.
            </p>

            <div className="services-hero-actions">
              <Link
                href="/contact"
                className="services-button services-button-dark"
              >
                Discuss a project
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <Link href="/projects" className="services-text-link">
                Explore selected work
                <ArrowDownRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="services-hero-art" aria-label="A study of digital building blocks">
            <div className="services-art-label services-art-label-top">
              <span>FORM FOLLOWS FUNCTION</span>
              <span>01 / 04</span>
            </div>

            <div className="services-art-canvas">
              <div className="services-art-circle services-art-circle-one" />
              <div className="services-art-circle services-art-circle-two" />
              <div className="services-art-cross services-art-cross-one" />
              <div className="services-art-cross services-art-cross-two" />

              <div className="services-art-card services-art-card-back">
                <span>THOUGHT</span>
                <Layers3 size={25} strokeWidth={1.3} />
              </div>

              <div className="services-art-card services-art-card-front">
                <span className="services-art-card-index">A / DIGITAL</span>
                <Code2 size={35} strokeWidth={1.2} />
                <span className="services-art-card-title">
                  Built with
                  <br />
                  intention.
                </span>
                <span className="services-art-card-foot">
                  IDEA → EXPERIENCE
                </span>
              </div>

              <span className="services-art-star" aria-hidden="true">
                ✳
              </span>
            </div>

            <div className="services-art-label services-art-label-bottom">
              <span>DESIGN · DEVELOPMENT · ITERATION</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>

        <div className="services-hero-bottom">
          <span>FROM FIRST IDEA TO WORKING PRODUCT</span>
          <span className="services-scroll-cue">
            SCROLL TO EXPLORE <ArrowDownRight size={15} aria-hidden="true" />
          </span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-intro">
        <div className="services-section-label">
          <span>01</span>
          <span>A PRACTICAL APPROACH</span>
        </div>

        <div className="services-intro-content">
          <h2>
            Not just how it <em>looks.</em>
            <br />
            How it <em>works.</em>
          </h2>

          <div className="services-intro-copy">
            <p>
              A good digital product should be easy to understand, useful
              to its audience, and built with care. The goal is not to add
              complexity. It is to make the right things work well.
            </p>
            <p>
              Whether you are starting with a rough idea or improving an
              existing website, we can define a practical scope and build
              toward it one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-offerings" id="offerings">
        <div className="services-section-heading">
          <div>
            <span className="services-section-kicker">
              02 — WHAT I CAN HELP WITH
            </span>
            <h2>
              The right tools
              <br />
              for the <em>right idea.</em>
            </h2>
          </div>
          <p>
            Every project has different needs. Start with the problem you
            want to solve, and choose the work that makes sense for it.
          </p>
        </div>

        <div className="services-card-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className={`services-card services-accent-${service.accent}`}
                key={service.number}
              >
                <div className="services-card-index">
                  <span>{service.number}</span>
                  <Icon size={23} strokeWidth={1.35} aria-hidden="true" />
                </div>

                <div className="services-card-main">
                  <h3>{service.title}</h3>
                  <p className="services-card-subtitle">
                    {service.subtitle}
                  </p>
                  <p className="services-card-description">
                    {service.description}
                  </p>
                </div>

                <div className="services-card-deliverables">
                  <span className="services-list-label">
                    WHAT IT CAN INCLUDE
                  </span>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">↗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-card-end">
                  <span>BUILT AROUND YOUR NEEDS</span>
                  <Link
                    href="/contact"
                    aria-label={`Discuss ${service.title}`}
                    className="services-card-link"
                  >
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="services-scope-note">
          Features, timelines, and deliverables are agreed upon for each
          project before development begins.
        </p>
      </section>

      {/* SELECTED WORK */}
      <section className="services-work">
        <div className="services-section-label">
          <span>03</span>
          <span>WORK IN PRACTICE</span>
        </div>

        <div className="services-work-heading">
          <h2>
            A few ideas,
            <br />
            <em>made real.</em>
          </h2>
          <Link href="/projects" className="services-text-link">
            View all projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="services-work-grid">
          {selectedProjects.map((project) => (
            <Link
              className={`services-work-card ${project.tone}`}
              href={project.href}
              key={project.number}
            >
              <div className="services-work-card-top">
                <span>{project.number} / SELECTED WORK</span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </div>

              <div className="services-work-symbol" aria-hidden="true">
                {project.number === "01" ? (
                  <Sparkles size={37} strokeWidth={1.1} />
                ) : project.number === "02" ? (
                  <Compass size={37} strokeWidth={1.1} />
                ) : (
                  <Blocks size={37} strokeWidth={1.1} />
                )}
              </div>

              <div className="services-work-card-copy">
                <span>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="services-work-card-bottom">
                <span>READ CASE STUDY</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <div className="services-process-heading">
          <span className="services-section-kicker">
            04 — HOW I APPROACH A PROJECT
          </span>
          <h2>
            A clear process.
            <br />
            <em>Thoughtful progress.</em>
          </h2>
          <p>
            Good collaboration starts with shared expectations. Each step
            helps keep the work focused and the decisions understandable.
          </p>
        </div>

        <div className="services-process-list">
          {process.map((step) => (
            <article className="services-process-step" key={step.number}>
              <span className="services-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <ArrowDownRight
                className="services-process-arrow"
                size={19}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </section>

      {/* FAQ / EXPECTATIONS */}
      <section className="services-expectations">
        <div>
          <span className="services-section-kicker">
            05 — BEFORE WE BEGIN
          </span>
          <h2>
            Good work starts
            <br />
            with <em>good questions.</em>
          </h2>
        </div>

        <div className="services-expectations-list">
          <article>
            <span>01</span>
            <div>
              <h3>What if I only have an idea?</h3>
              <p>
                That is a useful starting point. We can discuss the goal,
                outline the essential features, and determine a sensible
                first version.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>Can you improve an existing website?</h3>
              <p>
                Yes, depending on the codebase and requirements. We can
                identify the most important fixes and agree on a manageable
                scope.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>How are timelines and costs decided?</h3>
              <p>
                They depend on the scope, features, assets, and technical
                requirements. These details should be discussed before
                work begins.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="services-cta" id="services-contact">
        <div className="services-cta-decoration" aria-hidden="true">
          ✳
        </div>

        <span className="services-section-kicker">
          HAVE AN IDEA TAKING SHAPE?
        </span>

        <h2>
          Let's build something
          <br />
          <em>worth using.</em>
        </h2>

        <p>
          Tell me what you are thinking about, what you need, or what
          could work better. We can start with a conversation.
        </p>

        <Link
          href="/contact"
          className="services-button services-button-light"
        >
          Start a conversation
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <div className="services-cta-bottom">
          <span>IDEA FIRST. DETAILS NEXT.</span>
          <Link href="/projects">
            EXPLORE THE PORTFOLIO <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
