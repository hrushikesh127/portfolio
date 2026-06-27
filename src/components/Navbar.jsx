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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Handle scroll to set scrolled state and active section theme
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 41px is approx vertical center of navbar (top: 16px + ~25px half-height)
      const navbarY = 41;
      let overDark = false;

      const darkSections = document.querySelectorAll('.bg-dark, .footer-section');
      for (const section of darkSections) {
        const rect = section.getBoundingClientRect();
        if (navbarY >= rect.top && navbarY <= rect.bottom) {
          overDark = true;
          break;
        }
      }
      setIsDarkBg(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially and after a small delay to ensure DOM is fully ready
    handleScroll();
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

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
      <motion.div
        className={`navbar-wrap ${isScrolled ? 'is-scrolled' : ''} ${isDarkBg && !menuOpen ? 'is-dark-bg' : 'is-light-bg'}`}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="navbar">
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
        </nav>
      </motion.div>

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
