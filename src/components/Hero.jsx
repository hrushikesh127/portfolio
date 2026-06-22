import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/user-hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
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

      {/* Social Icons floating */}

    </section>
  );
};

export default Hero;
