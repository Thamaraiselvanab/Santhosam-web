import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import healthImg from '../assets/services/WhatsApp-Image-2025-05-07-at-10.59.45-AM-re5jdlgn9fcuaqoh9syriljotbaydly3365ytixt3o (1).jpeg';

const HealthCarePage = () => {
  const services = [
    { title: "Routine Health Checkups", desc: "Scheduled health screenings, diagnostics, and vitals monitoring to detect potential health concerns early." },
    { title: "Daily Routine Care", desc: "Assistance with personal hygiene, mobility, meal planning, and medication intake to ensure overall well-being." },
    { title: "Emergency Support", desc: "24/7 Emergency Support & Hospital Admissions – Immediate medical response, ambulance services, and hospital coordination to provide timely care during emergencies." },
    { title: "Hospital Assistance & Doctor Appointments", desc: "Support in scheduling, attending, and managing hospital visits, including coordination with their existing doctors or specialists." },
    { title: "Medication Reminders", desc: "Personalized meal plans based on health conditions and prescription tracking to ensure proper nutrition and medication adherence." },
    { title: "Home Nursing Care", desc: "Skilled nursing services for wound care, rehabilitation, post-surgical care, and chronic illness management." },
    { title: "Health Updates for You", desc: "Consistent health updates, reports on medical progress, and real-time alerts, keeping you informed about your parents’ well-being." },
    { title: "Wellness Activities", desc: "Encouraging light exercises, physiotherapy, and yoga to maintain mobility, independence, and physical well-being." },
    { title: "Mental & Emotional Health Support", desc: "Focused wellness programs, companionship, and cognitive engagement to promote emotional stability and happiness." },
    { title: "Coordination with Top Hospitals & Specialists", desc: "Continuous referrals, specialist consultations, and hospital coordination for advanced treatments whenever required." }
  ];

  const reasons = [
    { 
      title: "Expert-Led Care", 
      desc: "Founded by Dr. Murugesh Velayudham, a senior medical professional with over 20 years of experience in the UK’s National Health Service (NHS). As a Clinical Lead for Care Homes in North Liverpool, he brings extensive expertise in elder care, long-term healthcare management, and critical care support, ensuring international healthcare standards in every service we provide." 
    },
    { 
      title: "Strong Hospital Partnerships", 
      desc: "With established ties to renowned hospitals like Kauvery and Dharan, we guarantee immediate access to specialized medical care, hospital admissions, and diagnostics, ensuring timely and seamless medical support whenever needed." 
    },
    { 
      title: "24/7 Medical Support & Monitoring", 
      desc: "Round-the-clock medical care, emergency response, and continuous health tracking to address any health concerns without delay." 
    },
    { 
      title: "Proactive, Preventive & Compassionate Healthcare", 
      desc: "Focusing on early diagnosis, customized treatment plans, and proactive medical attention, our approach ensures that potential health issues are identified and managed before they become serious." 
    },
    { 
      title: "Transparent Health Reports & Family Communication", 
      desc: "Regular health updates, real-time reports, and spontaneous communication ensure you stay informed about your parents’ well-being, no matter where you are." 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <Link to="/">
              <button className="flex items-center gap-2 bg-[#001B3D] text-white px-4 py-2 rounded shadow-md hover:bg-[#002b61] transition-all text-sm font-medium">
                <span className="text-lg">←</span> Back to Home
              </button>
            </Link>
          </motion.div>

          {/* Section Header */}
          <div className="text-center mb-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#EA1273] font-medium text-sm mb-2"
            >
              Caring Hands, Loving Hearts
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#001B3D] tracking-tight"
            >
              Our Health Care Services
            </motion.h1>
          </div>
          
          {/* Image Section with Zoom Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden mb-6 group h-[300px] md:h-[450px] max-w-4xl mx-auto"
          >
            <img 
              src={healthImg} 
              alt="Health Care Services" 
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-4 text-gray-800">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              At Parent Care India, your parents’ health and well-being are our top priorities. We understand how much they mean to you, and our comprehensive healthcare services ensure they feel safe, cared for, and never alone. Our dedicated expert team offers complete access to trusted doctors, trained nurses, and leading hospitals, ensuring your loved ones receive the best possible care.
            </motion.p>

            {/* Our Services */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6 border-b-2 border-[#EA1273] pb-2 inline-block">
                Our Services
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <p className="leading-relaxed">
                      <span className="font-bold text-[#003366]">{service.title}</span> {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                Why Choose Parent Care India?
              </h2>
              <ul className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-2"
                  >
                    <span className="text-[#EA1273] font-bold shrink-0">*</span>
                    <p className="leading-relaxed">
                      <span className="font-bold text-[#003366]">{reason.title}</span> – {reason.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed pt-4"
            >
              With Parent Care India, your loved ones receive trusted, expert-led, and compassionate healthcare, giving you the reassurance that they are always in safe hands. Contact us today to ensure the best medical care for your parents.
            </motion.p>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-6 pt-12 border-t border-gray-100">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EA1273] text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-[#D41068] transition-colors uppercase tracking-wider text-sm"
                >
                  Contact Us
                </motion.button>
              </Link>
              
              <Link to="/services">
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-[#EA1273] font-bold bg-pink-50 py-3 px-8 rounded-lg transition-all hover:bg-pink-100"
                >
                  Next Service <span className="text-xl">→</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HealthCarePage;
