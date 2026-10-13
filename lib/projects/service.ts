
import { projects } from "./data";
import type { Project, ProjectFilters } from "./types";

function publishedProjects(): Project[] {
  return projects
    .filter((project) => project.status === "published")
    .sort((a, b) => b.priority - a.priority);
}

export async function getProjects(
  filters: ProjectFilters = {},
): Promise<Project[]> {
  const { query, category, technology } = filters;
  let result = publishedProjects();

  if (query?.trim()) {
    const search = query.trim().toLowerCase();

    result = result.filter((project) => {
      const searchableText = [
        project.name,
        project.tagline ?? "",
        project.summary ?? "",
        project.description ?? "",
        project.category,
        ...(project.technologies ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }

  if (category && category !== "All") {
    result = result.filter(
      (project) => project.category === category,
    );
  }

  if (technology) {
    result = result.filter((project) =>
      (project.technologies ?? []).some(
        (item) => item.toLowerCase() === technology.toLowerCase(),
      ),
    );
  }

  return result;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const result = await getProjects();

  return result
    .filter((project) => project.featured)
    .sort((a, b) => b.priority - a.priority);
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const result = await getProjects();

  return result.find((project) => project.slug === slug);
}

export async function getProjectCategories(): Promise<string[]> {
  const result = await getProjects();

  return [
    "All",
    ...new Set(result.map((project) => project.category)),
  ];
}

export async function getProjectTechnologies(): Promise<string[]> {
  const result = await getProjects();

  return [
    ...new Set(
      result.flatMap((project) => project.technologies ?? []),
    ),
  ].sort();
}
export type PaginatedProjects = {
  projects: Project[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export async function getProjectsPage(
  filters: ProjectFilters = {},
  page = 1,
  pageSize = 9,
): Promise<PaginatedProjects> {
  const allProjects = await getProjects(filters);

  const safePageSize = Math.max(1, Math.floor(pageSize));
  const total = allProjects.length;
  const totalPages = Math.ceil(total / safePageSize);
  const safePage = Math.min(
    Math.max(1, Math.floor(page)),
    Math.max(1, totalPages),
  );

  const start = (safePage - 1) * safePageSize;

  return {
    projects: allProjects.slice(start, start + safePageSize),
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}