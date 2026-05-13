import React from 'react';
import { motion } from 'framer-motion';
import homeCareImg from '../../assets/services/WhatsApp-Image-2024-10-25-at-4.10.40-PM.jpeg';

const ServicesQuality = () => {
  return (
    <section className="py-6 md:py-10 bg-[#E9F0F8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 h-full"
          >
            <div className="h-full min-h-[250px] lg:min-h-full rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={homeCareImg} 
                alt="Quality Home Care" 
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
            className="flex flex-col justify-center space-y-3 order-1 lg:order-2 py-1"
          >
            <div className="space-y-2">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-2 py-0.5 rounded bg-pink-50 text-[#EA1273] text-[8px] font-bold uppercase tracking-widest mb-1"
                >
                  Quality Home Care
                </motion.span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#003366] leading-tight">
                  We Provide <span className="text-[#EA1273]">Quality Home Care</span> & Private Nursing
                </h2>
              </div>
              
              <div className="space-y-2 text-gray-700 text-[12px] md:text-[13px] leading-relaxed">
                <p>
                  At Parent Care India, we provide professional elder care solutions that truly feel personal. We understand the love and concern you have for your parents, and our goal is to ensure they are cared for with dignity and warmth, right in their own home.
                </p>

                <p>
                  Every parent has unique needs, and our professional elder care solutions are thoughtfully designed to meet them. From daily assistance and medication management to specialized private nursing for medical conditions, our team is ready to support your family every step of the way.
                </p>

                <p>
                  Our caregivers are skilled professionals and compassionate companions. As part of our professional elder care solutions, they do more than assist — they build meaningful relationships, treating your parents with the respect and kindness they deserve.
                </p>

                <p>
                  Parent Care India focuses on creating an environment where your parents feel comfortable and cared for. Beyond meeting physical needs, our professional elder care solutions nurture emotional well-being, ensuring they feel valued and safe in familiar surroundings.
                </p>

                <p className="font-semibold text-[#003366] border-l-3 border-[#EA1273] pl-3 italic">
                  With Parent Care India, you can be confident that your parents are in safe hands, receiving professional elder care solutions that go beyond routine tasks and touch their lives with genuine understanding and compassion.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EA1273] hover:bg-[#D41068] text-white font-bold py-2.5 px-6 rounded text-[12px] transition-all shadow-md uppercase tracking-wider"
              >
                Request a Call
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesQuality;
