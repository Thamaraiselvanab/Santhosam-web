import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ReviewsBanner from '../components/reviews/ReviewsBanner';
import FounderProfile from '../components/reviews/FounderProfile';
import ClientReviews from '../components/reviews/ClientReviews';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main>
        <ReviewsBanner />
        <FounderProfile />
        <ClientReviews />
      </main>

      <Footer />
    </div>
  );
};

export default ReviewsPage;

