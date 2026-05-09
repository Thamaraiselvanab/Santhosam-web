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
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="border-l-[3px] border-[#3BA9E0] pl-6 mb-8">
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 italic leading-tight">
            Supportive, compassionate, and high-quality medical Care.
          </h2>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
          <div className="bg-[#003366] text-white py-3 px-6 rounded-lg shadow-md flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-full">
              <FaPhoneAlt className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Emergency Call</span>
              <span className="text-sm font-medium opacity-90">+91 9344138530</span>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-gray-800">Dr. Murugesh Velayudham</h3>
            <p className="text-[#EA1273] text-[13px] font-bold uppercase tracking-wider">Founder</p>
          </div>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 max-w-2xl mx-auto"
        >
          <img 
            src={emergencyImg} 
            alt="Doctor Consultation" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Description & Points */}
        <div className="space-y-8">
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
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
    </section>
  );
};

export default EmergencySection;
