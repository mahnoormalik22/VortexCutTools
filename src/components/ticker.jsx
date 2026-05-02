import '../styles/ticker.css';

const Ticker = () => {
  const items = [
    'ISO 9001 CERTIFIED',
    '40+ YEARS EXPERIENCE',
    'CUSTOM TOOLING',
    'GLOBAL DISTRIBUTION',
    'AEROSPACE APPROVED',
    'PRECISION ENGINEERED',
    'FAST TURNAROUND',
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-track">
        <div className="ticker-content">
          {duplicatedItems.map((item, index) => (
            <span key={index} className="ticker-item">
              {item}
              <span className="ticker-separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
