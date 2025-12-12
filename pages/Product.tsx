import React, { useState } from 'react';
import { Section } from '../components/Section';
import { InteractiveDashboard } from '../components/InteractiveDashboard';
import { Floating3DShapes } from '../components/Floating3DShapes';
import { StakeholderShowcase } from '../components/StakeholderShowcase';
import { GeneratedImage } from '../components/GeneratedImage';
import { ImageHeader } from '../components/ImageHeader';
import { CheckCircle, Shield, Code, Server, Smartphone, Cpu, Network, Brain, FileJson, ArrowDown, Database, Terminal, Zap, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Product: React.FC = () => {
  const { t } = useLanguage();
  const [demoStep, setDemoStep] = useState(0);

  // Live Demo Simulation Steps
  const demoSteps = [
    { title: "Upload CSV", desc: "Teacher uploads raw class data.", color: "bg-blue-500", icon: <Database className="w-5 h-5" /> },
    { title: "Lumina ML", desc: "Predictive model scores risk.", color: "bg-purple-500", icon: <Cpu className="w-5 h-5" /> },
    { title: "Gemini Agent", desc: "Wrapper prompts AI Context.", color: "bg-peach-500", icon: <Brain className="w-5 h-5" /> },
    { title: "Structured Output", desc: "JSON generated.", color: "bg-green-500", icon: <FileJson className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-20 bg-slate-50 overflow-hidden">
      <Floating3DShapes />
      
      {/* Header */}
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-lumina-100 text-lumina-600 text-sm font-bold font-mono mb-6">
               <Cpu className="w-4 h-4" />
               <span>v2.1 Hybrid Core Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-slate-900">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-600 to-peach-500">AI Wrapper</span> Architecture
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              An autonomous agent that wraps Google's powerful Gemini model, turning it into an expert Pakistani school counselor.
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI Wrapper Detailed Breakdown - UPDATED WITH IMAGE HEADER */}
      <Section className="!pt-0">
        <ImageHeader 
          title="Inside the Wrapper"
          subtitle="A 'fire-and-forget' system designed for scale."
          prompt="Abstract digital representation of AI neural network processing data, blue and peach glowing nodes, connection lines, depth of field, futuristic technology, 8k"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
               {/* Input Layer Card - ENHANCED WITH AI IMAGE */}
               <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-lumina-500" />
                  <div className="mb-4 h-48 rounded-xl overflow-hidden relative">
                    <GeneratedImage 
                       prompt="Busy typical government school classroom in Karachi, piles of paper files on desk, teacher entering data into a laptop, diverse Pakistani students in background, natural lighting, realistic, 8k"
                       alt="Input Layer: Classroom Data"
                       className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                       <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                         <Database className="w-4 h-4"/> Layer 1: Data Ingestion
                       </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Messy Data Ingestion</h3>
                  <p className="text-slate-600">Teacher uploads a standard class data file (CSV) or Excel. No formatting required. The system normalizes messy handwritten digitizations automatically.</p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-peach-500" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2"><Cpu className="text-peach-500"/> Layer 2: Prediction</h3>
                  <p className="text-slate-600">A custom-trained ML model first generates a predictive performance score for each student based on historical trends.</p>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2"><Brain className="text-purple-500"/> Layer 3: The Wrapper</h3>
                  <p className="text-slate-600">Our agent sends data + scores to Gemini with a context-aware prompt: <em>"Act as an expert Pakistani school counselor and provide actionable Urdu advice..."</em></p>
               </div>
            </div>
            
            {/* Interactive Terminal / Live Demo Simulation (Pitch Deck Slide 7) */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl font-mono text-sm relative border border-slate-700 h-fit sticky top-24">
               <div className="absolute top-4 right-4 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"/>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                 <div className="w-3 h-3 rounded-full bg-green-500"/>
               </div>
               <div className="mb-6 text-slate-400 font-bold border-b border-slate-700 pb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Live Demo: Agent Workflow
               </div>
               
               <div className="space-y-4">
                  {demoSteps.map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`p-2 rounded-lg ${step.color} text-white`}>
                         {step.icon}
                      </div>
                      <div>
                         <p className="text-white font-bold">{step.title}</p>
                         <p className="text-slate-500 text-xs">{step.desc}</p>
                      </div>
                      {idx < 3 && <ArrowDown className="w-4 h-4 text-slate-700 ml-auto" />}
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="mt-6 p-4 bg-slate-800 rounded-xl border-l-2 border-green-500 text-green-400"
                  >
                     {`{
  "student": "Ali Khan",
  "status": "Quiet Struggler",
  "teacher_action": "Review Algebra Basics",
  "parent_msg_urdu": "علی الجبرا میں کوشش کر رہا ہے۔ برائے مہربانی اس کی مدد کریں۔"
}`}
                  </motion.div>
               </div>
            </div>
        </div>
      </Section>

      {/* NEW: Stakeholder Showcase Section */}
      <Section title="Built for the Entire Ecosystem" subtitle="Lumina isn't just for teachers. It empowers every stakeholder in the student's journey.">
         <StakeholderShowcase />
      </Section>

      {/* Dashboard Feature Deep Dive */}
      <div className="bg-white py-10 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Command Center</h2>
              <p className="text-slate-500">Live simulation of the Lumina Teacher Dashboard.</p>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="relative"
           >
             {/* Glow effect behind dashboard */}
             <div className="absolute -inset-4 bg-gradient-to-r from-lumina-600 to-peach-500 opacity-20 blur-2xl rounded-[3rem]"></div>
             
             <InteractiveDashboard />
           </motion.div>
        </div>
      </div>

      {/* Feature Details with Glassmorphism & Interactive Cards */}
      <Section title="Power Features" dark className="bg-slate-900">
        <div className="grid md:grid-cols-3 gap-8">
            <InteractiveCard 
              icon={<Network className="w-6 h-6" />}
              title="Predictive Success Monitor"
              desc="Visualizes student trajectories using red/yellow/green indicators based on assignment velocity, not just final grades."
              details="Uses a sliding window algorithm to detect velocity changes in student performance before they fail."
              color="text-lumina-400"
              bgColor="bg-lumina-500"
            />
            
            <InteractiveCard 
              icon={<FileText className="w-6 h-6" />}
              title="One-Click Report Gen"
              desc="Generates 50 unique, personalized PDF reports in Urdu and English in under 2 minutes using localized NLG."
              details="Connects to Gemini Pro to write empathetic, culturally appropriate feedback for every single parent."
              color="text-peach-500"
              bgColor="bg-peach-500"
            />

            <InteractiveCard 
              icon={<Brain className="w-6 h-6" />}
              title="Skills Gap Diagnostics"
              desc="Identifies specific concepts (e.g., 'Linear Algebra') that the whole class is struggling with automatically."
              details="Aggregates error patterns across the entire cohort to suggest specific lesson plan adjustments."
              color="text-purple-500"
              bgColor="bg-purple-500"
            />
        </div>
      </Section>
    </div>
  );
};

const InteractiveCard = ({ icon, title, desc, details, color, bgColor }: any) => {
  return (
    <motion.div 
      className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer overflow-hidden relative"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`w-12 h-12 ${color.replace('text-', 'bg-')}/20 rounded-xl flex items-center justify-center ${color} mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-4">{desc}</p>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileHover={{ height: 'auto', opacity: 1 }}
        className="border-t border-white/10 pt-4"
      >
        <p className="text-sm text-slate-300 font-medium">
          <Zap className="w-3 h-3 inline mr-1 text-yellow-400" />
          Tech Detail: {details}
        </p>
      </motion.div>
    </motion.div>
  );
};