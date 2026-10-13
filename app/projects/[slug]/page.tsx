
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import TechnologyLinks from "@/components/projects/TechnologyLinks";
import { getProjectBySlug } from "@/lib/projects/service";

type PageProps = {
  params: Promise<{ slug: string }>;
};
import Image from "next/image";

export const instant = false;


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.summary ||
    project.tagline ||
    `Explore the ${project.name} project and its development details.`;

  const image = project.coverImage?.src;

  return {
    title: `${project.name} — Selected Work`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Selected Work`,
      description,
      type: "article",
      url: `/projects/${project.slug}`,
      ...(image
        ? {
            images: [
              {
                url: image,
                alt:
                  project.coverImage?.alt ||
                  `${project.name} project preview`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: `${project.name} — Selected Work`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}


export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const screenshots = project.screenshots ?? [];
  const technologies = project.technologies ?? [];
  const sections = (project.sections ?? []).filter(
    (section) => section.title?.trim() && section.content?.trim(),
  );

  return (
    <main className="case-study">
      <nav className="case-nav" aria-label="Project navigation">
        <Link href="/projects" className="case-back">
          <span aria-hidden="true">←</span>
          <span>All projects</span>
        </Link>

        <span className="case-nav-label">
          PORTFOLIO <span>/</span> {project.category.toUpperCase()}
        </span>
      </nav>

      <header className="case-hero">
        <div className="case-hero-copy">
          <div className="case-kicker">
            <span className="case-kicker-dot" />
            SELECTED WORK
            <span className="case-kicker-line" />
            {project.category}
          </div>

          <h1>{project.name}</h1>

          <p className="case-tagline">
            {project.tagline || `A closer look at ${project.name}.`}
          </p>

          <p className="case-summary">
            {project.summary ||
              project.description ||
              "Project details are being prepared."}
          </p>

          <div className="case-actions">
            {project.liveUrl && (
              <a
                className="case-button case-button-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore live site <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.repositoryUrl && (
              <a
                className="case-button case-button-secondary"
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="case-hero-visual">
          <div className="case-visual-top">
            <span>PROJECT PREVIEW</span>
            <span>{project.slug}</span>
          </div>

          {project.coverImage?.src ? (
            <figure className="case-cover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt || `${project.name} preview`}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {project.coverImage.caption && (
                <figcaption>{project.coverImage.caption}</figcaption>
              )}
            </figure>
          ) : (
            <div className="case-cover-fallback">
              <span className="case-orbit case-orbit-one" />
              <span className="case-orbit case-orbit-two" />
              <span className="case-monogram">
                {project.name.slice(0, 1).toUpperCase()}
              </span>
              <span className="case-fallback-name">{project.name}</span>
              <span className="case-fallback-note">
                VISUALS IN PROGRESS
              </span>
            </div>
          )}

          <div className="case-visual-bottom">
            <span>AN INDEPENDENT PROJECT</span>
            <span aria-hidden="true">✳</span>
          </div>
        </div>
      </header>

      <section className="case-info-rail" aria-label="Project information">
        <div>
          <span className="case-rail-label">01 / CATEGORY</span>
          <p>{project.category}</p>
        </div>

        {project.role && (
          <div>
            <span className="case-rail-label">02 / ROLE</span>
            <p>{project.role}</p>
          </div>
        )}

        {project.duration && (
          <div>
            <span className="case-rail-label">03 / DURATION</span>
            <p>{project.duration}</p>
          </div>
        )}

        <div>
          <span className="case-rail-label">04 / STATUS</span>
          <p>Published</p>
        </div>
      </section>

      <section className="case-overview">
        <div className="case-section-heading">
          <span className="case-section-index">01 — THE OVERVIEW</span>
          <h2>Made with <em>intention.</em></h2>
        </div>

        <div className="case-overview-copy">
          <p>
            {project.description ||
              project.summary ||
              "More information about this project will be added soon."}
          </p>
        </div>
      </section>

      {technologies.length > 0 && (
        <section className="case-toolkit">
          <div className="case-toolkit-heading">
            <div>
              <span className="case-section-index">02 — THE TOOLKIT</span>
              <h2>The things behind <em>the build.</em></h2>
            </div>
            <p>Explore the official documentation for each technology.</p>
          </div>

          <TechnologyLinks technologies={technologies} />
        </section>
      )}

      {sections.length > 0 && (
        <div className="case-sections">
          {sections.map((section, index) => (
            <section className="case-story-section" key={section.id}>
              <div className="case-story-number">
                {String(index + 3).padStart(2, "0")}
              </div>

              <div className="case-story-copy">
                <span className="case-section-index">THE CASE STUDY</span>
                <h2>{section.title}</h2>
                <p>{section.content}</p>

                {section.image?.src && (
                  <figure className="case-story-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
  src={section.image.src}
  alt={section.image.alt || section.title}
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {section.image.caption && (
                      <figcaption>{section.image.caption}</figcaption>
                    )}
                  </figure>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      <section className="case-gallery">
        <div className="case-gallery-heading">
          <div>
            <span className="case-section-index">03 — THE GALLERY</span>
            <h2>A closer <em>look.</em></h2>
          </div>
          <span className="case-gallery-count">
            {String(screenshots.length).padStart(2, "0")} IMAGES
          </span>
        </div>

        {screenshots.length > 0 ? (
          <div className="case-gallery-grid">
            {screenshots.map((image, index) => (
              <figure className="case-gallery-item" key={`${image.src}-${index}`}>
              
                
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
  src={image.src}
  alt={image.alt || `${project.name} screenshot ${index + 1}`}
  loading="lazy"
/>

                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="case-gallery-empty">
            <span className="case-empty-symbol">✳</span>
            <h3>The next chapter is visual.</h3>
            <p>
              Screenshots for this project haven’t been added yet.
              Check back as the case study develops.
            </p>
          </div>
        )}
      </section>

      <footer className="case-footer">
        <span className="case-section-index">HAVE SOMETHING IN MIND?</span>
        <h2>Let's make something <em>meaningful.</em></h2>
        <div className="case-footer-links">
          <Link href="/contact" className="case-button case-button-primary">
            Start a conversation ↗
          </Link>
          <Link href="/projects" className="case-back">
            ← Explore other projects
          </Link>
        </div>
        <span className="case-footer-signoff">DESIGNED WITH INTENTION.</span>
      </footer>
    </main>
  );
}
