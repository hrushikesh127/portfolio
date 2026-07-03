import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/user-hero.jpg';

const SalesforceLogo = () => (
  <svg
    className="hero-sf-watermark"
    viewBox="0 0 480 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M196.8 48c-27.2 0-51.2 13.6-65.6 34.4C120 76.8 107.2 73.6 93.6 73.6 42.4 73.6 0 116 0 167.2s42.4 93.6 93.6 93.6c6.4 0 12.8-.8 18.4-2.4 12 24 36.8 40.8 65.6 40.8 28 0 52.8-16 64.8-39.2 8.8 4.8 19.2 7.2 30.4 7.2 23.2 0 43.2-12.8 54.4-32 5.6 1.6 11.2 2.4 17.6 2.4 47.2 0 85.6-38.4 85.6-85.6s-38.4-85.6-85.6-85.6c-12.8 0-24.8 2.4-36 7.2C296 56 264.8 32 228 32c-3.2 0-5.6 0-8 .8C211.2 41.6 204 44.8 196.8 48z"
    />
    <text
      x="218"
      y="178"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="42"
      fontFamily="'Inter', sans-serif"
      fontWeight="700"
      letterSpacing="-1"
    >
      salesforce
    </text>
  </svg>
);

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Salesforce watermark background wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="hero-sf-watermark-wrapper"
      >
        <SalesforceLogo />
      </motion.div>

      <div className="container hero-grid">
        <div style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hero-title"
          >
            Hrushikesh <span style={{ color: '#f5a623' }}>Dhore</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-desc"
          >
            Salesforce Developer & Administrator specializing in building robust CRM architectures, custom Apex logic, high-performance LWC components, and elegant digital solutions.
          </motion.p>

          <div className="hero-cta-group">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn"
            >
              Download Resume
            </motion.a>
            <div className="hero-stat-box">
              <div className="hero-stat-number">1+</div>
              <div className="hero-stat-label">Projects completed</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          {/* Decorative background shape */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
            className="hero-bg-shape"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="rounded-card hero-image-card"
          >
            <img
              src={heroImage}
              alt="Hrushikesh Dhore"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%' }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
