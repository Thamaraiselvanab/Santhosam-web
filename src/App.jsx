import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ReviewsPage from './pages/ReviewsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ReferPage from './pages/ReferPage';
import ContactPage from './pages/ContactPage';
import FamilyCommunicationPage from './pages/FamilyCommunicationPage';
import TravelServicesPage from './pages/TravelServicesPage';
import BankingInvestmentPage from './pages/BankingInvestmentPage';
import LegalServicesPage from './pages/LegalServicesPage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import HealthCarePage from './pages/HealthCarePage';
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
        <Route path="/health-care/" element={<HealthCarePage />} />
        <Route path="/value-added-property-management/" element={<PropertyManagementPage />} />
        <Route path="/legal-services/" element={<LegalServicesPage />} />
        <Route path="/banking-and-investment/" element={<BankingInvestmentPage />} />
        <Route path="/travel-services/" element={<TravelServicesPage />} />
        <Route path="/family-communication/" element={<FamilyCommunicationPage />} />
        
        {/* Redirects for old URLs */}
        <Route path="/property-management/" element={<Navigate to="/value-added-property-management/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
