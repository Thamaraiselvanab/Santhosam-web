import React from 'react';
import { motion } from 'framer-motion';
import imgFounder from '../../assets/about/Team/WhatsApp_Image_2025-10-13_at_11.14.41_AM-removebg-preview.webp';
import imgKumar from '../../assets/about/Team/WhatsApp_Image_2025-09-28_at_3.27.19_PM-removebg-preview-1.webp';
import imgYesudian from '../../assets/about/Team/P-D-Yesudian.webp';
import imgSiva from '../../assets/about/Team/WhatsApp-Image-2025-11-24-at-11.16.47-PM.jpg';
import imgArun from '../../assets/about/Team/WhatsApp_Image_2025-10-13_at_11.14.41_AM__1_-removebg-preview-e1760339150571.webp';

const AboutTeam = () => {
  const medicalExperts = [
    {
      name: "Dr. Murugesh Velayudham",
      role: "Founder",
      image: imgFounder,
      desc: "Dr. Murugesh, with over 20 years of NHS experience across Ireland, Scotland, and England, is an expert in elderly care and senior medical leadership. Motivated by his own long-distance caregiving challenges, he founded Parent Care India to provide compassionate and dependable support for elderly families."
    },
    {
      name: "Dr. Kumar",
      role: "Consultant Cardiologist",
      image: imgKumar,
      desc: "Dr. Kumar is an interventional cardiologist at a University hospital in the UK with over 20 years of experience in the field of cardiology. He also holds a fellowship in cardiology from a premier institute of cardiology in India."
    },
    {
      name: "Prof. Paul Devakar Yesudian",
      role: "Consultant Dermatologist",
      image: imgYesudian,
      desc: (
        <>
          Consultant Dermatologist , North Wales, United Kingdom,<br />
          Honorary Professor, University of Madras,<br /> Visiting Professor at the Sri Ramachandra<br /> University, Chennai,<br />
          Authored 79 publications in peer-reviewed<br /> journals and Published books with his father<br /> Prof.Yesudian
        </>
      )
    }
  ];

  const professionalTeam = [
    {
      name: "Sivaranjani",
      role: "Administrator",
      image: imgSiva,
      desc: "An administrator of care is the heartbeat of support, the quiet guardian of every home, coordinating health, services, and support. So, that elderly people can live safely, comfortably with dignity and peace of mind.",
      quote: '"Built on trust. Driven by expertise. Focused on you."'
    },
    {
      name: "Arun G",
      role: "Advocate",
      image: imgArun,
      desc: "An accomplished legal professional working alongside 10+ bank advocates and a leading civil advocate in the city. Arun specializes in banking and civil law, offering clients reliable guidance and effective representation. Known for his dedication and professionalism, he continues to build trust and deliver results through his strong legal network."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-[#F8FAFC] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Medical Experts Section */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-0.5 rounded-full bg-pink-50 text-[#EA1273] text-[10px] font-bold uppercase tracking-widest mb-2"
          >
            Medical Experts
          </motion.div>
          <h2 className="text-xl md:text-2xl font-black text-[#003366]">
            Santhosam <span className="text-[#EA1273]">Medical Experts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto mb-16">
          {medicalExperts.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group flex flex-col h-full items-center"
            >
              <div className="relative w-48 h-64 lg:h-72 xl:h-80 overflow-hidden mb-6 rounded-full shadow-xl border-4 border-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-base font-bold text-[#003366] mb-0.5">{member.name}</h3>
                <div className="text-[#EA1273] text-[10px] font-bold uppercase tracking-wide mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-[11px] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Team Section */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-[#003366] text-[10px] font-bold uppercase tracking-widest mb-2"
          >
            Professional Team
          </motion.div>
          <h2 className="text-xl md:text-2xl font-black text-[#003366]">
            Santhosam <span className="text-[#EA1273]">Professional Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {professionalTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group flex flex-col h-full items-center"
            >
              <div className="relative w-48 h-64 lg:h-72 xl:h-80 overflow-hidden mb-6 rounded-full shadow-xl border-4 border-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-base font-bold text-[#003366] mb-0.5">{member.name}</h3>
                <div className="text-[#EA1273] text-[10px] font-bold uppercase tracking-wide mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-[11px] leading-relaxed mb-4">
                  {member.desc}
                </p>
                {member.quote && (
                  <p className="text-gray-400 text-[10px] italic mt-auto pt-3 border-t border-gray-50 w-full">
                    {member.quote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
