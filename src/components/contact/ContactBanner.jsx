import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import contactBannerImg from '../../assets/about/fe9752d4-3e44-43ef-be49-f268e7bcf1b7.png';

const ContactBanner = () => {
  const [text, setText] = useState("");
  const fullText = "Contact Us";
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
          src={contactBannerImg} 
          alt="Contact Us Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        {/* Top border highlight */}
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

      {/* Wavy Bottom Design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <motion.svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <path 
            d="M0,65 C150,105 450,25 600,65 C750,105 1050,25 1200,65 V120 H0 Z" 
            fill="#FFFFFF"
            opacity="0.3"
          ></path>
          <path 
            d="M0,70 C150,110 450,30 600,70 C750,110 1050,30 1200,70 V120 H0 Z" 
            fill="#FFFFFF"
          ></path>
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
        </motion.svg>
      </div>
    </section>
  );
};

export default ContactBanner;
