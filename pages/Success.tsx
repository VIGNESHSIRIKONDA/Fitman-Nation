import React from 'react';
import { MOCK_TESTIMONIALS } from '../constants';

const Success: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-black italic uppercase mb-16 text-center tracking-tighter">
          Success <span className="text-red-600">Wall</span>
        </h1>

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {MOCK_TESTIMONIALS.map((story) => (
            <div key={story.id} className="bg-neutral-900 rounded-[40px] overflow-hidden border border-white/5 flex flex-col md:flex-row group transition-all hover:border-red-600/20">
              <div className="md:w-1/2 h-[400px] overflow-hidden">
                <img src={story.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={story.name} />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4">{story.tag}</span>
                <h3 className="text-4xl font-black italic mb-2 uppercase">{story.name}</h3>
                <p className="text-2xl font-bold text-white mb-6 underline decoration-red-600 underline-offset-8 decoration-4">{story.result}</p>
                <p className="text-neutral-400 text-lg italic leading-relaxed mb-8">"{story.text}"</p>
                <div className="flex space-x-2">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-red-600">★</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
