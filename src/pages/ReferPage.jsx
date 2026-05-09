import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ReferBanner from '../components/refer/ReferBanner';
import ReferForm from '../components/refer/ReferForm';

const ReferPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main>
        <ReferBanner />
        <ReferForm />
      </main>

      <Footer />
    </div>
  );
};

export default ReferPage;
