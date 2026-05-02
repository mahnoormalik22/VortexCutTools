import '../styles/solutions.css';

const solutions = [
  {
    title: 'Custom Air Tools',
    description: 'Bespoke pneumatic tooling engineered to your exact specifications.',
    icon: 'air',
  },
  {
    title: 'Private Label Program',
    description: 'Brand our tools with your logo for exclusive market presence.',
    icon: 'label',
  },
  {
    title: 'Strip & Recoat',
    description: 'Restore and recoat existing tooling for extended service life.',
    icon: 'refresh',
  },
  {
    title: 'Specialty Design',
    description: 'Collaborate with our engineers on custom solutions.',
    icon: 'design',
  },
];

const SolutionIcons = ({ type }) => {
  const icons = {
    air: <path d="M12 2L8 6H2v4h6l4 4v8h2v-8l4-4h-4V6h-4V2h-2v4H2V2h6l4-4v4h2V2h-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>,
    label: <g><rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M5 4V2h6v2M5 12v2h6v-2" stroke="currentColor" strokeWidth="1.5"/></g>,
    refresh: <g><path d="M8 2a6 6 0 0 1 6 6M8 2a6 6 0 0 0-3 10.5M2 8a6 6 0 0 1 3-3M14 8a6 6 0 0 0-3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/></g>,
    design: <g><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 3v2M8 13v2M3 8h2M13 8h2" stroke="currentColor" strokeWidth="1.5"/></g>,
  };
  
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[type] || icons.air}
    </svg>
  );
};

const SolutionCard = ({ solution }) => {
  return (
    <div className="solution-card">
      <div className="solution-icon">
        <SolutionIcons type={solution.icon} />
      </div>
      <h3 className="solution-title">{solution.title}</h3>
      <p className="solution-desc">{solution.description}</p>
      <span className="solution-arrow">→</span>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="solutions">
      <div className="container">
        <div className="solutions-layout">
          <div className="solutions-content">
            <h2 className="solutions-heading">TURN YOUR VISION INTO PRECISION</h2>
            <p className="solutions-text">
              With over four decades of expertise, VortexCut Tools delivers more than 
              world-class cutting solutions. We partner with you to create tooling exactly 
              matched to your application requirements.
            </p>
            <a href="/solutions" className="link">
              Explore All Solutions <span>→</span>
            </a>
          </div>
          
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
