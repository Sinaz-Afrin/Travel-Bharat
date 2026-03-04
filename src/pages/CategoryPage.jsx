import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlacesByCategory } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import '../styles/sections.css';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPlacesByCategory(categoryName);
        setPlaces(data);
      } catch (err) {
        console.error('Error fetching places for category', categoryName, err);
        setError(err.message || 'Failed to fetch places');
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchPlaces();
    }
  }, [categoryName]);

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Category: {categoryName}</h2>
        <p className="section-subtitle">Places under {categoryName}</p>

        {loading && <p className="loading-text">Loading places...</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && places.length === 0 && (
          <p className="no-results">No places found in this category</p>
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

export default CategoryPage;
