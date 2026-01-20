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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROGRAMS.map((program) => (
            <div key={program.id} className="bg-neutral-900 rounded-[30px] overflow-hidden border border-white/5 flex flex-col group hover:border-red-600/30 transition-all duration-300">
               <div className="relative h-64 overflow-hidden">
                 <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{program.price}</span>
                 </div>
               </div>
               
               <div className="p-8 flex-1 flex flex-col">
                 <h2 className="text-2xl font-black italic mb-4 uppercase">{program.title}</h2>
                 <p className="text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">{program.description}</p>
                 
                 <div className="space-y-4 mb-8">
                   <div>
                     <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-red-600">Key Features</h4>
                     <ul className="space-y-1">
                       {program.features.slice(0, 3).map(f => (
                         <li key={f} className="text-xs text-neutral-500">• {f}</li>
                       ))}
                     </ul>
                   </div>
                 </div>

                 <Link to="/?consult=true" className="w-full block bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 text-white py-3 rounded-xl font-bold text-center transition-all uppercase text-xs tracking-widest">
                   Join Program
                 </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
