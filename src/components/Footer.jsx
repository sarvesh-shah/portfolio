import React from 'react';
import '../assets/styles/style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sarvesh Shah. All rights reserved.</p>
    </footer>
  );
}
