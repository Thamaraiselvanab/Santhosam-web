import React from 'react';
import { motion } from 'framer-motion';
import availabilityImg from '../../assets/home/24_7 available.jpeg';

const Availability = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full">
        <div className="bg-[#001B3D] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20 lg:pl-[max(2rem,calc((100vw-1280px)/2))] space-y-8 text-left z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#EA1273] font-semibold text-lg"
            >
              24/7 Availability
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              We Are Here for Your <br className="hidden md:block" /> Home Care Needs
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed"
            >
              At ParentCare India, we understand the importance of having support for your loved ones. 
              Our dedicated team is ready to assist you with consultations anytime, day or night. 
              We are committed to ensuring that all your concerns are addressed with the utmost care and respect. 
              Our services are designed to provide comfort and peace of mind, helping families feel secure in the care we offer. 
              Let us be your trusted partner in home care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <button className="bg-[#EA1273] text-white px-8 py-3 rounded-md font-bold hover:bg-[#D41068] transition-all text-lg">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative min-h-[500px] bg-[#001B3D]"
          >
            <img 
              src={availabilityImg} 
              alt="Doctor" 
              className="absolute inset-0 w-full h-full object-cover object-right lg:object-[80%_center]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Availability;
