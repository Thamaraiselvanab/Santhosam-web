import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import faqBannerImg from '../../assets/about/fe9752d4-3e44-43ef-be49-f268e7bcf1b7.png';

const FAQBanner = () => {
  const [text, setText] = useState("");
  const fullText = "FAQ's";
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
    <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={faqBannerImg} 
          alt="FAQ Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B3D]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#EA1273] tracking-tighter min-h-[1.2em] text-center">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FAQBanner;
