import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import Solutions from './pages/solutions';
import Company from './pages/company';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
