import React from 'react';
import { motion } from 'framer-motion';
import founderImg from '../../assets/about/WhatsApp-Image-2025-05-14-at-3.52.05-PM-1-e1747889072559.jpeg';

const AboutFounder = () => {
  const milestones = [
    "Emergency care and general surgery in Dublin and Northern Ireland.",
    "Pediatric surgery, general surgery, and elderly healthcare leadership in Scotland.",
    "Clinical Lead for Care Homes in North Liverpool, ensuring the highest quality of care for elderly residents.",
    "Senior General Practitioner at Langbank Medical Center and Storrsdale Medical Center, where he also mentors the next generation of healthcare professionals."
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-xl border-4 border-white aspect-[232/300] max-w-[400px] mx-auto bg-white">
              <img 
                src={founderImg} 
                alt="Dr. Murugesh Velayudham" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 ease-out"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full blur-3xl -z-0 opacity-40" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full blur-3xl -z-0 opacity-40" />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-block px-3 py-0.5 rounded-full bg-pink-50 text-[#EA1273] text-[10px] font-bold uppercase tracking-wider mb-1">
              Founder & Medical Lead
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-[#003366] leading-tight">
              About <span className="text-[#EA1273]">Dr. Murugesh Velayudham</span>
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed">
              Dr. Murugesh has dedicated over twenty years to the NHS in the UK, gaining invaluable expertise in elderly care, general practice, and patient well-being. The NHS is a globally recognized healthcare system known for its commitment to medical excellence and patient-centred treatment.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed border-l-3 border-blue-500 pl-3 py-1.5 bg-blue-50/50 rounded-r-lg">
              His role as a care home lead in the NHS has equipped him with first-hand expertise in elderly well-being, ensuring dignity, respect, and a holistic approach to aging care.
            </p>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#003366]">A Global Medical Journey</h3>
              <ul className="space-y-2">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex gap-2.5 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-snug">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Despite his success in the UK, his heart remained with his roots in India. He knew the struggles of ensuring proper healthcare for his parents while being abroad and wanted to create a solution that would help others. That is why he founded <span className="font-bold text-[#EA1273]">Parent Care India</span>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default AboutFounder;
