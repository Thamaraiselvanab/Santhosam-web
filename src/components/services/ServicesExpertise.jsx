import React from 'react';
import { motion } from 'framer-motion';
import expertiseImg from '../../assets/services/Untitled-design-6.jpg';

const ServicesExpertise = () => {
  const stats = [
    { label: "Personal Care", value: 70 },
    { label: "Home Care", value: 92 },
    { label: "Health Consultation", value: 55 }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-full bg-pink-50 text-[#EA1273] text-[8px] font-bold uppercase tracking-widest mb-2"
              >
                Expertise
              </motion.span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#003366] leading-tight mb-3">
                Peace of Mind for <span className="text-[#EA1273]">Families</span>
              </h2>
              <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
                At ParentCare India, we understand the love and concern you feel for your parents. That is why we are here to provide care that feels like an extension of your own. Whether it is daily assistance or simply a kind presence, we are here to ensure your parents feel valued and secure. You can feel at ease knowing that your family is in capable hands, cared for with the same thoughtfulness and attention you would provide yourself.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-end">
                    <span className="text-[#003366] font-bold text-[13px] md:text-sm">{stat.label}</span>
                    <span className="text-[#EA1273] font-black text-[13px] md:text-sm">{stat.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2), ease: "easeOut" }}
                      className="h-full bg-[#001B3D] rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 h-full w-2 bg-[#EA1273]/30" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white group max-w-lg mx-auto">
              <img 
                src={expertiseImg} 
                alt="Expertise" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-50 rounded-full -z-0 opacity-50 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesExpertise;
