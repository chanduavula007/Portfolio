import React from 'react';
import { User, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { personal } from '../data';

const stats = [
  { label: 'Certificates', value: '21+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Sports', value: '5+' },
  { label: 'Projects', value: '3+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// who am I</p>
          <h2 className="text-4xl font-bold">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 glow">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center flex-col gap-2">
                  <div className="text-6xl">👨‍💻</div>
                  <p className="text-slate-400 text-sm font-mono">avula.chandu</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-slate-300">MERN Certified</span>
              </div>
            </div>
          </div>

          {/* info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer · <span className="text-primary">Andhra Pradesh</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I'm a B.Tech student (AI & Data Science) at NBKRIST, Nellore. Passionate about the MERN stack,
              I build clean and performant web applications. Beyond coding, I'm an active sports player —
              representing my college at JNTUA South Zone tournaments in both Table Tennis and Kho-Kho.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <User className="w-4 h-4 text-primary" />, text: personal.name },
                { icon: <MapPin className="w-4 h-4 text-primary" />, text: personal.location },
                { icon: <Calendar className="w-4 h-4 text-primary" />, text: `DOB: ${personal.dob}` },
                { icon: <GraduationCap className="w-4 h-4 text-primary" />, text: personal.branch },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-400">
                  {icon}
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass p-3 text-center glow-hover">
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
