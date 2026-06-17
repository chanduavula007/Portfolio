import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')}
          className="flex items-center gap-2 text-xl font-bold gradient-text">
          <Code2 className="w-6 h-6 text-primary" />AC.dev
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.href)}
              className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')}
            className="ml-3 px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/80 transition-all glow">
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-300 p-2" onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mb-4 glass flex flex-col gap-1 p-4">
          {links.map(l => (
            <button key={l.label} onClick={() => { scrollTo(l.href); setOpen(false); }}
              className="text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
