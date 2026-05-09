import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import EventsBanner from '../components/events/EventsBanner';
import { motion } from 'framer-motion';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <EventsBanner />
        
        {/* Search & Filter Section */}
        <section className="pt-16 pb-8 bg-white relative z-20">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-2 md:p-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input 
                    type="text" 
                    placeholder="Find your next event" 
                    className="w-full bg-transparent border-none focus:ring-0 text-[#666] placeholder:text-gray-400 text-[15px] font-medium outline-none"
                    readOnly
                  />
                </div>

                {/* Location Select */}
                <div className="flex items-center gap-3 px-6 py-4 relative">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div className="flex-1 relative">
                    <select className="w-full bg-transparent border-none focus:ring-0 text-[#666] appearance-none cursor-pointer text-[15px] font-medium pr-8 outline-none" disabled>
                      <option value="">Event Location</option>
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Category Select */}
                <div className="flex items-center gap-3 px-6 py-4 relative">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <div className="flex-1 relative">
                    <select className="w-full bg-transparent border-none focus:ring-0 text-[#666] appearance-none cursor-pointer text-[15px] font-medium pr-8 outline-none" disabled>
                      <option value="">Event Category</option>
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Button */}
                <div className="px-3 py-2">
                  <button className="w-full bg-[#5D7BFF] hover:bg-[#4A66E6] text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 text-[15px] shadow-lg shadow-blue-500/10">
                    Search Now
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              <p className="text-[#888] text-[15px] font-medium">
                Discover 0 Upcoming and Expire Events
              </p>
              
              <div className="bg-[#FFF5F5] border-l-[3px] border-[#FF4D4D] py-3.5 px-6 inline-block">
                <p className="text-[#666] text-[15px] font-medium">No Post Found</p>
              </div>
            </motion.div>
          </div>
        </section>
        

      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
