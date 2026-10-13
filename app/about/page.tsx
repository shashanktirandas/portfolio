
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
  Lightbulb,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

import { getProjects } from "@/lib/projects/service";
import "./about.css";

export const metadata: Metadata = {
  title: "About — Digital Product Builder",
  description:
    "Learn about my approach to building websites, web applications, and thoughtful digital experiences.",
};

const principles = [
  {
    number: "01",
    title: "Purpose before polish",
    description:
      "Understand the problem first. Visual decisions should help people use a product, not distract from its purpose.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Make it work well",
    description:
      "Responsive layouts, understandable interactions, and functional details matter just as much as the first impression.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Keep learning",
    description:
      "Every project is an opportunity to explore better approaches, strengthen fundamentals, and improve the way things are built.",
    icon: Lightbulb,
  },
];

const toolkit = [
  {
    group: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    group: "STYLING & INTERFACES",
    items: ["Tailwind CSS", "Responsive Design", "UI Implementation"],
  },
  {
    group: "BACKEND & DATA",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    group: "DEVELOPMENT TOOLS",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default async function AboutPage() {
  const projects = await getProjects();
  const selectedProjects = projects.slice(0, 3);

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-topline">
          <span className="about-eyebrow">
            <span className="about-live-dot" />
            A LITTLE ABOUT ME
          </span>
          <span className="about-edition">
            THE PERSON BEHIND THE BUILDS
          </span>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <p className="about-overline">
              DEVELOPER · BUILDER · CONTINUOUS LEARNER
            </p>

            <h1>
              Curious by
              <br />
              nature.
              <br />
              <em>Builder by choice.</em>
            </h1>

            <p className="about-hero-description">
              I enjoy taking ideas from an early thought to a working
              digital experience — bringing together code, design, and
              practical problem-solving along the way.
            </p>

            <div className="about-hero-actions">
              <Link
                href="/projects"
                className="about-button about-button-dark"
              >
                Explore my work
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <Link href="/contact" className="about-text-link">
                Get in touch
                <ArrowDownRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="about-hero-art" aria-label="Abstract illustration representing ideas becoming digital products">
            <div className="about-art-top">
              <span>IDEAS IN PROGRESS</span>
              <span>01 / PERSONAL NOTES</span>
            </div>

            <div className="about-art-canvas">
              <div className="about-art-orbit about-art-orbit-one" />
              <div className="about-art-orbit about-art-orbit-two" />
              <div className="about-art-axis about-art-axis-one" />
              <div className="about-art-axis about-art-axis-two" />

              <div className="about-art-note about-art-note-back">
                <span>THINK</span>
                <Lightbulb size={27} strokeWidth={1.3} />
                <span>START WITH WHY</span>
              </div>

              <div className="about-art-note about-art-note-front">
                <span>MAKE IT REAL</span>
                <Code2 size={34} strokeWidth={1.2} />
                <strong>
                  Ideas
                  <br />
                  into
                  <br />
                  action.
                </strong>
                <span>LEARN · BUILD · REFINE</span>
              </div>

              <span className="about-art-spark" aria-hidden="true">
                ✳
              </span>
            </div>

            <div className="about-art-bottom">
              <span>ALWAYS EXPLORING WHAT'S POSSIBLE</span>
              <span>✳</span>
            </div>
          </div>
        </div>

        <div className="about-hero-footer">
          <span>LESS ABOUT THE HYPE. MORE ABOUT THE WORK.</span>
          <span>SCROLL TO KNOW ME</span>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-section-label">
          <span>01</span>
          <span>THE STORY SO FAR</span>
        </div>

        <div className="about-story-grid">
          <div className="about-story-heading">
            <span className="about-section-kicker">
              FROM LEARNING TO BUILDING
            </span>
            <h2>
              I learn by
              <br />
              <em>making things.</em>
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              My journey into software development has grown from learning
              programming fundamentals into building websites and
              applications that people can actually explore and use.
            </p>

            <p>
              Working on projects has taught me that development is more
              than writing code. It involves understanding what a product
              needs to do, organizing information, thinking through user
              interactions, solving problems, and improving the result
              through testing.
            </p>

            <p>
              I am continuing to strengthen my skills in frontend and
              full-stack development while building a portfolio of
              practical digital experiences. Each project helps me turn
              what I learn into something tangible.
            </p>

            <div className="about-story-signature">
              <span className="about-signature-mark">S.</span>
              <span>
                <strong>Learn something.</strong>
                <br />
                Build something with it.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles">
        <div className="about-principles-heading">
          <div>
            <span className="about-section-kicker">
              02 — WHAT GUIDES MY WORK
            </span>
            <h2>
              The thinking
              <br />
              behind the <em>building.</em>
            </h2>
          </div>

          <p>
            My approach is simple: understand the purpose, make the
            experience useful, and keep improving the details.
          </p>
        </div>

        <div className="about-principles-grid">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                className="about-principle-card"
                key={principle.number}
              >
                <div className="about-principle-top">
                  <span>{principle.number}</span>
                  <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
                </div>

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>

                <span className="about-principle-bottom">
                  A PRINCIPLE, NOT A SHORTCUT
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="about-toolkit">
        <div className="about-section-label">
          <span>03</span>
          <span>THE TECHNICAL TOOLKIT</span>
        </div>

        <div className="about-toolkit-heading">
          <h2>
            Tools I use
            <br />
            to <em>make things work.</em>
          </h2>

          <p>
            The technologies I work with while building interfaces,
            connecting services, and exploring web application development.
          </p>
        </div>

        <div className="about-toolkit-list">
          {toolkit.map((group, index) => (
            <div className="about-toolkit-row" key={group.group}>
              <span className="about-toolkit-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="about-toolkit-group">{group.group}</span>

              <div className="about-toolkit-tags">
                {group.items.map((item) => (
                  <span className="about-toolkit-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="about-toolkit-note">
          My toolkit continues to evolve as I learn and apply new
          technologies in projects.
        </p>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="about-work">
        <div className="about-section-label">
          <span>04</span>
          <span>LEARNING THROUGH PROJECTS</span>
        </div>

        <div className="about-work-heading">
          <h2>
            The work tells
            <br />
            <em>part of the story.</em>
          </h2>

          <Link href="/projects" className="about-text-link">
            All projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {selectedProjects.length > 0 ? (
          <div className="about-work-list">
            {selectedProjects.map((project, index) => (
              <Link
                className="about-work-item"
                href={`/projects/${project.slug}`}
                key={project.id}
              >
                <span className="about-work-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="about-work-copy">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>
                    {project.summary ||
                      project.tagline ||
                      project.description ||
                      "Explore this project and its development."}
                  </p>
                </div>

                <span className="about-work-arrow">
                  <MoveUpRight size={20} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="about-work-empty">
            Projects will appear here as they become available.
          </p>
        )}
      </section>

      {/* PERSONAL NOTE */}
      <section className="about-note">
        <div className="about-note-symbol" aria-hidden="true">
          <Sparkles size={32} strokeWidth={1.2} />
        </div>

        <span className="about-section-kicker">
          STILL A WORK IN PROGRESS
        </span>

        <h2>
          The best part is
          <br />
          <em>what comes next.</em>
        </h2>

        <p>
          I am building, learning, experimenting, and figuring things out
          one project at a time. The goal is to keep creating digital
          products that are thoughtful, useful, and better with every
          iteration.
        </p>
      </section>

      {/* CONTACT */}
      <section className="about-cta">
        <span className="about-section-kicker">
          HAVE AN IDEA TO EXPLORE?
        </span>

        <h2>
          Let's make something
          <br />
          <em>meaningful.</em>
        </h2>

        <p>
          If you have a website idea, a web application in mind, or an
          existing experience that needs improvement, let's start with
          a conversation.
        </p>

        <Link
          href="/contact"
          className="about-button about-button-light"
        >
          Start a conversation
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <div className="about-cta-footer">
          <span>BUILT WITH CURIOSITY.</span>
          <Link href="/projects">
            EXPLORE MY WORK <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
