import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgHealth from '../../assets/services/WhatsApp-Image-2025-05-07-at-10.59.45-AM-re5jdlgn9fcuaqoh9syriljotbaydly3365ytixt3o (1).jpeg';
import imgProperty from '../../assets/services/Untitled-design-17.png';
import imgLegal from '../../assets/services/Untitled-design-20.png';
import imgBanking from '../../assets/services/Your-paragraph-text.png';
import imgTravel from '../../assets/services/travelService-1.jpeg';
import imgComm from '../../assets/services/Untitled-design-18.png';

const ServicesGrid = () => {
  const services = [
    {
      title: "Health Care",
      desc: "Providing complete medical support with home healthcare services, routine check-ups, and personalized medication management to ensure your loved ones stay healthy and cared for",
      image: imgHealth,
      link: "/health-care/"
    },
    {
      title: "Property Management & New Construction",
      desc: "Ensuring property maintenance and assisting with new construction projects to ensure your parents’ living spaces are well-managed and their needs are met.",
      image: imgProperty,
      link: "/value-added-property-management/"
    },
    {
      title: "Legal Services",
      desc: "Providing reliable legal support and essential documentation assistance for your parents, ensuring their legal interests are fully protected with expert care.",
      image: imgLegal,
      link: "/legal-services/"
    },
    {
      title: "Banking & Investment",
      desc: "Offering assistance with managing finances, banking needs, and investment planning to ensure a secure and stress-free future.",
      image: imgBanking,
      link: "/banking-and-investment/"
    },
    {
      title: "Travel Services",
      desc: "Organizing travel plans, including transportation and accommodation, to ensure your parents have safe, comfortable, and hassle-free journeys.",
      image: imgTravel,
      link: "/travel-services/"
    },
    {
      title: "Communication with Family",
      desc: "Ensuring regular updates and enabling easy, meaningful connections between elderly parents and their families, no matter the distance.",
      image: imgComm,
      link: "/family-communication/"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#EA1273] font-bold text-[10px] uppercase tracking-widest mb-1"
          >
            Our Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-[#003366]"
          >
            What Services We Provide
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col group max-w-sm mx-auto"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-xl mb-[-30px] z-10 w-[90%] mx-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content Container */}
              <div className="bg-[#001B3D] pt-10 pb-5 px-5 rounded-2xl text-center flex flex-col items-center flex-grow shadow-lg border border-white/5 w-[95%] mx-auto">
                <h3 className="text-white text-base md:text-lg font-bold mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-[11px] md:text-[12px] leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>
                <Link to={service.link}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#EA1273] hover:bg-[#D41068] text-white font-bold py-2 px-5 rounded-lg text-[11px] transition-colors shadow-md"
                  >
                    View More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
