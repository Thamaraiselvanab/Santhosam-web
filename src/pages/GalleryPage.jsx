import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GalleryBanner from '../components/gallery/GalleryBanner';
import VideoGallery from '../components/gallery/VideoGallery';
import ImageGallery from '../components/gallery/ImageGallery';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-50 selection:text-[#EA1273] font-sans">
      <Header />
      
      <main>
        <GalleryBanner />
        <VideoGallery />
        <ImageGallery />
      </main>

      <Footer />
    </div>
  );
};



export default GalleryPage;
