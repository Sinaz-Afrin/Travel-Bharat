import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlacesByRegion } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import '../styles/sections.css';

const RegionPage = () => {
  const { regionName } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlacesByRegion(regionName);
        setPlaces(data);
      } catch (err) {
        console.error('Error fetching places for region', regionName, err);
        setError(err.message || 'Failed to fetch places');
      } finally {
        setLoading(false);
      }
    };

    if (regionName) {
      fetchPlaces();
    }
  }, [regionName]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Region: {regionName}</h2>
        <p className="section-subtitle">Places located in {regionName}</p>

        {loading && <p className="loading-text">Loading places...</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && places.length === 0 && (
          <p className="no-results">No places found in {regionName}</p>
        )}

        <div className="card-grid">
          {places.map((place) => (
            <PlaceCard key={place._id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionPage;
