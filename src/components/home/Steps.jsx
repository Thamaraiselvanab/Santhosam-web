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
    <section className="py-6 md:py-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#EA1273] text-[13px] font-semibold mb-1"
        >
          In 4 simple steps
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#003366] mb-4 tracking-tight"
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
          className="max-w-2xl mx-auto text-gray-500 text-sm mb-8 leading-relaxed font-medium"
        >
          Begin by assessing your parents' health and daily needs, including medication, mobility, and safety. 
          As part of planning for elder care services, create a simple home plan with routine schedules.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center ${step.id === 1 ? 'group' : ''}`}
            >
              {/* Icon Container with Badge */}
              <div className="relative mb-4 flex justify-center w-full">
                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-auto">
                  {step.id === 1 ? (
                    <a 
                      href="https://parentcaresanthosam.com/enquiry/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full bg-[#003366] rounded-full flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110 cursor-pointer"
                    >
                      <div className="scale-75 md:scale-90 lg:scale-100">
                        {step.icon}
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-full bg-[#003366] rounded-full flex items-center justify-center shadow-md">
                      <div className="scale-75 md:scale-90 lg:scale-100">
                        {step.icon}
                      </div>
                    </div>
                  )}
                  <div className="absolute -top-1 -right-3 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-100">
                    <span className="text-[#EA1273] text-[9px] font-bold whitespace-nowrap">{step.stepNum}</span>
                  </div>

                  {/* Arrow to the next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-[calc(100%+0.25rem)] lg:left-[calc(100%+0.5rem)] transform -translate-y-1/2 w-6 lg:w-10">
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: 4 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 0.4, 
                          ease: "easeInOut" 
                        }}
                      >
                        <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-gray-600">
                          <path d="M0 12H98M98 12L88 2M98 12L88 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>

              {step.id === 1 ? (
                <a 
                  href="https://parentcaresanthosam.com/enquiry/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center"
                >
                  <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#EA1273] transition-colors duration-300 mb-1">{step.title}</h3>
                  <p className="text-gray-500 group-hover:text-[#EA1273] transition-colors duration-300 text-xs px-2 text-center">{step.description}</p>
                </a>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-[#003366] mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs px-2 text-center">{step.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
