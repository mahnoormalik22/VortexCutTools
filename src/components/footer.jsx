import { Link } from 'react-router-dom';
import '../styles/footer.css';

const footerLinks = {
  products: [
    { label: 'Air Tools', href: '/products?category=air-tools' },
    { label: 'Diamond Blades', href: '/products?category=diamond-blades' },
    { label: 'Diamond Hole Saws', href: '/products?category=hole-saws' },
    { label: 'Grinding Wheels', href: '/products?category=grinding' },
    { label: 'CBN Wheels', href: '/products?category=cbn' },
  ],
  solutions: [
    { label: 'Custom Air Tools', href: '/solutions#custom' },
    { label: 'Private Label Program', href: '/solutions#label' },
    { label: 'Strip & Recoat', href: '/solutions#recoat' },
    { label: 'Specialty Design', href: '/solutions#design' },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo & Tagline */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
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
              <span>VORTEXCUT</span>
            </Link>
            <p className="footer-tagline">
              Precision cutting tools engineered for aerospace, automotive, and advanced industrial applications since 1984.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h3 className="footer-heading">PRODUCTS</h3>
            <ul className="footer-list">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-column">
            <h3 className="footer-heading">SOLUTIONS</h3>
            <ul className="footer-list">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column">
            <h3 className="footer-heading">CONTACT</h3>
            <address className="footer-address">
              <p>1234 Industrial Parkway</p>
              <p>Precision City, PC 12345</p>
              <p>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </p>
              <p>
                <a href="mailto:info@vortexcut.com">info@vortexcut.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} VortexCut Tools. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
