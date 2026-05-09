import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import img1 from '../../assets/home/gettyimages-1305359750-612x612-1.webp.bv_resized_mobile.webp.bv.webp';
import img2 from '../../assets/home/gettyimages-1434075277-612x612-1.webp.bv_resized_mobile.webp.bv.webp';

const About = () => {
  const elderCareItems = [
    'Professional Healthcare Services',
    'Medication Management',
    'Daily Living Support',
    'Family Communication Support',
    'Travel Assistance'
  ];

  const wealthItems = [
    'Legal, Banking, and Investment Assistance',
    'Property Management.',
    'Commercial Income Opportunities',
    'Value Addition Services'
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 md:pl-6 lg:pl-12 lg:pr-4 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#EA1273] font-bold text-xs mb-2 block tracking-widest uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] leading-tight mb-6 tracking-tight">
                Comprehensive Elder Care Services for Your Family
              </h2>

              <div className="border-l-2 border-[#3BA9E0] pl-4 mb-8">
                <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                  At Santhosam, we provide complete support for your parents' well-being and financial security 
                  for your family in India. Our services ensure that while your parents are cared for with love and 
                  respect, your investments and assets continue to grow.
                </p>
              </div>

              {/* Checklists */}
              <div className="space-y-6 mb-10">
                <div>
                  <h3 className="text-lg font-bold text-[#003366] mb-3">How Our Elder Care Services Support Your Parents</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {elderCareItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                        <FaCheck className="text-[#3BA9E0] text-[10px] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#003366] mb-3">How We Help Secure Your Wealth</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {wealthItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                        <FaCheck className="text-[#3BA9E0] text-[10px] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <button className="px-8 py-3 bg-[#EA1273] hover:bg-[#D41068] text-white font-bold rounded-md shadow-md transition-all transform hover:scale-105 text-[12px] uppercase tracking-widest">
                See Features
              </button>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 space-y-6 flex flex-col justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden group max-w-md mx-auto">
              <img 
                src={img1} 
                alt="Elderly couple" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group max-w-md mx-auto">
              <img 
                src={img2} 
                alt="Daughter helping father" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
