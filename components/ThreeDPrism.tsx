import React from 'react';
import { motion } from 'framer-motion';

export const ThreeDPrism: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: 360, rotateX: [10, -10, 10] }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Faces of a cube/prism representation */}
        <div className="absolute inset-0 border border-white/40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center translate-z-12 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
           <span className="text-lumina-900 font-extrabold text-2xl tracking-tight">Predict</span>
        </div>
        <div className="absolute inset-0 border border-white/40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center -translate-z-12 rotate-y-180">
           <span className="text-peach-900 font-extrabold text-2xl tracking-tight">Report</span>
        </div>
        <div className="absolute inset-0 border border-white/40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center -rotate-y-90 translate-x-12 origin-right">
           <span className="text-purple-900 font-extrabold text-2xl tracking-tight">Analyze</span>
        </div>
        <div className="absolute inset-0 border border-white/40 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center rotate-y-90 -translate-x-12 origin-left">
           <span className="text-cyan-900 font-extrabold text-2xl tracking-tight">Diagnose</span>
        </div>
        
        {/* Inner floating core */}
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-gradient-to-br from-lumina-500 to-peach-500 rounded-full blur-xl opacity-80 animate-pulse shadow-[0_0_50px_rgba(249,115,22,0.6)]" />
      </motion.div>
    </div>
  );
};