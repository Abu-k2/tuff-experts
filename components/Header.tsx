import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, SparklesIcon } from './Icons';
import { motion } from 'framer-motion';

interface HeaderProps {
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    gallery: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ refs, scrollToRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', ref: refs.home },
    { name: 'About', ref: refs.about },
    { name: 'Gallery', ref: refs.gallery },
    { name: 'Projects', ref: refs.projects },
    { name: 'Contact', ref: refs.contact },
  ];

  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToRef(ref);
    setIsOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleLinkClick(refs.home)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SparklesIcon className="h-8 w-8 text-brand-green" />
            <span className="text-xl font-bold text-brand-dark">Tuff Experts</span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleLinkClick(link.ref)}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
          </nav>
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-dark focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden overflow-hidden"
        id="mobile-menu"
        aria-hidden={!isOpen}
        initial={false}
        animate={{ maxHeight: isOpen ? 384 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-white border-t border-gray-200">
           <nav className="flex flex-col items-center space-y-4 py-4">
             {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleLinkClick(link.ref)}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors w-full py-2"
                role="menuitem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
           </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;