import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import MegaMenu from './MegaMenu';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const plans = ['Heritage', 'Adventure', 'Nature', 'Wildlife', 'Wedding', 'Honeymoons', 'Gastronomy'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <MapPin size={28} />
          <span>TravelBharat</span>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item dropdown mega-dropdown-container">
            <span className="navbar-link">
              Destinations <span className="dropdown-arrow">▼</span>
            </span>
            <div className="mega-dropdown">
              <MegaMenu />
            </div>
          </li>

          <li className="navbar-item dropdown">
            <span className="navbar-link">
              Plans <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              {plans.map((plan) => (
                <li key={plan} onClick={() => navigate(`/category/${plan.toLowerCase()}`)}>
                  {plan}
                </li>
              ))}
            </ul>
          </li>

          <li className="navbar-item" onClick={() => navigate('/gallery')}>
            <span className="navbar-link">Gallery</span>
          </li>

          <li className="navbar-item disabled">
            <span className="navbar-link">Itinerary</span>
          </li>

          <li className="navbar-item" onClick={() => navigate('/about')}>
            <span className="navbar-link">About Us</span>
          </li>
        </ul>

        <button className="contact-btn" onClick={() => navigate('/contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
