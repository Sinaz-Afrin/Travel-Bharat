import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, AlertCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getAllPlaces } from '../services/api';
import '../styles/topDestinationsCarousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopDestinationsCarousel = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllPlaces();
        // Display all destinations in carousel
        setDestinations(data);
      } catch (err) {
        setError(err.message || 'Failed to load destinations');
        console.error('Error loading destinations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleCardClick = (destinationId) => {
    navigate(`/place/${destinationId}`);
  };

  if (loading) {
    return (
      <section className="top-destinations-carousel">
        <div className="carousel-container">
          <h2 className="carousel-title">Top Destinations</h2>
          <p className="carousel-subtitle">Discover the most popular places across India</p>
          <div className="loading-container">
            <p className="loading-text">Loading destinations...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="top-destinations-carousel">
        <div className="carousel-container">
          <h2 className="carousel-title">Top Destinations</h2>
          <p className="carousel-subtitle">Discover the most popular places across India</p>
          <div className="error-container">
            <AlertCircle size={24} />
            <p className="error-text">Failed to load destinations: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="top-destinations-carousel">
      <div className="carousel-container">
        <h2 className="carousel-title">Top Destinations</h2>
        <p className="carousel-subtitle">Discover the most popular places across India</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="swiper-container"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination._id}>
              <div
                className="destination-card"
                onClick={() => handleCardClick(destination._id)}
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${destination.images && destination.images.length > 0
                      ? destination.images[0]
                      : '/placeholder-image.jpg'})`
                  }}
                />
                <div className="card-content">
                  <div className="card-location">
                    <MapPin size={16} />
                    <span>{destination.state}</span>
                  </div>
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-description">{destination.description}</p>
                  <div className="category-badge">{destination.category}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopDestinationsCarousel;