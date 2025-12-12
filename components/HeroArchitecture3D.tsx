import React from 'react';
import { motion } from 'framer-motion';
import { Database, Sparkles, FileText, Cpu, Server, Shield, Activity, Lock } from 'lucide-react';

export const HeroArchitecture3D: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] perspective-1000 flex items-center justify-center overflow-visible">
      <motion.div
        className="relative w-80 h-[28rem] preserve-3d"
        animate={{ 
          rotateX: [10, 15, 10],
          rotateY: [-15, 15, -15]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* --- BASE LAYER: RAW DATA (Chaos) --- */}
        <motion.div 
          className="absolute bottom-0 w-80 h-80 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(15,23,42,0.5)]"
          style={{ transform: 'rotateX(70deg) translateZ(-100px)' }}
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl"></div>
          
          <div className="flex flex-col items-center transform -rotate-x-90">
             <Database className="w-16 h-16 text-slate-500 mb-2" />
             <span className="text-xs font-mono text-slate-500 tracking-widest">UNSTRUCTURED DATA LAKES</span>
          </div>

          {/* Random floating data bits */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`bit-${i}`}
              className="absolute w-8 h-8 bg-slate-800/80 border border-slate-600 rounded flex items-center justify-center text-[8px] text-slate-300 font-mono"
              animate={{
                z: [0, 40, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
            >
              CSV
            </motion.div>
          ))}
        </motion.div>

        {/* --- MIDDLE LAYER: THE WRAPPER (Processing) --- */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Central Processor Unit */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Spinning Outer Ring (Security) */}
            <motion.div 
              className="absolute inset-[-20px] border border-dashed border-slate-400/30 rounded-full"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-1"><Lock className="w-4 h-4 text-slate-500" /></div>
            </motion.div>

            {/* Middle Ring (Lumina Logic) */}
            <motion.div 
              className="absolute inset-0 border-[6px] border-lumina-500/20 rounded-full"
              animate={{ rotateX: 360, rotateY: 180 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Ring (Gemini Core) */}
            <motion.div 
              className="absolute inset-8 border-[4px] border-peach-500/30 rounded-full"
              animate={{ rotateX: -360, rotateY: -90 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
            
            {/* The Core Crystal */}
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-lumina-600 via-purple-600 to-peach-500 rounded-2xl flex items-center justify-center shadow-[0_0_80px_rgba(124,58,237,0.8)] z-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cpu className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Context Injectors */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-[10px] text-white font-bold border border-white/20">
               + Urdu Context
            </div>
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-[10px] text-white font-bold border border-white/20">
               + Curriculum Map
            </div>
          </div>
        </motion.div>

        {/* --- TOP LAYER: OUTPUT (Clarity) --- */}
        <motion.div 
          className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-64 h-40 bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
          style={{ transform: 'translateZ(120px)' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-1 shadow-lg">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          
          <div className="flex items-center gap-4 mb-3">
             <div className="w-10 h-12 bg-white border border-slate-100 rounded shadow-md flex items-center justify-center">
               <span className="text-[8px] font-bold text-slate-400">PDF</span>
             </div>
             <div className="w-10 h-12 bg-white border border-slate-100 rounded shadow-md flex items-center justify-center">
               <span className="text-[8px] font-bold text-slate-400">SMS</span>
             </div>
             <div className="w-10 h-12 bg-white border border-slate-100 rounded shadow-md flex items-center justify-center">
               <span className="text-[8px] font-bold text-slate-400">API</span>
             </div>
          </div>
          
          <div className="bg-gradient-to-r from-lumina-600 to-peach-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
            <Sparkles className="w-3 h-3" /> 
            Actionable Intelligence
          </div>
        </motion.div>
        
        {/* --- CONNECTING DATA STREAMS --- */}
        <svg className="absolute inset-0 w-full h-full visible overflow-visible pointer-events-none" style={{ transform: 'translateZ(-40px)' }}>
           {/* Upward Stream */}
           <motion.path 
             d="M 160 400 C 160 300, 160 300, 160 150" 
             stroke="url(#data-stream)" 
             strokeWidth="4" 
             fill="none"
             strokeDasharray="10 10"
             animate={{ strokeDashoffset: [0, -200] }}
             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
           />
           <defs>
             <linearGradient id="data-stream" x1="0" y1="1" x2="0" y2="0">
               <stop offset="0%" stopColor="#334155" stopOpacity="0" />
               <stop offset="30%" stopColor="#8b5cf6" stopOpacity="1" />
               <stop offset="70%" stopColor="#f97316" stopOpacity="1" />
               <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>

      </motion.div>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
