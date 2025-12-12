import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeneratedImage } from './GeneratedImage';
import { User, Users, GraduationCap, Building2, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

const stakeholders = [
  {
    id: 'teacher',
    label: 'For Teachers',
    title: 'The AI Assistant',
    subtitle: 'From Reactive Grading to Predictive Intervention',
    icon: User,
    color: 'text-lumina-600',
    bgColor: 'bg-lumina-50',
    borderColor: 'border-lumina-200',
    description: "Lumina automates the tedious work of manual analysis, freeing you to mentor. It acts as an early warning system, flagging 'quiet strugglers' before exams.",
    benefits: [
      "Early Warning System: Flags students instantly.",
      "Saves 15+ Hours/Week: Automates grading & reporting.",
      "Expert Recommendations: Actionable plans for each student.",
      "Seamless Parent Comm: Auto-generated Urdu reports."
    ],
    imagePrompt: "Photorealistic Pakistani female teacher in a classroom using a digital tablet to view student analytics, smiling confidently, wearing traditional shalwar kameez, modern education setting in Lahore, warm lighting, depth of field"
  },
  {
    id: 'parent',
    label: 'For Parents',
    title: 'The Digital Window',
    subtitle: 'Bridging the Communication Gap',
    icon: Users,
    color: 'text-peach-600',
    bgColor: 'bg-peach-50',
    borderColor: 'border-peach-200',
    description: "A transparent, 24/7 bridge between home and school. No more report card surprises—just clear, actionable advice in your language.",
    benefits: [
      "No Surprises: Continuous insights vs. end-of-term shock.",
      "Actionable Advice: Simple steps for home support.",
      "Urdu Language Support: Inclusive for all parents.",
      "True Partnership: Data-backed conversations."
    ],
    imagePrompt: "Pakistani parents (father and mother) sitting on a sofa looking at a smartphone happily, seeing a school report in Urdu, home setting in Karachi, traditional clothing, warm atmosphere, high quality"
  },
  {
    id: 'student',
    label: 'For Students',
    title: 'Personal AI Coach',
    subtitle: 'Study Smarter, Not Just Harder',
    icon: GraduationCap,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    description: "A private, judgment-free zone to understand weaknesses. Lumina identifies 'why' you are struggling and builds a custom mission to fix it.",
    benefits: [
      "Identifies the 'Why': Root cause analysis of grades.",
      "Personalized Missions: 'Spend 15 mins on biology diagrams'.",
      "Builds Confidence: Private tracking of progress.",
      "Future Skills: Develops effective study habits."
    ],
    imagePrompt: "Pakistani student boy studying at a desk with a laptop and open books, focused and motivated, late night study session with lamp, biology diagrams visible, cinematic lighting"
  },
  {
    id: 'admin',
    label: 'For Admins',
    title: 'The Control Tower',
    subtitle: 'Data-Driven School Leadership',
    icon: Building2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: "A 360-degree view of your institution's health. Spot systemic issues, allocate resources, and prove your school's value to parents.",
    benefits: [
      "360° Overview: Trends by grade, subject, and teacher.",
      "Teacher Support: Identify who needs mentorship.",
      "Operational Efficiency: Automate data collection.",
      "School Reputation: Modern, transparent branding."
    ],
    imagePrompt: "Pakistani school principal office, mature man sitting at a large desk looking at a large screen dashboard showing school statistics, school trophy case in background, professional atmosphere, Islamabad"
  }
];

export const StakeholderShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(stakeholders[0].id);
  const activeData = stakeholders.find(s => s.id === activeTab) || stakeholders[0];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
      {/* Sidebar / Tabs */}
      <div className="lg:w-1/3 bg-slate-50 border-r border-slate-100 p-2 lg:p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        {stakeholders.map((s) => {
          const Icon = s.icon;
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left min-w-[200px] lg:min-w-0 ${
                isActive 
                  ? 'bg-white shadow-lg ring-1 ring-slate-200' 
                  : 'hover:bg-white/50 hover:shadow-sm'
              }`}
            >
              <div className={`p-3 rounded-lg ${isActive ? s.bgColor + ' ' + s.color : 'bg-slate-200 text-slate-500'}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className={`font-bold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{s.label}</p>
                <p className="text-xs text-slate-400 hidden lg:block">{s.title}</p>
              </div>
              {isActive && <ArrowRight className={`ml-auto w-5 h-5 ${s.color}`} />}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="lg:w-2/3 p-8 lg:p-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
               <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeData.bgColor} ${activeData.color}`}>
                 {activeData.label}
               </span>
            </div>
            
            <h3 className="text-4xl font-black text-slate-900 mb-2">{activeData.title}</h3>
            <p className={`text-xl font-medium mb-6 ${activeData.color}`}>{activeData.subtitle}</p>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
               <div className="space-y-6">
                 <p className="text-slate-600 leading-relaxed text-lg">
                   {activeData.description}
                 </p>
                 <ul className="space-y-4">
                   {activeData.benefits.map((benefit, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <CheckCircle2 className={`w-6 h-6 shrink-0 ${activeData.color}`} />
                       <span className="text-slate-700 font-medium">{benefit}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div className="relative h-64 lg:h-auto rounded-2xl overflow-hidden shadow-2xl group">
                 <GeneratedImage 
                   prompt={activeData.imagePrompt}
                   alt={activeData.title}
                   className="w-full h-full"
                 />
                 <div className={`absolute inset-0 bg-gradient-to-t ${activeData.bgColor.replace('bg-', 'from-')}/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6`}>
                   <p className="text-slate-900 font-bold bg-white/90 backdrop-blur px-3 py-1 rounded-lg">
                     AI Visualization: {activeData.label} Scenario
                   </p>
                 </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};