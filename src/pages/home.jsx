import Hero from '../components/hero';
import Ticker from '../components/ticker';
import ProductGrid from '../components/productGrid';
import StatsBar from '../components/statsBar';
import Solutions from '../components/solutions';
import Industries from '../components/industries';
import Testimonials from '../components/testimonials';
import CTABanner from '../components/CTAbanner';

const Home = () => {
  return (
    <main>
      <Hero />
      <Ticker />
      <ProductGrid />
      <StatsBar />
      <Solutions />
      <Industries />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default Home;
