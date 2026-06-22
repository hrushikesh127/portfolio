import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'home', href: '#' },
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#portfolio' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="navbar"
    >
      <div className="navbar-logo">
        <img src="/clear_logo.png" alt="Logo" style={{ height: '40px', borderRadius: '4px' }} />
      </div>

      <div
        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
