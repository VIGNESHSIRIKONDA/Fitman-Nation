
import React, { useState } from 'react';
import { ExperienceLevel, LeadFormData } from '../types';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    experienceLevel: ExperienceLevel.BEGINNER,
    medicalConditions: false,
    medicalDetails: '',
    preferredLocation: 'gym',
    availableTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a WhatsApp message with the provided details
    const number = '917799825216'; // include country code (example)
    const message = `Hi FitMan Nation! I'd like a Free Consultation.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nGoal: ${formData.fitnessGoal}\nExperience: ${formData.experienceLevel}\nMedical: ${formData.medicalConditions ? formData.medicalDetails : 'None' }`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    // open WhatsApp in a new tab/window
    window.open(url, '_blank', 'noopener');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-600/20 border border-green-600 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p>Our mentors will contact you within 24 hours to schedule your free consultation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
          <input
            required
            type="text"
            className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2">Phone Number</label>
          <input
            required
            type="tel"
            className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none"
            placeholder="+1 234 567 890"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
        <input
          required
          type="email"
          className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2">Fitness Goal</label>
          <select
            className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none"
            value={formData.fitnessGoal}
            onChange={(e) => setFormData({...formData, fitnessGoal: e.target.value})}
          >
            <option value="">Select Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="endurance">Endurance</option>
            <option value="mobility">Mobility</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2">Experience Level</label>
          <select
            className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none"
            value={formData.experienceLevel}
            onChange={(e) => setFormData({...formData, experienceLevel: e.target.value as ExperienceLevel})}
          >
            {Object.values(ExperienceLevel).map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-2 py-2">
        <input
          type="checkbox"
          id="medical"
          checked={formData.medicalConditions}
          onChange={(e) => setFormData({...formData, medicalConditions: e.target.checked})}
          className="accent-red-600 w-4 h-4"
        />
        <label htmlFor="medical" className="text-sm">I have medical conditions/mobility limits</label>
      </div>

      {formData.medicalConditions && (
        <textarea
          className="w-full bg-black border border-white/20 rounded-lg p-3 focus:border-red-600 outline-none h-24"
          placeholder="Please describe..."
          value={formData.medicalDetails}
          onChange={(e) => setFormData({...formData, medicalDetails: e.target.value})}
        />
      )}

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]"
      >
        GET FREE CONSULTATION
      </button>
    </form>
  );
};

export default LeadForm;
