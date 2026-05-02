import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/solutions.css';

// Reusable Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isInView];
};

// Section Label Component
const SectionLabel = ({ children }) => (
  <span className="section-label">{children}</span>
);

// Section Title Component
const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

// Orange Rule Component
const OrangeRule = () => <div className="orange-rule" />;

// Icon Components
const IconBox = ({ children }) => (
  <div className="icon-box">{children}</div>
);

const SolutionIcons = ({ type }) => {
  const icons = {
    'air-tool': (
      <g>
        <path d="M4 2v12M8 4v6M12 2v12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 8h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="6" y="10" width="4" height="4" fill="currentColor" opacity="0.3" />
      </g>
    ),
    'diamond': (
      <g>
        <polygon points="8,2 14,8 8,14 2,8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    'label': (
      <g>
        <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 4V2h6v2M5 12v2h6v-2" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    'refresh': (
      <g>
        <path d="M8 2a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 14a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 2v3h3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M11 14v-3h-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
    ),
    'prototype': (
      <g>
        <rect x="2" y="6" width="12" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 9v3M8 6v6M11 9v3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="3" r="1" fill="currentColor" />
      </g>
    ),
    'globe': (
      <g>
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="8" cy="8" rx="5" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    aerospace: (
      <g>
        <path d="M8 2L2 5v6l6 3 6-3V5L8 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 5v4M5 7h6" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    automotive: (
      <g>
        <rect x="2" y="6" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="11" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 6V4h3v2M9 6V4h3v2" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    marine: (
      <g>
        <path d="M2 12h12M3 9v3M6 6v6M8 6v6M10 6v6M13 9v3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
    ),
    defence: (
      <g>
        <polygon points="8,2 2,12 14,12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 8h6M8 5v5" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    energy: (
      <g>
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 3v2M8 11v2M3 8h2M11 8h2" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    medical: (
      <g>
        <path d="M8 2v12M5 4h6M5 7h6M5 10h6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="4" r="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
    ),
    construction: (
      <g>
        <rect x="3" y="6" width="10" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 6l4-4 2 2 4 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4v10M5 12h6" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    research: (
      <g>
        <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 11h6M8 9v4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="3" r="1" fill="currentColor" />
        <circle cx="11" cy="3" r="1" fill="currentColor" />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[type] || icons['air-tool']}
    </svg>
  );
};

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`animated-section ${isInView ? 'visible' : ''} ${className}`}
      style={{ '--delay': `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};

// Solutions data
const solutionsData = [
  {
    title: 'Custom Air Tool Engineering',
    description: 'Bespoke pneumatic tooling engineered to your exact specifications with precision calibration for aerospace applications.',
    icon: 'air-tool',
  },
  {
    title: 'Diamond Tool Design',
    description: 'Industrial-grade diamond cutting tools manufactured with the highest quality synthetic diamonds for extended life.',
    icon: 'diamond',
  },
  {
    title: 'Private Label Programs',
    description: 'Brand our tools with your logo for exclusive market presence. Full customization from design to packaging.',
    icon: 'label',
  },
  {
    title: 'Strip & Recoat Services',
    description: 'Restore and recoat existing tooling for extended service life. Full refurbishment with quality guarantee.',
    icon: 'refresh',
  },
  {
    title: 'Specialty & Prototype',
    description: 'Collaborate with our engineers on custom prototypes. From concept to production in record time.',
    icon: 'prototype',
  },
  {
    title: 'Global Distribution',
    description: 'Worldwide shipping and logistics. Reach your global customers with our established distribution network.',
    icon: 'globe',
  },
];

// Process steps data
const processSteps = [
  { number: '01', title: 'Specification Brief', description: 'Share your exact requirements and application details.' },
  { number: '02', title: 'Engineering Review', description: 'Our team analyzes feasibility and proposes optimal solutions.' },
  { number: '03', title: 'Prototype & Test', description: 'Receive a prototype for evaluation and testing.' },
  { number: '04', title: 'Production & Delivery', description: 'Full-scale manufacturing with quality assurance.' },
];

// Industries data
const industriesData = [
  { name: 'AEROSPACE', icon: 'aerospace' },
  { name: 'AUTOMOTIVE', icon: 'automotive' },
  { name: 'MARINE', icon: 'marine' },
  { name: 'DEFENCE', icon: 'defence' },
  { name: 'ENERGY', icon: 'energy' },
  { name: 'MEDICAL', icon: 'medical' },
  { name: 'CONSTRUCTION', icon: 'construction' },
  { name: 'RESEARCH', icon: 'research' },
];

// Solution Card Component
const SolutionCard = ({ solution, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`solution-card ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <IconBox>
        <SolutionIcons type={solution.icon} />
      </IconBox>
      <h3 className="solution-title">{solution.title}</h3>
      <p className="solution-desc">{solution.description}</p>
      <span className="solution-link">Learn More <span>→</span></span>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ step, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`process-step ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <div className="step-number">{step.number}</div>
      <h4 className="step-title">{step.title}</h4>
      <p className="step-desc">{step.description}</p>
    </div>
  );
};

// Industry Tile Component
const IndustryTile = ({ industry, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`industry-tile ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <IconBox>
        <SolutionIcons type={industry.icon} />
      </IconBox>
      <span className="industry-label">{industry.name}</span>
    </div>
  );
};

// Solutions Page Component
const Solutions = () => {
  return (
    <main className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="solutions-hero-content">
            <span className="solutions-label">WHAT WE OFFER</span>
            <h1 className="solutions-headline">
              TOOLING SOLUTIONS <span className="accent">/ BUILT TO SPEC</span>
            </h1>
            <p className="solutions-subtext">
              From custom air tools to precision diamond cutters, we engineer cutting solutions 
              that exceed industry standards. Every tool is built to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="solutions-section">
        <div className="container">
          <div className="solutions-grid">
            {solutionsData.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <span className="section-label">HOW IT WORKS</span>
            <h2 className="section-title">OUR PROCESS</h2>
            <OrangeRule />
          </div>
          <div className="process-steps">
            <div className="process-line"></div>
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-header">
            <span className="section-label">CLIENTELE</span>
            <h2 className="section-title">INDUSTRIES</h2>
            <OrangeRule />
          </div>
          <div className="industries-grid">
            {industriesData.map((industry, index) => (
              <IndustryTile key={index} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-headline">READY TO BUILD YOUR CUSTOM TOOL?</h2>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <button className="btn btn-ghost">
                Download Catalogue
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
