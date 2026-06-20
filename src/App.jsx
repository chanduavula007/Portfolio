import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SlideIndicator from './components/SlideIndicator';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-dark text-white h-screen overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SlideIndicator activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Each panel fills the screen and scrolls its own content */}
      <div className="h-screen overflow-hidden pt-16">

        {activeSection === 'home' && (
          <div className="h-full overflow-y-auto">
            <Hero setActiveSection={setActiveSection} />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="h-full overflow-y-auto">
            <About />
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="h-full overflow-y-auto">
            <Skills />
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="h-full overflow-y-auto">
            <Projects />
          </div>
        )}

        {activeSection === 'certifications' && (
          <div className="h-full overflow-y-auto">
            <Certifications />
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="h-full overflow-y-auto">
            <Contact />
            <Footer setActiveSection={setActiveSection} />
          </div>
        )}

      </div>
    </div>
  );
}
