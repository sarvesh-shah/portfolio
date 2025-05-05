import React from 'react';
import '../assets/styles/style.css';
import certs from '../assets/certifications.json';
import { FaExternalLinkAlt, FaUniversity, FaAws } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

import { VscAzure} from "react-icons/vsc";

const iconMap = {
  microsoft: <VscAzure />,
  google: <SiGooglecloud />,
  aws: <FaAws />,
  default: <FaUniversity />
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-grid">
        {certs.map((cert, index) => (
          <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-card">
            <div className="certification-content">
              <div className="certification-icon">{iconMap[cert.iconName] || iconMap.default}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="issued-date">Issued {cert.issuedDate}</span>
            </div>
            <div className="certification-link">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
