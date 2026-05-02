import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/company.css';

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

// Stats data
const statsData = [
  { number: '40+', label: 'YEARS' },
  { number: '500+', label: 'CUSTOM TOOLS' },
  { number: '30+', label: 'COUNTRIES' },
  { number: '99%', label: 'ON-TIME' },
];

// Timeline data
const timelineData = [
  { year: '1983', title: 'Founded', description: 'VortexCut Tools was established in a small workshop with a vision for precision tooling.' },
  { year: '1991', title: 'First Aerospace Contract', description: 'Secured our first major aerospace contract, setting the path for specialized manufacturing.' },
  { year: '1999', title: 'Diamond Division Launched', description: 'Launched our Diamond Tool Division to serve high-wear industrial applications.' },
  { year: '2007', title: 'ISO 9001 Certified', description: 'Achieved ISO 9001 certification, establishing world-class quality standards.' },
  { year: '2015', title: 'Global Distribution Network', description: 'Established distribution partners in over 30 countries worldwide.' },
  { year: '2023', title: '40th Anniversary', description: 'Celebrated four decades of precision engineering and industry leadership.' },
];

// Values data
const valuesData = [
  { number: '01', title: 'Precision', description: 'Every tool we manufacture meets exacting tolerances. We believe that precision is not an option — it is the foundation of everything we do.' },
  { number: '02', title: 'Integrity', description: 'We deliver on our promises. Quality, timelines, and specifications are commitments we honor without exception.' },
  { number: '03', title: 'Innovation', description: 'Continuous improvement drives us forward. We invest in R&D to push the boundaries of tooling technology.' },
];

// Team data
const teamData = [
  { initials: 'MR', name: 'Michael Reynolds', role: 'CEO', bio: 'Founded VortexCut in 1983 with a vision for precision tooling. 40+ years guiding the company from a small workshop to an industry leader.' },
  { initials: 'SK', name: 'Sarah Kim', role: 'Head of Engineering', bio: 'Leads our engineering team with 20+ years in aerospace manufacturing. MIT graduate specializing in precision machining.' },
  { initials: 'JD', name: 'James Davis', role: 'Sales Director', bio: 'Oversees global sales and client relationships. Expert in matching customer requirements with optimal tooling solutions.' },
  { initials: 'AL', name: 'Anna Lindqvist', role: 'Head of R&D', bio: 'Directs research and development initiatives. PhD in materials science with focus on advanced cutting tool technologies.' },
];

// Certifications data
const certificationsData = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'AS9100 Rev D', description: 'Aerospace Quality Standard' },
  { name: 'NADCAP', description: 'Specialty Process Certification' },
  { name: 'CE Marked', description: 'European Conformity' },
];

// Stat Box Component
const StatBox = ({ stat, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`stat-box ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <span className="stat-number">{stat.number}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ item, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`timeline-item ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <div className="timeline-dot"></div>
      <span className="timeline-year">{item.year}</span>
      <h4 className="timeline-title">{item.title}</h4>
      <p className="timeline-desc">{item.description}</p>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ value, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`value-card ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <span className="value-number">{value.number}</span>
      <h4 className="value-title">{value.title}</h4>
      <p className="value-desc">{value.description}</p>
    </div>
  );
};

// Team Card Component
const TeamCard = ({ member, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`team-card ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <div className="team-avatar">
        <span className="team-initials">{member.initials}</span>
      </div>
      <h4 className="team-name">{member.name}</h4>
      <span className="team-role">{member.role}</span>
      <p className="team-bio">{member.bio}</p>
    </div>
  );
};

// Certification Badge Component
const CertificationBadge = ({ cert, index }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`cert-badge ${isInView ? 'visible' : ''}`}
      style={{ '--index': index }}
    >
      <div className="cert-icon-box">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 6L18 6.5L15 9.5L16 14L12 11.5L8 14L9 9.5L6 6.5L10 6L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <span className="cert-name">{cert.name}</span>
      <span className="cert-desc">{cert.description}</span>
    </div>
  );
};

// Company Page Component
const Company = () => {
  return (
    <main className="company-page">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="company-hero-content">
            <span className="company-label">WHO WE ARE</span>
            <h1 className="company-headline">
              <span className="line muted">FORGED</span>
              <span className="line">IN</span>
              <span className="line">PRECISION</span>
            </h1>
            <p className="company-subtext">
              For four decades, VortexCut Tools has been the trusted partner for aerospace, 
              automotive, and industrial manufacturers worldwide. We don't just make cutting 
              tools — we engineer solutions that define industry standards.
            </p>
            <Link to="/contact" className="link">
              Our Full Story <span>→</span>
            </Link>
          </div>
          
          <div className="company-stats-grid">
            {statsData.map((stat, index) => (
              <StatBox key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <SectionLabel>OUR HISTORY</SectionLabel>
            <SectionTitle>FOUR DECADES</SectionTitle>
            <OrangeRule />
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <SectionLabel>OUR FOUNDATION</SectionLabel>
            <SectionTitle>VALUES</SectionTitle>
            <OrangeRule />
          </div>
          <div className="values-grid">
            {valuesData.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <SectionLabel>OUR LEADERS</SectionLabel>
            <SectionTitle>LEADERSHIP</SectionTitle>
            <OrangeRule />
          </div>
          <div className="team-grid">
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certs-section">
        <div className="container">
          <div className="certs-header">
            <SectionLabel>OUR CREDENTIALS</SectionLabel>
            <SectionTitle>ACCREDITATIONS</SectionTitle>
            <OrangeRule />
          </div>
          <div className="certs-grid">
            {certificationsData.map((cert, index) => (
              <CertificationBadge key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Company;
