import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Large background text */}
      <h2 className="footer-bg-text">
        visual poetry
      </h2>

      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Hrushikesh Dhore</div>
            <p className="footer-desc">
              Building robust CRM architectures, custom integrations, and elegant digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link-item">Home</a></li>
              <li><a href="#about" className="footer-link-item">About</a></li>
              <li><a href="#portfolio" className="footer-link-item">Skills</a></li>
              <li><a href="#experience" className="footer-link-item">Experience</a></li>
              <li><a href="#contact" className="footer-link-item">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:hrushikeshdhore07@gmail.com" className="footer-link-item">Email</a></li>
              <li><a href="#" className="footer-link-item">GitHub</a></li>
              <li><a href="#" className="footer-link-item">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 Hrushikesh Dhore. All Rights Reserved.</div>
          <div>Designed by Hrushikesh</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
