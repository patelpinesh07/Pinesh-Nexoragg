
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layout, Code, Target, Share2, Video, Star } from 'lucide-react';
import { SERVICES, CASE_STUDIES, PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-blue-500/20 opacity-0 animate-fadeInUp">
            <Star size={16} className="text-blue-400 fill-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-300">Award Winning Digital Studio</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tight leading-[1.1] mb-8 text-white">
            I Design, Build & Grow <br />
            <span className="gradient-text">Digital Brands</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fadeInUp delay-400">
            Crafting premium experiences that blend strategic creative direction with high-performance execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fadeInUp delay-600">
            <Link 
              to="/case-studies" 
              className="px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full text-lg font-bold flex items-center gap-2 group text-white shadow-xl shadow-blue-500/20 hover:scale-[1.05] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:brightness-110 transition-all duration-500 ease-out"
            >
              View Case Studies <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-transparent rounded-full text-lg font-bold border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:scale-[1.05] hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-500 ease-out"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 gradient-bg rounded-3xl blur-2xl opacity-5 group-hover:opacity-15 transition-opacity duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Pinesh Patel" 
              className="relative rounded-2xl w-full h-[600px] object-cover border border-neutral-800 filter brightness-90 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block max-w-[200px] border-blue-500/20 shadow-2xl shadow-blue-900/10">
              <p className="text-2xl font-bold mb-1 text-blue-400">8+</p>
              <p className="text-neutral-400 text-sm">Years of experience in digital excellence.</p>
            </div>
          </div>
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Elevating startups through strategic design.</h2>
            <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
              Hi, I'm <span className="text-white font-bold">Pinesh Patel</span>, a digital professional from <span className="text-blue-400">Navsari</span> focused on delivering high-conversion solutions. My approach combines the storytelling of a boutique agency with the precision of a software house.
            </p>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Based in the vibrant city of Navsari, I work with global brands to bridge the gap between aesthetics and business goals. Whether it's building a brand from scratch or scaling an existing one through Meta Ads and data-driven UX.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold mb-1 text-white">150+</h4>
                <p className="text-neutral-500">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1 text-white">98%</h4>
                <p className="text-neutral-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-950/50 px-6 md:px-12 relative overflow-hidden border-y border-neutral-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Strategic Solutions</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Full-service digital partnership from conception to conversion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const IconComp = { Layout, Code, Target, Share2, Video }[s.icon as any] || Layout;
              return (
                <div key={s.id} className="glass p-10 rounded-3xl transition-all duration-500 group flex flex-col h-full border-white/5 hover:border-blue-500/40">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                    <IconComp size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                  <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{s.description}</p>
                  <ul className="space-y-3 mb-8">
                    {s.details.slice(0, 3).map(detail => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services?id=${s.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group/link hover:text-blue-400 transition-colors">
                    Explore Service <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Section Preview */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Featured Work</h2>
            <p className="text-neutral-400 text-lg">Case studies that speak louder than words.</p>
          </div>
          <Link to="/case-studies" className="px-8 py-4 glass rounded-full font-bold hover:bg-neutral-900 transition-colors border border-neutral-800 hover:border-blue-500/30">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.slice(0, 2).map((project) => (
            <Link to="/case-studies" key={project.id} className="group block">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-8 border border-neutral-900 shadow-lg group-hover:shadow-blue-500/10 transition-shadow">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12 backdrop-blur-sm">
                  <div className="w-full">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold mb-4 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-neutral-300 mb-6 max-w-md">{project.description}</p>
                    <div className="inline-flex items-center gap-2 font-bold bg-white text-black px-6 py-2 rounded-full">
                      View Case Study <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-neutral-950 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">How I Work</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">A systematic approach to solving complex problems and achieving results.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="glass p-10 rounded-3xl relative overflow-hidden group hover:border-blue-500/40 transition-colors h-full">
                <span className="absolute -top-10 -right-4 text-9xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors duration-500">
                  {idx + 1}
                </span>
                <step.icon size={40} className="mb-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Modern Tech Stack</h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              I leverage the best tools in the industry to ensure speed, reliability, and world-class aesthetics.
            </p>
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {[
                { name: 'React/Next.js', level: '95%' },
                { name: 'Figma/UI Design', level: '98%' },
                { name: 'Meta Ads Manager', level: '92%' },
                { name: 'Adobe Premiere/AE', level: '85%' },
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-neutral-200">{skill.name}</span>
                    <span className="text-sm text-neutral-500">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-bg rounded-full transition-all duration-1000" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <div key={i} className="aspect-square glass rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 group border-white/5 hover:border-blue-500/20">
                <img src={`https://picsum.photos/seed/tech-${i}/100/100`} alt="Tool" className="w-12 h-12 opacity-20 group-hover:opacity-80 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto gradient-bg rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black font-heading mb-8 text-white leading-tight">Let’s build something <br /> remarkable together.</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              Ready to take your digital presence to the next level? Book a discovery call today.
            </p>
            <Link 
              to="/contact" 
              className="relative inline-flex items-center gap-4 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 text-white px-12 py-6 rounded-full text-xl font-bold border border-white/20 shadow-2xl shadow-blue-950/50 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.8)] transition-all duration-500 group overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-3 group-hover:-translate-y-1 transition-transform duration-500 ease-out" />
              
              {/* Dynamic Glow Overlay for Parallax Sim */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-1000"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
