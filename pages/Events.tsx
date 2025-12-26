
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_EVENTS } from '../constants';

const EVENT_IMAGES: Record<string, string> = {
  'e1': 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
  'e2': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
};

const Events: React.FC = () => {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const handleRegister = (id: string) => {
    if (registeredEvents.includes(id)) return;
    setRegisteredEvents([...registeredEvents, id]);
    alert("You're registered! Check your email for details.");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase mb-6 tracking-tighter">
            Community <span className="text-red-600">Events</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light italic">
            Fitness is a team sport. Join our runs, workshops, and high-intensity meetups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={EVENT_IMAGES[event.id] || 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-red-600/10 text-red-600 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                      {event.category}
                    </span>
                    <div className="text-right">
                      <p className="text-white font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      <p className="text-neutral-500 text-xs uppercase">{event.time}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black italic mb-4 uppercase">{event.title}</h3>
                  <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-sm text-neutral-300 mb-8 bg-black/40 p-3 rounded-xl">
                    <span className="mr-2">📍</span> {event.location}
                  </div>
                </div>
                <button
                  onClick={() => handleRegister(event.id)}
                  disabled={registeredEvents.includes(event.id)}
                  className={`w-full py-4 rounded-xl font-bold transition-all uppercase text-sm tracking-widest ${
                    registeredEvents.includes(event.id) 
                    ? 'bg-green-600/20 text-green-500 cursor-default' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {registeredEvents.includes(event.id) ? '✓ REGISTERED' : 'JOIN EVENT'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white/5 p-12 rounded-[40px] border border-dashed border-white/10">
          <h3 className="text-2xl font-bold mb-4">Want to host an event?</h3>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto italic">We are looking for local ambassadors to lead community runs in new cities.</p>
          <Link to="/contact" className="text-red-600 font-bold hover:underline">BECOME AN AMBASSADOR →</Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
