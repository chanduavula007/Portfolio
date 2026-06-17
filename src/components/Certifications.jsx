import React, { useState } from 'react';
import { ExternalLink, Award, Trophy, Medal, Star } from 'lucide-react';
import { certifications, CERT_CATEGORIES } from '../data';

const typeStyle = {
  winner:        'bg-yellow-400/15 text-yellow-300 border-yellow-400/30',
  achievement:   'bg-primary/15 text-primary border-primary/30',
  participation: 'bg-slate-700/50 text-slate-400 border-slate-600',
};

const typeIcon = {
  winner:        <Trophy className="w-3 h-3" />,
  achievement:   <Medal className="w-3 h-3" />,
  participation: <Star className="w-3 h-3" />,
};

export default function Certifications() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? certifications
    : certifications.filter((c) => c.category === active);

  // counts per category
  const counts = CERT_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All'
      ? certifications.length
      : certifications.filter((c) => c.category === cat).length;
    return acc;
  }, {});

  return (
    <section id="certifications" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// credentials & achievements</p>
          <h2 className="text-4xl font-bold">My <span className="gradient-text">Certifications</span></h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Academic, sports, science and social achievements — all in one place.
          </p>
        </div>

        {/* legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
          {[
            { type: 'winner',        label: 'Winner / Position' },
            { type: 'achievement',   label: 'Achievement' },
            { type: 'participation', label: 'Participation' },
          ].map(({ type, label }) => (
            <div key={type} className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${typeStyle[type]}`}>
              {typeIcon[type]}
              {label}
            </div>
          ))}
        </div>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CERT_CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                active === cat
                  ? 'bg-primary text-white glow'
                  : 'border border-border text-slate-400 hover:border-primary/50 hover:text-white'
              }`}>
              {cat}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                active === cat ? 'bg-white/20' : 'bg-white/5'
              }`}>{counts[cat]}</span>
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert) => (
            <article key={cert.id}
              className="glass p-5 flex flex-col glow-hover transition-all duration-300">
              {/* top row */}
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl flex-shrink-0`}>
                  {cert.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-slate-500 font-mono">{cert.year}</span>
                  <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${typeStyle[cert.type]}`}>
                    {typeIcon[cert.type]}
                    {cert.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed flex-grow">{cert.issuer}</p>

              {/* tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cert.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-white/5 text-slate-400 text-xs rounded border border-border">
                    {t}
                  </span>
                ))}
              </div>

              {/* verify link */}
              {cert.verifyUrl && cert.verifyUrl !== '#' && (
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 text-xs transition-colors mt-auto">
                  <Award className="w-3 h-3" /> Verify
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </article>
          ))}
        </div>

        {/* total count */}
        <p className="text-center text-slate-600 text-sm mt-8">
          Showing {filtered.length} of {certifications.length} certificates
        </p>
      </div>
    </section>
  );
}
