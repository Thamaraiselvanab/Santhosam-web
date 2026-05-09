import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactBanner from '../components/contact/ContactBanner';
import ContactContent from '../components/contact/ContactContent';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main>
        <ContactBanner />
        <ContactContent />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
