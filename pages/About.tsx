import React from 'react';
import { Section } from '../components/Section';
import { ImageHeader } from '../components/ImageHeader';
import { Users, Award, Building, Globe, Zap, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <ImageHeader 
        title="About Lumina"
        subtitle="Born from a vision to equalize education. Powered by cutting-edge AI. Dedicated to the future of Pakistan."
        prompt="Diverse group of Pakistani educators and developers collaborating in a modern office in Lahore, glass walls, view of Badshahi Mosque in distance, warm sunset lighting, professional, hopeful"
        className="rounded-none mb-0 h-[500px]"
      />

      <div className="bg-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto">
          We are building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-600 to-peach-500">Education OS</span> for Pakistan.
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Lumina is more than a tool; it is a movement to bridge the educational divide through data. 
          Our mission is to ensure that every student—regardless of their school's location or resources—is seen, understood, and supported by intelligent technology.
        </p>
      </div>

      <Section title="Our Core Values" className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-lumina-100 text-lumina-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Empathy First</h3>
              <p className="text-slate-600">We believe AI should amplify human connection, not replace it. Every report we generate is designed to build trust between teachers and parents.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-peach-100 text-peach-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Radical Inclusion</h3>
              <p className="text-slate-600">Language shouldn't be a barrier. Our bilingual (Urdu/English) systems ensure that every stakeholder is an active participant.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Action Over Analysis</h3>
              <p className="text-slate-600">Data is useless without action. We focus on providing concrete, actionable steps ("Review Algebra") rather than just static charts.</p>
           </div>
        </div>
      </Section>

      <Section title="Our Path Forward">
        <div className="relative border-l-4 border-lumina-200 ml-6 md:ml-0 md:max-w-2xl md:mx-auto space-y-12">
          <div className="relative pl-8">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lumina-600 rounded-full border-4 border-white" />
            <span className="text-sm font-bold text-lumina-600">Phase 1: Foundation</span>
            <h3 className="text-xl font-bold text-slate-800">The Pilot Era</h3>
            <p className="text-slate-600 mt-2">Successfully deployed in 5 low-income private schools in Lahore, processing over 10,000 assignments and proving the efficacy of our Hybrid AI model.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lumina-600 rounded-full border-4 border-white" />
            <span className="text-sm font-bold text-lumina-600">Phase 2: Expansion</span>
            <h3 className="text-xl font-bold text-slate-800">Regional Scaling</h3>
            <p className="text-slate-600 mt-2">Expanding to 50+ schools across Sindh and Punjab. Introducing the "Ministry Dashboard" for government-level oversight.</p>
          </div>
          <div className="relative pl-8">
             <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white" />
             <span className="text-sm font-bold text-purple-600">Phase 3: The Future</span>
             <h3 className="text-xl font-bold text-slate-800">National Integration</h3>
             <p className="text-slate-600 mt-2">Establishing Lumina as the standard operating system for public education in Pakistan, powering millions of student success stories.</p>
          </div>
        </div>
      </Section>

      <Section title="Leadership" dark>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800 rounded-xl overflow-hidden text-center p-6 border border-slate-700 hover:border-lumina-500 transition-colors">
              <img src={`https://picsum.photos/seed/team${i}/200/200`} alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 object-cover" />
              <h3 className="text-xl font-bold text-white">Team Member {i}</h3>
              <p className="text-lumina-400 text-sm uppercase tracking-wide mb-4">Co-Founder</p>
              <p className="text-slate-400 text-sm">Ex-LUMS, 5 years in EdTech development and policy research.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};