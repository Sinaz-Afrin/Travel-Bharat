import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { getAllPlaces } from '../services/api';
import '../styles/sections.css';

// Icon mapping for categories
const categoryIcons = {
  heritage: '🏛️',
  adventure: '🏔️',
  nature: '🌿',
  wildlife: '🦁',
  wedding: '💍',
  honeymoon: '❤️',
  gastronomy: '🍛',
  beach: '🏖️',
  mountain: '⛰️',
  temple: '🕉️',
  culture: '🎨',
  trekking: '🥾',
};

const TrendingCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const places = await getAllPlaces();

        // Extract unique categories from places
        const uniqueCategories = new Map();
        places.forEach((place) => {
          if (place.category && !uniqueCategories.has(place.category)) {
            const categorySlug = place.category.toLowerCase().replace(/\s+/g, '-');
            uniqueCategories.set(place.category, {
              id: uniqueCategories.size + 1,
              name: place.category,
              slug: categorySlug,
              icon: categoryIcons[categorySlug] || '✨',
              tagline: `Discover amazing ${place.category.toLowerCase()} experiences`,
              count: 0,
            });
          }
        });

        // Count places per category
        uniqueCategories.forEach((cat) => {
          const count = places.filter((p) => p.category === cat.name).length;
          cat.count = count;
        });

        setCategories(Array.from(uniqueCategories.values()));
      } catch (err) {
        setError(err.message || 'Failed to load categories');
        console.error('Error loading categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Trending Categories</h2>
          <p className="section-subtitle">Find your perfect travel experience</p>
          <div className="loading-container">
            <p className="loading-text">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Trending Categories</h2>
          <p className="section-subtitle">Find your perfect travel experience</p>
          <div className="error-container">
            <AlertCircle size={24} />
            <p className="error-text">Failed to load categories: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Trending Categories</h2>
        <p className="section-subtitle">Find your perfect travel experience</p>

        <div className="category-grid">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => navigate(`/category/${category.slug}`)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-tagline">{category.tagline}</p>
                {category.count > 0 && (
                  <p className="category-count">{category.count} destinations</p>
                )}
              </div>
            ))
          ) : (
            <p className="no-results">No categories found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
