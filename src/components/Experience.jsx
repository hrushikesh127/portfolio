import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Salesforce Trainee Intern',
      company: 'Infynest Technologies',
      period: 'June 2026 - Present',
      details: [
        'Learning and customizing the Salesforce CRM platform to meet business requirements.',
        'Developing Salesforce business automations using Flow Builder and validation rules.',
        'Assisting in the creation and customization of Apex triggers, classes, and backend components.',
        'Gaining hands-on experience with Lightning Web Components (LWC) and platform sharing models.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <div>
            <h2 className="experience-title">
              experience
            </h2>
            <div className="experience-title-underline"></div>
          </div>
          <p className="experience-subtitle">
            Professional journey in software engineering and cloud systems administration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {/* Vertical Line */}
          <div className="experience-line" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="experience-dot"
              />

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6 }}
                className="rounded-card experience-card"
              >
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">
                      {exp.role}
                    </h3>
                    <span className="experience-company">
                      {exp.company}
                    </span>
                  </div>
                  <span className="experience-period">
                    {exp.period}
                  </span>
                </div>

                <ul className="experience-list">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="experience-list-item">
                      <span className="experience-list-bullet">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
