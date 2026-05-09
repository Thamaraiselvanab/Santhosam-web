import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/about/steptodown.com212797.jpg';
import img2 from '../../assets/about/steptodown.com167146-1.jpg';
import img3 from '../../assets/about/WhatsApp-Image-2025-09-24-at-11.19.23-AM.jpeg';

const images = [img1, img2, img3];

const AboutIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 flex flex-col justify-center py-2"
          >
            <h2 className="text-2xl md:text-3xl font-black text-[#003366] leading-tight">
              Parent Care India - <span className="text-[#EA1273]">A Promise of Love, Dignity, and Well-Being</span>
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At Parent Care India, we understand the deep concerns that come with being far from your aging parents. You want to ensure their health, comfort, and happiness, but the demands of your career and responsibilities abroad can make it difficult to be there for them in the way you wish.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our journey began with <span className="font-bold text-[#003366]">Dr. Murugesh Velayudham</span>, a dedicated doctor with decades of experience in the National Health Service (NHS) in the UK. He has spent years leading care homes and ensuring elderly individuals receive the best possible attention, respect, and medical support. His work in the NHS, known globally for its excellence in healthcare, has given him extensive expertise in elder care, proactive health management, and compassionate support.
            </p>

            <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-[#EA1273] shadow-sm">
              <h3 className="text-base font-bold text-[#EA1273] mb-1">Born from Experience, Built on Compassion</h3>
              <p className="text-gray-700 text-[13px] leading-relaxed italic">
                Parent Care India was born from Dr. Murugesh’s personal journey, a journey filled with love, longing, and the challenges of caring for his parents while living in a foreign country. He experienced the worry and helplessness of not being physically present during difficult times.
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Through this journey, he realized that countless NRIs face the same struggles, balancing personal aspirations, professional success, and financial growth abroad while ensuring their parents are cared for back home. This realization led to the creation of Parent Care India, a service built on trust, understanding, and a firm commitment to providing every loving parent in India with the care, dignity, and companionship they deserve.
            </p>
          </motion.div>

          {/* Right Animated Images - Hidden on Tablet */}
          <div 
            className="relative hidden xl:flex min-h-[350px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-50 cursor-pointer flex-grow"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Care Slide ${currentIndex + 1}`}
              />
            </AnimatePresence>
            
            {/* Progress indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-5 bg-[#EA1273]' : 'w-1.5 bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
