import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import '../assets/styles/style.css';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-header">
            <FaUniversity className="edu-icon" />
            <h3>Pace University, New York, NY</h3>
          </div>
          <p className="sub-info">MS in Computer Science | GPA: 4.00 / 4.00 | May 2026</p>
          <p>📘 OS, Java DS, AI, DBMS, Parallel Computing, Algorithms, Theory of Computation</p>
        </div>

        <div className="edu-card">
          <div className="edu-header">
            <FaGraduationCap className="edu-icon" />
            <h3>Mumbai University, KJ Somaiya Institute</h3>
          </div>
          <p className="sub-info">BTech in Electronics & Telecom | GPA: 8.2 / 10.0 | May 2022</p>
          <p>📘 Cloud Computing, NLP, Web Design, MIS, Image Processing</p>
        </div>
      </div>
    </section>
  );
}
