import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaRegClock } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#001B3D] text-white">
      {/* Main Footer Content */}
      <div className="w-full mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Logo + Info */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="bg-white rounded-lg p-3 w-fit block">
              <img
                src="/footerlogo.webp"
                alt="Santhosam Parent Care India Logo"
                className="h-14 w-auto object-contain cursor-pointer"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Feel free to reach out to us for any queries or assistance. We're here to help you!
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="tel:9344138530" className="flex items-center gap-3 hover:text-[#EA1273] transition-colors">
                <FaPhone className="text-[#EA1273] shrink-0" />
                93441 38530
              </a>
              <a href="mailto:parentcaresanthosam@gmail.com" className="flex items-center gap-3 hover:text-[#EA1273] transition-colors">
                <FaEnvelope className="text-[#EA1273] shrink-0" />
                parentcaresanthosam@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#EA1273] shrink-0 mt-1" />
                <span>Santhosam Parent Care India, 200,201, Krishna Colony, Shankar Nagar, Salem-636007.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#EA1273] font-bold text-base mb-5 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: "FAQ's", path: '/faq' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms and conditions', path: '#' },
                { name: 'Privacy policy', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/') ? (
                    <Link to={link.path} className="hover:text-[#EA1273] transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.path} className="hover:text-[#EA1273] transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Work Hours */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#EA1273] font-bold text-base tracking-wide">Work Hours</h3>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FaRegClock className="text-[#EA1273] shrink-0" />
              <span>24/7 services, Monday - Sunday</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Get in touch with us for dedicated support and answers to any questions. We're here to help you and your family feel connected and cared for.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, href: 'https://www.facebook.com/people/Santhosam-Parentcare-India/61586101176407/', label: 'Facebook' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/p/DSpwMCrk8im/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', label: 'Instagram' },
                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106751259%2Fadmin%2Fdashboard%2F', label: 'LinkedIn' },
                { icon: <FaYoutube />, href: 'https://www.youtube.com/@santhoshampci', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EA1273] flex items-center justify-center text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Contact Us Button */}
            <div>
              <a
                href="tel:9344138530"
                className="inline-flex items-center gap-2 bg-[#EA1273] hover:bg-[#D41068] text-white font-bold px-6 py-3 rounded-md transition-all shadow-lg text-sm"
              >
                <MdCall className="text-lg" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full mx-auto px-6 lg:px-12 py-5 text-center text-gray-400 text-sm">
          Copyright © 2026 parentcareindia. Powered by{' '}
          <a href="https://kanavu.org" target="_blank" rel="noopener noreferrer" className="text-[#EA1273] hover:underline font-medium">
            Kanavu Technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
