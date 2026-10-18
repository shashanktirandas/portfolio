// "use client";



// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import type { Project } from "@/lib/projects/types";
// import { getProjects } from "@/lib/projects/service";

// import {

//   ArrowDownRight,

//   ArrowRight,

//   ArrowUpRight,

//   Code2,

//   Mail,

//   Menu,

//   PenTool,

//   Wrench,

//   X,


// } from "lucide-react";

// import BotanicalLeaves from "@/components/BotanicalLeaves";



// const projectTones: Record<string, string> = {
//   brd: "notes",
//   "chaam-notes": "notes",
//   "thaara-theeram": "community",
//   "mrudula-ent-care": "healthcare",
// };



// function SectionLabel({

//   number,

//   children,

// }: {

//   number: string;

//   children: React.ReactNode;

// }) {

//   return (

//     <div className="section-label">

//       <span>{number}</span>

//       <span className="label-divider" />

//       <span>{children}</span>

//     </div>

//   );

// }



// /* Decorative branch used behind the contact content. */

// function ContactBotanical({

//   className = "",

// }: {

//   className?: string;

// }) {

//   return (

//     <svg

//       className={className}

//       viewBox="0 0 320 340"

//       fill="none"

//       aria-hidden="true"

//       focusable="false"

//     >

//       <g

//         stroke="#C2CBB5"

//         strokeWidth="1.1"

//         strokeLinecap="round"

//         strokeLinejoin="round"

//       >

//         <path d="M25 320C86 250 145 184 192 112C220 70 246 40 289 16" />



//         <path d="M75 260C40 252 19 227 15 191C50 202 76 224 75 260Z" fill="#AAB6A0" fillOpacity=".12"/>

//         <path d="M75 260L22 200"/>



//         <path d="M102 228C139 231 169 215 184 185C147 180 118 195 102 228Z" fill="#AAB6A0" fillOpacity=".1"/>

//         <path d="M102 228L175 190"/>



//         <path d="M145 166C113 145 105 115 120 83C147 108 158 139 145 166Z" fill="#AAB6A0" fillOpacity=".12"/>

//         <path d="M145 166L126 94"/>



//         <path d="M177 132C211 135 238 118 250 89C216 85 190 102 177 132Z" fill="#AAB6A0" fillOpacity=".1"/>

//         <path d="M177 132L241 95"/>



//         <path d="M222 82C198 60 198 36 214 14C234 36 239 61 222 82Z" fill="#AAB6A0" fillOpacity=".12"/>

//         <path d="M222 82L216 22"/>



//         <path d="M231 75C251 48 277 46 299 61C280 83 252 91 231 75Z" fill="#AAB6A0" fillOpacity=".12"/>

//         <path d="M231 75L291 64"/>



//         <path d="M45 294C29 293 15 283 6 266C26 266 42 276 45 294Z" fill="#AAB6A0" fillOpacity=".1"/>

//         <path d="M45 294L12 272"/>

//       </g>

//     </svg>

//   );

// }



// export default function HomePage() {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [allProjects, setAllProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     let cancelled = false;

//     getProjects()
//       .then((items) => {
//         if (!cancelled) setAllProjects(items);
//       })
//       .catch((error) => {
//         console.error("Failed to load projects:", error);
//       });

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const featuredProject = allProjects[0] ?? null;
//   const projects = allProjects.slice(1, 4);



//   const closeMenu = () => setMenuOpen(false);



//   return (

//     <main>

//       {/* Navigation */}

//       <header className="site-header">

//         <div className="header-inner">

//           <Link href="/" className="wordmark" onClick={closeMenu}>

//             <span className="wordmark-name">SHASHANK TIRANDAS</span>

//             <span className="wordmark-dot">·</span>

//             <span className="wordmark-role">Independent Developer</span>

//           </Link>



//           <button

//             className="menu-toggle"

//             type="button"

//             aria-label={menuOpen ? "Close navigation" : "Open navigation"}

//             aria-expanded={menuOpen}

//             aria-controls="main-navigation"

//             onClick={() => setMenuOpen((open) => !open)}

//           >

//             {menuOpen ? <X size={21} /> : <Menu size={21} />}

