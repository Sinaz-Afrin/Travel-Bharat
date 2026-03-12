import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Discover Incredible India',
      subtitle: 'Explore Heritage, Nature & Adventure Across States'
    },
    {
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Experience Royal Heritage',
      subtitle: 'Immerse in the grandeur of palaces and forts'
    },
    {
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Serene Natural Beauty',
      subtitle: 'Find peace in pristine landscapes and backwaters'
    },
    {
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Thrilling Adventures',
      subtitle: 'Conquer mountains, deserts, and untamed wilderness'
    },
    {
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Spiritual Journeys',
      subtitle: 'Connect with ancient traditions and sacred sites'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button className="hero-cta" onClick={() => navigate('/region')}>
              Start Exploring
            </button>
          </div>
        </div>
      ))}

      <button className="carousel-btn prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
