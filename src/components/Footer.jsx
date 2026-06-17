import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personal } from '../data';

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold gradient-text mb-3">
              <Code2 className="w-5 h-5 text-primary" /> AC.dev
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full Stack Developer specialising in MERN stack. B.Tech AI & DS student at NBKRIST.
            </p>
          </div>

          {/* links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <button key={l.label} onClick={() => scrollTo(l.href)}
                  className="text-slate-500 hover:text-primary text-sm text-left transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: <Github className="w-4 h-4" />,   href: personal.github,              label: 'GitHub' },
                { icon: <Linkedin className="w-4 h-4" />, href: personal.linkedin,            label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />,     href: `mailto:${personal.email}`,   label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 text-slate-500 hover:text-white transition-all">
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-xs">APAAR ID: {personal.apaarId}</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-secondary" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
