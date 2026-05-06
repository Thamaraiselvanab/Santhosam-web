import React from 'react';
import { motion } from 'framer-motion';
import availabilityImg from '../../assets/home/24_7 available.jpeg';

const AvailabilityBanner = () => {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#001B3D] flex justify-end h-[400px] md:h-[500px]"
        >
          <img 
            src={availabilityImg} 
            alt="24/7 Available" 
            className="w-full h-full object-cover object-[75%_center] md:object-[80%_center]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilityBanner;
