import React, { useEffect, useState } from 'react';
import '../assets/styles/style.css';
import skillsData from '../assets/skills.json';

// ICON MAP
import { FaPython, FaJava, FaDatabase, FaAws, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiFlask, SiDjango, SiHtml5, SiCss3, SiJira, SiApacheairflow } from 'react-icons/si';

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
  const [skillsByCategory, setSkillsByCategory] = useState({});

  useEffect(() => {
    const grouped = {};
    skillsData.forEach(skill => {
      if (!grouped[skill.category]) grouped[skill.category] = [];
      grouped[skill.category].push(skill);
    });
    setSkillsByCategory(grouped);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-icon">{iconMap[skill.icon] || '🎯'}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, j) => (
                    <span key={j} className="letter" style={{ animationDelay: `${j * 0.04}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-desc">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
