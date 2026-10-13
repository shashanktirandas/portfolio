
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  X,
} from "lucide-react";

import "./sketchbook.css";

type Sketch = {
  id: string;
  title: string;
  category: string;
  date?: string;
  description?: string;
  image: string;
};

const sketches: Sketch[] = [];

const categories = ["All", "Drawings", "Experiments", "Studies"];

export default function SketchbookPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSketch, setSelectedSketch] = useState<Sketch | null>(null);

  const filteredSketches =
    activeCategory === "All"
      ? sketches
      : sketches.filter(
          (sketch) => sketch.category === activeCategory,
        );

  function openPreviousSketch() {
    if (!selectedSketch || filteredSketches.length < 2) return;

    const currentIndex = filteredSketches.findIndex(
      (sketch) => sketch.id === selectedSketch.id,
    );

    const previousIndex =
      (currentIndex - 1 + filteredSketches.length) %
      filteredSketches.length;

    setSelectedSketch(filteredSketches[previousIndex]);
  }

  function openNextSketch() {
    if (!selectedSketch || filteredSketches.length < 2) return;

    const currentIndex = filteredSketches.findIndex(
      (sketch) => sketch.id === selectedSketch.id,
    );

    const nextIndex = (currentIndex + 1) % filteredSketches.length;

    setSelectedSketch(filteredSketches[nextIndex]);
  }

  return (
    <main className="sketchbook-page">
      <header className="sketchbook-header">
        <div className="sketchbook-topline">
          <span className="sketchbook-eyebrow">
            <span className="sketchbook-dot" />
            BEYOND THE SCREEN
          </span>

          <span className="sketchbook-edition">
            A PERSONAL CREATIVE ARCHIVE
          </span>
        </div>

        <div className="sketchbook-hero">
          <div className="sketchbook-hero-copy">
            <span className="sketchbook-kicker">
              NOTES, MARKS & EXPERIMENTS
            </span>

            <h1>
              A little room
              <br />
              to <em>explore.</em>
            </h1>

            <p>
              Not everything needs to become a finished product.
              This is a space for drawings, visual ideas, experiments,
              and the small discoveries that happen along the way.
            </p>

            <a href="#sketchbook-gallery" className="sketchbook-scroll">
              Explore the collection
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div
            className="sketchbook-hero-art"
            aria-label="Decorative sketchbook illustration"
          >
            <div className="sketchbook-paper-sheet">
              <span className="sketchbook-paper-label">
                FIELD NOTES / 001
              </span>

              <div className="sketchbook-doodle" aria-hidden="true">
                <svg
                  viewBox="0 0 280 260"
                  role="img"
                  aria-label="Abstract line illustration"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  >
                    <circle cx="140" cy="124" r="74" />
                    <circle cx="140" cy="124" r="48" />
                    <ellipse
                      cx="140"
                      cy="124"
                      rx="100"
                      ry="34"
                      transform="rotate(-35 140 124)"
                    />
                    <ellipse
                      cx="140"
                      cy="124"
                      rx="100"
                      ry="34"
                      transform="rotate(35 140 124)"
                    />
                    <path d="M140 34 V214 M50 124 H230" />
                    <path d="M118 85 Q142 65 162 88 T161 133 T116 151" />
                    <path d="M107 174 Q137 192 170 165" />
                  </g>
                  <circle cx="140" cy="124" r="5" fill="currentColor" />
                  <circle cx="216" cy="80" r="3" fill="currentColor" />
                  <circle cx="77" cy="168" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="sketchbook-paper-footer">
                <span>OBSERVE</span>
                <span>IMAGINE</span>
                <span>MAKE</span>
              </div>
            </div>

            <span className="sketchbook-stamp" aria-hidden="true">
              KEEP
              <br />
              EXPLORING
              <br />
              ✳
            </span>
          </div>
        </div>

        <div className="sketchbook-hero-footer">
          <span>PROCESS OVER PERFECTION.</span>
          <span>AN OPEN-ENDED PRACTICE.</span>
        </div>
      </header>

      <section
        className="sketchbook-gallery"
        id="sketchbook-gallery"
      >
        <div className="sketchbook-section-heading">
          <div>
            <span className="sketchbook-kicker">
              THE COLLECTION
            </span>
            <h2>
              Collected <em>curiosities.</em>
            </h2>
          </div>

          <span className="sketchbook-count">
            {String(filteredSketches.length).padStart(2, "0")} ITEMS
          </span>
        </div>

        <div className="sketchbook-filters" aria-label="Filter sketches">
          {categories.map((category) => (
            <button
              className={`sketchbook-filter ${
                activeCategory === category ? "is-active" : ""
              }`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredSketches.length > 0 ? (
          <div className="sketchbook-grid">
            {filteredSketches.map((sketch, index) => (
              <button
                type="button"
                className="sketchbook-card"
                key={sketch.id}
                onClick={() => setSelectedSketch(sketch)}
                aria-label={`View ${sketch.title}`}
              >
                <span className="sketchbook-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="sketchbook-card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sketch.image} alt="" loading="lazy" />

                  <span className="sketchbook-card-overlay">
                    VIEW STUDY <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="sketchbook-card-caption">
                  <div>
                    <span>{sketch.category}</span>
                    <h3>{sketch.title}</h3>
                  </div>

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="sketchbook-card-arrow"
                  />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="sketchbook-empty">
            <div className="sketchbook-empty-symbol">
              <BookOpen size={29} strokeWidth={1.2} />
            </div>

            <span className="sketchbook-kicker">
              THE FIRST PAGE IS STILL OPEN
            </span>

            <h3>
              Every collection
              <br />
              starts with <em>one thing.</em>
            </h3>

            <p>
              Your drawings and experiments will live here. Add your
              first artwork to begin building a collection that reflects
              your own creative process.
            </p>

            <span className="sketchbook-empty-note">
              DRAWINGS · EXPERIMENTS · VISUAL STUDIES
            </span>
          </div>
        )}
      </section>

      <section className="sketchbook-note">
        <span className="sketchbook-kicker">
          A NOTE TO MYSELF
        </span>

        <h2>
          Stay curious.
          <br />
          <em>Keep making.</em>
        </h2>

        <p>
          The point isn't to have every answer. It's to keep noticing
          things, trying ideas, and making room for the unexpected.
        </p>
      </section>

      <footer className="sketchbook-footer">
        <div>
          <span className="sketchbook-kicker">
            BACK TO THE DIGITAL WORLD
          </span>
          <h2>
            From little ideas
            <br />
            to <em>real projects.</em>
          </h2>
        </div>

        <div className="sketchbook-footer-links">
          <Link href="/projects" className="sketchbook-footer-button">
            Explore projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <Link href="/about" className="sketchbook-back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            A little about me
          </Link>
        </div>

        <div className="sketchbook-footer-bottom">
          <span>MADE WITH CURIOSITY.</span>
          <Link href="/contact">
            SAY HELLO <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </footer>

      {selectedSketch && (
        <div
          className="sketchbook-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={selectedSketch.title}
          onClick={() => setSelectedSketch(null)}
        >
          <button
            type="button"
            className="sketchbook-viewer-close"
            onClick={() => setSelectedSketch(null)}
            aria-label="Close artwork viewer"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            className="sketchbook-viewer-nav"
            onClick={(event) => {
              event.stopPropagation();
              openPreviousSketch();
            }}
            aria-label="Previous artwork"
            disabled={filteredSketches.length < 2}
          >
            <ArrowLeft size={21} />
          </button>

          <div
            className="sketchbook-viewer-content"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedSketch.image}
              alt={selectedSketch.title}
            />

            <div className="sketchbook-viewer-caption">
              <span>{selectedSketch.category}</span>
              <h2>{selectedSketch.title}</h2>
              {selectedSketch.description && (
                <p>{selectedSketch.description}</p>
              )}
            </div>
          </div>

          <button
            type="button"
            className="sketchbook-viewer-nav"
            onClick={(event) => {
              event.stopPropagation();
              openNextSketch();
            }}
            aria-label="Next artwork"
            disabled={filteredSketches.length < 2}
          >
            <ArrowRight size={21} />
          </button>
        </div>
      )}
    </main>
  );
}
