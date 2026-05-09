import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannerVideo from '../../assets/Santhosam-1-2-1-1.mp4';

const HeroBanner = () => {
  return (

    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Video */}
      <div className="relative w-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto block"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#003366] text-xs md:text-sm font-bold mb-2 tracking-wide"
          >
            Santhosam — <span className="italic font-medium">One Stop Solution for Your Parents well being</span>
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-3xl lg:text-5xl font-black mb-4 leading-tight max-w-4xl"
          >
            <span className="text-[#003366]">TRUST, CARE, AND SUPPORT </span>
            <br />
            <span className="text-[#EA1273]">FOR YOUR FAMILY</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden sm:block text-gray-700 text-[10px] md:text-sm font-medium max-w-2xl mb-6 leading-relaxed"
          >
            We care for your parents' health with compassion and provide trusted guidance <br className="hidden md:block" /> 
            to grow your wealth, wherever you are.
          </motion.p>

          {/* Founder & About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex flex-col items-center">
              <span className="text-[#EA1273] font-bold text-[13px] md:text-base">Dr. Murugesh Velayudham</span>
              <span className="text-[#EA1273] text-[10px] font-bold uppercase tracking-widest mt-[-2px]">Founder</span>
            </div>
            <Link 
              to="/about"
              className="mt-2 bg-[#EA1273]/80 hover:bg-[#EA1273] text-white px-6 py-1.5 rounded-full text-xs font-bold transition-all shadow-md"
            >
              About
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
};

export default HeroBanner;
