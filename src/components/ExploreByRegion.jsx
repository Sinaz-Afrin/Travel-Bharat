import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { regions } from '../data/regions';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../styles/sections.css';

const ExploreByRegion = () => {
  const navigate = useNavigate();
  const [loadingRegion, setLoadingRegion] = useState(null);

  const handleRegionClick = async (region) => {
    try {
      setLoadingRegion(region.name);
      // Navigate to region page with region name as parameter
      // The region page will handle fetching the data via the API
      navigate(`/region/${region.name.toLowerCase().replace(/\s+/g, '-')}`);
    } catch (error) {
      console.error('Error handling region click:', error);
    } finally {
      setLoadingRegion(null);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Explore by Region</h2>
        <p className="section-subtitle">Journey through India's diverse landscapes</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {regions.map((region) => (
            <SwiperSlide key={region.id}>
              <div
                className={`region-card ${
                  loadingRegion === region.name ? "loading" : ""
                }`}
                style={{ backgroundImage: `url(${region.image})` }}
                onClick={() => handleRegionClick(region)}
              >
                <div className="region-overlay"></div>
                <div className="region-content">
                  <h3 className="region-name">{region.name}</h3>
                  <p className="region-description">{region.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExploreByRegion;
