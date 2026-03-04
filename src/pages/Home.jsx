import Navbar from '../components/Navbar.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TopDestinations from '../components/TopDestinations.jsx';
import TrendingCategories from '../components/TrendingCategories.jsx';
import ExploreByRegion from '../components/ExploreByRegion.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <TopDestinations />
      <TrendingCategories />
      <ExploreByRegion />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
