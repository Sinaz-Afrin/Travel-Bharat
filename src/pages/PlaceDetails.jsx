import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaceById } from '../services/api';
import '../styles/sections.css';

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlaceById(id);
        setPlace(data);
      } catch (err) {
        console.error('Error fetching place details', err);
        setError(err.message || 'Failed to fetch place');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlace();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <p className="loading-text">Loading place details...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <p className="error-text">{error}</p>
        </div>
      </section>
    );
  }

  if (!place) {
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{place.name}</h2>
        <div className="gallery-grid">
          {(place.images || []).map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="details-content">
          <p>{place.description}</p>

          <ul className="details-list">
            {place.state && <li><strong>State:</strong> {place.state}</li>}
            {place.region && <li><strong>Region:</strong> {place.region}</li>}
            {place.category && <li><strong>Category:</strong> {place.category}</li>}
            {place.bestTimeToVisit && <li><strong>Best Time to Visit:</strong> {place.bestTimeToVisit}</li>}
            {place.entryFee && <li><strong>Entry Fee:</strong> {place.entryFee}</li>}
            {place.nearbyAttractions && (
              <li>
                <strong>Nearby Attractions:</strong> {place.nearbyAttractions.join(', ')}
              </li>
            )}
            {place.locationLink && (
              <li>
                <strong>Map:</strong>{' '}
                <a href={place.locationLink} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlaceDetails;