//           </button>



//           <nav

//             id="main-navigation"

//             className={`main-nav ${menuOpen ? "is-open" : ""}`}

//             aria-label="Main navigation"

//           >

//             <Link href="/projects" onClick={closeMenu}>Work</Link>

//             <Link href="/services" onClick={closeMenu}>Services</Link>

//             <Link href="/about" onClick={closeMenu}>About</Link>

//             <Link href="/sketchbook" onClick={closeMenu}>Sketchbook</Link>

//             <Link href="/resume" onClick={closeMenu}>Résumé</Link>

//             <Link

//               href="/contact"

//               className="nav-contact"

//               onClick={closeMenu}

//             >

//               Contact <ArrowUpRight size={15} />

//             </Link>

//           </nav>

//         </div>

//       </header>



//       <div className="page-shell">

//         {/* Hero */}

//         <section className="hero">

//           <div className="hero-copy">

//             <p className="eyebrow">

//               FULL-STACK DEVELOPER <span>·</span> DESIGN THINKER

//               <span>·</span> PROBLEM SOLVER

//             </p>



//             <h1>

//               Ideas deserve

//               <br />

//               to become <span className="accent-word">real.</span>

//             </h1>



//             <p className="hero-description">

//               I design and build web applications that solve real problems,

//               help people and create meaningful digital experiences.

//             </p>



//             <div className="hero-actions">

//               <Link href="/projects" className="button button-primary">

//                 Explore my work <ArrowUpRight size={17} />

//               </Link>

//               <Link href="/about" className="button button-secondary">

//                 About me

//               </Link>

//             </div>



//             <p className="hero-note">

//               Based in India <span>·</span> Open to suitable projects

//             </p>

//           </div>



//           <div className="hero-visual">

//             <BotanicalLeaves className="hero-botanical hero-botanical-left" />



            
// <div className="portrait-frame">
//   <div className="portrait-placeholder">
//     <Image
//       src="/images/shashank-portrait.png"
//       alt="Shashank Tirandas — Independent Developer"
//       fill
//       priority
//       sizes="(max-width: 768px) 80vw, 400px"
//       className="hero-portrait"
//     />
//   </div>

//   <span className="portrait-index">ST. / 01</span>
// </div>




//             <div className="hero-handwriting" aria-hidden="true">

//               Turning ideas

//               <br />

//               into useful

//               <br />

//               products.

//               <ArrowDownRight size={27} strokeWidth={1} />

//             </div>



//             <div className="hero-orbit" aria-hidden="true">

//               <span>01</span>

//               DEVELOP

//               <span>02</span>

//               LEARN

//               <span>03</span>

//               CREATE

//               <span>04</span>

//               IMPROVE

//             </div>



//             <span className="hero-copper-line" aria-hidden="true" />

//           </div>

//         </section>



//         {/* Featured project */}
//         <section className="featured-section">
//           <div className="section-heading">
//             <SectionLabel number="01">Featured project</SectionLabel>
//             <Link href="/projects" className="text-link">
//               View all work <ArrowUpRight size={15} />
//             </Link>
//           </div>

