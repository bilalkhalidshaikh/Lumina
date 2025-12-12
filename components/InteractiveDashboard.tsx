import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Activity, AlertCircle, Brain, RefreshCw, Lock, Radio } from 'lucide-react';

const COLORS = ['#0ea5e9', '#ef4444', '#eab308', '#22c55e'];

const STATIC_DATA = [
  { name: 'Week 1', score: 65, prediction: 68 },
  { name: 'Week 2', score: 59, prediction: 64 },
  { name: 'Week 3', score: 80, prediction: 75 },
  { name: 'Week 4', score: 81, prediction: 82 },
  { name: 'Week 5', score: 56, prediction: 60 },
  { name: 'Week 6', score: 55, prediction: 58 },
  { name: 'Week 7', score: 40, prediction: 50 },
];

const MOCK_RISK_DATA = [
  { name: 'Low Risk', value: 400 },
  { name: 'Medium Risk', value: 300 },
  { name: 'High Risk', value: 100 },
  { name: 'Quiet Strugglers', value: 200 },
];

export const InteractiveDashboard: React.FC = () => {
  const [data, setData] = useState(STATIC_DATA);
  const [mode, setMode] = useState<'static' | 'live'>('static');

  // Simulate "Live Data" updates
  useEffect(() => {
    if (mode === 'static') {
      setData(STATIC_DATA);
      return;
    }
    
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        // Shift data: remove first, add new at end to simulate timeline
        // Or just fluctuate existing points for smoother demo visual
        return newData.map((point, i) => {
           const fluctuation = (Math.random() - 0.5) * 5; // Random move
           // Trend logic: make later weeks slightly more volatile
           const volatility = i > 4 ? 1 : 0.2; 
           
           let newScore = point.score + (fluctuation * volatility);
           // Clamp
           newScore = Math.max(20, Math.min(95, newScore));
           
           return {
             ...point,
             score: newScore,
             prediction: newScore + (Math.random() * 4 - 2) // Prediction follows closely
           };
        });
      });
    }, 800);

    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl relative">
       {/* Top Bar / HUD */}
       <div className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 p-4 flex justify-between items-center">
         <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${mode === 'live' ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`} />
            <span className="text-slate-300 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              Lumina AI Core: {mode === 'live' ? 'ONLINE' : 'STANDBY'}
            </span>
         </div>
         
         <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700">
            <button 
              onClick={() => setMode('static')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${mode === 'static' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Lock className="w-3 h-3" /> Static
            </button>
            <button 
              onClick={() => setMode('live')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${mode === 'live' ? 'bg-lumina-600 text-white shadow-sm shadow-lumina-500/20' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Radio className={`w-3 h-3 ${mode === 'live' ? 'animate-pulse' : ''}`} /> Live Simulation
            </button>
         </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-0 h-[600px]">
          {/* Sidebar / Stats */}
          <div className="lg:col-span-1 border-r border-slate-700 p-6 flex flex-col gap-6 bg-slate-900/50">
             <div className="space-y-4">
               <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Real-time Insights</h3>
               
               <motion.div 
                 className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
               >
                 <div className="flex items-start gap-3">
                   <AlertCircle className="w-5 h-5 text-red-400 mt-1" />
                   <div>
                     <p className="text-white font-bold">Risk Alert Detected</p>
                     <p className="text-red-300 text-sm">3 students dropped below 50% in Math this week.</p>
                   </div>
                 </div>
               </motion.div>

               <motion.div 
                 className="p-4 rounded-xl bg-lumina-500/10 border border-lumina-500/20"
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.1 }}
               >
                 <div className="flex items-start gap-3">
                   <Brain className="w-5 h-5 text-lumina-400 mt-1" />
                   <div>
                     <p className="text-white font-bold">AI Recommendation</p>
                     <p className="text-lumina-300 text-sm">Suggested intervention: Algebra basics review for Grade 8B.</p>
                   </div>
                 </div>
               </motion.div>
             </div>

             <div className="mt-auto">
               <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Class Composition</h3>
               <div className="h-48">
                 <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                     <Pie
                       data={MOCK_RISK_DATA}
                       innerRadius={40}
                       outerRadius={60}
                       paddingAngle={5}
                       dataKey="value"
                     >
                       {MOCK_RISK_DATA.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                       ))}
                     </Pie>
                     <Tooltip 
                       contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                       itemStyle={{ color: '#fff' }}
                     />
                   </PieChart>
                 </ResponsiveContainer>
               </div>
               <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mt-2">
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#0ea5e9]"/> Low Risk</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#ef4444]"/> High Risk</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#eab308]"/> Med Risk</div>
                 <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#22c55e]"/> Strugglers</div>
               </div>
             </div>
          </div>

          {/* Main Chart Area */}
          <div className="lg:col-span-2 p-6 flex flex-col bg-slate-900 relative overflow-hidden">
             {/* Decorative grid */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5 pointer-events-none"></div>

             <div className="flex justify-between items-center mb-6 relative z-10">
               <h2 className="text-white font-bold text-xl">Performance Trajectory</h2>
               <div className="flex gap-2">
                 <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">Math</span>
                 <span className="px-3 py-1 rounded-md bg-lumina-600 text-white text-xs cursor-pointer">Science</span>
                 <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs cursor-pointer hover:bg-slate-700">English</span>
               </div>
             </div>

             <div className="flex-grow relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                       <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                     </linearGradient>
                     <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                       <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} />
                   <YAxis stroke="#64748b" tick={{fontSize: 12}} domain={[0, 100]} />
                   <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(8px)', borderColor: '#475569', color: '#fff', borderRadius: '8px' }}
                     isAnimationActive={false} // Improves performance during rapid updates
                   />
                   <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#0ea5e9" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                    name="Actual Score"
                    isAnimationActive={mode === 'static'} // Disable initial animation in live mode for smoothness
                   />
                   <Area 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#8b5cf6" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    fillOpacity={1} 
                    fill="url(#colorPred)" 
                    name="AI Prediction"
                    isAnimationActive={mode === 'static'}
                   />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>
       </div>
    </div>
  );
};