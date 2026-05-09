import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../../assets/about/fe9752d4-3e44-43ef-be49-f268e7bcf1b7.png';

const AboutBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
      {/* Banner Image */}
      <img 
        src={bannerImg} 
        alt="About Us Banner" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay for better text readability (optional, but good practice) */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-center"
          >
            <span className="text-[#EA1273]">About</span>{' '}
            <span className="inline-flex text-[#003366] italic">
              {["U", "S"].map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.2 + (idx * 0.1), 0.8, 1],
                    ease: "easeInOut",
                    delay: idx * 0.3
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Curved Bottom Edge (as seen in some modern designs) */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
    </div>
  );
};

export default AboutBanner;
