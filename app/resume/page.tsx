
"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { resumeData, resumeProjects } from "@/lib/resume/data";
import "./resume.css";

export default function ResumePage() {
  async function downloadResume() {
    const { jsPDF } = await import("jspdf");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 17;
    const contentWidth = pageWidth - margin * 2;
    let y = 18;

    const ensureSpace = (height: number) => {
      if (y + height > pageHeight - 16) {
        pdf.addPage();
        y = 18;
      }
    };

    const addText = (
      text: string,
      size: number,
      options: {
        bold?: boolean;
        color?: [number, number, number];
        indent?: number;
        gapAfter?: number;
      } = {},
    ) => {
      const {
        bold = false,
        color = [45, 51, 45],
        indent = 0,
        gapAfter = 2,
      } = options;

      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(...color);

      const lines = pdf.splitTextToSize(
        text,
        contentWidth - indent,
      ) as string[];

      const lineHeight = size * 0.48;
      ensureSpace(lines.length * lineHeight + gapAfter);

      pdf.text(lines, margin + indent, y);
      y += lines.length * lineHeight + gapAfter;
    };

    const addHeading = (title: string) => {
      ensureSpace(12);
      y += 3;
      addText(title.toUpperCase(), 10, {
        bold: true,
        color: [53, 72, 58],
        gapAfter: 2,
      });

      pdf.setDrawColor(205, 205, 192);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 5;
    };

    const addLink = (label: string, url: string) => {
      const startY = y;
      addText(label, 9, {
        color: [53, 72, 58],
        gapAfter: 1,
      });

      pdf.link(margin, startY - 3, contentWidth, 5, {
        url,
      });
    };

    // Header
    addText(resumeData.name, 23, {
      bold: true,
      color: [37, 43, 37],
      gapAfter: 2,
    });

    addText(resumeData.headline, 10, {
      color: [83, 91, 80],
      gapAfter: 4,
    });

    addText(
      `${resumeData.location}  |  ${resumeData.email}  |  ${resumeData.phone}`,
      8.5,
      { gapAfter: 3 },
    );

    addLink("LinkedIn profile", resumeData.links.linkedin);
    addLink("GitHub profile", resumeData.links.github);
    addLink(
      "Portfolio",
      typeof window !== "undefined"
        ? window.location.origin
        : resumeData.links.portfolio,
    );

    // Profile
    addHeading("Professional Summary");
    addText(resumeData.summary, 9.5, { gapAfter: 2 });

    // Skills
    addHeading("Technical Skills");

    for (const [category, items] of Object.entries(resumeData.skills)) {
      addText(`${category}: ${items.join(", ")}`, 9, {
        gapAfter: 2,
      });
    }

    // Projects
    addHeading("Selected Projects");

    for (const project of resumeProjects) {
      addText(project.name, 10, {
        bold: true,
        color: [37, 43, 37],
        gapAfter: 1,
      });

      if (project.description || project.summary) {
        addText(
          project.description || project.summary || "",
          9,
          { gapAfter: 1 },
        );
      }

      if (project.technologies?.length) {
        addText(
          `Technologies: ${project.technologies.join(", ")}`,
          8.5,
          { color: [110, 91, 73], gapAfter: 1 },
        );
      }

      if (project.liveUrl) {
        addLink("Live project", project.liveUrl);
      }

      if (project.repositoryUrl) {
        addLink("Source code", project.repositoryUrl);
      }

      y += 2;
    }
// Start Education on a fresh page for predictable PDF pagination.
pdf.addPage();
y = 18;

addHeading("Education");

    for (const education of resumeData.education) {
      addText(education.degree, 9.5, {
        bold: true,
        gapAfter: 1,
      });

      addText(education.institution, 9, { gapAfter: 1 });
      addText(education.detail, 8.5, {
        color: [83, 91, 80],
        gapAfter: 3,
      });
    }

    // Only include these sections when verified entries exist.
    if (resumeData.experience.length > 0) {
      addHeading("Experience");

      for (const item of resumeData.experience) {
        addText(JSON.stringify(item), 9);
      }
    }

    if (resumeData.certifications.length > 0) {
      addHeading("Certifications");

      for (const item of resumeData.certifications) {
        addText(JSON.stringify(item), 9);
      }
    }

    pdf.setProperties({
      title: `${resumeData.name} - Resume`,
      subject: "Software Engineering Internship Resume",
      author: resumeData.name,
      creator: "Portfolio Resume Center",
    });

    pdf.save("Shashank_Tirandas_Resume.pdf");
  }

  return (
    <main className="resume-page">
      <header className="resume-topbar">
        <Link href="/" className="resume-back">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <span className="resume-edition">
          RESUME · UPDATED FROM YOUR PROFILE
        </span>

        <button
          className="resume-download"
          onClick={downloadResume}
        >
          <Download size={16} />
          Download PDF
        </button>
      </header>

      <article className="resume-sheet">
        <section className="resume-intro">
          <p className="resume-eyebrow">
            SOFTWARE ENGINEERING · INTERNSHIP CANDIDATE
          </p>

          <h1>
            Shashank
            <br />
            <span>Tirandas.</span>
          </h1>

          <p className="resume-summary">
            {resumeData.summary}
          </p>

          <div className="resume-contact-list">
            <span>
              <MapPin size={15} />
              {resumeData.location}
            </span>

            <a href={`mailto:${resumeData.email}`}>
              <Mail size={15} />
              {resumeData.email}
            </a>

            <a href={`tel:${resumeData.phone}`}>
              <Phone size={15} />
              {resumeData.phone}
            </a>

            <a
              href={resumeData.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={13} />
            </a>

            <a
              href={resumeData.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </section>

        <div className="resume-rule" />

        <section className="resume-section">
          <div className="resume-section-heading">
            <span>01</span>
            <h2>Technical skills</h2>
          </div>

          <div className="resume-skills">
            {Object.entries(resumeData.skills).map(
              ([category, items]) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <p>{items.join(", ")}</p>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-section-heading">
            <span>02</span>
            <h2>Selected projects</h2>
          </div>

          {resumeProjects.map((project) => (
            <div className="resume-project" key={project.id}>
              <div className="resume-project-title">
                <h3>{project.name}</h3>
                <span>{project.category}</span>
              </div>

              <p className="resume-body">
                {project.description || project.summary || project.tagline}
              </p>

              {project.technologies?.length ? (
                <p className="resume-tech">
                  {project.technologies.join(" · ")}
                </p>
              ) : null}

              <div className="resume-project-links">
                {project.liveUrl ? (
                  <a
                    className="resume-project-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live project <ArrowUpRight size={14} />
                  </a>
                ) : null}

                {project.repositoryUrl ? (
                  <a
                    className="resume-project-link"
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <div className="resume-section-heading">
            <span>03</span>
            <h2>Education</h2>
          </div>

          <div className="resume-education">
            {resumeData.education.map((item) => (
              <div key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section resume-final">
          <div>
            <p className="resume-eyebrow">
              LET'S BUILD SOMETHING USEFUL
            </p>
            <h2>Have an opportunity in mind?</h2>
          </div>

          <Link href="/contact" className="resume-cta">
            Get in touch <ArrowDownRight size={17} />
          </Link>
        </section>

        <footer className="resume-footer">
          <span>{resumeData.name.toUpperCase()}</span>
          <span>Professional resume · 2026</span>
        </footer>
      </article>

      <p className="resume-download-note">
        Download the PDF for applications and interviews. Review your
        details before submitting it to a recruiter.
      </p>
    </main>
  );
}
