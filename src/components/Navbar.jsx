import React, { useState, useEffect } from 'react';
import '../assets/styles/style.css'; // Make sure the styles from earlier are loaded

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <h1 className="navbar-brand">Sarvesh Shah</h1>
          
          {/* Desktop Links */}
          <div className="navbar-links desktop-only">
            {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Certifications', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="navbar-link">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="hamburger mobile-only" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar Menu */}
      <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <ul className="sidebar-links">
          {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Certifications', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={closeSidebar}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
