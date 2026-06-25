import React from 'react';
import { motion } from 'framer-motion';

const PortfolioGrid = () => {
  const skills = [
    { id: 1, title: 'Salesforce Admin', level: '70%', category: 'platform / admin', isDark: true },
    { id: 2, title: 'Salesforce Devlopement', level: '30%', category: 'platform / development', isYellow: true },
    { id: 3, title: 'Apex Language', level: '50%', category: 'backend / logic', isDark: false },
    { id: 4, title: 'LWC Components', level: '80%', category: 'frontend / components', isDark: true }
  ];

  return (
    <section id="portfolio" className="container">
      <div className="skills-header">
        <h2 className="skills-title">skills</h2>
        <p className="skills-subtitle">
          Deep dive into technical proficiency and digital craftsmanship.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6 }}
            className="rounded-card skill-card"
            style={{
              backgroundColor: skill.isYellow ? '#f5a623' : (skill.isDark ? '#000' : '#f2f2f2'),
              color: skill.isDark ? '#fff' : '#000'
            }}
          >
            <div className="skill-category">
              {skill.category}
            </div>

            <div className="skill-name">
              {skill.title}
            </div>

            <div 
              className="skill-level-text"
              style={{
                color: skill.isYellow ? 'rgba(0, 0, 0, 0.77)' : (skill.isDark ? 'rgba(198, 193, 193, 0.7)' : 'rgba(36, 32, 25, 0.66)')
              }}
            >
              {skill.level}
            </div>

            {/* Micro progress bar at bottom of card */}
            <div 
              className="skill-progress-track"
              style={{
                backgroundColor: skill.isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, delay: 0.2 }}
                style={{
                  height: '100%',
                  backgroundColor: skill.isYellow ? '#000' : '#f5a623'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
