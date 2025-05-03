import React from 'react';
import '../assets/styles/style.css';
import {
  FaPython, FaJava, FaDatabase, FaAws, FaReact, FaGitAlt
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiFlask, SiDjango, SiHtml5, SiCss3, SiJira, SiApacheairflow
} from 'react-icons/si';

const skillsByCategory = {
  Programming: ["Python", "Java", "C++", "SQL"],
  "Web & Frameworks": ["Flask", "Django", "React", "HTML", "CSS", "Bootstrap", "REST API"],
  Databases: ["MongoDB", "PostgreSQL", "Apache Spark", "PySpark"],
  "Cloud & Tools": ["AWS", "JIRA", "GitHub"]
};

const iconMap = {
  Python: <FaPython />,
  Java: <FaJava />,
  "C++": '💻',
  SQL: <FaDatabase />,
  Flask: <SiFlask />,
  Django: <SiDjango />,
  React: <FaReact />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Bootstrap: '🅱️',
  "REST API": '🔗',
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  "Apache Spark": <SiApacheairflow />,
  PySpark: '🔥',
  AWS: <FaAws />,
  JIRA: <SiJira />,
  GitHub: <FaGitAlt />
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon">{iconMap[skill] || '🎯'}</div>
                <h3 className="skill-name">
                  {skill.split('').map((letter, j) => (
                    <span
                      key={j}
                      className="letter"
                      style={{ animationDelay: `${j * 0.04}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-desc">Proficient in {skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
