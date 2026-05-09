import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../common/TypewriterText';
import { FaFileAlt, FaHandHoldingHeart, FaCheckCircle, FaClock } from 'react-icons/fa';
import { Ri24HoursLine } from 'react-icons/ri';
import { MdMonitor } from 'react-icons/md';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: 'Enquiry Form',
      description: 'Please Fill the Enquiry Form.',
      icon: <FaFileAlt className="text-3xl text-[#EA1273]" />,
      stepNum: 'Step 1'
    },
    {
      id: 2,
      title: 'Response',
      description: 'Santhosam advisor gets in touch within 24 hrs.',
      icon: <Ri24HoursLine className="text-4xl text-[#EA1273]" />,
      stepNum: 'Step 2'
    },
    {
      id: 3,
      title: 'Onboarding Package',
      description: "You'll receive onboarding guidelines and payment information.",
      icon: <FaHandHoldingHeart className="text-3xl text-[#EA1273]" />,
      stepNum: 'Step 3'
    },
    {
      id: 4,
      title: 'Activated',
      description: 'Service activation is now complete.',
      icon: <MdMonitor className="text-4xl text-[#EA1273]" />,
      stepNum: 'Step 4'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#EA1273] font-semibold mb-2"
        >
          In 4 simple steps
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#003366] mb-8 tracking-tight"
        >
          Start Care for{' '}
          <span className="relative inline-block text-[#EA1273] italic">
            <TypewriterText text="Your Parents" />
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-500 text-sm mb-16 leading-relaxed font-medium"
        >
          Begin by assessing your parents' health and daily needs, including medication, mobility, and safety. 
          As part of planning for elder care services, create a simple home plan with routine schedules, 
          proper medication organization, and updated emergency contacts.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Icon Container with Badge */}
              <div className="relative mb-6 flex justify-center w-full">
                <div className="relative w-32 h-32">
                  <div className="w-full h-full bg-[#003366] rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-4 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100">
                    <span className="text-[#EA1273] text-xs font-bold whitespace-nowrap">{step.stepNum}</span>
                  </div>

                  {/* Arrow to the next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1.5rem)] xl:left-[calc(100%+2rem)] transform -translate-y-1/2 w-16 xl:w-24">
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: 8 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 0.8, 
                          ease: "easeInOut" 
                        }}
                      >
                        <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-gray-400">
                          <path d="M0 12H98M98 12L88 2M98 12L88 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#003366] mb-2">{step.title}</h3>
              <p className="text-gray-500 text-[13px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
