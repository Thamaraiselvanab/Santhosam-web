import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ClientReviews = () => {
  const reviews = [
    {
      category: "Health Care",
      rating: 5,
      text: "Santhosam gave us peace of mind when my father had a sudden medical emergency. They handled everything quickly and with genuine care.",
      name: "Sivakumar",
      location: "Australia"
    },
    {
      category: "Legal Issue",
      rating: 5,
      text: "Being abroad, I was helpless when my parents faced a legal issue. Santhosam supported us like family and solved it smoothly.",
      name: "Ramar",
      location: "Singapore"
    },
    {
      category: "Banking",
      rating: 5,
      text: "From banking help to urgent travel needs, Santhosam was always there. Truly a trustworthy service for families living overseas.",
      name: "Naveen",
      location: "Dubai"
    },
    {
      category: "Health Care",
      rating: 5,
      text: "Santhosam stood by my parents during a difficult time. Their guidance and support made us feel safe, even from miles away.",
      name: "Karthick",
      location: "Dubai"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / 2);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviews.slice(currentPage * 2, (currentPage * 2) + 2);

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto bg-[#E8EEF9] rounded-[32px] p-6 md:p-10 relative overflow-hidden">
        
        <h2 className="text-2xl md:text-4xl font-bold text-[#003366] text-center mb-8">
          Our Happy Clients
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start px-4 md:px-10"
            >
              {currentReviews.map((review, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Card Section */}
                  <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm relative w-full text-center min-h-[180px] flex flex-col justify-center">
                    <h3 className="font-bold text-[#003366] text-base mb-1">
                      {review.category}
                    </h3>
                    
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FFC107] text-base" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.text}
                    </p>

                    {/* Speech Bubble Tail */}
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0"
                      style={{
                        borderLeft: '12px solid transparent',
                        borderRight: '12px solid transparent',
                        borderTop: '12px solid white'
                      }}
                    ></div>
                  </div>

                  {/* Name and Location */}
                  <div className="mt-6 text-center">
                    <p className="font-bold text-gray-800 text-base">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-[35%] -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors p-2 z-10 hidden md:block"
          >
            <FaChevronLeft size={28} />
          </button>
          <button 
            onClick={nextPage}
            className="absolute right-0 top-[35%] -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors p-2 z-10 hidden md:block"
          >
            <FaChevronRight size={28} />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center gap-8 mt-8 md:hidden">
            <button onClick={prevPage} className="text-blue-600">
              <FaChevronLeft size={24} />
            </button>
            <button onClick={nextPage} className="text-blue-600">
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentPage === index ? 'bg-black w-6' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
