"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
];

export default function Nav({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner glass">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          {brand}
          <span className="brand-dot">.</span>
        </a>

        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`menu-icon ${open ? "open" : ""}`} />
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
