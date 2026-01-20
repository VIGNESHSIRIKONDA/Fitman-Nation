import React from 'react';
import { ONLINE_CLASSES } from '../constants';

const OnlineClasses: React.FC = () => {
    
  const handleBook = (className: string) => {
      // For now, redirect to WhatsApp with specific message as the booking mechanism
      const message = `Hi FitMan Nation, I would like to book a slot for the ${className} online class.`;
      window.open(`https://wa.me/917799825216?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black italic uppercase mb-4">Online <span className="text-red-600">Studio</span></h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
             Join our live mentor-led sessions from anywhere. High energy, real-time corrections, and community vibes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ONLINE_CLASSES.map(c => (
            <div key={c.id} className="bg-neutral-900 p-8 rounded-[30px] border border-white/5 flex flex-col hover:border-red-600/40 transition-all group">
              <h3 className="text-2xl font-black italic mb-2 uppercase">{c.title}</h3>
              <p className="text-neutral-400 mb-6 flex-1 text-sm leading-relaxed">{c.desc}</p>
              
              <div className="bg-black/40 rounded-xl p-4 mb-6">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Schedule</p>
                <p className="text-white font-bold">{c.schedule}</p>
              </div>

              <div className="flex gap-4">
                <button 
                    onClick={() => handleBook(c.title)}
                    className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-white font-bold uppercase text-xs tracking-widest transition-colors shadow-lg shadow-red-900/20"
                >
                    Book Class
                </button>
                <button 
                     onClick={() => handleBook(c.title)}
                     className="px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white font-bold uppercase text-xs tracking-widest transition-colors"
                >
                    Join Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
