import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-5">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">// what I've built</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Projects showcasing my MERN stack expertise. More coming soon!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.id}
              className="glass p-6 flex flex-col group glow-hover"
              style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Icon + number */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient}
                  flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <span className="text-4xl font-extrabold text-white/5 font-mono select-none">
                  0{p.id}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span key={tag}
                    className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-primary/10">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors text-sm font-medium ml-auto">
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a href="https://github.com/chanduavula007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-all text-sm font-medium">
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
