
import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/sketchbook", label: "Sketchbook" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" href="/">
        <span className="brand-mark">s<span>.</span></span>
        <span className="brand-name">SHASHANK TIRANDAS</span>
      </Link>

      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <a href="mailto:shashanktirandas53@gmail.com" className="footer-email">
        Get in touch ↗
      </a>

      <span className="footer-note">
        THOUGHTFUL BY DESIGN. USEFUL BY PURPOSE.
      </span>
    </footer>
  );
}
