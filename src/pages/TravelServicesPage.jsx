import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import travelImg from '../assets/services/travel-image-re5jdkiruqj4d4k40doyu0xv6l7yi5mmv8xb6uhz8s.gif';

const TravelServicesPage = () => {
  const travelItems = [
    { 
      title: "Local Travel Assistance", 
      desc: "Whether it’s a trip to the temple, a doctor’s appointment, a family gathering, or a shopping errand, we arrange reliable cabs and drivers to take your parents wherever they need to go, safely and on time." 
    },
    { 
      title: "Outstation Travel Support", 
      desc: "Planning a trip out of town? We handle transport, ticket bookings, and accommodations, ensuring a smooth journey for your family." 
    },
    { 
      title: "Medical Travel Coordination", 
      desc: "For hospital visits, regular check-ups, or long-term medical treatments, we arrange secure and timely transport with all necessary assistance." 
    },
    { 
      title: "Event Travel Management", 
      desc: "From attending family weddings to special gatherings, we make sure your parents reach their destination comfortably and on time." 
    },
    { 
      title: "Accompanied Travel", 
      desc: "If extra support is needed, we provide trained companions to assist during the journey, ensuring a comfortable and worry-free experience." 
    },
    { 
      title: "Airport and Railway Transfers", 
      desc: "We arrange hassle-free pickups and drop-offs, handling luggage, check-ins, and boarding assistance for both domestic and international travel." 
    },
    { 
      title: "NRI Travel Services", 
      desc: "If you’re an NRI visiting India, we plan and organize your entire trip, including domestic travel, accommodation, and event coordination." 
    },
    { 
      title: "International Tour Packages", 
      desc: "Want to travel abroad? We arrange foreign tour packages with trusted partners, ensuring the best experience at affordable prices." 
    },
    { 
      title: "Ticket Booking, Visa, and Travel Insurance Assistance", 
      desc: "We take care of flight and train ticket bookings, visas, and travel insurance, so you don’t have to deal with the paperwork and logistics." 
    }
  ];

  const trustPoints = [
    { title: "Reliable and Safe Travel", desc: "We work with trusted drivers and travel partners to ensure comfort and security." },
    { title: "Tailored Travel Support", desc: "Whether it’s a quick trip or a long-distance journey, we personalize every travel plan to fit your family’s needs." },
    { title: "Complete Coordination", desc: "From booking tickets to managing every detail, we take care of everything so you don’t have to." },
    { title: "For Parents and NRIs", desc: "Whether it’s daily transport for your parents or full-trip planning for NRIs, we ensure a seamless travel experience." }
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
              Our Travel Services
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
              src={travelImg} 
              alt="Travel Services" 
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
              Travel should be effortless and enjoyable, whether it’s a quick ride to the market, a family wedding, or an international trip. Our travel services ensure that every journey is smooth and stress-free. From local trips to long-distance travel, we handle everything, including airport and railway transfers. If extra support is needed, we can also provide a companion for assistance. With our expert coordination, you and your loved ones can travel comfortably, confidently, and without worry, knowing every detail is taken care of.
            </motion.p>

            {/* How We Make Travel Easy */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-8 border-b-2 border-[#EA1273] pb-2 inline-block">
                How We Make Travel Easy for Your Family:
              </h2>
              <div className="space-y-8">
                {travelItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-bold text-[#003366] text-lg">
                      <span className="text-[#EA1273] mr-2">{index + 1}.</span>
                      {item.title}:
                    </p>
                    <p className="text-gray-600 pl-4 text-sm md:text-base leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Families Trust Us */}
            <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-8">
                Why Families Trust Parent Care India for Travel
              </h2>
              <ul className="space-y-6 mb-8">
                {trustPoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-[#EA1273] font-bold shrink-0 mt-1">•</span>
                    <p className="leading-relaxed text-sm md:text-base">
                      <span className="font-bold text-[#003366]">{point.title}</span> : {point.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-700 font-bold text-lg text-center"
              >
                Wherever your family needs to go, we make sure the journey is safe, smooth, and stress-free. Contact us today to plan your next trip!
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

export default TravelServicesPage;
