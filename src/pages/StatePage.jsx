import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import AttractionCard from '../components/AttractionCard';
import BestTimeCard from '../components/BestTimeCard';
import TravelTipCard from '../components/TravelTipCard';
import { getStateByName } from '../data/statesData';
import '../styles/statePage.css';

const StatePage = () => {
  const { stateName } = useParams();
  const state = getStateByName(stateName);
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="state-loading-container">
          <div className="text-center">
            <div className="state-spinner"></div>
            <p className="state-loading-text">Loading state information...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!state) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="state-error-container">
            <AlertCircle size={48} />
            <h1 className="text-2xl font-bold mb-2">State Not Found</h1>
            <p>Sorry, the state you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % state.gallery.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex((prev) => (prev - 1 + state.gallery.length) % state.gallery.length);
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="state-hero">
        <img
          src={state.heroImage}
          alt={state.state}
          className="state-hero-img"
        />
        <div className="state-hero-overlay"></div>
        <div className="state-hero-content">
          <h1>{state.state}</h1>
          <p>Experience the Magic and Heritage</p>
        </div>
      </section>

      {/* About Section */}
      <section className="state-about-section">
        <div className="state-container state-section-padding">
          <div className="state-about-grid">
            {/* Left: Description */}
            <div className="state-about-content">
              <h2>About {state.state}</h2>
              <div className="state-about-box">
                <p>
                  {isExpanded ? state.fullDescription : state.description}
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="state-view-more-btn"
                >
                  {isExpanded ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>

            {/* Right: Image Carousel */}
            <div className="state-about-image">
              {state.attractions[0] && (
                <>
                  <img
                    src={state.attractions[0].image}
                    alt="attraction"
                  />
                  <div className="state-category-badge">
                    {state.attractions[0]?.category}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="state-section-padding px-4 md:px-8">
        <div className="state-container">
          <div className="state-section-title-wrapper">
            <h2 className="state-section-title">Top Attractions</h2>
            <p className="state-section-subtitle">Must-visit places and experiences</p>
          </div>
          <div className="state-attractions-grid">
            {state.attractions.map((attraction) => (
              <div key={attraction.id} className="state-attraction-card">
                <div className="state-attraction-image-wrapper">
                  <img src={attraction.image} alt={attraction.name} className="state-attraction-image-wrapper img" />
                  <div className="state-attraction-overlay"></div>
                </div>
                <div className="state-attraction-content">
                  <span className="state-attraction-category">{attraction.category}</span>
                  <h3 className="state-attraction-title">{attraction.name}</h3>
                  <p className="state-attraction-description">{attraction.description}</p>
                  <button className="state-attraction-btn">
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="state-section-padding bg-gray-50 px-4 md:px-8">
        <div className="state-container">
          <div className="state-section-title-wrapper">
            <h2 className="state-section-title">Best Time to Visit</h2>
            <p className="state-section-subtitle">Choose the perfect season for your journey</p>
          </div>
          <div className="state-best-time-grid">
            {state.bestTime.map((season, index) => (
              <div key={index} className="state-best-time-card">
                <div className="state-best-time-icon">{season.icon}</div>
                <h3 className="state-best-time-season">{season.season}</h3>
                <p className="state-best-time-months">{season.months}</p>
                <p className="state-best-time-temperature">{season.temperature}</p>
                <p className="state-best-time-description">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="state-section-padding px-4 md:px-8">
        <div className="state-container">
          <div className="state-section-title-wrapper">
            <h2 className="state-section-title">Travel Tips</h2>
            <p className="state-section-subtitle">Expert advice for your visit</p>
          </div>
          <div className="state-tips-grid">
            {state.tips.map((tip, index) => (
              <div key={index} className="state-tip-card">
                <span className="state-tip-icon">{tip.icon}</span>
                <span className="state-tip-text">{tip.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="state-gallery-section">
        <div className="state-container state-section-padding">
          <div className="state-section-title-wrapper">
            <h2 className="state-section-title" style={{ color: 'white' }}>Gallery</h2>
            <p className="state-section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Visual journey through the state</p>
          </div>

          {/* Main Gallery Image */}
          <div className="state-gallery-main-wrapper">
            <div className="state-gallery-main">
              <img
                src={state.gallery[galleryIndex]}
                alt={`gallery-${galleryIndex}`}
                className="state-gallery-image"
              />
              <div className="state-gallery-overlay"></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevGalleryImage}
              className="state-gallery-nav-btn state-gallery-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextGalleryImage}
              className="state-gallery-nav-btn state-gallery-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Counter */}
            <div className="state-gallery-counter">
              {galleryIndex + 1} / {state.gallery.length}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="state-gallery-thumbnails">
            {state.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setGalleryIndex(index)}
                className={`state-gallery-thumbnail ${index === galleryIndex ? 'active' : ''}`}
                aria-label={`View gallery image ${index + 1}`}
              >
                <img src={image} alt={`thumb-${index}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="state-cta-section">
        <div className="state-cta-content">
          <h2 className="state-cta-title">
            Ready to Explore {state.state}?
          </h2>
          <p className="state-cta-description">
            Plan your journey today and create unforgettable memories in one of India's most beautiful states.
          </p>
          <div className="state-cta-buttons">
            <button className="state-cta-btn state-cta-btn-primary">
              Plan Your Trip
            </button>
            <button className="state-cta-btn state-cta-btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StatePage;
