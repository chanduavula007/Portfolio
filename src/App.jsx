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

      <div className="h-screen overflow-hidden">
        <Hero        active={activeSection === 'home'}           setActiveSection={setActiveSection} />
        <About       active={activeSection === 'about'}          />
        <Skills      active={activeSection === 'skills'}         />
        <Projects    active={activeSection === 'projects'}       />
        <Certifications active={activeSection === 'certifications'} />
        <Contact     active={activeSection === 'contact'}        />
        <Footer      active={activeSection === 'contact'}        setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}
