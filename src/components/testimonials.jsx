import '../styles/testimonials.css';

const testimonials = [
  {
    quote: "VortexCut's custom tooling transformed our aerospace composite drilling operations. Their precision and durability are unmatched in the industry.",
    name: 'James Morrison',
    title: 'Manufacturing Director',
    company: 'AeroSpace Dynamics',
  },
  {
    quote: "The team's engineering expertise delivered tooling that exceeded our specifications. We've reduced cycle time by 40% since implementing their solutions.",
    name: 'Sarah Chen',
    title: 'VP of Engineering',
    company: 'Quantum Automotive',
  },
  {
    quote: "After 15 years in this industry, VortexCut stands apart. Their quality control and technical support are simply world-class.",
    name: 'Michael Torres',
    title: 'Operations Manager',
    company: 'Global Marine Systems',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">CLIENT TESTIMONIALS</h2>
          <span className="section-rule"></span>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <strong className="author-name">{testimonial.name}</strong>
                <span className="author-title">{testimonial.title}, {testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
