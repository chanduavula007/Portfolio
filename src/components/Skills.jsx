import React, { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../data';

const techStack = [
  { name: 'Python',     icon: '🐍', color: '#3776AB' },
  { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  { name: 'Java',       icon: '☕', color: '#ED8B00' },
  { name: 'C',          icon: '🔷', color: '#A8B9CC' },
  { name: 'React.js',   icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js',    icon: '🟢', color: '#339933' },
  { name: 'Express.js', icon: '⚡', color: '#eee' },
  { name: 'MongoDB',    icon: '🍃', color: '#47A248' },
  { name: 'HTML5',      icon: '🌐', color: '#E34F26' },
  { name: 'CSS3',       icon: '🎨', color: '#1572B6' },
  { name: 'Tailwind',   icon: '💨', color: '#06B6D4' },
  { name: 'Git',        icon: '📦', color: '#F05032' },
  { name: 'Power BI',   icon: '📊', color: '#F2C811' },
  { name: 'VS Code',    icon: '🖥️', color: '#007ACC' },
];

function Bar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-primary/10">
        <div className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive]   = useState(0);
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}
      className="min-h-screen flex items-center py-20 px-5 bg-surface/40">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">// what I know</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm">Technologies I work with to build modern applications.</p>
        </div>

        {/* Tech badge cloud */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techStack.map((t) => (
            <div key={t.name}
              className="glass flex items-center gap-2 px-4 py-2 text-sm text-slate-300 glow-hover cursor-default hover:text-white transition-all">
              <span>{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Tabs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {skillCategories.map((cat, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    active === i
                      ? 'bg-primary text-dark glow'
                      : 'border border-primary/20 text-slate-400 hover:border-primary/50 hover:text-white'
                  }`}>
                  {cat.icon} {cat.title}
                </button>
              ))}
            </div>

            <div className="glass p-7">
              <h3 className="text-base font-bold gradient-text mb-5">
                {skillCategories[active].icon} {skillCategories[active].title} Skills
              </h3>
              {skillCategories[active].skills.map((s) => (
                <Bar key={s.name} {...s} animate={animate} />
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🐍', title: 'Programming',  desc: 'Python, JavaScript, Java, C',       color: 'from-primary/20 to-primary/5' },
              { icon: '🎨', title: 'Frontend',     desc: 'React, HTML5, CSS3, Tailwind',       color: 'from-emerald-500/20 to-emerald-500/5' },
              { icon: '⚙️', title: 'Backend & DB', desc: 'Node.js, Express, MongoDB, MySQL',   color: 'from-gold/20 to-gold/5' },
              { icon: '🛠️', title: 'Tools',        desc: 'Git, GitHub, VS Code, Power BI, Kiro', color: 'from-purple-500/20 to-purple-500/5' },
            ].map((card) => (
              <div key={card.title}
                className={`glass p-5 bg-gradient-to-br ${card.color} glow-hover`}>
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4 className="font-bold text-white text-sm mb-1">{card.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