//           {featuredProject ? (
//             <article className="featured-project">
//               <div className="featured-copy">
//                 <p className="project-kicker">
//                   {featuredProject.category.toUpperCase()}
//                 </p>
//                 <h2>{featuredProject.name}</h2>
//                 <p className="featured-subtitle">
//                   {featuredProject.tagline || featuredProject.summary || "A project built with purpose."}
//                 </p>
//                 <p className="project-description">
//                   {featuredProject.description || featuredProject.summary || featuredProject.tagline || "Explore the project and its design decisions."}
//                 </p>
//                 <div className="tag-list">
//                   {(featuredProject.technologies ?? []).map((tag) => (
//                     <span className="tech-tag" key={tag}>{tag}</span>
//                   ))}
//                 </div>
//                 <div className="hero-actions">
//                   <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
//                     Explore project <ArrowUpRight size={16} />
//                   </Link>
//                   {featuredProject.liveUrl && (
//                     <a href={featuredProject.liveUrl} className="button button-secondary" target="_blank" rel="noopener noreferrer">
//                       Visit live site <ArrowUpRight size={16} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               <Link href={`/projects/${featuredProject.slug}`} className="featured-visual" aria-label={`Explore ${featuredProject.name} case study`}>
//                 <BotanicalLeaves className="featured-botanical" />
//                 <div className="mock-browser">
//                   <div className="browser-bar">
//                     <span className="browser-brand">{featuredProject.name}</span>
//                     <span>Overview</span>
//                     <span>Details</span>
//                     <span className="browser-pill">Explore</span>
//                   </div>
//                   <div className="browser-content">
//                     <span className="browser-kicker">{featuredProject.category.toUpperCase()}</span>
//                     <span className="browser-headline">{featuredProject.name}</span>
//                     <span className="browser-caption">
//                       {featuredProject.tagline || featuredProject.summary || "Ideas made into something real."}
//                     </span>
//                     <span className="browser-cta">Explore project ↗</span>
//                     <div className="brd-preview-mark" aria-hidden="true">
//                       <span>{featuredProject.name}</span>
//                       <Code2 size={25} strokeWidth={1.2} />
//                     </div>
//                   </div>
//                 </div>
//                 <span className="image-caption">A closer look at the project <ArrowUpRight size={13} /></span>
//               </Link>
//             </article>
//           ) : (
//             <p className="project-description">Loading featured project...</p>
//           )}
//         </section>

//         {/* Other projects */}

//         <section className="projects-section">

//           <div className="section-heading">

//             <SectionLabel number="02">Other projects</SectionLabel>

//             <Link href="/projects" className="text-link">

//               All projects <ArrowUpRight size={15} />

//             </Link>

//           </div>



//           <div className="project-grid">

//             {projects.map((project, index) => (

//               <article

//                 className={`project-card project-card-${index + 1}`}

//                 key={project.id}

//               >

//                 <Link

//                   href={`/projects/${project.slug}`}

//                   className={`project-image project-tone-${projectTones[project.slug] ?? "notes"}`}

//                   aria-label={`View ${project.name} case study`}

//                 >

//                   <div className="project-image-placeholder">

//   <Code2 size={32} strokeWidth={1.2} />

//   <span>{project.name}</span>

//   <small>PROJECT PREVIEW</small>

// </div>

//                   <span className="project-image-arrow">

//                     <ArrowUpRight size={20} />

//                   </span>

//                 </Link>



//                 <div className="project-card-content">

//                   <p className="project-kicker">

//                     {String(index + 2).padStart(2, "0")} / {project.category.toUpperCase()}

//                   </p>



//                   <h3>

//                     <Link href={`/projects/${project.slug}`}>{project.name}</Link>

//                   </h3>



//                   <p className="project-description">{project.description || project.summary || project.tagline || "Explore this project."}</p>



//                   <div className="tag-list">

//                     {(project.technologies ?? []).map((tag) => (

//                       <span className="tech-tag" key={tag}>{tag}</span>

//                     ))}

//                   </div>



//                   <Link href={`/projects/${project.slug}`} className="project-card-link">

//                     View case study <ArrowRight size={15} />

//                   </Link>

//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       className="project-card-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Visit live site <ArrowUpRight size={15} />
//                     </a>
//                   )}

//                 </div>

//               </article>

//             ))}

//           </div>

//         </section>



//         {/* Services */}

//         <section className="services-preview">

//           <div className="section-heading">

//             <SectionLabel number="03">What I do</SectionLabel>

//             <Link href="/services" className="text-link">

//               Explore services <ArrowUpRight size={15} />

//             </Link>

//           </div>



//           <div className="services-grid">

//             <article className="service-item">

//               <div className="service-icon"><Code2 /></div>

//               <div>

//                 <h3>Web applications</h3>

//                 <p>Useful, responsive products built around real needs.</p>

//               </div>

//             </article>



//             <article className="service-item">

//               <div className="service-icon"><PenTool /></div>

//               <div>

//                 <h3>Interface development</h3>

//                 <p>Thoughtful interfaces that are clear and easy to use.</p>

//               </div>

//             </article>



//             <article className="service-item">

//               <div className="service-icon"><Wrench /></div>

//               <div>

//                 <h3>Improvements & support</h3>

