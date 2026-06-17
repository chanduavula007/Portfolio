import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent]   = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Frontend-only: opens default mail client with pre-filled content
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: <Mail className="w-5 h-5" />,    label: 'Email',    val: personal.email,    href: `mailto:${personal.email}` },
    { icon: <MapPin className="w-5 h-5" />,  label: 'Location', val: personal.location, href: null },
    { icon: <Github className="w-5 h-5" />,  label: 'GitHub',   val: 'github.com/avulachandu', href: personal.github },
    { icon: <Linkedin className="w-5 h-5" />,label: 'LinkedIn', val: 'linkedin.com/in/avulachandu', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// let's talk</p>
          <h2 className="text-4xl font-bold">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Have a project or opportunity? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'}
                           rel="noopener noreferrer"
                           className="text-slate-300 hover:text-primary transition-colors text-sm">{item.val}</a>
                      : <p className="text-slate-300 text-sm">{item.val}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to full-time roles, internships and freelance projects. Let's build something great!
              </p>
            </div>
          </div>

          {/* form */}
          <div className="glass p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              {['name', 'email'].map((field) => (
                <div key={field} className="mb-4">
                  <label htmlFor={field} className="block text-sm text-slate-400 mb-2 capitalize">
                    Your {field}
                  </label>
                  <input id={field} name={field} type={field === 'email' ? 'email' : 'text'}
                    required value={form[field]} onChange={handleChange}
                    placeholder={field === 'email' ? 'john@example.com' : 'John Doe'}
                    className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary transition-colors" />
                </div>
              ))}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>

              {sent && (
                <div className="flex items-center gap-2 text-green-400 text-sm mb-4 p-3 bg-green-400/10 rounded-xl">
                  <CheckCircle className="w-4 h-4" /> Opening your mail client…
                </div>
              )}

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/80 transition-all glow">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
