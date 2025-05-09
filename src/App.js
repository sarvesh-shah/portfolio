import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/styles/animations.css';

export default function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/netflix.mp3`);
    audio.volume = 0.7;
    audio.play().catch(() => {});

    const timer = setTimeout(() => setIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (intro) {
    return (
      <div className="intro-screen">
        <h1 className="intro-text animate-logoIntro">SARVESH SHAH</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
