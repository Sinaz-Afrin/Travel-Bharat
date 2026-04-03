import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import RegionPage from './pages/RegionPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import PlaceDetails from './pages/PlaceDetails.jsx';
import StatePage from './pages/StatePage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state/:slug" element={<StatePage />} />
        <Route path="/region/:regionName" element={<RegionPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/gallery" element={<div style={{ padding: '4rem', textAlign: 'center' }}><h1>Gallery - Coming Soon</h1></div>} />
        <Route path="/about" element={<div style={{ padding: '4rem', textAlign: 'center' }}><h1>About Us - Coming Soon</h1></div>} />
        <Route path="/contact" element={<div style={{ padding: '4rem', textAlign: 'center' }}><h1>Contact - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
