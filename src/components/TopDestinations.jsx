import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, AlertCircle } from 'lucide-react';
import { getAllPlaces } from '../services/api';
import '../styles/sections.css';

const TopDestinations = () => {
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
        // Display first 6 destinations as featured
        setDestinations(data.slice(0, 6));
      } catch (err) {
        setError(err.message || 'Failed to load destinations');
        console.error('Error loading destinations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle">Discover the most popular places across India</p>
          <div className="loading-container">
            <p className="loading-text">Loading destinations...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle">Discover the most popular places across India</p>
          <div className="error-container">
            <AlertCircle size={24} />
            <p className="error-text">Failed to load destinations: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Top Destinations</h2>
        <p className="section-subtitle">Discover the most popular places across India</p>

        <div className="card-grid">
          {destinations.length > 0 ? (
            destinations.map((destination) => (
              <div key={destination._id} className="destination-card">
                <div className="card-image" style={{ backgroundImage: `url(${destination.image})` }}>
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <div className="card-location">
                    <MapPin size={16} />
                    <span>{destination.state}</span>
                  </div>
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-description">{destination.description}</p>
                  <button
                    className="card-btn"
                    onClick={() => navigate(`/place/${destination._id}`)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No destinations found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
