import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ActionButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/your-number" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

      {/* Request a Call Button */}
      <button className="bg-[#EA1273] text-white px-6 py-3 rounded-md font-bold shadow-lg hover:bg-[#D41068] transition-all flex items-center gap-2 cursor-pointer">
        Request a Call
      </button>
    </div>
  );
};

export default ActionButtons;
