
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section (Revised) */}
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
          <h2 className="text-3xl font-black italic mb-8 text-center uppercase">Meet Our Coaches & Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-6 rounded-2xl text-center">
              <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200" alt="Coach" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-bold">Amit Rao</h4>
              <p className="text-sm text-neutral-400">Head Coach — Strength & Conditioning (10+ yrs)</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl text-center">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Coach" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-bold">Neha Kapoor</h4>
              <p className="text-sm text-neutral-400">Nutrition Specialist — Fat Loss & Performance (8+ yrs)</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl text-center">
              <img src="https://images.unsplash.com/photo-1545996124-1b6a9b5a4b4c?auto=format&fit=crop&q=80&w=200" alt="Coach" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-bold">Rohit Singh</h4>
              <p className="text-sm text-neutral-400">Rehab & Mobility Coach — Injury Prevention (7+ yrs)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
