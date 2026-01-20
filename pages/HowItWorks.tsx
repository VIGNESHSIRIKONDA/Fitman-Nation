import React from 'react';

const steps = [
  { title: 'Discovery', text: 'Explore our ecosystem. Identify your goals and see how our community operates.' },
  { title: 'Consultation', text: 'Book a free strategy call with a lead mentor to audit your lifestyle and fitness baseline.' },
  { title: 'Custom Plan', text: 'Receive a bespoke training and nutrition blueprint designed specifically for your body type.' },
  { title: 'Coaching & Tracking', text: 'Execute daily with real-time feedback, form correction, and relentless accountability.' },
  { title: 'Transformation', text: 'Achieve sustainable results. Graduate from the program with a new lifestyle and mindset.' }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black italic uppercase mb-4">The FitMan <span className="text-red-600">Journey</span></h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">A simple, proven process to take you from where you are to where you want to be.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((s, idx) => (
             <div key={idx} className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-neutral-900 p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-red-600/30 transition-all">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-xl font-black shadow-lg shadow-red-900/40 relative z-10">
                   {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="text-center md:text-left z-10">
                   <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                   <p className="text-neutral-400 leading-relaxed max-w-xl">{s.text}</p>
                </div>
                <div className="absolute top-0 right-0 text-[10rem] font-black italic text-white/5 leading-none -mt-4 -mr-4 select-none pointer-events-none">
                    {idx + 1}
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
