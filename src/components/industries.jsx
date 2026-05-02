import '../styles/industries.css';

const industries = [
  { name: 'Aerospace', icon: 'aerospace' },
  { name: 'Automotive', icon: 'automotive' },
  { name: 'Marine', icon: 'marine' },
  { name: 'Defence', icon: 'defence' },
  { name: 'Energy', icon: 'energy' },
  { name: 'Medical', icon: 'medical' },
  { name: 'Construction', icon: 'construction' },
];

const IndustryIcons = ({ type }) => {
  const icons = {
    aerospace: <g><path d="M8 2L2 5v6l6 3 6-3V5L8 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 5v4M5 7h6" stroke="currentColor" strokeWidth="1.5"/></g>,
    automotive: <g><rect x="2" y="6" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="11" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M4 6V4h3v2M9 6V4h3v2" stroke="currentColor" strokeWidth="1.5"/></g>,
    marine: <g><path d="M2 12h12M3 9v3M6 6v6M8 6v6M10 6v6M13 9v3" stroke="currentColor" strokeWidth="1.5" fill="none"/></g>,
    defence: <g><polygon points="8,2 2,12 14,12" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M5 8h6M8 5v5" stroke="currentColor" strokeWidth="1.5"/></g>,
    energy: <g><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 3v2M8 11v2M3 8h2M11 8h2" stroke="currentColor" strokeWidth="1.5"/></g>,
    medical: <g><path d="M8 2v12M5 4h6M5 7h6M5 10h6" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="8" cy="4" r="1" stroke="currentColor" strokeWidth="1.5" fill="none"/></g>,
    construction: <g><rect x="3" y="6" width="10" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M3 6l4-4 2 2 4 2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v10M5 12h6" stroke="currentColor" strokeWidth="1.5"/></g>,
  };
  
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[type] || icons.aerospace}
    </svg>
  );
};

const Industries = () => {
  return (
    <section className="industries">
      <div className="container">
        <h2 className="industries-title">INDUSTRIES WE SERVE</h2>
      </div>
      
      <div className="industries-scroll">
        <div className="industries-track">
          {industries.map((industry, index) => (
            <button key={index} className="industry-chip">
              <IndustryIcons type={industry.icon} />
              <span>{industry.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
