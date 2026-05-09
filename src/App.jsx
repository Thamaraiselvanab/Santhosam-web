import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ReviewsPage from './pages/ReviewsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ReferPage from './pages/ReferPage';
import ContactPage from './pages/ContactPage';
import SocialSidebar from './components/layout/SocialSidebar';



import ScrollToTop from './components/common/ScrollToTop';
import FloatingActions from './components/layout/FloatingActions';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SocialSidebar />
      <FloatingActions />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>


    </Router>
  );
}


export default App;
