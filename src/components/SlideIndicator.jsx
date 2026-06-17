import React from 'react';
import { sections } from '../data';

export default function SlideIndicator({ activeSection }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-center">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={`Go to ${label} section`}
          className={`slide-dot ${activeSection === id ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
