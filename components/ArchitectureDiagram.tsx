import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, MessageSquare, ChevronRight, Server, FileOutput } from 'lucide-react';

const steps = [
  {
    id: 'input',
    icon: <Database className="w-8 h-8 text-blue-500" />,
    title: "Layer 1: Input",
    subtitle: "Messy Data Ingestion",
    description: "Accepts non-standardized CSVs, Excel sheets, and even SMS attendance logs. Pre-processing algorithms normalize the data for AI consumption.",
    color: "border-blue-200 bg-blue-50"
  },
  {
    id: 'intelligence',
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: "Layer 2: Intelligence",
    subtitle: "Hybrid Model (SLM + LLM)",
    description: "A local SLM handles rapid statistical analysis, while Gemini 3 Pro performs deep reasoning to identify 'quiet strugglers' and behavioral patterns.",
    color: "border-purple-200 bg-purple-50"
  },
  {
    id: 'output',
    icon: <FileOutput className="w-8 h-8 text-green-500" />,
    title: "Layer 3: Output",
    subtitle: "Localized Action",
    description: "Natural Language Generation creates empathetic, actionable reports in Urdu or English, ready for WhatsApp distribution to parents.",
    color: "border-green-200 bg-green-50"
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center py-12">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <motion.div
            className={`flex-1 relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${step.color} ${activeStep === step.id ? 'ring-4 ring-offset-2 ring-lumina-200 scale-105 shadow-xl' : 'hover:shadow-lg'}`}
            whileHover={{ y: -5 }}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
          >
            <div className="flex flex-col items-center text-center h-full">
              <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{step.title}</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">{step.subtitle}</p>
              
              <AnimatePresence>
                {(activeStep === step.id || window.innerWidth >= 1024) && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-slate-600 text-sm leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Mobile expansion hint */}
              <div className="lg:hidden mt-auto pt-4 text-slate-400">
                <p className="text-xs">Tap to details</p>
              </div>
            </div>
          </motion.div>
          
          {index < steps.length - 1 && (
            <div className="hidden lg:flex items-center justify-center text-slate-300">
              <ChevronRight className="w-8 h-8 animate-pulse" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};