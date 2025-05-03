import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '../src/styles/animations.css' // make sure this is included

export default function App() {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    const audio = new Audio('/assets/netflix.mp3')
    audio.volume = 0.7
    audio.play().catch(() => {})

    const timer = setTimeout(() => setIntro(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  if (intro) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#000'
          }}>
            <h1 className="animate-logoIntro" style={{
              fontSize: '3rem',
              color: '#e50914',
              fontWeight: '800',
              letterSpacing: '0.2em'
            }}>
              SARVESH SHAH
            </h1>
          </div>
    )
  }

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
