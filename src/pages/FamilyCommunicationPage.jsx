import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import communicationImg from '../assets/services/gettyimages-1383930413-612x612-1-re5jdlgm1kkeoqiquw3leipbrz3bpuqd7dkso4gl2k.jpg';

const FamilyCommunicationPage = () => {
  const services = [
    { title: "Regular Video and Audio Calls", desc: "We assist your parents in making video or phone calls, helping them stay connected with you effortlessly." },
    { title: "Message Assistance", desc: "We help them send messages, photos, and updates through digital platforms, keeping the bond alive and communication flowing." },
    { title: "Special Occasion Connections", desc: "Birthdays, anniversaries, and festivals should never feel distant. We ensure your parents can celebrate with you in real-time through live video interactions, making every moment memorable." },
    { title: "Mail and Parcel Support", desc: "Love isn’t just spoken, it’s also shared. Whether it’s a heartfelt letter, a special gift to keep traditions alive, or an important document, we help your parents send and receive mail and parcels, keeping emotional connections alive." },
    { title: "Updates About Parents", desc: "We keep you informed with consistent updates about their health, activities, and any special needs, so you are always in the loop." }
  ];

  const whyChooseUs = [
    { title: "Stay Connected", desc: "We bring families closer, making sure distance never feels like a barrier." },
    { title: "Personalized Support", desc: "We tailor our services to match your family’s unique communication preferences." },
    { title: "Peace of Mind", desc: "Your parents will feel loved, valued, and cared for, bringing comfort to both them and you." }
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
              Our Family Communication Services
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
              src={communicationImg} 
              alt="Family Communication" 
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-4 text-gray-800">
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed"
              >
                At Parent Care India, we understand how difficult it can be to be far from your parents when all you want is to stay connected. A simple call, a heartfelt conversation, or even a video chat can make a world of difference. We ensure that your parents can effortlessly connect with you, guiding them through technology and creating moments of closeness that make the miles feel smaller.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed"
              >
                For them, it is more than just a call; it is a lifeline to the family they cherish. Every conversation is a reminder of your love and presence. For you, it is the comfort of knowing they feel supported and valued. We take every step to make these connections meaningful, ensuring that your parents always feel loved, heard, and part of the family they treasure.
              </motion.p>
            </div>

            {/* Our Services */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-8 border-b-2 border-[#EA1273] pb-2 inline-block">
                Our Services
              </h2>
              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-bold text-[#003366] text-lg">
                      {service.title}
                    </p>
                    <p className="text-gray-600 pl-4 text-sm md:text-base leading-relaxed italic">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-8">
                Why Choose Parent Care India?
              </h2>
              <ul className="space-y-6 mb-8">
                {whyChooseUs.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-bold text-[#003366] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA1273]" />
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-4">
                      {item.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-700 font-bold text-center text-lg italic border-l-4 border-[#EA1273] pl-6 py-4"
              >
                Love knows no distance. Let us help you stay close to your family. Contact us today!
              </motion.p>
            </div>

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

export default FamilyCommunicationPage;
