
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import "./contact.css";
import { siGithub } from "simple-icons";
import type { SimpleIcon } from "simple-icons";
function BrandIcon({
  icon,
  size = 19,
}: {
  icon: SimpleIcon;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Message delivery will be connected during the backend phase.
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-top">
          <Link href="/" className="contact-back">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <span className="contact-index">LET'S CONNECT — 06</span>
        </div>

        <div className="contact-hero-content">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">
              <span className="contact-status-dot" />
              OPEN TO MEANINGFUL COLLABORATIONS
            </span>

            <h1>
              Have something
              <br />
              <span>good in mind?</span>
            </h1>

            <p className="contact-hero-description">
              A website, an idea that needs shaping, or a digital
              experience waiting to happen. Tell me what you’re
              thinking. Let’s see where it goes.
            </p>

            <a href="#contact-form" className="contact-primary-link">
              Start a conversation
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <div className="contact-art-orbit contact-orbit-one" />
            <div className="contact-art-orbit contact-orbit-two" />
            <div className="contact-art-core">
              <MessageCircle size={47} strokeWidth={1.1} />
            </div>
            <Sparkles className="contact-art-spark spark-one" size={24} />
            <Sparkles className="contact-art-spark spark-two" size={17} />
            <span className="contact-art-note note-one">Ideas</span>
            <span className="contact-art-note note-two">Possibilities</span>
          </div>
        </div>

        <div className="contact-hero-footer">
          <span>GOOD THINGS START WITH A CONVERSATION.</span>
          <span>SCROLL TO CONNECT ↓</span>
        </div>
      </section>

      <section className="contact-main" id="contact-form">
        <div className="contact-intro">
          <span className="contact-section-label">01 / THE FIRST STEP</span>

          <h2>
            Tell me a little
            <br />
            <em>about your idea.</em>
          </h2>

          <p>
            You don’t need a perfect brief or every detail figured out.
            Just share what you have in mind, and we can take it from
            there.
          </p>

          <div className="contact-divider" />

          <div className="contact-social-heading">
            <span className="contact-section-label">FIND ME ELSEWHERE</span>
            <ArrowDownRight size={19} />
          </div>

          <a
            className="contact-social-link"
            href="https://www.linkedin.com/in/shashanktirandas/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-social-icon">
              <svg
  width={19}
  height={19}
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zM20 19h-3v-4.9c0-2.94-3.5-2.72-3.5 0V19h-3V9h3v1.56c1.4-2.6 6.5-2.8 6.5 2.49V19z" />
</svg>
            </span>
            <span className="contact-social-copy">
              <strong>LinkedIn</strong>
              <small>Professional conversations</small>
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a
            className="contact-social-link"
            href="https://github.com/shashanktirandas"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-social-icon">
              <BrandIcon icon={siGithub} />
            </span>
            <span className="contact-social-copy">
              <strong>GitHub</strong>
              <small>Projects and experiments</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <div>
              <span className="contact-section-label">02 / YOUR MESSAGE</span>
              <h3>Let’s make it happen.</h3>
            </div>

            <div className="contact-form-icon">
              <Mail size={22} strokeWidth={1.4} />
            </div>
          </div>

          {submitted ? (
            <div className="contact-form-success" role="status">
              <span className="contact-success-icon">
                <Check size={25} />
              </span>

              <h3>Your details look good.</h3>

              <p>
                The contact form is currently in frontend-only mode.
                Message delivery will be enabled when we connect the
                backend.
              </p>

              <button
                className="contact-reset-button"
                onClick={() => setSubmitted(false)}
                type="button"
              >
                Write another message
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-row">
                <label className="contact-field">
                  <span>Your name <b>*</b></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="What should I call you?"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Email address <b>*</b></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>What is this about? <b>*</b></span>
                <select name="subject" defaultValue="" required>
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option value="website">Website development</option>
                  <option value="application">Web application</option>
                  <option value="ui-ux">UI/UX and prototyping</option>
                  <option value="collaboration">Project collaboration</option>
                  <option value="other">Something else</option>
                </select>
              </label>

              <label className="contact-field">
                <span>Tell me about it <b>*</b></span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A little context about your idea, goals, or what you need..."
                  required
                  minLength={10}
                />
              </label>

              <div className="contact-form-bottom">
                <p>
                  <span>*</span> Required fields
                </p>

                <button className="contact-submit" type="submit">
                  Review message
                  <Send size={16} />
                </button>
              </div>

              <p className="contact-form-disclaimer">
                This is a frontend preview. Submitting will not send or
                store your message yet.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="contact-project-cta">
        <div className="contact-cta-mark" aria-hidden="true">
          <span>✳</span>
        </div>

        <div className="contact-cta-copy">
          <span className="contact-section-label">STILL EXPLORING?</span>
          <h2>
            See what I’ve been
            <br />
            <em>working on.</em>
          </h2>
        </div>

        <Link href="/projects" className="contact-project-link">
          Explore projects
          <ArrowUpRight size={18} />
        </Link>
      </section>

      <footer className="contact-footer">
        <Link href="/" className="contact-footer-brand">
          SHASHANK<span>.</span>
        </Link>

        <span>MADE WITH CURIOSITY & CARE.</span>

        <Link href="/about" className="contact-footer-about">
          A little about me <ArrowRight size={14} />
        </Link>
      </footer>
    </main>
  );
}
