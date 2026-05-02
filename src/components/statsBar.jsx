import { useEffect, useRef, useState } from 'react';
import '../styles/stats.css';

const stats = [
  { value: 40, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Custom Tools Built' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
];

// Animation helper
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const startTime = performance.now();
  
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * easeProgress);
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  
  requestAnimationFrame(update);
};

const StatItem = ({ stat, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (numberRef.current) {
            animateCounter(numberRef.current, stat.value);
          }
        }
      },
      { threshold: 0.5 }
    );
    
    if (numberRef.current) {
      observer.observe(numberRef.current.parentElement);
    }
    
    return () => observer.disconnect();
  }, [isVisible, stat.value]);
  
  return (
    <div className="stat-item">
      <div className="stat-number">
        <span ref={numberRef}>0</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-rule"></div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
