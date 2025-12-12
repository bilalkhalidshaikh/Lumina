import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', school: '', role: 'teacher' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Section title="Get Started with Lumina" subtitle="Schedule a demo or request a pilot for your institution.">
        <div className="grid md:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h3>
              <p className="text-slate-600">We are currently accepting new pilot partners for the Fall 2025 semester.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 bg-lumina-100 rounded-full flex items-center justify-center text-lumina-600">
                  <Mail className="w-5 h-5" />
                </div>
                <span>partnerships@lumina.edu.pk</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 bg-lumina-100 rounded-full flex items-center justify-center text-lumina-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>National Incubation Center, Islamabad</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                 <div className="w-10 h-10 bg-lumina-100 rounded-full flex items-center justify-center text-lumina-600">
                   <Phone className="w-5 h-5" />
                 </div>
                 <span>+92 300 1234567</span>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-2">For Investors</h4>
              <p className="text-sm text-slate-300">Request our Series A pitch deck and financial projections.</p>
              <button className="mt-4 text-xs font-bold uppercase tracking-widest text-lumina-400 hover:text-white transition-colors">
                Contact IR Team &rarr;
              </button>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Request Received!</h3>
                <p className="text-green-700 mt-2">Our team will reach out to you within 24 hours to schedule your personalized demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-lumina-500 focus:border-transparent outline-none transition-all"
                    placeholder="Dr. Sara Ahmed"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-lumina-500 focus:border-transparent outline-none transition-all"
                    placeholder="sara@school.edu.pk"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Institution Name</label>
                   <input 
                     type="text" 
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-lumina-500 focus:border-transparent outline-none transition-all"
                     placeholder="City School System"
                     value={formState.school}
                     onChange={e => setFormState({...formState, school: e.target.value})}
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">I am a...</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-lumina-500 focus:border-transparent outline-none transition-all bg-white"
                    value={formState.role}
                    onChange={e => setFormState({...formState, role: e.target.value})}
                  >
                    <option value="teacher">Teacher</option>
                    <option value="admin">School Administrator</option>
                    <option value="govt">Government Official</option>
                    <option value="investor">Investor</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-lumina-600 text-white font-bold py-4 rounded-lg hover:bg-lumina-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};