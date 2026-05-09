import React from 'react';
import { motion } from 'framer-motion';
import middleImg from '../../assets/about/9787c68d-da5c-4f3e-8c34-31f538e5816d.png';

const AboutMiddleBanner = () => {
  const stats = [
    { number: "3.5k", label: "Happy Patients" },
    { number: "35", label: "Years Of Experience" },
    { number: "100%", label: "Quality Care" }
  ];

  return (
    <section className="bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[200px] md:h-[250px] lg:h-[300px]"
      >
        <img 
          src={middleImg} 
          alt="About Section Visual" 
          className="w-full h-full object-cover object-right"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-[#001A33]/70" />

        {/* Stats Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-3 gap-4 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none">
                  {stat.number}
                </span>
                <span className="text-[#EA1273] text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMiddleBanner;
