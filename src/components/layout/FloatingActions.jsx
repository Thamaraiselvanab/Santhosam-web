import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import referImg from '../../assets/referAFriend.png';

const FloatingActions = () => {
  return (
    <>
      {/* Floating Badges (Refer a Friend) */}
      <Link 
        to="/refer"
        className="fixed left-0 bottom-24 z-40 cursor-pointer group hover:scale-110 transition-all sm:bottom-32"
      >
        <img 
          src={referImg} 
          alt="Refer a Friend" 
          className="w-16 sm:w-28 h-auto drop-shadow-xl"
        />
      </Link>

      {/* Need Help Button */}
      <div className="fixed left-0 bottom-0 z-50">
        <button className="bg-[#EA1273] text-white px-3 sm:px-6 py-1.5 sm:py-2.5 font-bold shadow-lg hover:bg-[#D41068] transition-all rounded-tr-xl flex items-center gap-2 text-[10px] sm:text-sm uppercase tracking-wider cursor-pointer">
          Need Help?
        </button>
      </div>

      {/* Bottom Right Actions */}
      <div className="fixed right-3 sm:right-6 bottom-3 sm:bottom-6 z-40 flex flex-col items-end gap-3 sm:gap-4">
        <a 
          href="#" 
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <button className="bg-[#EA1273] text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-md font-bold shadow-lg hover:bg-[#D41068] transition-all flex items-center gap-2 text-xs sm:text-base">
          Request a Call
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
