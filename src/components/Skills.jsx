import React, { useEffect, useState } from 'react';
import '../assets/styles/style.css';
import skillsData from '../assets/skills.json';

// ICON MAP
import {
  FaPython, FaJava, FaDatabase, FaAws, FaReact, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiFlask, SiDjango, SiHtml5, SiCss3, SiJira, SiApacheairflow, 
  SiGooglecloud, SiBootstrap, SiCplusplus, SiPytorch, SiTensorflow, SiNumpy, SiScikitlearn
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";

const iconMap = {
  Python: <FaPython />,
  Java: <FaJava />,
  "C++": <SiCplusplus />,
  SQL: <FaDatabase />,
  NoSQL: <FaDatabase />,
  Flask: <SiFlask />,
  Django: <SiDjango />,
  React: <FaReact />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Bootstrap: <SiBootstrap />,
  "REST API": '🔗',
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  "Apache Spark": <SiApacheairflow />,
  PySpark: '🔥',
  AWS: <FaAws />,
  Docker: <FaDocker />,
  "Google Cloud": <SiGooglecloud />,
  Azure: <VscAzure />,
  JIRA: <SiJira />,
  GitHub: <FaGitAlt />,
  PyTorch: <SiPytorch />,
  TensorFlow: <SiTensorflow />,
  NumPy: <SiNumpy />,
  "Scikit-learn": <SiScikitlearn />,
  SMOTE: '🧪',
  "Naïve Bayes": '🧮',
  "Decision Trees": '🌳',
  "LLM APIs": '🤖',
  LangChain: '🦜',
  "Prompt Engineering": '💡',
  "OpenAI GPT": '🔮',
  "RAG Architecture": '📚',
  "LLM Integration": '🧠',
  "Prompt Chaining": '🔗',
  "Anomaly Detection": '🚨',
  "AI Agents": '🕵️'
};

const categoryOrder = [
  "Programming",
  "AI/ML",
  "LLM Tooling",
  "Web & Frameworks",
  "Databases",
  "Big Data",
  "Cloud & DevOps"
];


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
      
      {categoryOrder.map((category) => (
        skillsByCategory[category] && (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skillsByCategory[category].map((skill, i) => (
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
        )
      ))}
    </section>
  );
}
