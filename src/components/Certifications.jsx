import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Award, Trophy, Medal, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications, CERT_CATEGORIES } from '../data';

const typeStyle = {
  winner:        'bg-yellow-400/15 text-yellow-300 border-yellow-400/30',
  achievement:   'bg-primary/15 text-primary border-primary/30',
  participation: 'bg-slate-700/40 text-slate-400 border-slate-600/50',
};
const typeIcon = {
  winner:        <Trophy className="w-3 h-3" />,
  achievement:   <Medal  className="w-3 h-3" />,
  participation: <Star   className="w-3 h-3" />,
};

function Modal({ cert, onClose, onPrev, onNext }) {
  // Close on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true"
      aria-label={cert.title}>
      <div
        className="relative w-full max-w-lg mx-4 glass border border-primary/30 rounded-2xl p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all"
          aria-label="Close modal">
          <X className="w-4 h-4" />
        </button>

        {/* Prev / Next */}
        <button onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-all"
          aria-label="Previous certificate">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-all"
          aria-label="Next certificate">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="px-6">
          {/* Certificate image / placeholder */}
          <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${cert.gradient} flex flex-col items-center justify-center mb-6 relative overflow-hidden`}>
            <div className="absolute inset-0 animate-shimmer" />
            <span className="text-6xl mb-2 relative z-10">{cert.icon}</span>
            <span className="text-dark/70 text-xs font-bold relative z-10 uppercase tracking-widest">
              Certificate
            </span>
          </div>

          {/* Badge */}
          <div className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border mb-3 ${typeStyle[cert.type]}`}>
            {typeIcon[cert.type]}
            {cert.badge}
          </div>

          <h3 className="text-lg font-extrabold text-white mb-1 leading-snug">{cert.title}</h3>
          <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
          <p className="text-slate-500 text-xs font-mono mb-4">{cert.year}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {cert.tags.map((t) => (
              <span key={t}
                className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs rounded-lg border border-white/10">
                {t}
              </span>
            ))}
          </div>

          {/* Verify link */}
          {cert.verifyUrl && cert.verifyUrl !== '#' && (
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 text-primary rounded-xl text-sm font-medium hover:bg-primary/25 transition-all">
              <Award className="w-4 h-4" />
              Verify Certificate
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected]             = useState(null);   // index in filtered list

  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  const counts = CERT_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All'
      ? certifications.length
      : certifications.filter((c) => c.category === cat).length;
    return acc;
  }, {});

  const openModal  = (idx) => setSelected(idx);
  const closeModal = ()    => setSelected(null);
  const prevModal  = ()    => setSelected((p) => (p - 1 + filtered.length) % filtered.length);
  const nextModal  = ()    => setSelected((p) => (p + 1) % filtered.length);

  return (
    <section id="certifications" className="min-h-screen py-20 px-5 bg-surface/40">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label">// credentials & achievements</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Click any certificate card to view details.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-7 text-xs">
          {[
            { type: 'winner',        label: 'Winner / Position' },
            { type: 'achievement',   label: 'Achievement' },
            { type: 'participation', label: 'Participation' },
          ].map(({ type, label }) => (
            <div key={type}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${typeStyle[type]}`}>
              {typeIcon[type]} {label}
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CERT_CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-dark glow'
                  : 'border border-primary/20 text-slate-400 hover:border-primary/50 hover:text-white'
              }`}>
              {cat}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                activeCategory === cat ? 'bg-dark/30' : 'bg-white/5'
              }`}>{counts[cat]}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((cert, idx) => (
            <article key={cert.id}
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(idx)}
              aria-label={`View ${cert.title} certificate`}
              className="glass p-4 flex flex-col cursor-pointer group
                hover:border-primary/50 hover:scale-[1.02] transition-all duration-200">

              {/* Top */}
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.gradient}
                  flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}>
                  {cert.icon}
                </div>
                <span className="text-xs text-slate-600 font-mono">{cert.year}</span>
              </div>

              <h3 className="text-xs font-bold text-white mb-1 leading-snug line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-slate-500 text-xs mb-2 line-clamp-1 flex-grow">{cert.issuer}</p>

              {/* Badge */}
              <div className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border w-fit ${typeStyle[cert.type]}`}>
                {typeIcon[cert.type]}
                <span className="truncate max-w-[90px]">{cert.badge}</span>
              </div>

              {/* Click hint */}
              <p className="text-primary/40 text-xs mt-2 group-hover:text-primary/70 transition-colors">
                Click to view →
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-8 font-mono">
          {filtered.length} of {certifications.length} certificates
        </p>
      </div>

      {/* Modal */}
      {selected !== null && (
        <Modal
          cert={filtered[selected]}
          onClose={closeModal}
          onPrev={prevModal}
          onNext={nextModal}
        />
      )}
    </section>
  );
}
