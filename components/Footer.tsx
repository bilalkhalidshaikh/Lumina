import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hexagon, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Hexagon className="w-6 h-6" />
              <span className="text-xl font-bold">Lumina</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The AI Co-pilot for Pakistan's Education System.
              Transforming raw data into proactive student success stories.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/product" className="hover:text-white transition-colors">Features</NavLink></li>
              <li><NavLink to="/product" className="hover:text-white transition-colors">Architecture</NavLink></li>
              <li><NavLink to="/product" className="hover:text-white transition-colors">Security</NavLink></li>
              <li><NavLink to="/impact" className="hover:text-white transition-colors">Case Studies</NavLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/impact" className="hover:text-white transition-colors">Impact & SDGs</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Careers</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-lumina-500" />
                <span>hello@lumina.edu.pk</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-lumina-500" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Lumina Education Technologies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};