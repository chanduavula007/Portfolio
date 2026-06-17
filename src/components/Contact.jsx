import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Frontend-only: pre-fills the user's default mail app
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: <Mail className="w-4 h-4" />,    label: 'Email',    val: personal.email,    href: `mailto:${personal.email}` },
    { icon: <MapPin className="w-4 h-4" />,  label: 'Location', val: personal.location, href: null },
    { icon: <Github className="w-4 h-4" />,  label: 'GitHub',   val: 'chanduavula007',  href: personal.github },
    { icon: <Linkedin className="w-4 h-4" />,label: 'LinkedIn', val: 'avulachandu',     href: personal.linkedin },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-5">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">// let's talk</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Have a project, opportunity or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — info */}
          <div className="space-y-6">
            <div className="glass p-6">
              <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>
              <div className="space-y-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      {item.href
                        ? <a href={item.href}
                            target={item.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="text-slate-200 hover:text-primary transition-colors text-sm">
                            {item.val}
                          </a>
                        : <p className="text-slate-200 text-sm">{item.val}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-6 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-bold">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to full-time roles, internships and freelance projects.
                Let's build something great together!
              </p>
            </div>

            {/* APAAR ID */}
            <div className="glass p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">APAAR Academic ID</p>
              <p className="text-primary font-mono font-bold tracking-widest">{personal.apaarId}</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass p-8">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              {[
                { name: 'name',  label: 'Your Name',  type: 'text',  placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map((f) => (
                <div key={f.name} className="mb-4">
                  <label htmlFor={f.name} className="block text-xs text-slate-400 mb-2 font-medium">
                    {f.label}
                  </label>
                  <input id={f.name} name={f.name} type={f.type} required
                    value={form[f.name]} onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-dark/60 border border-primary/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600
                      focus:outline-none focus:border-primary/50 focus:bg-dark transition-all" />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs text-slate-400 mb-2 font-medium">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-dark/60 border border-primary/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600
                    focus:outline-none focus:border-primary/50 focus:bg-dark transition-all resize-none" />
              </div>

              {sent && (
                <div className="flex items-center gap-2 text-green-400 text-sm mb-4 p-3 bg-green-400/8 rounded-xl border border-green-400/20">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Opening your mail app…
                </div>
              )}

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-dark py-3 rounded-xl font-bold hover:bg-primary-dark transition-all glow text-sm">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
