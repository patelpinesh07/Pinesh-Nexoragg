
import React, { useState } from 'react';
import { Mail, Send, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const SOCIAL_LINKS = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/nexus-creative',
      hoverColor: 'hover:text-white hover:border-neutral-400 hover:shadow-white/10'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/nexus-creative',
      hoverColor: 'hover:text-blue-400 hover:border-blue-500/50 hover:shadow-blue-500/20'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/nexus_creative',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
    }
  ];

  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl md:text-8xl font-black font-heading mb-8 tracking-tighter">Let's <span className="text-blue-500">Talk.</span></h1>
          <p className="text-xl text-neutral-400 mb-12 max-w-md font-light leading-relaxed">
            Have a project in mind? Looking for a long-term partnership? Drop me a line below.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all border-white/5">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">Email Me</p>
                <a href="mailto:hello@nexus.studio" className="text-xl font-medium hover:text-blue-400 transition-colors">hello@nexus.studio</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">Location</p>
                <p className="text-xl font-medium text-neutral-200">Navsari, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] mb-8">Follow & Connect</p>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-16 h-16 glass rounded-2xl flex items-center justify-center transition-all duration-500 border-white/5 shadow-lg group hover:scale-110 hover:-translate-y-2 ${social.hoverColor}`}
                >
                  <social.icon size={28} className="transition-transform group-hover:rotate-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] relative border-white/5 shadow-2xl shadow-blue-900/5">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-neutral-400 mb-8 font-light">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 glass rounded-full font-bold hover:bg-neutral-800 transition-all border-blue-500/20"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition-all placeholder:text-neutral-700 text-white"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition-all placeholder:text-neutral-700 text-white"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Inquiry about new project"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition-all placeholder:text-neutral-700 text-white"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your goals..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition-all resize-none placeholder:text-neutral-700 text-white"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 gradient-bg rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 text-white shadow-xl shadow-blue-900/30"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
