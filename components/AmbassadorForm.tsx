import React, { useState } from 'react';

const AmbassadorForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', city: '', socialHandle: '', reason: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `AMBASSADOR APPLICATION\nName: ${formData.name}\nEmail: ${formData.email}\nCity: ${formData.city}\nSocial: ${formData.socialHandle}\nReason: ${formData.reason}`;
        window.open(`https://wa.me/917799825216?text=${encodeURIComponent(message)}`, '_blank');
        setSubmitted(true);
    };

    if (submitted) return <div className="text-center text-green-500 font-bold p-8 bg-green-900/20 rounded-2xl">Application Sent! We will review and contact you.</div>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-xl mx-auto">
            <div>
                <label className="block text-xs font-bold uppercase mb-1">Name</label>
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
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase mb-1">City</label>
                    <input required className="w-full bg-black border border-white/20 rounded p-3" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>
                <div>
                     <label className="block text-xs font-bold uppercase mb-1">IG/Social Handle</label>
                     <input required className="w-full bg-black border border-white/20 rounded p-3" value={formData.socialHandle} onChange={e => setFormData({...formData, socialHandle: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase mb-1">Why do you want to be an ambassador?</label>
                <textarea required rows={3} className="w-full bg-black border border-white/20 rounded p-3" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold uppercase">Apply Now</button>
        </form>
    );
};
export default AmbassadorForm;
