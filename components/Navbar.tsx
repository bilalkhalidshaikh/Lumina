import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/product', label: t.nav.product },
    { path: '/impact', label: t.nav.impact },
    { path: '/about', label: t.nav.about },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg py-3 border-b border-white/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group z-50">
            <motion.div 
              className="relative text-lumina-600 group-hover:text-peach-500 transition-colors"
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
                filter: "drop-shadow(0px 0px 8px rgba(249, 115, 22, 0.6))" 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Hexagon className="w-8 h-8 fill-current opacity-20 absolute" />
              <Hexagon className="w-8 h-8 stroke-2 relative z-10" />
            </motion.div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Lumina</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all hover:text-lumina-600 relative group px-2 py-1 ${
                    isActive ? 'text-lumina-600' : 'text-slate-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-lumina-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              <Globe className="w-3 h-3" />
              {language === 'en' ? 'UR' : 'EN'}
            </button>

            <NavLink to="/contact">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lumina-600 to-peach-500 hover:from-lumina-500 hover:to-peach-400 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-peach-500/40 transition-all border border-white/20"
               >
                 {t.nav.contact}
               </motion.button>
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-slate-100 text-xs font-bold"
            >
              {language === 'en' ? 'UR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-lumina-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'bg-lumina-50 text-lumina-600' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};