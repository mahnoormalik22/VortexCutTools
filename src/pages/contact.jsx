import { useState } from 'react';
import '../styles/contact.css';

const productInterests = [
  'Air Tools',
  'Diamond Blades',
  'Diamond Hole Saws',
  'Specialized Diamond',
  'Grinding Wheels',
  'Brazed Diamond',
  'Composite Drilling',
  'Sanding & Polishing',
  'CBN Wheels',
  'Flexible Diamond',
  'Not Sure / Need Consultation',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    productInterest: '',
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="contact-page">
        <div className="container">
          <div className="contact-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Thank You!</h2>
            <p>Your request has been submitted. Our team will contact you within 24 business hours.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  company: '',
                  email: '',
                  phone: '',
                  message: '',
                  productInterest: '',
                });
              }}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Info */}
          <div className="contact-info">
            <h1 className="contact-title">GET IN TOUCH</h1>
            <p className="contact-subtitle">
              Ready to discuss your tooling requirements? Our engineering team is here to help.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Address</span>
                <p>1234 Industrial Parkway<br/>Precision City, PC 12345</p>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <p><a href="mailto:info@vortexcut.com">info@vortexcut.com</a></p>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">Hours</span>
                <p>Mon - Fri: 8:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? 'error' : ''}
                    placeholder="Company name"
                  />
                  {errors.company && <span className="error-msg">{errors.company}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="email@company.com"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="productInterest">Product Interest</label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                >
                  <option value="">Select a product category</option>
                  {productInterests.map(interest => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