//                 <p>Practical updates and maintenance for existing products.</p>

//               </div>

//             </article>

//           </div>

//         </section>



//         {/* About and sketchbook */}

//         <section className="about-preview">

//           <div className="about-copy">

//             <SectionLabel number="04">A little about me</SectionLabel>

//             <h2>Curious. Creative. Committed.</h2>

//             <p>

//               I&apos;m Shashank Tirandas, a developer who enjoys understanding

//               problems, exploring ideas and building practical solutions.

//               I believe good work begins with asking the right questions.

//             </p>

//             <Link href="/about" className="button button-primary">

//               More about me <ArrowUpRight size={16} />

//             </Link>

//           </div>



//           <Link href="/sketchbook" className="sketchbook-preview">

//             <BotanicalLeaves className="sketchbook-botanical" />



//             <div className="sketchbook-paper">

//               <PenTool size={36} strokeWidth={1} />

//               <span>Ideas, observations & things made by hand.</span>

//             </div>



//             <div className="sketchbook-caption">

//               A little beyond the screen <ArrowUpRight size={14} />

//             </div>

//           </Link>

//         </section>



//         {/* Contact */}

//         <section className="contact-banner">

//           <ContactBotanical className="contact-botanical contact-botanical-left" />

//           <ContactBotanical className="contact-botanical contact-botanical-right" />



//           <div className="contact-copy">

//             <SectionLabel number="05">Let&apos;s connect</SectionLabel>

//             <h2>Have an idea worth building?</h2>

//             <p>

//               Tell me what you&apos;re thinking. We can work out the next step

//               together.

//             </p>

//           </div>



//           <Link href="/contact" className="button button-paper contact-action">

//             Start a conversation <ArrowUpRight size={17} />

//           </Link>

//         </section>

//       </div>



//       {/* Footer */}

//       <footer className="site-footer">

//         <div className="footer-inner">

//           <Link href="/" className="footer-brand">

//             <span>SHASHANK TIRANDAS</span>

//             <span>Independent Developer</span>

//           </Link>



//           <nav className="footer-nav" aria-label="Footer navigation">

//             <Link href="/projects">Work</Link>

//             <Link href="/services">Services</Link>

//             <Link href="/about">About</Link>

//             <Link href="/contact">Contact</Link>

//           </nav>





// <div className="footer-socials">

//   <a

//     href="https://github.com/shashanktirandas"

//     target="_blank"

//     rel="noreferrer"

//     aria-label="GitHub (opens in a new tab)"

//     title="GitHub"

//   >

//     <Code2 size={17} />

//   </a>



//   <a

//     href="https://www\.linkedin.com/in/shashanktirandas/"

//     target="_blank"

//     rel="noreferrer"

//     aria-label="LinkedIn (opens in a new tab)"

//     title="LinkedIn"

//   >

//     <span className="social-letter">in</span>

//   </a>



//   <Link href="/contact" aria-label="Contact" title="Contact">

//     <Mail size={17} />

//   </Link>

// </div>



//         </div>



//         <div className="footer-bottom">

//           <span>© 2026 Shashank Tirandas.</span>

//           <span className="footer-signoff">

//             Thoughtfully built, with room to grow.

//             <span aria-hidden="true"> ✳</span>

//           </span>

//         </div>

//       </footer>

//     </main>

//   );

// }


"use client";



import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects/types";
import { getProjects } from "@/lib/projects/service";

import {

  ArrowRight,

  ArrowUpRight,

  Code2,

  Mail,

  Menu,

  PenTool,

  Wrench,

  X,


} from "lucide-react";

import BotanicalLeaves from "@/components/BotanicalLeaves";



const projectTones: Record<string, string> = {
  brd: "notes",
  "chaam-notes": "notes",
  "thaara-theeram": "community",
  "mrudula-ent-care": "healthcare",
};



function SectionLabel({

  number,

  children,

}: {

  number: string;

  children: React.ReactNode;

}) {

  return (

    <div className="section-label">

      <span>{number}</span>

      <span className="label-divider" />

      <span>{children}</span>

    </div>

  );

}



/* Decorative branch used behind the contact content. */

