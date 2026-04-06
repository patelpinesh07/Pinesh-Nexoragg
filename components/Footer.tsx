
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowUpRight, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold font-heading tracking-tighter mb-6 block">NEXORA</Link>
          <p className="text-neutral-400 text-lg max-w-md mb-8">
            Designing and building high-performance digital brands for the next generation of startups. Led by Pinesh Patel.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 glass rounded-xl hover:bg-neutral-800 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-3 glass rounded-xl hover:bg-neutral-800 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-3 glass rounded-xl hover:bg-neutral-800 transition-colors"><Github size={20} /></a>
            <a href="#" className="p-3 glass rounded-xl hover:bg-neutral-800 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/case-studies" className="text-neutral-400 hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Inquiries</h4>
          <a href="mailto:hello@nexus.studio" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            hello@nexus.studio <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <p className="mt-4 text-neutral-400">Available for freelance & full-time roles.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Pinesh Patel | Nexus Creative Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
