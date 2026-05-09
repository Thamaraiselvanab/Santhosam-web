import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaChartLine, FaBriefcase, FaFileContract } from 'react-icons/fa';
import servicesImg from '../../assets/about/WhatsApp-Image-2025-05-07-at-10.59.46-AM-3-1536x864.jpeg';

const AboutServices = () => {
  const points = [
    {
      title: "Banking & Transactions",
      desc: "We help with opening, managing, and operating bank accounts, including deposits, withdrawals, and other transactions.",
      icon: <FaUniversity />
    },
    {
      title: "Profitable Investments",
      desc: "We provide safe and profitable investment options tailored for parents and NRI clients to ensure steady financial growth.",
      icon: <FaChartLine />
    },
    {
      title: "Portfolio Optimization",
      desc: "We help Analysing existing investments and making adjustments to improve returns and manage risks better.",
      icon: <FaBriefcase />
    },
    {
      title: "Transparent Reporting",
      desc: "We ensure clarity through transparent reports and regular updates, keeping you informed about your financial matters.",
      icon: <FaFileContract />
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-[#003366] text-[10px] font-bold uppercase tracking-wider mb-1">
              Who are we?
            </div>
            
            <h2 className="text-xl md:text-2xl font-black text-[#003366] leading-tight">
              A complete solution for <span className="text-[#EA1273]">parental care</span> and <span className="text-[#EA1273]">NRI asset management</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-1.5 mt-3">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 p-1.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-pink-50 text-[#EA1273] flex items-center justify-center text-lg group-hover:bg-[#EA1273] group-hover:text-white transition-all">
                    {point.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-base font-bold text-[#003366] leading-tight mb-0.5">{point.title}</h4>
                    <p className="text-gray-600 text-xs leading-snug">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[30px] overflow-hidden shadow-xl border-4 border-white group aspect-video lg:aspect-auto">
              <img 
                src={servicesImg} 
                alt="NRI Asset Management" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-[#003366]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            {/* Background Accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-0 opacity-30" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-pink-100 rounded-full blur-3xl -z-0 opacity-30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutServices;
