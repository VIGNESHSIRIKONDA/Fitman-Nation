
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { MOCK_PROGRAMS, MOCK_TESTIMONIALS, MOCK_EVENTS } from '../constants';

const Home: React.FC = () => {
  const { search } = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.get('consult') === 'true') {
      const el = document.getElementById('consultation');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        const firstInput: HTMLInputElement | null = el.querySelector('input');
        if (firstInput) firstInput.focus();
      }
    }
  }, [search]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920"
            alt="Intense Gym Workout"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
              TRAIN <span className="text-red-600 underline decoration-4">SMARTER</span>.<br />
              WITH MENTORS.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl font-light">
              Connect with elite fitness mentors for personalized plans, high-octane community runs, and a lifestyle built on sustainable progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/?consult=true" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-black text-lg text-center transition-all transform hover:scale-105 shadow-xl shadow-red-900/40">
                JOIN THE NATION
              </Link>
              <Link to="/programs" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-black text-lg text-center transition-all">
                EXPLORE PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black italic mb-4 uppercase">What We Do at FitMan Nation</h2>
            <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
              FitMan Nation helps individuals transform their bodies and lifestyles through structured fitness training, personalized diet strategies, and a powerful fitness community. We combine science-based workouts, practical nutrition guidance, and real human accountability to help people stay consistent, motivated, and results-driven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-4">🏋️</div>
              <h4 className="font-bold mb-2">Fitness & Training Programs</h4>
              <p className="text-neutral-400 text-sm">Science-backed workouts and mentor guidance.</p>
            </div>
            <div className="bg-black/40 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-4">🥗</div>
              <h4 className="font-bold mb-2">Diet & Nutrition Guidance</h4>
              <p className="text-neutral-400 text-sm">Practical meal strategies built for real life.</p>
            </div>
            <div className="bg-black/40 rounded-2xl p-8 text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="font-bold mb-2">Community & Accountability</h4>
              <p className="text-neutral-400 text-sm">Join events, challenges, and peer support groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic mb-4 uppercase">Elite Programs</h2>
              <div className="w-24 h-2 bg-red-600 mb-6"></div>
              <p className="text-neutral-400 max-w-xl">Choose the path that fits your current reality. Whether you need foundation or total transformation.</p>
            </div>
            <Link to="/programs" className="text-red-600 font-bold hover:underline flex items-center group">
              VIEW ALL PROGRAMS <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PROGRAMS.map((program) => (
              <div key={program.id} className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 transition-all hover:border-red-600/50">
                <div className="h-64 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black italic mb-2 tracking-tighter">{program.title}</h3>
                  <p className="text-sm text-neutral-400 mb-6 line-clamp-2">{program.description}</p>
                  <p className="text-red-600 font-black text-2xl mb-6">{program.price}</p>
                  <Link to="/programs" className="block text-center py-3 bg-white/5 hover:bg-red-600 rounded-xl transition-all font-bold uppercase text-sm tracking-widest">ENROLL NOW</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-neutral-900 overflow-hidden relative">
         <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-4xl font-black italic mb-16 text-center uppercase">The Roadmap to Success</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -z-10 hidden md:block"></div>
             {[
               { step: '01', title: 'Consultation', text: 'Free assessment with a fitness mentor.' },
               { step: '02', title: 'Design', text: 'Customized workout & nutrition blueprint.' },
               { step: '03', title: 'Execution', text: 'Daily workouts with active accountability.' },
               { step: '04', title: 'Review', text: 'Progress tracking & goal refinement.' }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-red-900/50">{item.step}</div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-sm text-neutral-400">{item.text}</p>
               </div>
             ))}
           </div>
         </div>
      </section>
      {/* Join WhatsApp Community Strip */}
      <section className="py-8 bg-red-600">
        <div className="container mx-auto px-4 text-center text-black">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold">Join Our WhatsApp Fitness Community</div>
            <div className="text-sm max-w-xl text-black/80">Get daily tips, event alerts, motivation, and direct access to the FitMan Nation community.</div>
            <a href="https://wa.me/917799825216" className="bg-white px-6 py-3 rounded-full font-bold">👉 Join WhatsApp Community</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black italic mb-12 text-center uppercase">Real Stories, Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-black/50 p-8 rounded-3xl border border-white/5 flex gap-6">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-red-600 object-cover hidden sm:block" />
                <div>
                  <p className="text-lg italic text-neutral-300 mb-4">"{t.text}"</p>
                  <h4 className="font-bold text-red-600">{t.name}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Community Activities */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black italic mb-8 text-center uppercase">Upcoming Events & Community Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_EVENTS.map(e => (
              <div key={e.id} className="bg-neutral-900 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{e.title}</h3>
                    <p className="text-sm text-neutral-400">{e.date} • {e.time} • {e.location}</p>
                  </div>
                  <div className="text-sm text-red-600 font-bold">{e.category}</div>
                </div>
                <p className="text-neutral-400 mb-4">{e.description}</p>
                <div className="flex justify-end">
                  <a href="/events" className="px-4 py-2 bg-red-600 rounded-full text-white font-bold">View Details / Register</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Lead Capture Section */}
      <section id="consultation" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black italic mb-8 uppercase leading-tight">Get a Free Consultation</h2>
              <p className="text-xl text-neutral-400 mb-8 font-light leading-relaxed">
                Not sure where to start? Speak with our coaches and get a personalized fitness direction based on your goals, body type, and lifestyle.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-neutral-300"><span className="text-red-600 mr-3">✓</span> 15-Minute Expert Strategy Call</li>
                <li className="flex items-center text-neutral-300"><span className="text-red-600 mr-3">✓</span> Body Type & Metabolism Assessment</li>
                <li className="flex items-center text-neutral-300"><span className="text-red-600 mr-3">✓</span> Initial Mobility Screening</li>
              </ul>
              {/* <div className="flex gap-4">
                <a href="/?consult=true" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all uppercase text-sm tracking-widest">Get Free Consultation</a>
                <a href="https://wa.me/917799825216" className="bg-white text-black px-8 py-3 rounded-xl font-bold transition-all uppercase text-sm tracking-widest">WhatsApp</a>
              </div> */}
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
