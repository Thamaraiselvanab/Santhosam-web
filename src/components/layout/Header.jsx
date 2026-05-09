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
    <header className="sticky top-0 z-50 bg-[#F0F7FF] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Parent Care India" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors relative pb-1 ${
                  location.pathname === link.href 
                  ? 'text-[#EA1273] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EA1273]' 
                  : 'text-gray-700 hover:text-[#EA1273]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="flex items-center text-sm font-semibold text-gray-700 hover:text-[#EA1273] transition-colors"
              >
                Resources
                <HiChevronDown className={`ml-1 w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
                  >
                    {resourceLinks.map((item) => (
                      item.path.startsWith('/') ? (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#EA1273]"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={item.name}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#EA1273]"
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                location.pathname === '/contact' 
                ? 'text-[#EA1273] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#EA1273]' 
                : 'text-gray-700 hover:text-[#EA1273]'
              }`}
            >
              Contact
            </Link>



          </nav>

          {/* Mobile Toggle & Action Buttons Group */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button - positioned to the left of buttons on tablet as per screenshot */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#EA1273] focus:outline-none"
              >
                {isMobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
              </button>
            </div>

            {/* Action Buttons - Now visible on tablet (md) */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <button className="px-4 lg:px-6 py-2 rounded-md border-2 border-[#EA1273] text-[#003366] font-bold text-xs lg:text-sm bg-[#E3F2FD] hover:bg-white transition-all shadow-sm whitespace-nowrap">
                Santhosam
              </button>
              <button className="px-4 lg:px-6 py-2 rounded-md bg-[#EA1273] text-white font-bold text-xs lg:text-sm hover:bg-[#D41068] transition-all shadow-md whitespace-nowrap">
                Enquiry
              </button>
            </div>
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
