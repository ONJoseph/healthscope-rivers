import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import MapComponent from './components/MapComponent';
import ContactForm from './components/ContactForm';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/contact" element={<ContactForm />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
