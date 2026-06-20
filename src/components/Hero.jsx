import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { personal } from '../data';

const roles = [
  'Junior Web Developer',
  'MERN Stack Developer',
  'Python Developer',
  'AI & DS Student',
];

export default function Hero({ active, setActiveSection }) {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing,    setTyping]    = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((p) => (p + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  if (!active) return null;

  return (
    <section id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,170,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,170,0.3) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/8 text-primary text-sm font-medium mb-8 animate-float">
          <Sparkles className="w-4 h-4" />
          Available for opportunities
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="gradient-text">CHANDU AVULA</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl text-slate-300 font-mono">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse align-middle" />
          </span>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          B.Tech student in AI & Data Science at NBKRIST with hands-on experience
          in Python and core web technologies. Certified MERN Stack Developer with
          a solid understanding of software lifecycles through Git & GitHub,
          looking to build high-performance, user-centric applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 bg-primary text-dark font-bold rounded-xl hover:bg-primary-dark transition-all glow hover:scale-105 text-sm">
            View My Work
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-8 py-3 border border-primary/40 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all hover:scale-105 text-sm">
            Get In Touch
          </button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4">
          {[
            { icon: <Github className="w-5 h-5" />,   href: personal.github,            label: 'GitHub' },
            { icon: <Linkedin className="w-5 h-5" />, href: personal.linkedin,          label: 'LinkedIn' },
            { icon: <Mail className="w-5 h-5" />,     href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all text-slate-400 hover:text-primary">
              {icon}
            </a>
          ))}
        </div>

        {/* Down arrow → go to About */}
        <button
          onClick={() => setActiveSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary/40 hover:text-primary transition-colors"
          aria-label="Go to About section">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
