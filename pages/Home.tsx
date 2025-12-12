import React, { useState } from 'react';
import { Section } from '../components/Section';
import { HeroArchitecture3D } from '../components/HeroArchitecture3D';
import { Floating3DShapes } from '../components/Floating3DShapes';
import { NeuralBackground } from '../components/NeuralBackground';
import { TiltCard } from '../components/TiltCard';
import { GeneratedImage } from '../components/GeneratedImage';
import { VideoModal } from '../components/VideoModal';
import { ImageHeader } from '../components/ImageHeader';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, AlertTriangle, PlayCircle, Zap, Brain, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-white relative">
      <NeuralBackground />
      <Floating3DShapes />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-lumina-200 text-lumina-700 text-xs font-extrabold tracking-wide uppercase mb-8 shadow-lg hover:scale-105 transition-transform cursor-default">
                <span className="w-2 h-2 bg-gradient-to-r from-lumina-500 to-peach-500 rounded-full mr-2 animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                {t.hero.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-600 via-peach-500 to-lumina-600 animate-gradient-x bg-[length:200%_auto]">
                  {t.hero.titleHighlight}
                </span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-lumina-600 to-peach-500 rounded-full focus:outline-none hover:shadow-2xl hover:shadow-peach-500/40 hover:-translate-y-1">
                  {t.hero.cta_primary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 -z-10 rounded-full bg-peach-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </Link>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-100 text-lg font-bold rounded-full text-slate-700 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-lumina-200 transition-all hover:shadow-lg hover:-translate-y-1 group"
                >
                  <PlayCircle className="mr-2 w-5 h-5 text-lumina-600 group-hover:scale-110 transition-transform" /> 
                  Watch Brand Film
                </button>
              </div>
            </motion.div>

            {/* Visual/Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-lumina-200/40 to-peach-200/40 rounded-full blur-3xl animate-pulse"></div>
                 
                 {/* Replaced Prism with Complex Architecture Visual */}
                 <HeroArchitecture3D />
                 
                 {/* Floating AI Insight Card */}
                 <TiltCard className="absolute top-20 right-10 z-20">
                    <div className="glass-panel p-5 rounded-2xl shadow-xl w-64">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach-400 to-peach-600 flex items-center justify-center shadow-lg">
                           <AlertTriangle className="w-5 h-5 text-white" />
                         </div>
                         <div>
                           <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">AI Insight</p>
                           <p className="text-sm font-bold text-slate-800">Risk Detected</p>
                         </div>
                       </div>
                       <p className="text-xs text-slate-600 leading-snug">"Student 142 shows a 15% velocity drop in Math. Flagged as 'Quiet Struggler'."</p>
                    </div>
                 </TiltCard>

                 {/* Floating Success Card */}
                 <TiltCard className="absolute bottom-32 left-0 z-20">
                    <div className="glass-panel p-5 rounded-2xl shadow-xl w-64">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                           <CheckCircle className="w-5 h-5 text-white" />
                         </div>
                         <div>
                           <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">Outcome</p>
                           <p className="text-sm font-bold text-slate-800">Intervention Sent</p>
                         </div>
                       </div>
                       <div className="flex -space-x-2 mb-2">
                          {[1,2,3].map(i => (
                            <img key={i} src={`https://picsum.photos/seed/student${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="student"/>
                          ))}
                       </div>
                       <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                         <motion.div className="h-full bg-emerald-500 w-3/4" layoutId="progress" />
                       </div>
                    </div>
                 </TiltCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pitch Deck Objectives Section - UPDATED WITH IMAGE HEADER */}
      <Section className="!pt-0">
        <ImageHeader 
          title={t.pitch.obj_title}
          subtitle="Why we built Lumina."
          prompt="Photorealistic Pakistani female teacher in a rural Sindh classroom using a digital tablet, students in background looking engaged and happy, bright natural sunlight streaming through window, symbol of hope and education, 8k resolution, cinematic"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: t.pitch.obj_1, desc: t.pitch.obj_1_desc, icon: <Zap />, color: "from-lumina-500 to-lumina-700" },
            { title: t.pitch.obj_2, desc: t.pitch.obj_2_desc, icon: <TrendingUp />, color: "from-peach-500 to-peach-600" },
            { title: t.pitch.obj_3, desc: t.pitch.obj_3_desc, icon: <MessageSquare />, color: "from-purple-500 to-purple-700" },
            { title: t.pitch.obj_4, desc: t.pitch.obj_4_desc, icon: <Brain />, color: "from-cyan-500 to-cyan-700" },
          ].map((item, idx) => (
            <TiltCard key={idx} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* The Problem Section with AI Generated Image Style */}
      <Section title="The Silent Crisis" subtitle="Paperwork is drowning teachers in Karachi. Students are invisible." dark className="bg-slate-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <TiltCard className="h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-96 border border-slate-700">
              {/* Dynamic AI Generated Image */}
              <GeneratedImage 
                prompt="Photorealistic image of a stressed Pakistani female teacher in a typical government school classroom in Karachi, surrounded by towering stacks of paper files and notebooks on her desk, wearing a shalwar kameez, cinematic lighting, depth of field, 8k resolution"
                alt="Stressed Pakistani Teacher in Karachi"
                fallbackSrc="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 text-white px-4 py-2 rounded-lg inline-block w-fit mb-4">
                  <AlertTriangle className="w-4 h-4 inline mr-2" /> Critical Overload
                </div>
                <p className="text-white text-xl font-medium leading-snug">"I have 45 students and 1 hour to grade. I'm guessing half the time."</p>
              </div>
            </div>
          </TiltCard>
          
          <div className="space-y-10">
            <div className="group">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 shadow-lg border border-red-500/20">
                   <AlertTriangle className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The "Quiet Struggler"</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Not the disruptive student, but the one who quietly fails assignments until it's too late. They are invisible in a stack of 400 papers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex gap-6 items-start">
                <div className="mt-1 w-12 h-12 bg-peach-500/10 rounded-2xl flex items-center justify-center group-hover:bg-peach-600 transition-colors duration-300 shadow-lg border border-peach-500/20">
                   <TrendingUp className="w-6 h-6 text-peach-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Late Intervention</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Report cards happen at the end of the term. By then, the damage is done. Lumina shifts this to real-time, preventative alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-white py-32 text-center px-4 relative overflow-hidden">
        {/* Colorful blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-peach-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-lumina-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Ready to empower your educators?</h2>
          <p className="text-slate-600 mb-12 text-xl font-light">Join the pilot program used by leading institutions in Lahore and Karachi.</p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-[0_20px_50px_rgba(15,23,42,0.3)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
            Schedule a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};