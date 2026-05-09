import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import feedbackImg from '../../assets/home/feedback.webp';

const Feedback = () => {
  const testimonials = [
    {
      text: "Parent Care India provides excellent elder care services. My father feels safe, and I receive regular updates. It's a true relief knowing he's in good hands while I'm away.",
      name: "Anitha R.",
      location: "Singapore"
    },
    {
      text: "I'm happy with the service. My parents are well taken care of, and the team responds quickly to any concerns. It's a trustworthy service.",
      name: "Mark Wilson",
      location: "USA"
    },
    {
      text: "The caregivers are kind and helpful. My mother enjoys their company and feels supported daily. Highly recommend ParentCare India for elderly care.",
      name: "Ravi",
      location: "Canada"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0"
          >
            <img 
              src={feedbackImg} 
              alt="Nurse with elderly patient" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Side: Content */}
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#EA1273] font-semibold text-base uppercase tracking-wide"
            >
              Feedback
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003366] leading-tight"
            >
              Stories From Our <br /> Happy Parents
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex gap-2 pt-4 justify-center lg:justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
              {/* Decorative dots to match the screenshot if only one testimonial */}
              {testimonials.length === 1 && (
                <>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
