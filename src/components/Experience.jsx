import React from 'react';
import { FaAws, FaTools } from 'react-icons/fa';
import '../assets/styles/style.css';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <div className="experience-header">
          <FaTools className="experience-icon" />
          <div>
            <h3>Systems Engineer – AWS Cloud Developer</h3>
            <p className="sub-info">Tata Consultancy Services, Mumbai, India | July 2022 – August 2024</p>
          </div>
        </div>
        <ul className="experience-list">
          <li>Re-architected a high-traffic e-commerce platform, reducing latency from 15–20s to &lt;500ms using DynamoDB pagination.</li>
          <li>Optimized cloud architecture with Auto Scaling and Load Balancing, cutting ops cost by 20%.</li>
          <li>Enforced IAM best practices and implemented MFA for enhanced security.</li>
          <li>Built serverless apps with AWS Lambda, API Gateway, and DynamoDB with 99.99% uptime.</li>
          <li>Led RDS & DynamoDB data migration, improving retrieval by 40% and reducing maintenance by 25%.</li>
          <li>Integrated AWS GenAI chatbot with Jira/GitHub Docs for improved support.</li>
        </ul>
      </div>
    </section>
  );
}
