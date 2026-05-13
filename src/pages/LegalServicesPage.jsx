import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import legalImg from '../assets/services/9-re5jdkiruqj4d4k40doyu0xv6l7yi5mmv8xb6uhz8s.jpg';

const LegalServicesPage = () => {
  const services = [
    { title: "Property Documentation", desc: "We assist with property registration, title deeds, and mandatory paperwork, ensuring a hassle-free process for your parents." },
    { title: "Will Writing Support", desc: "Assistance in drafting and formalising wills to ensure clear distribution of assets and smooth execution of personal and financial decisions." },
    { title: "Will Creation and Estate Planning", desc: "We help your parents’ draft wills, plan their estate, and settle will-related matters to protect their legacy and ensure their wishes are honoured." },
    { title: "Dispute Resolution", desc: "Whether it’s family property disputes, tenant issues, or ongoing court cases, our legal team works towards quick and effective resolutions." },
    { title: "Legal Advice and Consultation", desc: "We provide expert opinions on property matters, personal legal concerns, and financial legalities, helping both you and your parents make informed decisions." },
    { title: "Power of Attorney", desc: "We provide mandatory guidance to you and your parents through the power of attorney process, ensuring the legal rights and interests are protected with the right documentation." },
    { title: "Court Representation", desc: "If your parents need to attend court, we arrange experienced legal professionals to represent and support them throughout the legal proceedings." },
    { title: "Tax and Compliance Support", desc: "We assist with tax filings, property tax payments, and overall legal compliance, making the process simple and worry-free." },
    { title: "Corporate Legal Consultancies for Foreign Direct Investments", desc: "For families involved in business and investments, we provide legal guidance on foreign direct investments and corporate compliance, ensuring smooth and secure transactions." }
  ];

  const whyChooseUs = [
    { title: "Skilled Experts", desc: "Our experienced legal professionals handle every matter with efficiency and expertise." },
    { title: "Mandatory & Essential Legal Support", desc: "From power of attorney documentation to court cases, we cover all critical legal needs." },
    { title: "Tailored Services", desc: "Every legal service is customized to you and your parents’ specific needs, ensuring complete peace of mind." },
    { title: "Regular Updates", desc: "You are kept informed about every step, so you always know what is happening." },
    { title: "Transparent Communication", desc: "You receive regular updates and full clarity on every legal process." }
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
              Our Legal Services
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
              src={legalImg} 
              alt="Legal Services" 
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
              At Parent Care India, we understand how complex and overwhelming legal matters can be, especially for your parents when you are not physically present to assist them. That is why we provide comprehensive and reliable legal support, ensuring they never have to face these challenges alone.
            </motion.p>

            {/* Our Services */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-8 border-b-2 border-[#EA1273] pb-2 inline-block">
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
                    className="space-y-1"
                  >
                    <p className="font-bold text-[#003366] text-lg">{service.title}</p>
                    <p className="text-gray-600 leading-relaxed pl-1 italic">
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
              <ul className="space-y-6">
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
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed pt-4 border-l-4 border-[#EA1273] pl-6 italic text-gray-600"
            >
              Let us handle the legal complexities, so you can relax while feeling safe and secure. Contact us today to ensure they receive the professional legal support your family deserve.
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

export default LegalServicesPage;
