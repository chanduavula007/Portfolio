import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// what I've built</p>
          <h2 className="text-4xl font-bold">My <span className="gradient-text">Projects</span></h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Projects showcasing my MERN stack skills. More coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="glass p-6 glow-hover group flex flex-col">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white text-sm transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-primary text-sm transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
