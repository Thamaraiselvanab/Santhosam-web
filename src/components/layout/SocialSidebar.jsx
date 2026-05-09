import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialSidebar = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://www.facebook.com/people/Santhosam-Parentcare-India/61586101176407/', color: 'bg-[#3b5998]' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/p/DSpwMCrk8im/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', color: 'bg-[#e4405f]' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106751259%2Fadmin%2Fdashboard%2F', color: 'bg-[#0077b5]' },
    { name: 'YouTube', icon: <FaYoutube />, href: 'https://www.youtube.com/@santhoshampci', color: 'bg-[#ff0000]' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 sm:gap-2">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} text-white p-2 sm:p-3 rounded-l-md shadow-lg hover:pr-6 transition-all duration-300 flex items-center justify-center`}
          title={social.name}
        >
          <span className="text-lg sm:text-xl">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
