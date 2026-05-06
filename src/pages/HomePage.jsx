import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main className="relative">
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

        {/* Info Strip */}
        <section className="bg-[#EA1273] h-12 w-full"></section>

        {/* Floating Badges */}
        <div className="fixed left-4 bottom-24 z-40 cursor-pointer group">
           <div className="w-20 h-20 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-center shadow-xl border-4 border-white hover:scale-110 transition-all">
              <span className="text-[10px] font-black uppercase text-gray-800 leading-none">Refer a</span>
              <span className="text-xs font-black uppercase text-gray-800 leading-none">Friend</span>
           </div>
           <div className="absolute -top-2 -left-2 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white">
              📣
           </div>
        </div>

        {/* Need Help Button */}
        <div className="fixed left-0 bottom-0 z-50">
           <button className="bg-[#EA1273] text-white px-6 py-2.5 font-bold shadow-lg hover:bg-[#D41068] transition-all rounded-tr-xl flex items-center gap-2 text-sm uppercase tracking-wider">
              Need Help?
           </button>
        </div>

        {/* Bottom Right Actions */}
        <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-4">
           <a href="#" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
                <FaWhatsapp className="w-8 h-8" />
           </a>
           <button className="bg-[#EA1273] text-white px-6 py-3 rounded-md font-bold shadow-lg hover:bg-[#D41068] transition-all flex items-center gap-2">
              Request a Call
           </button>
        </div>
      </main>

      <footer className="bg-[#003366] py-12 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center opacity-80 text-sm">
          <p>© 2026 Santhosam - Parent Care India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
