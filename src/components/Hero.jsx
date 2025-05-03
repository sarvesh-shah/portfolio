import React from 'react';
import '../assets/styles/style.css';
import backgroundGif from '../assets/images/tenor.gif';
import PlayButton from './PlayButton';
import MoreInfoButton from './MoreInfoButton';

export default function Hero() {
  const handleResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank'); // Replace with your actual resume URL
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/sarvesh-shah-4b9729155', '_blank'); // Replace with your LinkedIn
  };

  return (
    <section
      className="hero-section"
      style={{
        background: `url(${backgroundGif}) center center / cover no-repeat`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Sarvesh Shah</h1>
        <p className="hero-subtitle">
          AWS Cloud Developer | React | Python | SQL | DevOps
        </p>
        <p className="hero-location">Jersey City, NJ | sarveshshah2000@gmail.com</p>

        <div className="hero-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedInClick} label="LinkedIn" />
        </div>
      </div>
    </section>
  );
}