import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane, FaUsers } from 'react-icons/fa';

const ReferForm = () => {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 lg:-mt-4"
          >

            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight">
                Spread the <span className="text-[#EA1273]">Santhosam</span> <br />
                Care to Your Loved Ones
              </h2>
              <div className="w-24 h-1.5 bg-[#EA1273] rounded-full" />
            </div>

            <p className="text-gray-600 text-xl leading-relaxed">
              Do you know someone who could benefit from our compassionate parent care services? 
              Refer your friends or family members to us, and help them ensure their parents 
              receive the highest quality care and support they deserve.
            </p>

            <div className="space-y-6">
              {[
                { icon: <FaUsers />, title: "Supportive Community", desc: "Help build a network of care for seniors in Salem and surrounding areas." },
                { icon: <FaPaperPlane />, title: "Easy Process", desc: "Just fill the form and our team will take care of the rest professionally." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-pink-50 transition-colors duration-300">
                  <div className="text-[#EA1273] text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[#003366] font-extrabold text-xl">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FBFF] rounded-[24px] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-[#E1EFFF] relative overflow-hidden"
          >
            {/* Header Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003366] to-[#EA1273]" />

            <form className="relative z-10 space-y-6">
              {/* Your Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b-2 border-pink-100 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EA1273] text-white flex items-center justify-center font-black text-sm">01</div>
                  <h3 className="text-[#003366] font-black text-lg">Your Details</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Friend's Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b-2 border-blue-100 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#003366] text-white flex items-center justify-center font-black text-sm">02</div>
                  <h3 className="text-[#003366] font-black text-lg">Friend's Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Friend's Name</label>
                    <input 
                      type="text" 
                      placeholder="Their full name" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Friend's Email</label>
                    <input 
                      type="email" 
                      placeholder="friend@email.com" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-[#003366] ml-1">Friend's Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Their phone number" 
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E1EFFF] focus:border-[#EA1273] transition-all outline-none text-[#003366] placeholder:text-gray-500 font-medium text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#EA1273] hover:bg-[#D41068] text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-pink-50 text-base uppercase tracking-widest flex items-center justify-center gap-3 group">
                Submit Referral
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>





        </div>
      </div>
    </section>
  );
};

export default ReferForm;
