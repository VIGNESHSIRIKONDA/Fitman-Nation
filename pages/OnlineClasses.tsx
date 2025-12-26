import React from 'react';

const classes = [
  { id: 'yoga', title: 'Yoga', desc: 'Breathwork, flexibility, and balance routines.', schedule: 'Mon/Wed/Fri • 7:00 AM' },
  { id: 'zumba', title: 'Zumba', desc: 'High-energy dance cardio for all levels.', schedule: 'Tue/Thu • 6:00 PM' },
  { id: 'mobility', title: 'Mobility Training', desc: 'Joint health and movement quality sessions.', schedule: 'Sat • 8:00 AM' },
  { id: 'strength', title: 'Strength Training', desc: 'Progressive strength classes focused on technique.', schedule: 'Mon/Wed/Fri • 6:00 PM' }
];

const OnlineClasses: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black italic uppercase mb-4">Online Classes</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">Choose a category and book a class via WhatsApp or our contact form.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map(c => (
            <div key={c.id} className="bg-neutral-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-neutral-400 mb-4">{c.desc}</p>
              <p className="text-sm text-neutral-500 mb-4">Schedule: {c.schedule}</p>
              <div className="flex gap-4">
                <a href="https://wa.me/917799825216" className="px-4 py-2 bg-red-600 rounded-full text-white font-bold">Book Class</a>
                <a href="/?consult=true" className="px-4 py-2 bg-white rounded-full font-bold">Contact</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
