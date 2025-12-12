import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${
        dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            {title && (
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
            <div className={`h-1 w-20 mt-8 rounded-full ${dark ? 'bg-lumina-500' : 'bg-lumina-600'}`} />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${dark ? 'bg-lumina-600' : 'bg-lumina-200'}`} />
        <div className={`absolute top-1/2 -left-20 w-72 h-72 rounded-full blur-3xl opacity-10 ${dark ? 'bg-purple-600' : 'bg-blue-200'}`} />
      </div>
    </section>
  );
};