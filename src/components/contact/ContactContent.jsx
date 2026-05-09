import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactContent = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: ["Santhosam Parent Care India ,", "200,201,krishna Colony, Shankar Nagar,salem-636007."],
    },
    {
      icon: <FaPhone />,
      title: "Contact Us",
      details: ["parentcaresanthosam@gmail.com", "+91 9344138530"],
    },
    {
      icon: <FaClock />,
      title: "Working Hour",
      details: ["Monday – Sunday – 24/7", "services working hours"],
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-[20px] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[240px]"
            >
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-xl text-blue-800 mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-[#004A8F] font-bold text-xl mb-4 uppercase tracking-tight">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-700 text-sm font-medium leading-relaxed">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FBFF] rounded-[32px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-2 border-[#E1EFFF] relative overflow-hidden"
          >
            {/* Header Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003366] to-[#EA1273]" />

            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-[#003366] mb-3">Send us a <span className="text-[#EA1273]">Message</span></h2>
              <p className="text-gray-500 font-medium">We'll get back to you as soon as possible.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#003366] ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#003366] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#003366] ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#003366] ml-1">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium resize-none"
                  ></textarea>
                </div>
              </div>
              <button className="w-full bg-[#EA1273] hover:bg-[#D41068] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-pink-50 text-lg uppercase tracking-widest flex items-center justify-center gap-4 group">
                Send Message
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </button>
            </form>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default ContactContent;
