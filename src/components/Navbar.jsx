import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '../data';

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-primary/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('home')}
          className="text-xl font-extrabold tracking-tight gradient-text font-mono">
          Avula Chandu
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <button key={id} onClick={() => go(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === id
                  ? 'text-primary'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}>
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </button>
          ))}
          <button onClick={() => go('contact')}
            className="ml-3 px-5 py-2 bg-primary text-dark font-bold text-sm rounded-xl hover:bg-primary-dark transition-all glow">
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 p-2" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mb-4 glass flex flex-col p-4 gap-1">
          {sections.map(({ id, label }) => (
            <button key={id} onClick={() => go(id)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === id
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
