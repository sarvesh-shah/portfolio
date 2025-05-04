import React from 'react';
import projects from '../data/projects';
import '../assets/styles/style.css';
import { FaGithub } from 'react-icons/fa';

// ICONS
import {
  FaChartBar, FaProjectDiagram, FaBrain, FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker,
  FaAngular, FaGithub as FaGithubAlt, FaGitlab, FaGoogle, FaJava, FaJenkins,
  FaMicrosoft, FaPython, FaVuejs, FaLinux
} from 'react-icons/fa';

import {
  SiScikitlearn, SiPandas, SiRubyonrails, SiPostgresql, SiMongodb, SiMui, SiHtml5, SiCss3,
  SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTailwindcss,
  SiBootstrap, SiTypescript, SiJavascript, SiVite, SiRedux, SiDjango,
  SiFlask, SiMysql, SiPytorch, SiJupyter, SiGraphql
} from 'react-icons/si';

import { GrDeploy, GrKubernetes } from 'react-icons/gr';

const techIcons = {
  "Scikit-learn": <SiScikitlearn />, "Pandas": <SiPandas />,
  "Matplotlib": <FaProjectDiagram />, "Seaborn": <FaChartBar />,
  "SMOTE": '🧬', "K-Fold": '📊', "Decision Tree": '🌳', "Naïve Bayes": '🔢',
  "Data Visualization": '📈', "React": <FaReact />, "ReactJS": <FaReact />,
  "Next.js": <FaReact />, "Redux": <SiRedux />, "Jest": <FaReact />,
  "NodeJS": <FaNodeJs />, "Node.js": <FaNodeJs />, "Express.js": <FaNodeJs />,
  "Java": <FaJava />, "Spring Boot": <FaJava />, "Hibernate": <FaJava />,
  "Maven": <FaJava />, "Gradle": <FaJava />, "JUnit": <FaJava />, "Mockito": <FaJava />,
  "Python": <FaPython />, "Flask": <SiFlask />, "Django": <SiDjango />,
  "Jupyter Notebook": <SiJupyter />, "Pytorch": <SiPytorch />, "MySQL": <SiMysql />,
  "PostgreSQL": <SiPostgresql />, "MongoDB": <SiMongodb />, "GraphQL": <SiGraphql />,
  "CI/CD": <FaGitlab />, "GitLab": <FaGitlab />, "GitHub": <FaGithubAlt />,
  "Docker": <FaDocker />, "Kubernetes": <GrKubernetes />, "Terraform": <SiTerraform />,
  "ArgoCD": <SiArgo />, "AWS": <FaAws />, "AWS-ECS": <SiAwsamplify />,
  "Cognito": <FaAws />, "Lambda": <FaAws />, "ECS": <FaAws />,
  "GCP": <FaGoogle />, "Azure": <FaMicrosoft />, "Firebase": <SiFirebase />,
  "HTML5": <SiHtml5 />, "CSS3": <SiCss3 />, "Tailwind CSS": <SiTailwindcss />,
  "Bootstrap": <SiBootstrap />, "Material UI": <SiMui />, "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />, "Vite": <SiVite />, "Angular": <FaAngular />,
  "Vue.js": <FaVuejs />, "Vuex": <FaVuejs />, "Nuxt.js": <FaVuejs />, "Gatsby": <FaReact />,
  "Heroku": <GrDeploy />, "Netlify": <GrDeploy />, "Ruby On Rails": <SiRubyonrails />,
  "Linux": <FaLinux />, "HTML": <SiHtml5 />, "CSS": <SiCss3 />, "JQuery": <SiJquery />,
  "jQuery": <SiJquery />, "TextBlob": '🧠', "Spacy": '🧬', "NLP": <FaBrain />,
  "GANs": '🤖', "LSTM": '🧮', "Machine Learning": <FaBrain />, "GSI": '🗂️',
  "NoSQL": <FaDatabase />, "DynamoDB": <FaAws />
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
  <h2 className="projects-title">Projects</h2>
  <div className="projects-wrapper">
    {projects.map((project, index) => (
      <div
        key={index}
        className="project-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Optional project thumbnail image */}
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-image"
          />
        )}

        <h3 className="project-title">{project.title}</h3>
        {project.tag && (<span className="project-tag">{project.tag}</span>)}
        <p className="project-date">{project.date}</p>
        <p className="project-desc">{project.description}</p>

        {/* GitHub Button */}
        {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="github-button"
  >
    <FaGithub /> View on GitHub
  </a>
)}

        <div className="tech-badges">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">
              {techIcons[t] || '🛠'} {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
