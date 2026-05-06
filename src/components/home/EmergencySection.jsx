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
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 italic leading-tight">
                Supportive, compassionate, and high-quality medical Care.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="bg-[#0A4A7C] text-white p-6 rounded-xl shadow-lg flex items-center gap-4 min-w-[280px]">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Emergency Call</p>
                  <p className="text-xl font-bold">+91 9344138530</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Murugesh Velayudham</h3>
                <p className="text-[#EA1273] font-medium">Founder</p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden mt-12 max-w-lg"
            >
              <img 
                src={emergencyImg} 
                alt="Doctor Consultation" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:pt-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We are devoted to providing exceptional elder care services for your loved ones with heartfelt compassion. 
              With us, you can rest easy knowing they are surrounded by care, warmth, and support every day.
            </p>

            <ul className="space-y-6">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-white p-1 rounded-md shadow-sm">
                    <FaCheck className="w-5 h-5 text-gray-900" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
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
