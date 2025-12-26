import React from 'react';

const steps = [
  { title: 'Sign-up & Consultation', text: 'Quick intake and goals discussion with a coach' },
  { title: 'Fitness Assessment', text: 'Body type, mobility and baseline testing' },
  { title: 'Customized Workout Plan', text: 'Tailored training plan based on assessment' },
  { title: 'Nutrition Guidance', text: 'Practical meal strategies for your lifestyle' },
  { title: 'Daily Accountability', text: 'Check-ins, reminders and mentor support' },
  { title: 'Progress Tracking', text: 'Regular reviews and data-driven tweaks' },
  { title: 'Community Events & Challenges', text: 'Engage with group activities and challenges' }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black italic uppercase mb-4">How FitMan Nation Works</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">A simple, proven process to take you from where you are to where you want to be.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={s.title} className="bg-neutral-900 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white mx-auto flex items-center justify-center font-bold mb-4">{String(idx + 1).padStart(2, '0')}</div>
              <h4 className="font-bold mb-2">{s.title}</h4>
              <p className="text-neutral-400 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
