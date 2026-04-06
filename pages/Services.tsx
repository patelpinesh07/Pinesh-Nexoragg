
import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';
import { Layout, Code, Target, Share2, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, any> = {
    'uiux': Layout,
    'dev': Code,
    'meta-ads': Target,
    'social': Share2,
    'video': Video
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-8xl font-black font-heading mb-6 tracking-tighter">Expertise</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            A diverse skill set refined through years of collaboration with high-growth startups and global brands.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.id] || Layout;
            
            const accentClasses = 
              s.id === 'uiux' ? { border: 'border-l-blue-500' } :
              s.id === 'dev' ? { border: 'border-l-cyan-400' } :
              s.id === 'meta-ads' ? { border: 'border-l-indigo-500' } :
              s.id === 'social' ? { border: 'border-l-blue-400' } :
              { border: 'border-l-cyan-500' };

            return (
              <div 
                key={s.id}
                id={s.id} 
                className={`p-10 md:p-16 glass rounded-[3rem] transition-all duration-700 border-l-8 ${accentClasses.border} border border-white/5 shadow-2xl overflow-hidden group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 group-hover:text-blue-400 transition-colors">{s.title}</h2>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed font-light">
                      {s.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {s.details.map(detail => (
                        <div key={detail} className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/5">
                          <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-neutral-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-[2rem]">
                    <img 
                      src={`https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop`} 
                      alt={s.title} 
                      className="w-full h-full object-cover filter brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 border border-neutral-800" 
                    />
                    <div className="absolute inset-0 rounded-[2rem] bg-blue-500/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-32 text-center p-20 glass rounded-[4rem] relative overflow-hidden border-blue-500/20 shadow-2xl transition-all duration-500 hover:border-blue-500/40"
        >
          {/* Reactive Spotlight Background */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-out"
            style={{
              opacity: isHovered ? 1 : 0.6,
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 35%, transparent 70%)`,
            }}
          />
          
          {/* Floating Decorative Glass Orbs */}
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 relative leading-tight text-white drop-shadow-sm">
              Need a <span className="text-blue-400">custom stack?</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto relative font-light">
              Let's discuss your unique project requirements and build a tailored solution that fits your brand perfectly.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 gradient-bg px-12 py-5 rounded-full font-bold text-xl hover:scale-110 hover:-translate-y-1 transition-all relative z-10 text-white shadow-xl shadow-blue-900/40 group/btn overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
