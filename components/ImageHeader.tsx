import React from 'react';
import { motion } from 'framer-motion';
import { GeneratedImage } from './GeneratedImage';

interface ImageHeaderProps {
  title: string;
  subtitle?: string;
  prompt: string;
  className?: string;
  align?: 'center' | 'left';
}

export const ImageHeader: React.FC<ImageHeaderProps> = ({ 
  title, 
  subtitle, 
  prompt, 
  className = "",
  align = 'center'
}) => {
  return (
    <div className={`relative w-full h-[400px] overflow-hidden rounded-3xl shadow-2xl mb-16 group ${className}`}>
      {/* AI Background Image */}
      <GeneratedImage 
        prompt={prompt}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30 group-hover:via-slate-900/50 transition-all duration-700" />
      
      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-8 md:p-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl drop-shadow-md leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className={`h-1.5 w-24 mt-8 rounded-full bg-gradient-to-r from-lumina-500 to-peach-500 ${align === 'center' ? 'mx-auto' : ''}`} />
        </motion.div>
      </div>
    </div>
  );
};