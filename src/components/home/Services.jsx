import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'HEALTH',
      description: "Health is not just about avoiding illness; it's about achieving overall well-being that empowers you to live your best life. Maintaining health requires a balanced diet, regular physical activity, and a commitment to self-care. Prioritizing rest, mental health and resilience.",
      buttonText: 'View More'
    },
    {
      id: 2,
      title: 'WEALTH',
      description: "Wealth is not just about accumulating money; it's about achieving financial stability and freedom that supports your dreams and goals. Building wealth requires disciplined saving habits, strategic investments, and a mindset focused on long-term growth.",
      buttonText: 'View More'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#003366] mb-16 tracking-tight"
        >
          Our <span className="text-[#EA1273] italic">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 flex flex-col items-center border border-gray-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#EA1273] mb-6 tracking-widest uppercase">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-10 text-center text-sm font-medium">
                {service.description}
              </p>

              <button className="px-10 py-3 bg-[#EA1273] hover:bg-[#D41068] text-white font-bold rounded-lg shadow-lg shadow-pink-100 transition-all transform hover:scale-105 text-[12px] uppercase tracking-widest">
                {service.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
