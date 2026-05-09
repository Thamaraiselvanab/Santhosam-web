import React from 'react';
import { motion } from 'framer-motion';
import availabilityImg from '../../assets/home/24_7 available.jpeg';

const AvailabilityBanner = () => {
  return (
    <section className="bg-white overflow-hidden py-12 px-4 sm:px-8 lg:px-16">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row h-auto md:h-[450px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-[#001B3D]">
          {/* Content Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-[#001B3D] px-6 md:px-12 py-8 flex flex-col items-center justify-center text-white z-10 text-center"
          >
            <span className="text-[#EA1273] font-semibold mb-1 block text-sm tracking-wider">
              24/7 Availability
            </span>
            <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
              We Are Here for Your <br /> Home Care Needs
            </h2>
            <p className="text-gray-200 text-[13px] md:text-sm mb-4 leading-relaxed max-w-xl">
              At ParentCare India, we understand the importance of having support for your loved ones. 
              Our dedicated team is ready to assist you with consultations anytime, day or night. 
              We are committed to ensuring that all your concerns are addressed with the utmost care and respect. 
              Our services are designed to provide comfort and peace of mind, helping families feel secure in the care we offer. 
              Let us be your trusted partner in home care.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#EA1273] hover:bg-[#D41068] text-white px-6 py-2 rounded-md font-bold transition-all shadow-lg text-sm flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Image Container (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex items-center justify-center overflow-hidden bg-[#001B3D]"
          >
            <img 
              src={availabilityImg} 
              alt="Professional Home Care Nurse" 
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityBanner;
