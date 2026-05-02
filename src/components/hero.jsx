import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const phrases = [
    'Aerospace Composites',
    'Carbon Fibre',
    'Advanced Ceramics'
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 80);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">CUTTING BEYOND</span>
          <span className="hero-title-line highlight">LIMITS</span>
        </h1>
        
        <div className="hero-subtitle-container">
          <span className="hero-subtitle-label">Precision cutting for</span>
          <span className="hero-subtitle">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </div>
        
        <div className="hero-ctas">
          <Link to="/products" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 2L12 8L4 14V2Z" fill="currentColor"/>
            </svg>
            Explore Products
          </Link>
          <button className="btn btn-ghost">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 2L12 8L4 14V2Z" fill="currentColor"/>
            </svg>
            Watch Overview
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
