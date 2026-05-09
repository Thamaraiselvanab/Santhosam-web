import React from 'react';
import { motion } from 'framer-motion';
import helpImg from '../../assets/services/gettyimages-109374394-612x612-1.jpg';

const ServicesHelp = () => {
  return (
    <section className="py-12 md:py-16 bg-[#E9F0F8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src={helpImg} 
                alt="Need Any Help" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 order-1 lg:order-2"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[#EA1273] text-[13px] md:text-sm font-bold tracking-wide mb-2"
              >
                Need Any Helps?
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003366] leading-tight mb-4">
                Reach Out for <span className="text-[#EA1273]">Caring Support</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 text-[13px] md:text-sm leading-relaxed">
                <p>
                  At Parent Care India, we understand how deeply you care for your parents and the challenges of ensuring their well-being from afar. You are not alone. Our compassionate team is here to listen, understand, and guide you every step of the way.
                </p>
                <p>
                  We provide personalized consultations to address your family’s unique needs, offering thoughtful solutions to ensure your loved ones receive the care, comfort, and respect they deserve.
                </p>
                <p>
                  Bring peace of mind and happiness to your family by contacting us today to create a thoughtful plan for your parents' care and comfort.
                </p>
              </div>

              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EA1273] hover:bg-[#D41068] text-white font-bold py-3 px-8 rounded-md text-[13px] transition-colors shadow-lg"
                >
                  Contact us
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHelp;
