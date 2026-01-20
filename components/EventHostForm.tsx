import React, { useState } from 'react';

const EventHostForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', eventType: '', location: '', expectedAttendees: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `EVENT HOSTING REQUEST\nName: ${formData.name}\nEmail: ${formData.email}\nEvent Type: ${formData.eventType}\nLocation: ${formData.location}\nAttendees: ${formData.expectedAttendees}`;
        window.open(`https://wa.me/917799825216?text=${encodeURIComponent(message)}`, '_blank');
        setSubmitted(true);
    };

    if (submitted) return <div className="text-center text-green-500 font-bold p-8 bg-green-900/20 rounded-2xl">Request Sent! We will be in touch.</div>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto">
             <div>
                <label className="block text-xs font-bold uppercase mb-1">Name / Organization</label>
                <input required className="w-full bg-black border border-white/20 rounded p-3" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase mb-1">Email</label>
                    <input required type="email" className="w-full bg-black border border-white/20 rounded p-3" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                     <label className="block text-xs font-bold uppercase mb-1">Phone</label>
                     <input required type="tel" className="w-full bg-black border border-white/20 rounded p-3" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase mb-1">Proposed Event Type</label>
                <select className="w-full bg-black border border-white/20 rounded p-3" value={formData.eventType} onChange={e => setFormData({...formData, eventType: e.target.value})}>
                    <option value="">Select...</option>
                    <option value="Workshop">Fitness Workshop</option>
                    <option value="Community Run">Community Run</option>
                    <option value="Corporate Wellness">Corporate Wellness</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase mb-1">Proposed Location</label>
                    <input required className="w-full bg-black border border-white/20 rounded p-3" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
                <div>
                     <label className="block text-xs font-bold uppercase mb-1">Est. Attendees</label>
                     <input required type="number" className="w-full bg-black border border-white/20 rounded p-3" value={formData.expectedAttendees} onChange={e => setFormData({...formData, expectedAttendees: e.target.value})} />
                </div>
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold uppercase">Submit Proposal</button>
        </form>
    );
};
export default EventHostForm;
