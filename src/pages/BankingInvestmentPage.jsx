import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import bankingImg from '../assets/services/bankinginvestment-re5jdkiruqj4d4k40doyu0xv6l7yi5mmv8xb6uhz8s.jpg';

const BankingInvestmentPage = () => {
  const serviceItems = [
    { 
      title: "Regular Maintenance and Repairs", 
      desc: "A well-maintained property holds its value. We handle routine cleaning, civil work, plumbing, electrical repairs, and general upkeep, ensuring your property stays in great shape." 
    },
    { 
      title: "Tenant Management and Rent Collection", 
      desc: "We help you find reliable tenants, handle agreements, and also make sure that the rent is collected on time. So, you never have to worry about late payments or rental disputes." 
    },
    { 
      title: "Security and Routine Inspections", 
      desc: "We check on your property regularly, confirming it’s safe and free from unauthorized use, giving you complete peace of mind." 
    },
    { 
      title: "Portfolio Handling & Reframing existing Portfolios", 
      desc: "We keep you updated on your property’s market value, helping you make the best decisions when it comes to selling, renting, or investing." 
    },
    { 
      title: "Loan and Mortgage Support", 
      desc: "From lease agreements and tax filings to property disputes, we handle all legal aspects smoothly and efficiently." 
    },
    { 
      title: "Know Your Customer (KYC) & Documentation Support", 
      desc: "We take care of bank-related paperwork, KYC updates, and investment formalities, saving your family the hassle of dealing with complicated banking procedures." 
    }
  ];

  const trustPoints = [
    { title: "Expert-Led Financial Management", desc: "Highly skilled professionals with deep experience in banking, investment strategies, and wealth planning." },
    { title: "Secure & Transparent Transactions", desc: "Your family’s finances are managed with honesty, integrity, and complete transparency." },
    { title: "Stress-Free Financial Assistance", desc: "We take care of the details, so you and your parents never have to worry about complex banking or investment processes." },
    { title: "Tailored for Your Family’s Needs", desc: "Whether it’s for your parents in India or for you as an NRI, we provide custom financial solutions that align with both short-term needs and long-term financial goals." }
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
              Our Banking and Investment Services
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
              src={bankingImg} 
              alt="Banking and Investment" 
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
                Managing finances can be challenging, especially when you’re living far from home and want to ensure that your family’s wealth is secure and growing. At Parent Care India, we provide comprehensive banking and investment support to make financial management easy, safe, and stress-free for your entire family.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed"
              >
                From day-to-day banking assistance to portfolio management, wealth creation, and loan solutions, our experts handle everything with care and professionalism, ensuring that your loved ones never have to struggle with complex financial matters alone. Whether it’s your parents in India or you as an NRI, we ensure that every financial decision is made with security and long-term benefits in mind.
              </motion.p>
            </div>

            {/* How We Take Care Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-8 border-b-2 border-[#EA1273] pb-2 inline-block">
                How We Take Care of Your Property
              </h2>
              <div className="space-y-8">
                {serviceItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col gap-1"
                  >
                    <p className="font-bold text-[#003366] text-lg">
                      {item.title}
                    </p>
                    <p className="text-gray-600 pl-4 text-sm md:text-base leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Financial Updates Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-xl font-bold text-[#003366]">Regular Financial Updates</h3>
              <p className="text-gray-600 leading-relaxed italic">
                You shouldn’t have to wonder how your family’s finances are being handled. We provide transparent reports and regular updates, ensuring that you are always in control, no matter where you are in the world.
              </p>
            </motion.div>

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
                className="text-gray-700 font-bold mt-10 text-center text-lg"
              >
                With Parent Care India, build a stronger financial future. Contact us today!
              </motion.p>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-6 pt-12 border-t border-gray-100">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#EA1273] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#D41068] transition-colors uppercase tracking-wider text-sm"
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

export default BankingInvestmentPage;
