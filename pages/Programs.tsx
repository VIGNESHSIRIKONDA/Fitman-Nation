
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black italic uppercase mb-6 tracking-tighter">Training <span className="text-red-600">Ecosystem</span></h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
            We don't do cookie-cutter plans. Every program is adaptive, mentor-driven, and designed for long-term health.
          </p>
        </div>

        <div className="space-y-20">
          {MOCK_PROGRAMS.map((program, idx) => (
            <div key={program.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <img src={program.image} alt={program.title} className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl transition-all duration-700 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-red-600/10 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-red-600 font-black tracking-widest text-sm mb-4 block uppercase">Program {idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-black italic mb-6 leading-tight">{program.title}</h2>
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed italic">{program.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="font-bold text-white mb-4 uppercase tracking-tighter border-b border-red-600 inline-block">Key Features</h4>
                    <ul className="space-y-2 mt-4">
                      {program.features.map(f => <li key={f} className="text-sm text-neutral-400 flex items-center"><span className="text-red-600 mr-2">•</span> {f}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-4 uppercase tracking-tighter border-b border-red-600 inline-block">Outcomes</h4>
                    <ul className="space-y-2 mt-4">
                      {program.benefits.map(b => <li key={b} className="text-sm text-neutral-400 flex items-center"><span className="text-red-600 mr-2">•</span> {b}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-neutral-900 rounded-2xl border border-white/5">
                  <div>
                    <span className="text-neutral-500 text-xs block mb-1">MEMBERSHIP STARTS AT</span>
                    <span className="text-3xl font-black text-white">{program.price}</span>
                  </div>
                  <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all uppercase text-sm tracking-widest">
                    ENROLL NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
