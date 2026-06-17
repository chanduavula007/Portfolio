import React from 'react';
import { User, GraduationCap, MapPin, Calendar, Trophy, Code2 } from 'lucide-react';
import { personal } from '../data';

const stats = [
  { label: 'Certificates', value: '21+', icon: '🏅' },
  { label: 'Technologies', value: '10+', icon: '💻' },
  { label: 'Sports',       value: '5+',  icon: '🏃' },
  { label: 'Projects',     value: '3+',  icon: '🚀' },
];

const timeline = [
  { year: '2019', title: 'SSC — 9.2 CGPA',   sub: 'AP Bala Yogi Gurukulam, Chillakur',  icon: '🏫' },
  { year: '2021–23', title: 'BIE-MPC — 944 Marks', sub: 'SR Junior College, Nellore', icon: '📚' },
  { year: '2023–27', title: 'B.Tech — AI & DS (8.06 CGPA)', sub: 'NBKR Institute of Technology, Vidyanagar',  icon: '🎓' },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-5">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">// who am I</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio + stats */}
          <div>
            {/* Avatar card */}
            <div className="glass p-6 mb-6 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center text-4xl flex-shrink-0">
                👨‍💻
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                <p className="text-primary text-sm font-mono">{personal.subtitle}</p>
                <p className="text-slate-500 text-xs mt-1">{personal.college}</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              Motivated Junior Developer with hands-on experience in Python and core web
              development technologies. B.Tech student specialising in AI & Data Science at
              NBKRIST, Nellore. I have a solid understanding of software lifecycles through
              Git & GitHub, and a versatile programming background including Java and C.
              Beyond coding, I'm an active sports player — representing my college at JNTUA
              South Zone tournaments in Table Tennis and Kho-Kho.
            </p>

            {/* Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: <User className="w-4 h-4" />,          text: personal.name },
                { icon: <MapPin className="w-4 h-4" />,        text: personal.location },
                { icon: <Calendar className="w-4 h-4" />,      text: `DOB: ${personal.dob}` },
                { icon: <GraduationCap className="w-4 h-4" />, text: personal.branch },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                  <span className="text-primary">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="glass p-3 text-center glow-hover">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="text-xl font-extrabold gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — education timeline */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              <GraduationCap className="inline w-5 h-5 text-primary mr-2" />
              Education Timeline
            </h3>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-14">
                    {/* dot */}
                    <div className="absolute left-3 top-4 w-4 h-4 rounded-full bg-primary border-2 border-dark glow" />
                    <div className="glass p-5 glow-hover">
                      <span className="text-xs font-mono text-primary mb-1 block">{item.year}</span>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{item.icon}</span>
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      </div>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="mt-8 glass p-5">
              <h4 className="font-bold text-white mb-3 text-sm">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Learning new tech', 'Reading tech blogs', 'Building AI & automation projects', 'Table Tennis', 'Kho-Kho', 'Playing Games'].map((h) => (
                  <span key={h}
                    className="px-3 py-1 text-xs rounded-full border border-primary/25 bg-primary/8 text-primary">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
