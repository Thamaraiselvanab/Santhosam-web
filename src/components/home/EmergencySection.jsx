import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCheck } from 'react-icons/fa';
import emergencyImg from '../../assets/home/emergency call.webp';

const EmergencySection = () => {
  const points = [
    "Utmost professionalism and empathy through our elder care services to ensure your family's needs are met.",
    "Assistance with daily tasks as part of our elder care services, making their routine comfortable and stress-free.",
    "Round-the-clock medical support through trusted elder care services to address every need with reliability and compassion.",
    "Interactions built on respect and trust, where our elder care services treat your family as our own.",
    "A comforting sense of security and routine provided by our elder care services, creating a safe and nurturing environment.",
    "Peace of mind for you, knowing our elder care services keep your loved ones in trusted hands, no matter the distance."
  ];

  return (
    <section className="py-12 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div className="space-y-8">
            <div className="border-l-[3px] border-[#3BA9E0] pl-6">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 italic leading-tight">
                Supportive, compassionate, and high-quality medical Care.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="bg-[#003366] text-white py-4 px-6 rounded-lg shadow-md flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <FaPhoneAlt className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold">Emergency Call</span>
                  <span className="text-sm font-medium opacity-90">+91 9344138530</span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-base font-bold text-gray-800">Dr. Murugesh Velayudham</h3>
                <p className="text-[#EA1273] text-[13px] font-bold uppercase tracking-wider">Founder</p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-sm mx-auto lg:ml-16"
            >
              <motion.img 
                src={emergencyImg} 
                alt="Doctor Consultation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:pt-2">
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
              We are devoted to providing exceptional elder care services for your loved ones with heartfelt compassion. 
              With us, you can rest easy knowing they are surrounded by care, warmth, and support every day.
            </p>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheck className="w-4 h-4 text-gray-800 mt-1 shrink-0" />
                  <p className="text-gray-700 text-[13px] leading-relaxed font-medium">{point}</p>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
