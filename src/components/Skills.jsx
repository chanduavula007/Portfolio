import React, { useState } from 'react';
import { skillCategories } from '../data';

const techBadges = [
  'MongoDB','Express.js','React.js','Node.js','JavaScript',
  'HTML5','CSS3','Tailwind','Git','Docker','MySQL','Power BI',
];

function Bar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"
          style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// what I know</p>
          <h2 className="text-4xl font-bold">My <span className="gradient-text">Skills</span></h2>
        </div>

        {/* tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techBadges.map((t) => (
            <span key={t} className="glass px-3 py-1.5 text-sm text-slate-300 glow-hover cursor-default">
              {t}
            </span>
          ))}
        </div>

        {/* tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((cat, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                active === i
                  ? 'bg-primary text-white glow'
                  : 'border border-border text-slate-400 hover:border-primary/50 hover:text-white'
              }`}>
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* panel */}
        <div className="max-w-lg mx-auto glass p-8">
          <h3 className="text-lg font-semibold mb-6 gradient-text">
            {skillCategories[active].icon} {skillCategories[active].title}
          </h3>
          {skillCategories[active].skills.map((s) => (
            <Bar key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
