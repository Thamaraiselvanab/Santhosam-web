import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiChevronLeft, HiChevronRight, HiArrowsPointingOut } from 'react-icons/hi2';

// Import images
import img1 from '../../assets/gallery/DSC00173-1024x683-640x480.jpg';
import img2 from '../../assets/gallery/DSC00177-683x1024-640x480.jpg';
import img3 from '../../assets/gallery/DSC00180-683x1024-640x480.jpg';
import img4 from '../../assets/gallery/DSC00182-1024x683-640x480.jpg';
import img5 from '../../assets/gallery/DSC00205-1024x683-640x480.jpg';
import img6 from '../../assets/gallery/DSC00206-1024x683-640x480.jpg';
import img7 from '../../assets/gallery/DSC00211-1024x683-640x480.jpg';
import img8 from '../../assets/gallery/DSC00213-1024x683-640x480.jpg';
import img9 from '../../assets/gallery/WhatsApp-Image-2025-05-07-at-10.55.02-AM-1-e1748340507954-1024x499-640x480.jpeg';
import img10 from '../../assets/gallery/WhatsApp-Image-2025-05-07-at-10.59.46-AM-3-1024x576-640x480.jpeg';
import img11 from '../../assets/gallery/healthcare-1-640x480.jpg';

const ImageGallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const images = [
    { src: img1, alt: "Santhosam Facility 1" },
    { src: img2, alt: "Santhosam Facility 2" },
    { src: img3, alt: "Santhosam Facility 3" },
    { src: img4, alt: "Santhosam Facility 4" },
    { src: img5, alt: "Santhosam Facility 5" },
    { src: img6, alt: "Santhosam Facility 6" },
    { src: img7, alt: "Santhosam Facility 7" },
    { src: img8, alt: "Santhosam Facility 8" },
    { src: img9, alt: "Community Event 1" },
    { src: img10, alt: "Community Event 2" },
    { src: img11, alt: "Healthcare Services" },
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#003366] mb-4"
          >
            Photo <span className="text-[#EA1273]">Gallery</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#EA1273] mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImgIndex(index)}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                <div className="bg-[#EA1273] p-2.5 rounded-xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  <HiArrowsPointingOut className="w-5 h-5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedImgIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-[110] text-white hover:text-[#EA1273] transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md"
              onClick={() => setSelectedImgIndex(null)}
            >
              <HiXMark className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-[#EA1273] transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md hidden md:block"
              onClick={handlePrev}
            >
              <HiChevronLeft className="w-8 h-8" />
            </button>
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-[#EA1273] transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md hidden md:block"
              onClick={handleNext}
            >
              <HiChevronRight className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <motion.div 
              key={selectedImgIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImgIndex].src} 
                alt="Gallery Image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              
              <div className="text-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <p className="text-gray-300 text-sm">{selectedImgIndex + 1} / {images.length}</p>
              </div>


              {/* Mobile Navigation */}
              <div className="flex md:hidden gap-6 mt-4">
                <button 
                  className="text-white bg-white/10 p-3 rounded-full"
                  onClick={handlePrev}
                >
                  <HiChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  className="text-white bg-white/10 p-3 rounded-full"
                  onClick={handleNext}
                >
                  <HiChevronRight className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;
