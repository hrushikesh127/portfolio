import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',       href: '#',           target: null },
  { name: 'About',      href: '#about',      target: 'about' },
  { name: 'Skills',     href: '#portfolio',  target: 'portfolio' },
  { name: 'Experience', href: '#experience', target: 'experience' },
  { name: 'Contact',    href: '#contact',    target: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll handler
  const handleNavClick = (e, target) => {
    e.preventDefault();
    closeMenu();

    if (!target) {
      // "Home" — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(target);
    if (!el) return;

    const navbarHeight = 80; // offset so content isn't hidden under navbar
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Island navbar bar ── */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo — scroll to top */}
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, null)}
        >
          <img src="/clear_logo.png" alt="Logo" />
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className={`navbar-burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="mobile-menu-link"
                    onClick={(e) => handleNavClick(e, link.target)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
