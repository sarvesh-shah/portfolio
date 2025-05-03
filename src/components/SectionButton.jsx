import React from 'react';
import '../assets/styles/style.css';

export default function SectionButton({ title, onClick }) {
  return (
    <button className="section-button" onClick={onClick}>
      {title}
    </button>
  );
}
