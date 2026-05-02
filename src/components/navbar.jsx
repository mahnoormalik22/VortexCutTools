import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/products', label: 'PRODUCTS' },
    { to: '/solutions', label: 'SOLUTIONS' },
    { to: '/company', label: 'COMPANY' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg 
            className="logo-icon" 
            viewBox="0 0 32 32" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M16 2L28 10V22L16 30L4 22V10L16 2Z" 
              fill="currentColor"
            />
            <path 
              d="M16 2L28 10L16 18L4 10L16 2Z" 
              fill="rgba(255,255,255,0.3)"
            />
          </svg>
          <span className="logo-text">VORTEXCUT</span>
        </Link>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary btn-quote">
            Request a Quote
          </Link>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
