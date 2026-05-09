import React from 'react';
import { motion } from 'framer-motion';
import drImg from '../../assets/about/WhatsApp-Image-2025-05-14-at-3.52.05-PM-1-e1747889072559.jpeg';

const FounderProfile = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#EA1273] font-black text-xs uppercase tracking-widest"
              >
                Dr. Murugesh Velayudham
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-[#003366] leading-[1.1] tracking-tight"
              >
                About Dr. Murugesh <br /> Velayudham
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-gray-600 text-sm md:text-[15px] leading-relaxed"
            >
              <p>
                Dr. Murugesh Velayudham’s story is one of compassion, dedication, and a deep-rooted commitment to making a difference in people’s lives. Born and raised in Salem, Tamil Nadu, his journey has taken him across continents, equipping him with expertise and a heartfelt vision: to ensure parents and elderly loved ones feel cared for, respected, and cherished in their own homes.
              </p>
              
              <p>
                Dr. Murugesh’s passion for care began at Holy Cross Matriculation School in Salem, where his values of kindness and service were nurtured. His medical education at Madras Medical College (1987–1993) laid the foundation for a remarkable career. Early in his journey, he worked at Sundaram Medical Foundation in Chennai, guided by two extraordinary mentors:
              </p>

              <ul className="space-y-6 pl-4 border-l-2 border-[#EA1273] py-1 text-sm md:text-[15px]">
                <li>
                  <span className="font-bold text-[#003366]">Ram Rajagopal</span>, a Harvard-trained ICU specialist, India’s pioneer in intensive care.
                </li>
                <li>
                  <span className="font-bold text-[#003366]">Arjun Rajagopal</span>, an internationally trained vascular surgeon from the US and Canada.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Image and Continuing Content */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] aspect-square md:hidden xl:flex"
            >
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-[#FFD700]/10 rounded-full transform translate-x-2 translate-y-2" />
              
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={drImg} 
                  alt="Dr. Murugesh Velayudham" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Continuing Content under image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-gray-600 text-[13px] md:text-sm leading-relaxed"
            >
              <p>
                Their inspiring mentorship planted the seed for his dream of achieving global expertise and bringing it back home to serve his people.
              </p>
              
              <p>
                In 1996, Dr. Murugesh moved to Dublin, Ireland, where he began a life-changing journey. He worked in Accident and Emergency, honing his skills in managing critical situations, followed by three years in pediatric surgery. His path then led him to Northern Ireland, where he served in both emergency and general surgery roles.
              </p>

              <p>
                A move to Scotland saw him working as a Registrar in General Surgery in Glasgow, gaining further expertise. In 2005, life took him to Liverpool, England, where he completed his General Practice training and began a 20-year journey as a trusted family doctor.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderProfile;
