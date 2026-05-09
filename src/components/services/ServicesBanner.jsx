import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImg from '../../assets/services/WhatsApp-Image-2025-05-07-at-10.55.02-AM-1-e1748340507954.jpeg';

const ServicesBanner = () => {
  const [text, setText] = useState("");
  const fullText = "Services";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
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
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 50 : 150);
    }
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden bg-gray-900">
      <img 
        src={bannerImg} 
        alt="Services Banner" 
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#EA1273] tracking-tighter">
              {text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
