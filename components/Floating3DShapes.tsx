import React from 'react';
import { motion } from 'framer-motion';

export const Floating3DShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Peach Sphere */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fdba74, #ea580c)',
          boxShadow: '0 20px 50px rgba(234, 88, 12, 0.3), inset 10px 10px 20px rgba(255,255,255,0.5)'
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Purple Cube-ish */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-24 h-24 md:w-48 md:h-48 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
          boxShadow: '0 20px 50px rgba(124, 58, 237, 0.3), inset 5px 5px 10px rgba(255,255,255,0.3)'
        }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, 45, 90, 135],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Blue Donut */}
      <motion.div
        className="absolute top-[40%] left-[20%] w-16 h-16 md:w-32 md:h-32 border-[20px] border-cyan-400 rounded-full opacity-60 blur-sm"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, -180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

       {/* Floating Glass Panels */}
       <motion.div
        className="absolute top-[60%] right-[25%] w-40 h-24 glass-panel rounded-xl opacity-40 transform rotate-12"
        animate={{
          y: [0, 20, 0],
          rotate: [12, 5, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};