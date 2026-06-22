import React from 'react';
import { motion } from 'framer-motion';
import developerPortrait from '../assets/images/developer-portrait.png';

const About = () => {
  return (
    <section id="about" className="bg-dark about-section">
      {/* Radial circles behind image */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="about-circle-1"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="about-circle-2"
      />

      <div className="container about-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-card about-image-card"
        >
          <img 
            src={developerPortrait} 
            alt="Developer Portrait" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="about-title"
        >
          about <span style={{ color: '#f5a623' }}>me</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="about-text"
        >
          I am a results-driven Salesforce Developer and Administrator with a passion for designing and building robust CRM solutions. My expertise lies in customizing the Salesforce platform, developing Apex backend logic, building modern LWC interfaces, and optimizing business processes.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
