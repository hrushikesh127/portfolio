import React from 'react';
import { motion } from 'framer-motion';

const ExhibitionsList = () => {
  const projects = [
    {
      id: '01',
      title: 'Employee Management',
      subtitle: 'System Architecture',
      desc: 'A robust full-stack solution for managing workforce data, payroll, and performance metrics.',
      tech: 'django'
    },
    {
      id: '02',
      title: 'Velocity',
      subtitle: 'Car Dealership Platform',
      desc: 'A premium automotive marketplace featuring advanced inventory management, 360-degree car views, and smart lead generation systems.',
      tech: 'React / PostgreSQL / Supabase'
    }
  ];

  return (
    <section id="exhibitions" style={{ backgroundColor: '#f9f9f9', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '80px', letterSpacing: '-0.06em', marginBottom: '10px' }}>projects</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#f5a623' }}></div>
          </div>
          <p style={{ maxWidth: '300px', fontSize: '14px', color: '#666' }}>
            A showcase of software engineering and web development craftsmanship.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6 }}
              className="rounded-card"
              style={{
                backgroundColor: '#ffffff',
                padding: '60px',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                border: '1px solid #eee'
              }}
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: '#f5a623', marginBottom: '30px', letterSpacing: '4px' }}>
                  PROJECT {project.id}
                </div>
                <h3 style={{ fontSize: '42px', fontWeight: 900, marginBottom: '15px', color: '#000' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '14px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '2px' }}>
                  {project.subtitle}
                </div>
                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px' }}>
                  {project.desc}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, backgroundColor: '#f2f2f2', padding: '10px 20px', borderRadius: '50px' }}>
                  {project.tech}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: '15px 30px',
                    borderRadius: '50px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #000',
                    fontWeight: 700,
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsList;