function ContactBotanical({

  className = "",

}: {

  className?: string;

}) {

  return (

    <svg

      className={className}

      viewBox="0 0 320 340"

      fill="none"

      aria-hidden="true"

      focusable="false"

    >

      <g

        stroke="#C2CBB5"

        strokeWidth="1.1"

        strokeLinecap="round"

        strokeLinejoin="round"

      >

        <path d="M25 320C86 250 145 184 192 112C220 70 246 40 289 16" />



        <path d="M75 260C40 252 19 227 15 191C50 202 76 224 75 260Z" fill="#AAB6A0" fillOpacity=".12"/>

        <path d="M75 260L22 200"/>



        <path d="M102 228C139 231 169 215 184 185C147 180 118 195 102 228Z" fill="#AAB6A0" fillOpacity=".1"/>

        <path d="M102 228L175 190"/>



        <path d="M145 166C113 145 105 115 120 83C147 108 158 139 145 166Z" fill="#AAB6A0" fillOpacity=".12"/>

        <path d="M145 166L126 94"/>



        <path d="M177 132C211 135 238 118 250 89C216 85 190 102 177 132Z" fill="#AAB6A0" fillOpacity=".1"/>

        <path d="M177 132L241 95"/>



        <path d="M222 82C198 60 198 36 214 14C234 36 239 61 222 82Z" fill="#AAB6A0" fillOpacity=".12"/>

        <path d="M222 82L216 22"/>



        <path d="M231 75C251 48 277 46 299 61C280 83 252 91 231 75Z" fill="#AAB6A0" fillOpacity=".12"/>

        <path d="M231 75L291 64"/>



        <path d="M45 294C29 293 15 283 6 266C26 266 42 276 45 294Z" fill="#AAB6A0" fillOpacity=".1"/>

        <path d="M45 294L12 272"/>

      </g>

    </svg>

  );

}



