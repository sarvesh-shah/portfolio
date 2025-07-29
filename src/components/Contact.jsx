import React from 'react';
import profilePic from '../assets/images/profile.jpg';
import '../assets/styles/style.css';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>

      <div className="contact-wrapper contact-flex">
        <div className="contact-image">
          <img src={profilePic} alt="Sarvesh Shah" className="profile-circle" />
        </div>

        <div className="contact-text">
          <p className="section-text">📧 sarveshshah2000@gmail.com</p>
          <p className="section-text">📞 (640)-250-7441</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/sarveshyshah/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/sarvesh-shah" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
