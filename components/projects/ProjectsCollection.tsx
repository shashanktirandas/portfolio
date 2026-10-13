"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  Layers3,
  NotebookPen,
  Orbit,
  Stethoscope,
} from "lucide-react";
import type { Project } from "@/lib/projects/types";

type Props = {
  projects: Project[];
  categories: string[];
  technologies: string[];
};

const projectIcons = {
  brd: Layers3,
  "chaam-notes": NotebookPen,
  "thaara-theeram": Orbit,
  "mrudula-ent-care": Stethoscope,
};

const projectTones: Record<string, string> = {
  brd: "brd",
  "chaam-notes": "chaam",
  "thaara-theeram": "thaara",
  "mrudula-ent-care": "mrudula",
};

export default function ProjectsCollection({
  projects,
  categories,
  technologies,
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [page, setPage] = useState(1);

  const pageSize = 6;

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projects.filter((project) => {
      const searchable = [
        project.name,
        project.tagline ?? "",
        project.summary ?? "",
        project.description ?? "",
        project.category,
        ...(project.technologies ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !search || searchable.includes(search);
      const matchesCategory =
        category === "All" || project.category === category;
      const matchesTechnology =
        technology === "All" ||
        (project.technologies ?? []).some(
          (item) => item.toLowerCase() === technology.toLowerCase(),
        );

      return matchesSearch && matchesCategory && matchesTechnology;
    });
  }, [projects, query, category, technology]);

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const visibleProjects = filteredProjects.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setTechnology("All");
    setPage(1);
  }

  return (
    <>
      <div className="collection-filters">
        <label className="collection-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search projects, tools, or ideas..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
          />
          {query && (
            <button
              type="button"
              className="collection-clear-search"
              aria-label="Clear search"
              onClick={() => {
                setQuery("");
                setPage(1);
              }}
            >
              <X size={16} />
            </button>
          )}
        </label>

        <label className="collection-filter">
          <SlidersHorizontal size={15} aria-hidden="true" />
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setPage(1);
            }}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All categories" : item}
              </option>
            ))}
          </select>
        </label>

        <label className="collection-filter">
          <span className="sr-only">Filter by technology</span>
          <select
            value={technology}
            onChange={(event) => {
              setTechnology(event.target.value);
              setPage(1);
            }}
          >
            <option value="All">All technologies</option>
            {technologies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        {(query || category !== "All" || technology !== "All") && (
          <button
            type="button"
            className="collection-reset"
            onClick={resetFilters}
          >
            Reset filters <X size={14} />
          </button>
        )}
      </div>

      <div className="collection-results" aria-live="polite">
        <span>
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
          {" "}found
        </span>
        <span>Ordered by priority</span>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="collection-grid">
          {visibleProjects.map((project, index) => {
            const Icon =
              projectIcons[project.slug as keyof typeof projectIcons] ??
              Layers3;
            const tone = projectTones[project.slug] ?? "default";
            const projectNumber = String(
              (page - 1) * pageSize + index + 1,
            ).padStart(2, "0");

            return (
              <article className="collection-card" key={project.id}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`collection-art collection-art-${tone}`}
                  aria-label={`View ${project.name} case study`}
                >
                  <span className="collection-art-number">
                    {projectNumber}
                  </span>
                  <span className="collection-art-rule" />
                  <span className="collection-art-symbol">
                    <Icon size={37} strokeWidth={1.05} />
                  </span>
                  <span className="collection-art-name">
                    {project.name}
                  </span>
                  <span className="collection-art-open">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                  <span className="collection-art-bottom">
                    {project.category.toUpperCase()}
                  </span>
                </Link>

                <div className="collection-card-body">
                  <div className="collection-card-heading">
                    <div>
                      <p className="collection-card-category">
                        {projectNumber} / {project.category}
                      </p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="collection-card-status">
                      CASE STUDY
                    </span>
                  </div>

                  <p className="collection-card-description">
                    {project.description ||
                      project.summary ||
                      project.tagline ||
                      "Explore this project and its design decisions."}
                  </p>

                  <div className="collection-tags">
                    {(project.technologies ?? []).map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => {
                          setTechnology(item);
                          setPage(1);
                        }}
                        aria-label={`Filter by ${item}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="collection-card-actions">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="collection-card-link"
                    >
                      Explore case study <ArrowUpRight size={15} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="collection-live-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live site <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="collection-empty">
          <Layers3 size={28} strokeWidth={1.2} />
          <h3>No projects found.</h3>
          <p>Try another search term or clear your filters.</p>
          <button type="button" onClick={resetFilters}>
            Clear all filters
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <nav className="collection-pagination" aria-label="Project pages">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => {
              setPage((current) => current - 1);
              document
                .getElementById("selected-work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Previous
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => {
              setPage((current) => current + 1);
              document
                .getElementById("selected-work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}