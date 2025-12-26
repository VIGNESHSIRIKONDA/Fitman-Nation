
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-6 tracking-tighter">
            Connect with <span className="text-red-600">Mentors</span>
          </h1>
          <p className="text-neutral-400 text-lg font-light">Direct access for partnerships, medical queries, and elite coaching.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="bg-neutral-900 p-10 rounded-[40px] border border-white/5">
              <h3 className="text-2xl font-bold mb-6 italic uppercase">Global Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-2xl text-red-600">📍</div>
                  <div>
                    <h5 className="font-bold text-white">NYC Downtown</h5>
                    <p className="text-neutral-400 text-sm">242 West 27th St, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-2xl text-red-600">📧</div>
                  <div>
                    <h5 className="font-bold text-white">Email Us</h5>
                    <p className="text-neutral-400 text-sm">mentors@fitmannation.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600/10 p-3 rounded-2xl text-red-600">💬</div>
                  <div>
                    <h5 className="font-bold text-white">WhatsApp Direct</h5>
                    <p className="text-neutral-400 text-sm">+1 (555) 902-1234</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h4 className="font-bold mb-6 italic uppercase text-red-600">Social Nation</h4>
              <div className="flex space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">IG</div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">YT</div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">LI</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {isSent ? (
              <div className="bg-neutral-900 border border-red-600/30 p-12 rounded-[40px] text-center flex flex-col items-center justify-center h-full animate-in zoom-in">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
                <h3 className="text-3xl font-black italic uppercase mb-4">Message Transmitted</h3>
                <p className="text-neutral-400 italic">A mentor will review your inquiry and reach out within 12 business hours.</p>
                <button onClick={() => setIsSent(false)} className="mt-8 text-red-600 font-bold hover:underline">SEND ANOTHER MESSAGE</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 p-10 rounded-[40px] border border-white/10 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Inquiry Type</label>
                  <select required className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none focus:border-red-600 appearance-none">
                    <option value="">Select Department</option>
                    <option value="coaching">Personal Coaching</option>
                    <option value="medical">Medical/Mobility Special Case</option>
                    <option value="corporate">Corporate Wellness</option>
                    <option value="press">Media & Press</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="text" placeholder="First Name" className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none focus:border-red-600" />
                  <input required type="text" placeholder="Last Name" className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none focus:border-red-600" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none focus:border-red-600" />
                <textarea required placeholder="How can we help you achieve your goal?" className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none h-40 focus:border-red-600 resize-none"></textarea>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
