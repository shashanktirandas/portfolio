
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={closeMenu} aria-label="Shashank Tirandas home">
        <span className="brand-mark">s<span>.</span></span>
        <span className="brand-name">SHASHANK TIRANDAS</span>
      </Link>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
      >
        <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        <span className={`menu-lines ${menuOpen ? "menu-lines-open" : ""}`} aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <nav
        id="primary-navigation"
        className={`glass-nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link className="nav-contact" href="/contact" onClick={closeMenu}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
