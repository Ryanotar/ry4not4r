import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Ryan Notararigo. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/ry4not4"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-notararigo-234408253"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
