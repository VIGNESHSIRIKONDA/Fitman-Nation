
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-8 tracking-tighter">
              The <span className="text-red-600">Nation's</span> Roots
            </h1>
            <div className="w-24 h-2 bg-red-600 mb-8"></div>
            <p className="text-neutral-300 text-lg leading-loose mb-6">
              FitMan Nation was born from a simple observation: modern fitness is disconnected. Most people are either on their own with a generic app or lost in a massive, impersonal commercial gym.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-6">
              We created a sanctuary where <strong>mentorship</strong> is the core. It’s not just about lifting weights; it's about the psychological shift, the community support, and the science-backed protocols that ensure you never plateau.
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

        {/* Pillars */}
        <div className="bg-neutral-900 rounded-[50px] p-12 md:p-20 border border-white/5">
          <h2 className="text-3xl font-black italic mb-16 text-center uppercase">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🧠</div>
              <h4 className="text-xl font-bold mb-4 uppercase">Mindset First</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">We train the brain before the body. Discipline, resilience, and mental clarity are our starting points.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">🧬</div>
              <h4 className="text-xl font-bold mb-4 uppercase">Bio-Individual</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">No two bodies are the same. Our plans are mathematically aligned to your metabolism and genetics.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">🤝</div>
              <h4 className="text-xl font-bold mb-4 uppercase">Radical Community</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">Success isn't solitary. We provide a brotherhood and sisterhood that holds you to your highest standard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
