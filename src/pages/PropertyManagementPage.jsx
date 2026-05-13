import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import propertyImg from '../assets/services/Untitled-design-17.png';

const PropertyManagementPage = () => {
  const services = [
    { 
      title: "Property Maintenance", 
      desc: "A well-maintained property holds its value. We handle routine cleaning, civil work, plumbing, electrical repairs, and general upkeep, ensuring your property stays in great shape." 
    },
    { 
      title: "Tenant Management", 
      desc: "We help you find reliable tenants, handle agreements, and also make sure that the rent is collected on time. So, you never have to worry about late payments or rental disputes." 
    },
    { 
      title: "Security Checks", 
      desc: "We check on your property regularly, confirming it’s safe and free from unauthorized use, giving you complete peace of mind." 
    },
    { 
      title: "Property Valuation Updates", 
      desc: "We keep you updated on your property’s market value, helping you make the best decisions when it comes to selling, renting, or investing." 
    },
    { 
      title: "Legal Support", 
      desc: "From lease agreements and tax filings to property disputes, we handle all legal aspects smoothly and efficiently." 
    },
    { 
      title: "New Construction Oversight", 
      desc: "Planning a new construction or a renovation? We’ll oversee the entire process, ensuring high-quality work, timely completion, and a stress-free experience." 
    },
    { 
      title: "Utility Management", 
      desc: "We take care of electricity, water, and other essential services so you don’t have to deal with billing hassles." 
    },
    { 
      title: "Helping You Get More from Your Property", 
      desc: "We help you explore opportunities for profitable real estate partnerships through joint ventures and Corporate Leasing. Let us connect with long-term, high-value corporate tenants to maximize your returns." 
    }
  ];

  const trustPoints = [
    { title: "Complete Property Management", desc: "From maintenance to leasing and legal support, we handle it all." },
    { title: "Less Stress, More Security", desc: "You can relax knowing your property is in safe hands." },
    { title: "Regular Updates", desc: "We keep you informed at every step, so you’re never left wondering." },
    { title: "For Families & NRIs Alike", desc: "Whether you live in India or abroad, we make property management simple, secure, and hassle-free." }
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
              Value-Added Property Management
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
              src={propertyImg} 
              alt="Property Management" 
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
                Owning property is a great asset, but managing it from afar can be challenging. Whether it’s your family home, an investment property, or a new construction project, you want to know it’s well-maintained, and financially rewarding. That’s where Parent Care India steps in.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed"
              >
                We take care of everything from rent collection and tenant management to legal support, repairs, and renovations so you don’t have to stress about it. Whether you’re abroad or simply busy with other priorities, you can trust us to manage your property like it’s our own and keep you informed every step of the way.
              </motion.p>
            </div>

            {/* How We Take Care Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-8 border-b-2 border-[#EA1273] pb-2 inline-block">
                How We Take Care of Your Property
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
                    <p className="leading-relaxed">
                      <span className="text-[#EA1273] font-bold mr-2">{index + 1}.</span>
                      <span className="font-bold text-[#003366]">{service.title}:</span>
                    </p>
                    <p className="text-gray-600 pl-6 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Families Trust Us */}
            <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-8">
                Why Families Trust Parent Care India?
              </h2>
              <ul className="space-y-6">
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
                      <span className="font-bold text-[#003366]">{point.title}</span> – {point.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 italic mt-10 text-sm md:text-base leading-relaxed"
              >
                Your property is more than just an asset it’s a part of your family’s future. Let us take care of it like our own. Contact us today!
              </motion.p>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-6 pt-12 border-t border-gray-100">
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#EA1273] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#D41068] transition-colors uppercase tracking-wider text-sm"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                
                <a 
                  href="https://parentcaresanthosam.com/viewProperties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all uppercase tracking-wider text-sm inline-block"
                >
                  Properties for Sale
                </a>
              </div>
              
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

export default PropertyManagementPage;
