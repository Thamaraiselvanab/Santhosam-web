import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import eventsBannerImg from '../../assets/Events/3-1.png';

const EventsBanner = () => {
  const [text, setText] = useState("");
  const fullText = "Events";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      setTypingSpeed(100);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 50 : 150);
    }
  };

  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={eventsBannerImg} 
          alt="Events Banner" 
          className="w-full h-full object-cover"
        />
        {/* Top border highlight as seen in screenshot */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#D1E9FF]/30 border-t border-white/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#EA1273] tracking-tight min-h-[1.2em] drop-shadow-sm select-none text-center">
            {text}
          </h1>
        </div>
      </div>

      {/* Wavy Bottom Design (Artistic Smooth Style) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <motion.svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Layer 1: Background Blur Wave */}
          <path 
            d="M0,65 C150,105 450,25 600,65 C750,105 1050,25 1200,65 V120 H0 Z" 
            fill="#FFFFFF"
            opacity="0.3"
          ></path>

          {/* Layer 2: Main Solid Wave */}
          <path 
            d="M0,70 C150,110 450,30 600,70 C750,110 1050,30 1200,70 V120 H0 Z" 
            fill="#FFFFFF"
          ></path>

          {/* Layer 3: Artistic "Brush" Accents inspired by inspiration image */}
          <motion.path 
            d="M-50,65 C100,105 400,25 550,65 C700,105 1000,25 1150,65" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
            strokeDasharray="60 120"
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.path>

          <motion.path 
            d="M50,60 C200,100 500,20 650,60 C800,100 1100,20 1250,60" 
            stroke="#FFFFFF" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.2"
            strokeDasharray="120 180"
            animate={{ x: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          ></motion.path>

          <path 
            d="M0,55 C150,95 450,15 600,55 C750,95 1050,15 1200,55" 
            stroke="#FFFFFF" 
            strokeWidth="0.5" 
            fill="none" 
            opacity="0.5"
            strokeDasharray="5 15"
          ></path>
        </motion.svg>
      </div>
    </section>
  );
};

export default EventsBanner;
