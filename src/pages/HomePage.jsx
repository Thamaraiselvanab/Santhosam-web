import React from 'react';
import Header from '../components/layout/Header';
import HeroBanner from '../components/home/HeroBanner';
import Steps from '../components/home/Steps';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Availability from '../components/home/Availability';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TariffPlans from '../components/home/TariffPlans';
import Partners from '../components/home/Partners';
import Feedback from '../components/home/Feedback';
import AvailabilityBanner from '../components/home/AvailabilityBanner';
import EmergencySection from '../components/home/EmergencySection';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main className="relative overflow-x-hidden">
        {/* Hero Video Banner */}
        <HeroBanner />

        {/* 4 Simple Steps Section */}
        <Steps />

        {/* Our Services Section */}
        <Services />

        {/* About / Who We Are Section */}
        <About />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Tariff Plans Section */}
        <TariffPlans />

        {/* Our Partners Section */}
        <Partners />

        {/* Emergency Call Section */}
        <EmergencySection />

        {/* Feedback Section */}
        <Feedback />

        {/* 24/7 Availability Banner */}
        <AvailabilityBanner />



      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
