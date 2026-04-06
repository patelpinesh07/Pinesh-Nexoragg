
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="text-5xl md:text-8xl font-black font-heading mb-6 tracking-tighter">Case Studies</h1>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
          Deep dives into the challenges, solutions, and measurable results delivered for my partners.
        </p>
      </div>

      <div className="space-y-40">
        {CASE_STUDIES.map((cs, idx) => (
          <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-8 group border border-neutral-900 shadow-2xl group-hover:shadow-blue-500/10 transition-shadow">
                <img 
                  src={cs.thumbnail} 
                  alt={cs.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {cs.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-blue-400 transition-colors border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                {cs.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">{cs.title}</h2>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-neutral-500 font-bold mb-3 uppercase tracking-widest text-xs">The Challenge</h4>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 font-bold mb-3 uppercase tracking-widest text-xs">The Solution</h4>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="text-neutral-500 font-bold mb-4 uppercase tracking-widest text-xs">Results</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cs.results.map((r, i) => (
                      <li key={i} className="p-4 glass rounded-xl border-l-4 border-blue-500 bg-white/[0.005] hover:bg-blue-500/[0.02] transition-colors">
                        <p className="font-bold text-lg text-white">{r.split(' ')[0]}</p>
                        <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">{r.split(' ').slice(1).join(' ')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-blue-500/20">
                  Full Write-up Soon <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
