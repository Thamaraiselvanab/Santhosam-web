import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServicesBanner from '../components/services/ServicesBanner';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesQuality from '../components/services/ServicesQuality';
import ServicesExpertise from '../components/services/ServicesExpertise';
import ServicesHelp from '../components/services/ServicesHelp';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <ServicesBanner />
        <ServicesGrid />
        <ServicesQuality />
        <ServicesExpertise />
        <ServicesHelp />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
