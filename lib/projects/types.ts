
export type ProjectStatus = "published" | "draft";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  id: string;
  title: string;
  content: string;
  image?: ProjectImage;
};

export type Project = {
  id: string;
  slug: string;
  name: string;

  tagline?: string;
  summary?: string;
  description?: string;

  category: string;
  technologies?: string[];

  coverImage?: ProjectImage;
  screenshots?: ProjectImage[];
  sections?: ProjectSection[];

  role?: string;
  duration?: string;

  liveUrl?: string;
  repositoryUrl?: string;
  demoVideoUrl?: string;

  priority: number;
  featured: boolean;
  status: ProjectStatus;
  createdAt: string;
};

export type ProjectFilters = {
  query?: string;
  category?: string;
  technology?: string;
};
