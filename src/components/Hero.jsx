import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personal } from '../data';

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'AI & DS Student',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        t = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((p) => (p + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-float">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* typewriter */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl text-slate-400 font-mono">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          B.Tech student at NBKRIST passionate about building modern web apps. Certified MERN Full Stack
          Developer with experience in React, Node.js, MongoDB and Power BI.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/80 transition-all glow hover:scale-105">
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-primary/50 text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* social */}
        <div className="flex justify-center gap-4">
          {[
            { icon: <Github className="w-5 h-5" />, href: personal.github, label: 'GitHub' },
            { icon: <Linkedin className="w-5 h-5" />, href: personal.linkedin, label: 'LinkedIn' },
            { icon: <Mail className="w-5 h-5" />, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-slate-400 hover:text-white">
              {icon}
            </a>
          ))}
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
