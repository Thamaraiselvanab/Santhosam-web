import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FAQBanner from '../components/faq/FAQBanner';
import FAQContent from '../components/faq/FAQContent';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <FAQBanner />
        <FAQContent />
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
