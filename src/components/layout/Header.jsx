import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Santhosham-Logo-scaled.png';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];



  const resourceLinks = [
    { name: 'FAQs', path: '/faq' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '#' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Refer a friend', path: '/refer' }
  ];


  return (
    <header className="sticky top-0 z-50 bg-[#F0F7FF] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center w-1/3 justify-start">
            <img 
              src={logo} 
              alt="Parent Care India" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation & Hamburger */}
          <div className="flex items-center justify-center w-1/3">
            <nav className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    location.pathname === link.href ? 'text-[#EA1273]' : 'text-gray-700 hover:text-[#EA1273]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="text-sm font-semibold text-gray-700 hover:text-[#EA1273]">Contact</Link>
            </nav>

            {/* Hamburger (Always visible on mobile/tablet desktop view) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#003366] hover:text-[#EA1273] focus:outline-none"
            >
              {isMobileMenuOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3 className="w-7 h-7" />}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-2 md:space-x-3 w-1/3">
            <button className="px-3 md:px-5 py-2 rounded-md border border-[#003366]/20 text-[#003366] font-bold text-[11px] md:text-xs bg-[#D1E9FF]/40 hover:bg-white transition-all shadow-sm">
              Santhosam
            </button>
            <button className="px-3 md:px-5 py-2 rounded-md bg-[#EA1273] text-white font-bold text-[11px] md:text-xs hover:bg-[#D41068] transition-all shadow-md">
              Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.href ? 'text-[#EA1273] bg-pink-50' : 'text-gray-700 hover:text-[#EA1273]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2 text-base font-medium text-gray-700">Resources</div>
              <div className="pl-6 space-y-1">
                {resourceLinks.map((item) => (
                  item.path.startsWith('/') ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#EA1273]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#EA1273]"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>

              <div className="pt-4 flex flex-col space-y-2 px-3">
                <button className="w-full px-6 py-2 rounded-md border-2 border-[#EA1273] text-[#003366] font-bold text-sm bg-[#E3F2FD]">
                  Santhosam
                </button>
                <button className="w-full px-6 py-2 rounded-md bg-[#EA1273] text-white font-bold text-sm">
                  Enquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
