import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const name = "HRUSHIKESH".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        perspective: '1000px'
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          overflow: 'hidden',
          padding: '20px'
        }}
      >
        {name.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{
              color: '#fff',
              fontSize: '40px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '8px',
              display: 'inline-block',
              marginRight: letter === ' ' ? '15px' : '0'
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '250px', opacity: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: "circOut" }}
        style={{
          height: '2px',
          backgroundColor: '#f5a623',
          marginTop: '10px',
          boxShadow: '0 0 10px rgba(245, 166, 35, 0.5)'
        }}
      />
    </motion.div>
  );
};

export default Loader;
