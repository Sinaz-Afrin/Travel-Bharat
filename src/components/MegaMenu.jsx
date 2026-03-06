import { Link } from 'react-router-dom';
import '../styles/megaMenu.css';

const MegaMenu = () => {
  const regions = {
    'North': [
      'Himachal Pradesh',
      'Uttarakhand',
      'Uttar Pradesh',
      'Haryana',
      'Punjab',
      'Rajasthan'
    ],
    'North-East': [
      'Arunachal Pradesh',
      'Assam',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Tripura',
      'Sikkim'
    ],
    'East': [
      'Bihar',
      'Jharkhand',
      'Odisha',
      'West Bengal'
    ],
    'South': [
      'Andhra Pradesh',
      'Karnataka',
      'Kerala',
      'Tamil Nadu',
      'Telangana'
    ],
    'West': [
      'Goa',
      'Gujarat',
      'Maharashtra'
    ],
    'Central': [
      'Madhya Pradesh',
      'Chhattisgarh'
    ],
    'Union Territories': [
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Delhi',
      'Dadra and Nagar Haveli',
      'Daman and Diu',
      'Jammu & Kashmir',
      'Lakshadweep',
      'Puducherry',
      'Ladakh'
    ]
  };

  const createSlug = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  return (
    <div className="mega-menu">
      {Object.entries(regions).map(([region, states]) => (
        <div key={region} className="mega-column">
          <h3 className="region-title">{region}</h3>
          <ul className="state-list">
            {states.map((state) => (
              <li key={state}>
                <Link to={`/state/${createSlug(state)}`} className="state-link">
                  {state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;