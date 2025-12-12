import React from 'react';
import { Section } from '../components/Section';
import { GeneratedImage } from '../components/GeneratedImage';
import { ImageHeader } from '../components/ImageHeader';
import { SDG_GOALS } from '../constants';
import { Globe, BarChart, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Impact: React.FC = () => {
  return (
    <div className="pt-20">
      <ImageHeader 
        title="Mission & Impact"
        subtitle="We are not just building software. We are building the data infrastructure for the future of Pakistan."
        prompt="Futuristic data center in Islamabad Pakistan, glowing server racks, large digital map of Pakistan on screens showing connectivity, high tech, blue and gold lighting, cinematic, 8k"
        className="rounded-none mb-0 h-[500px]" 
      />

      {/* SDG Alignment */}
      <Section title="UN Sustainable Development Goals">
        <div className="grid md:grid-cols-2 gap-8">
          {/* SDG 4: Quality Education */}
          <motion.div 
            className="group relative overflow-hidden rounded-2xl shadow-xl min-h-[400px]"
            whileHover={{ y: -5 }}
          >
            {/* Dynamic Animated Background for SDG 4 */}
            <div className="absolute inset-0 bg-red-600">
               <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                 <pattern id="pattern-books" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M5 25 Q 15 15, 25 25 T 45 25" fill="none" stroke="white" strokeWidth="2" />
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#pattern-books)" />
                 
                 {/* Floating animated icons */}
                 <motion.g 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="opacity-40"
                 >
                    <BookOpen x="80%" y="20%" width="100" height="100" stroke="white" strokeWidth="1" />
                 </motion.g>
               </svg>
               <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent"></div>
            </div>

            <div className="relative p-8 text-white h-full flex flex-col justify-between z-10">
              <div>
                <h3 className="text-6xl font-black opacity-20 mb-4">SDG 4</h3>
                <h2 className="text-3xl font-bold mb-4">Quality Education</h2>
                <p className="text-lg opacity-90">Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.</p>
              </div>
              <div className="mt-8 inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-semibold border border-white/30">
                5/5 Critical Relevance
              </div>
            </div>
          </motion.div>

          {/* SDG 8: Decent Work & Economic Growth */}
          <motion.div 
            className="group relative overflow-hidden rounded-2xl shadow-xl min-h-[400px]"
            whileHover={{ y: -5 }}
          >
             {/* Dynamic Animated Background for SDG 8 */}
            <div className="absolute inset-0 bg-red-700">
               <svg className="absolute inset-0 w-full h-full opacity-20">
                 {/* Rising bar chart animation */}
                 {[100, 150, 200, 250, 300].map((h, i) => (
                    <motion.rect 
                       key={i}
                       x={i * 80 + 20} 
                       y={400 - h} 
                       width="40" 
                       height={h} 
                       fill="white"
                       animate={{ height: [h, h + 50, h] }}
                       transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    />
                 ))}
               </svg>
               <div className="absolute inset-0 bg-gradient-to-t from-red-950 to-transparent"></div>
            </div>

            <div className="relative p-8 text-white h-full flex flex-col justify-between z-10">
              <div>
                <h3 className="text-6xl font-black opacity-20 mb-4">SDG 8</h3>
                <h2 className="text-3xl font-bold mb-4">Decent Work & Economic Growth</h2>
                <p className="text-lg opacity-90">Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work.</p>
              </div>
              <div className="mt-8 inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-semibold border border-white/30">
                High Impact
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Government Data Story */}
      <Section title="Turning Blind Spots into Data Points" dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300">
            <h3 className="text-2xl font-bold text-white">The Ministry of Education Problem</h3>
            <p>
              Currently, data from interior schools in Sindh and Balochistan takes months to reach decision-makers. It often arrives on paper, outdated and inaccurate.
            </p>
            <h3 className="text-2xl font-bold text-white">The Lumina Fix</h3>
            <p>
              Lumina aggregates anonymized performance data to create a "Heatmap of Need." We can tell the government which specific districts are failing in Math due to a lack of textbooks vs. a lack of teachers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Globe className="text-lumina-400" />
                <span>Real-time literacy tracking across provinces.</span>
              </li>
              <li className="flex items-center gap-3">
                <BarChart className="text-lumina-400" />
                <span>Data-driven budget allocation.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            {/* Visual representation of a map or chart */}
            <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
               {/* Ministry AI Image */}
               <GeneratedImage 
                prompt="Modern interior of Ministry of Education office in Islamabad Pakistan, large holographic map of Pakistan provinces glowing with data heatmaps on the wall, Pakistani flag, professional officials discussing strategy, cinematic, 4k"
                alt="Ministry of Education Islamabad"
                fallbackSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full"
               />
               <div className="absolute z-10 top-4 right-4 text-center bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                 <p className="text-2xl font-bold text-white">450+</p>
                 <p className="text-xs text-lumina-400 uppercase tracking-widest">Schools Monitored</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Video / Story Placeholder */}
      <Section title="A Teacher's Story">
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-2xl group cursor-pointer">
          <GeneratedImage 
            prompt="A heartwarming photo of a Pakistani female teacher helping a young student with a notebook in a bright classroom in Lahore, sunlight streaming through window, hopeful atmosphere, wearing hijab, education"
            alt="Teacher helping student"
            fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
          
          <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:bg-white/30 transition-all shadow-lg hover:scale-110">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
          <div className="absolute bottom-8 left-8 text-white z-10">
             <h3 className="text-2xl font-bold">Mrs. Rauf's 8th Grade Class</h3>
             <p className="text-slate-200">How she saved 5 students from dropping out.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};