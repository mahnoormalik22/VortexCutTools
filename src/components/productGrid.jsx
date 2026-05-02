import { useEffect, useRef, useState } from 'react';
import '../styles/products.css';

const products = [
  {
    id: 1,
    title: 'Air Tools',
    description: 'High-performance pneumatic cutting tools for industrial applications.',
    icon: 'air-tools',
  },
  {
    id: 2,
    title: 'Diamond Blades',
    description: 'Precision-engineered diamond blades for cutting hard materials.',
    icon: 'diamond-blades',
  },
  {
    id: 3,
    title: 'Diamond Hole Saws',
    description: 'Clean, accurate holes in composite and ceramic materials.',
    icon: 'hole-saws',
  },
  {
    id: 4,
    title: 'Specialized Diamond',
    description: 'Custom diamond tooling designed for unique applications.',
    icon: 'specialized',
  },
  {
    id: 5,
    title: 'Grinding Wheels',
    description: 'Industrial-grade grinding wheels for heavy material removal.',
    icon: 'grinding',
  },
  {
    id: 6,
    title: 'Brazed Diamond',
    description: 'Brazed diamond tools with superior bond strength and durability.',
    icon: 'brazed',
  },
  {
    id: 7,
    title: 'Composite Drilling',
    description: 'Specialized drills for aerospace-grade composite materials.',
    icon: 'drilling',
  },
  {
    id: 8,
    title: 'Sanding & Polishing',
    description: 'Professional finishing tools for flawless surface preparation.',
    icon: 'sanding',
  },
  {
    id: 9,
    title: 'CBN Wheels',
    description: 'Cubic boron nitride wheels for precision grinding applications.',
    icon: 'cbn',
  },
  {
    id: 10,
    title: 'Flexible Diamond',
    description: 'Flexible diamond products for contour and curve work.',
    icon: 'flexible',
  },
];

// SVG Icons
const ProductIcons = ({ type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'air-tools':
        return <path d="M4 8h8M4 12h8M6 4v4M10 4v4M2 8h12M2 12h12M8 2v4M8 14v4" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      case 'diamond-blades':
        return <path d="M8 2L14 8L8 14L2 8L8 2Z M8 6L12 8L8 10L4 8L8 6Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      case 'hole-saws':
        return <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      case 'specialized':
        return <path d="M8 2L14 8L8 14L2 8L8 2Z M4 8h8M8 4v8" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      case 'grinding':
        return <g><circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5"/></g>;
      case 'brazed':
        return <path d="M4 4h8v8h-8z M6 6h4v4h-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      case 'drilling':
        return <g><path d="M8 2v12M4 8h8" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M6 4l4 8l-4 4l-4-8z" stroke="currentColor" strokeWidth="1.5" fill="none"/></g>;
      case 'sanding':
        return <g><rect x="2" y="6" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M4 4v4M8 4v4M12 4v4" stroke="currentColor" strokeWidth="1.5"/></g>;
      case 'cbn':
        return <g><polygon points="8,2 14,8 8,14 2,8" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/></g>;
      case 'flexible':
        return <path d="M4 10c2-2 6-2 8 0M4 6c2-2 6-2 8 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
      default:
        return <path d="M4 8h8M4 12h8M6 4v4M10 4v4M2 8h12M2 12h12M8 2v4M8 14v4" stroke="currentColor" strokeWidth="1.5" fill="none"/>;
    }
  };

  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderIcon()}
    </svg>
  );
};

// Custom hook for intersection observer
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <article
      ref={ref}
      className={`product-card ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="product-card-icon">
        <ProductIcons type={product.icon} />
      </div>
      <h3 className="product-card-title">{product.title}</h3>
      <p className="product-card-desc">{product.description}</p>
      <a href={`/products#${product.id}`} className="product-card-link">
        View Products <span>→</span>
      </a>
    </article>
  );
};

const ProductGrid = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR TOOLS</h2>
          <span className="section-rule"></span>
        </div>
        
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
