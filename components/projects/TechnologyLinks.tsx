
import {
  siReact,
  siNodedotjs,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siExpress,
  siMongodb,
  siMysql,
  siHtml5,
  siCss,
  siPython,
} from "simple-icons";

import { technologyRegistry } from "@/lib/projects/technologies";

const brandIcons: Record<string, { path: string; hex: string }> = {
  React: { path: siReact.path, hex: siReact.hex },
  "Node.js": { path: siNodedotjs.path, hex: siNodedotjs.hex },
  "Next.js": { path: siNextdotjs.path, hex: siNextdotjs.hex },
  TypeScript: { path: siTypescript.path, hex: siTypescript.hex },
  JavaScript: { path: siJavascript.path, hex: siJavascript.hex },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex },
  "Express.js": { path: siExpress.path, hex: siExpress.hex },
  MongoDB: { path: siMongodb.path, hex: siMongodb.hex },
  MySQL: { path: siMysql.path, hex: siMysql.hex },
  HTML: { path: siHtml5.path, hex: siHtml5.hex },
  CSS: { path: siCss.path, hex: siCss.hex },
  Python: { path: siPython.path, hex: siPython.hex },
};

type Props = {
  technologies?: string[];
};

export default function TechnologyLinks({
  technologies = [],
}: Props) {
  if (!technologies.length) return null;

  return (
    <div className="tech-links" aria-label="Technologies used">
      {technologies.map((name) => {
        const technology = technologyRegistry[name];
        const brand = brandIcons[name];

        const content = (
          <>
            {brand ? (
              <svg
                className="tech-chip__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d={brand.path}
                  fill={`#${brand.hex}`}
                  transform="translate(1 1) scale(0.9167)"
                />
              </svg>
            ) : (
              <span className="tech-chip__mark" aria-hidden="true">
                {name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <span>{technology?.name ?? name}</span>
            {technology && (
              <span className="tech-chip__external" aria-hidden="true">
                ↗
              </span>
            )}
          </>
        );

        return technology ? (
          <a
            className="tech-chip"
            href={technology.docsUrl}
            key={name}
            target="_blank"
            rel="noopener noreferrer"
            title={`Explore ${technology.name} documentation`}
          >
            {content}
          </a>
        ) : (
          <span className="tech-chip" key={name}>
            {content}
          </span>
        );
      })}
    </div>
  );
}
