import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal, sections } from '../data';

export default function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-primary/10 bg-surface/80 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold gradient-text font-mono mb-3">&lt;AC /&gt;</div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full Stack Developer specialising in MERN stack.
              B.Tech AI & DS student at NBKRIST, Nellore.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {sections.map(({ id, label }) => (
                <button key={id} onClick={() => go(id)}
                  className="text-slate-500 hover:text-primary text-sm text-left transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: <Github className="w-4 h-4" />,   href: personal.github,            label: 'GitHub' },
                { icon: <Linkedin className="w-4 h-4" />, href: personal.linkedin,          label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />,     href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-primary/15
                    hover:border-primary/50 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all">
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-xs font-mono">APAAR: {personal.apaarId}</p>
          </div>
        </div>

        <div className="border-t border-primary/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
