import React from 'react';
import { COACHES } from '../constants';

const OTHER_COACHES = [
  {
     name: 'Amit Rao', role: 'Elite Performance Coach', image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200',
     bio: 'Expert in strength conditioning and athletic performance for competitive athletes.'
  },
  {
     name: 'Neha Kapoor', role: 'Nutrition Specialist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
     bio: 'Specializing in metabolic restoration, gut health, and sustainable fat loss strategies.'
  },
  {
     name: 'Rohit Singh', role: 'Mobility & Rehab Coach', image: 'https://images.unsplash.com/photo-1545996124-1b6a9b5a4b4c?auto=format&fit=crop&q=80&w=200',
     bio: 'Focusing on injury prevention, joint longevity, and post-rehab strength training.'
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-8 tracking-tighter">
                About <span className="text-red-600">FitMan Nation</span>
              </h1>
              <div className="w-24 h-2 bg-red-600 mb-8"></div>
              <p className="text-neutral-300 text-lg leading-loose mb-6">
                FitMan Nation was built with a simple belief — fitness should be practical, sustainable, and accessible to everyone. We focus on real-world transformation by combining structured workouts, lifestyle-friendly routines, and consistent accountability that fits into everyday life, not just the gym.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Our mission is to empower individuals to take control of their health through disciplined training, smart nutrition, and a strong support system. Our vision is to build India’s most trusted fitness community where transformation is not temporary, but a lifelong mindset supported by people, purpose, and progress.
              </p>
              <div className="flex space-x-12 mt-10">
                <div>
                  <span className="text-4xl font-black text-white block">500+</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Active Members</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-white block">15+</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Expert Mentors</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-white block">98%</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" className="rounded-[40px] shadow-2xl relative z-10" alt="Training Session" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-red-600 rounded-[40px] -z-10"></div>
            </div>
          </div>

        {/* Why FitMan Nation - Core Pillars */}
        <div className="bg-neutral-900 rounded-[20px] p-8 md:p-16 border border-white/5 mb-12">
          <h2 className="text-3xl font-black italic mb-12 text-center uppercase">Why FitMan Nation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h4 className="text-xl font-bold mb-2">Personalized Training</h4>
              <p className="text-neutral-400 text-sm">Programs tailored to individual goals and abilities.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h4 className="text-xl font-bold mb-2">Science-Backed Nutrition</h4>
              <p className="text-neutral-400 text-sm">Practical meal strategies grounded in evidence.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-2">Accountability & Discipline</h4>
              <p className="text-neutral-400 text-sm">Mentorship and tracking to keep you consistent.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2">Community & Support</h4>
              <p className="text-neutral-400 text-sm">Events, groups, and peer motivation.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-bold mb-2">Sustainable Lifestyle Approach</h4>
              <p className="text-neutral-400 text-sm">Long-term habits over quick fixes.</p>
            </div>
          </div>
        </div>

        {/* Team / Mentors */}
        <div className="mb-12">
          <h2 className="text-3xl font-black italic mb-12 text-center uppercase">Meet Our Mentors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {COACHES.map(coach => (
                 <div key={coach.id} className="bg-neutral-900 p-8 rounded-[30px] border border-white/5 text-center col-span-1 md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto mb-8 border-red-600/20 shadow-2xl shadow-red-900/10">
                    <img src={coach.image} className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-red-600" alt={coach.name} />
                    <h3 className="text-3xl font-black italic uppercase mb-2">{coach.name}</h3>
                    <p className="text-red-500 font-bold text-sm tracking-widest uppercase mb-6">{coach.role}</p>
                    <p className="text-white text-lg italic mb-6 font-light">"{coach.philosophy}"</p>
                    <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto">{coach.bio}</p>
                 </div>
             ))}

             {OTHER_COACHES.map((coach, i) => (
                <div key={i} className="bg-neutral-900 p-8 rounded-[30px] border border-white/5 text-center flex flex-col items-center hover:border-red-600/30 transition-all">
                    <img src={coach.image} className="w-24 h-24 rounded-full mb-4 object-cover grayscale hover:grayscale-0 transition-all border-2 border-white/10" alt={coach.name} />
                    <h4 className="font-bold text-lg mb-1">{coach.name}</h4>
                    <p className="text-xs text-red-600 tracking-widest uppercase mb-4 font-bold">{coach.role}</p>
                    <p className="text-sm text-neutral-400">{coach.bio}</p>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
