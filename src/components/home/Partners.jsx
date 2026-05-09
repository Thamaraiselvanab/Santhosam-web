import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../../assets/home/image-50.jpg.bv_resized_mobile.jpg.bv-removebg-preview.png';
import logo2 from '../../assets/home/images-2.jpg.bv_resized_mobile.jpg.bv-removebg-preview.png';
import logo3 from '../../assets/home/WhatsApp-Image-2025-04-03-at-3.36.32-PM.jpeg.bv_resized_mobile.jpeg.bv-removebg-preview.png';
import logo4 from '../../assets/home/WhatsApp-Image-2025-04-03-at-3.36.47-PM.jpeg.bv_resized_mobile.jpeg.bv-removebg-preview.png';

const Partners = () => {
  const partners = [
    { name: 'Kauvery Hospital', logo: logo4 },
    { name: 'Dharan Hospital', logo: logo3 },
    { name: 'Bhavani Hospital', logo: logo1 },
    { name: 'Cauvery Nature Cure Centre', logo: logo2 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#EA1273] mb-12 tracking-tight"
        >
          Our Partners
        </motion.h2>

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-14 lg:gap-16 opacity-90">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${
                partner.name.includes('Cauvery Nature') 
                  ? 'w-48 md:w-60 lg:w-72 -ml-4 md:-ml-8 lg:-ml-12' 
                  : 'w-28 md:w-40 lg:w-52'
              } transition-all duration-300 flex items-center justify-center flex-shrink-0`}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={`${
                  partner.name.includes('Cauvery Nature') ? 'scale-[1.8] md:scale-[1.5]' : ''
                } w-full h-auto object-contain max-h-24 md:max-h-28`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
