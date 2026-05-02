import { useState, useEffect, useRef } from 'react';
import '../styles/product-catalog.css';

const products = [
  { id: 1, name: 'Air Cut-Off Tool', category: 'Air Tools', description: 'High-speed pneumatic cut-off tool for precision separation.' },
  { id: 2, name: 'Air Die Grinder', category: 'Air Tools', description: 'Compact die grinder for intricate detail work.' },
  { id: 3, name: 'Turbo Diamond Blade', category: 'Diamond Blades', description: 'Turbo-rimmed diamond blade for fast, clean cuts.' },
  { id: 4, name: 'Segmented Diamond Blade', category: 'Diamond Blades', description: 'Heavy-duty segmented blade for concrete and masonry.' },
  { id: 5, name: 'Professional Hole Saw Set', category: 'Diamond Hole Saws', description: 'Multi-size hole saw kit for various diameters.' },
  { id: 6, name: 'Tungsten Carbide Hole Saw', category: 'Diamond Hole Saws', description: 'Tungsten-tipped hole saw for prolonged life.' },
  { id: 7, name: 'Custom Profile Tools', category: 'Specialized Diamond', description: 'Custom-ground profiles for unique applications.' },
  { id: 8, name: 'Electroplated Diamond Ring', category: 'Specialized Diamond', description: 'Precision electroplated tooling for detailed work.' },
  { id: 9, name: 'Resin Bond Grinding Wheel', category: 'Grinding Wheels', description: 'Finefinish resin wheel for surface preparation.' },
  { id: 10, name: 'Vitrified Bond Wheel', category: 'Grinding Wheels', description: 'High-speed vitrified wheel for precision grinding.' },
  { id: 11, name: 'Brazed Diamond Cup Wheel', category: 'Brazed Diamond', description: 'Continuous rim brazed wheel for smooth finishes.' },
  { id: 12, name: 'Brazed Profile Blade', category: 'Brazed Diamond', description: 'Custom profile blade for specialized cuts.' },
  { id: 13, name: 'Ply Drills Complete Set', category: 'Composite Drilling', description: 'Complete set for aerospace composite laminates.' },
  { id: 14, name: 'Step Drill Bundle', category: 'Composite Drilling', description: 'Multi-step drills for varying thicknesses.' },
  { id: 15, name: 'Orbital Sanding Kit', category: 'Sanding & Polishing', description: 'Random orbital kit for flawless finishes.' },
  { id: 16, name: 'Polish Foam Pads', category: 'Sanding & Polishing', description: 'Dual-density foam pads for final polish.' },
  { id: 17, name: 'CBN Flywheel Grinder', category: 'CBN Wheels', description: 'Precision CBN wheel for flywheel resurfacing.' },
  { id: 18, name: 'CBN Surface Grinder', category: 'CBN Wheels', description: 'High-precision CBN for critical flats.' },
  { id: 19, name: 'Diamond File Set', category: 'Flexible Diamond', description: 'Versatile diamond files for contours.' },
  { id: 20, name: 'Diamond Sanding Belt', category: 'Flexible Diamond', description: 'Flexible belts for curved surfaces.' },
];

const categories = [
  'All Products',
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
];

// Filter Sidebar Component
const FilterSidebar = ({ activeCategory, onCategoryChange }) => {
  return (
    <aside className="filter-sidebar">
      <h3 className="filter-title">CATEGORIES</h3>
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <article className="product-card-detail">
      <div className="product-card-icon">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M4 8h8M4 12h8M6 4v4M10 4v4M2 8h12M2 12h12M8 2v4M8 14v4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
      </div>
      <a href={`/contact?product=${product.id}`} className="product-card-link">
        Request Quote <span>→</span>
      </a>
    </article>
  );
};

// Main Products Page
const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const productsRef = useRef(null);

  useEffect(() => {
    if (activeCategory === 'All Products') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  // Update URL params without reload
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      const found = categories.find(c => c.toLowerCase().replace(/ /g, '-').includes(category));
      if (found) setActiveCategory(found);
    }
  }, []);

  return (
    <main className="products-page">
      {/* Page Header */}
      <div className="products-page-header">
        <div className="container">
          <h1 className="products-page-title">PRODUCT CATALOG</h1>
          <p className="products-page-subtitle">
            Explore our comprehensive range of precision industrial cutting tools
          </p>
        </div>
      </div>

      <div className="container">
        <div className="products-layout">
          <FilterSidebar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <div className="products-content" ref={productsRef}>
            <div className="products-count">
              Showing {filteredProducts.length} products
            </div>
            
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="no-products">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
