import { Link } from 'react-router-dom';
import '../styles/cta.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2 className="cta-heading">Need a Custom Tool Built to Spec?</h2>
        <p className="cta-text">
          Our engineering team specializes in creating precision tooling solutions 
          tailored to your exact requirements. Let's discuss your project.
        </p>
        <Link to="/contact" className="btn btn-white">
          Contact a Representative <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