export default function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((items) => {
        if (!cancelled) setAllProjects(items);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const featuredProject = allProjects[0] ?? null;
  const projects = allProjects.slice(1, 4);



  const closeMenu = () => setMenuOpen(false);



  return (

    <main>

      {/* Navigation */}

      <header className="site-header">

        <div className="header-inner">

          <Link href="/" className="wordmark" onClick={closeMenu}>

            <span className="wordmark-name">SHASHANK TIRANDAS</span>

            <span className="wordmark-dot">·</span>

            <span className="wordmark-role">Independent Developer</span>

          </Link>



          <button

            className="menu-toggle"

            type="button"

            aria-label={menuOpen ? "Close navigation" : "Open navigation"}

            aria-expanded={menuOpen}

            aria-controls="main-navigation"

            onClick={() => setMenuOpen((open) => !open)}

          >

            {menuOpen ? <X size={21} /> : <Menu size={21} />}

          </button>



          <nav

            id="main-navigation"

            className={`main-nav ${menuOpen ? "is-open" : ""}`}

            aria-label="Main navigation"

          >

            <Link href="/projects" onClick={closeMenu}>Work</Link>

            <Link href="/services" onClick={closeMenu}>Services</Link>

            <Link href="/about" onClick={closeMenu}>About</Link>

            <Link href="/sketchbook" onClick={closeMenu}>Sketchbook</Link>

            <Link href="/resume" onClick={closeMenu}>Résumé</Link>

            <Link

              href="/contact"

              className="nav-contact"

              onClick={closeMenu}

            >

              Contact <ArrowUpRight size={15} />

            </Link>

          </nav>

        </div>

      </header>



      <div className="page-shell">

        {/* Hero */}

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              FULL-STACK DEVELOPER <span>·</span> DESIGN THINKER
              <span>·</span> PROBLEM SOLVER
            </p>

            <h1>
              Ideas deserve
              <br />
              to become <span className="accent-word">real.</span>
            </h1>

            <p className="hero-description">
              I design and build web applications that solve real problems,
              help people and create meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                Explore my work <ArrowUpRight size={19} />
              </Link>
              <Link href="/about" className="button button-secondary">
                About me
              </Link>
            </div>

            <p className="hero-note">
              Based in India <span>·</span> Open to suitable projects
            </p>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/shashank-portrait.png"
              alt="Shashank Tirandas — Independent Developer"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              className="hero-portrait"
            />

            <div className="portrait-caption">
              <span>ST. / 01</span>
              <span>Independent Developer</span>
            </div>

            <span className="portrait-side-label" aria-hidden="true">
              DESIGN · DEVELOP · IMPROVE
            </span>
          </div>
        </section>



        {/* Featured project */}
        <section className="featured-section">
          <div className="section-heading">
            <SectionLabel number="01">Featured project</SectionLabel>
            <Link href="/projects" className="text-link">
              View all work <ArrowUpRight size={15} />
            </Link>
          </div>

          {featuredProject ? (
            <article className="featured-project">
              <div className="featured-copy">
                <p className="project-kicker">
                  {featuredProject.category.toUpperCase()}
                </p>
                <h2>{featuredProject.name}</h2>
                <p className="featured-subtitle">
                  {featuredProject.tagline || featuredProject.summary || "A project built with purpose."}
                </p>
                <p className="project-description">
                  {featuredProject.description || featuredProject.summary || featuredProject.tagline || "Explore the project and its design decisions."}
                </p>
                <div className="tag-list">
                  {(featuredProject.technologies ?? []).map((tag) => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="hero-actions">
                  <Link href={`/projects/${featuredProject.slug}`} className="button button-primary">
                    Explore project <ArrowUpRight size={16} />
                  </Link>
                  {featuredProject.liveUrl && (
                    <a href={featuredProject.liveUrl} className="button button-secondary" target="_blank" rel="noopener noreferrer">
                      Visit live site <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <Link href={`/projects/${featuredProject.slug}`} className="featured-visual" aria-label={`Explore ${featuredProject.name} case study`}>
                <BotanicalLeaves className="featured-botanical" />
                <div className="mock-browser">
                  <div className="browser-bar">
                    <span className="browser-brand">{featuredProject.name}</span>
                    <span>Overview</span>
                    <span>Details</span>
                    <span className="browser-pill">Explore</span>
                  </div>
                  <div className="browser-content">
                    <span className="browser-kicker">{featuredProject.category.toUpperCase()}</span>
                    <span className="browser-headline">{featuredProject.name}</span>
                    <span className="browser-caption">
                      {featuredProject.tagline || featuredProject.summary || "Ideas made into something real."}
                    </span>
                    <span className="browser-cta">Explore project ↗</span>
                    <div className="brd-preview-mark" aria-hidden="true">
                      <span>{featuredProject.name}</span>
                      <Code2 size={25} strokeWidth={1.2} />
                    </div>
                  </div>
                </div>
                <span className="image-caption">A closer look at the project <ArrowUpRight size={13} /></span>
              </Link>
            </article>
          ) : (
            <p className="project-description">Loading featured project...</p>
          )}
        </section>

        {/* Other projects */}

        <section className="projects-section">

          <div className="section-heading">

            <SectionLabel number="02">Other projects</SectionLabel>

            <Link href="/projects" className="text-link">

              All projects <ArrowUpRight size={15} />

            </Link>

          </div>



          <div className="project-grid">

            {projects.map((project, index) => (

              <article

                className={`project-card project-card-${index + 1}`}

                key={project.id}

              >

                <Link

                  href={`/projects/${project.slug}`}

                  className={`project-image project-tone-${projectTones[project.slug] ?? "notes"}`}

                  aria-label={`View ${project.name} case study`}

                >

                  <div className="project-image-placeholder">

  <Code2 size={32} strokeWidth={1.2} />

  <span>{project.name}</span>

  <small>PROJECT PREVIEW</small>

</div>

                  <span className="project-image-arrow">

                    <ArrowUpRight size={20} />

                  </span>

                </Link>



                <div className="project-card-content">

                  <p className="project-kicker">

                    {String(index + 2).padStart(2, "0")} / {project.category.toUpperCase()}

                  </p>



                  <h3>

                    <Link href={`/projects/${project.slug}`}>{project.name}</Link>

                  </h3>



                  <p className="project-description">{project.description || project.summary || project.tagline || "Explore this project."}</p>



                  <div className="tag-list">

                    {(project.technologies ?? []).map((tag) => (

                      <span className="tech-tag" key={tag}>{tag}</span>

                    ))}

                  </div>



                  <Link href={`/projects/${project.slug}`} className="project-card-link">

                    View case study <ArrowRight size={15} />

                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="project-card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live site <ArrowUpRight size={15} />
                    </a>
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>



        {/* Services */}

        <section className="services-preview">

          <div className="section-heading">

            <SectionLabel number="03">What I do</SectionLabel>

            <Link href="/services" className="text-link">

              Explore services <ArrowUpRight size={15} />

            </Link>

          </div>



          <div className="services-grid">

            <article className="service-item">

              <div className="service-icon"><Code2 /></div>

              <div>

                <h3>Web applications</h3>

                <p>Useful, responsive products built around real needs.</p>

              </div>

            </article>



            <article className="service-item">

              <div className="service-icon"><PenTool /></div>

              <div>

                <h3>Interface development</h3>

                <p>Thoughtful interfaces that are clear and easy to use.</p>

              </div>

            </article>



            <article className="service-item">

              <div className="service-icon"><Wrench /></div>

              <div>

                <h3>Improvements & support</h3>

                <p>Practical updates and maintenance for existing products.</p>

              </div>

            </article>

          </div>

        </section>



        {/* About and sketchbook */}

        <section className="about-preview">

          <div className="about-copy">

            <SectionLabel number="04">A little about me</SectionLabel>

            <h2>Curious. Creative. Committed.</h2>

            <p>

              I&apos;m Shashank Tirandas, a developer who enjoys understanding

              problems, exploring ideas and building practical solutions.

              I believe good work begins with asking the right questions.

            </p>

            <Link href="/about" className="button button-primary">

              More about me <ArrowUpRight size={16} />

            </Link>

          </div>



          <Link href="/sketchbook" className="sketchbook-preview">

            <BotanicalLeaves className="sketchbook-botanical" />



            <div className="sketchbook-paper">

              <PenTool size={36} strokeWidth={1} />

              <span>Ideas, observations & things made by hand.</span>

            </div>



            <div className="sketchbook-caption">

              A little beyond the screen <ArrowUpRight size={14} />

            </div>

          </Link>

        </section>



        {/* Contact */}

        <section className="contact-banner">

          <ContactBotanical className="contact-botanical contact-botanical-left" />

          <ContactBotanical className="contact-botanical contact-botanical-right" />



          <div className="contact-copy">

            <SectionLabel number="05">Let&apos;s connect</SectionLabel>

            <h2>Have an idea worth building?</h2>

            <p>

              Tell me what you&apos;re thinking. We can work out the next step

              together.

            </p>

          </div>



          <Link href="/contact" className="button button-paper contact-action">

            Start a conversation <ArrowUpRight size={17} />

          </Link>

        </section>

      </div>



      {/* Footer */}

      <footer className="site-footer">

        <div className="footer-inner">

          <Link href="/" className="footer-brand">

            <span>SHASHANK TIRANDAS</span>

            <span>Independent Developer</span>

          </Link>



          <nav className="footer-nav" aria-label="Footer navigation">

            <Link href="/projects">Work</Link>

            <Link href="/services">Services</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

          </nav>





<div className="footer-socials">

  <a

    href="https://github.com/shashanktirandas"

    target="_blank"

    rel="noreferrer"

    aria-label="GitHub (opens in a new tab)"

    title="GitHub"

  >

    <Code2 size={17} />

  </a>



  <a

    href="https://www\.linkedin.com/in/shashanktirandas/"

    target="_blank"

    rel="noreferrer"

    aria-label="LinkedIn (opens in a new tab)"

    title="LinkedIn"

  >

    <span className="social-letter">in</span>

  </a>



  <Link href="/contact" aria-label="Contact" title="Contact">

    <Mail size={17} />

  </Link>

</div>



        </div>



        <div className="footer-bottom">

          <span>© 2026 Shashank Tirandas.</span>

          <span className="footer-signoff">

            Thoughtfully built, with room to grow.

            <span aria-hidden="true"> ✳</span>

          </span>

        </div>

      </footer>

    </main>

  );

}