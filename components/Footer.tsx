
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-2xl font-black italic block mb-6">
              FITMAN<span className="text-red-600">NATION</span>
            </span>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Train Smarter. With Mentors. The ultimate community-driven fitness and wellness platform for every body.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">IG</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">YT</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">FB</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><Link to="/about" className="hover:text-red-600">Our Story</Link></li>
              <li><Link to="/programs" className="hover:text-red-600">Training Programs</Link></li>
              <li><Link to="/events" className="hover:text-red-600">Upcoming Events</Link></li>
              <li><Link to="/blog" className="hover:text-red-600">Fitness Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="text-neutral-400 text-sm">📍 NYC Downtown — 242 West 27th St, New York, NY 10001</li>
              <li><Link to="/faq" className="hover:text-red-600">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-red-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-600">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-400 mb-4">Get the latest fitness tips and event alerts.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-black border border-white/10 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-red-600"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r-md font-bold hover:bg-red-700 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>© 2024 FitMan Nation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:support@fitmannation.com" className="hover:text-red-600">support@fitmannation.com</a>
            <a href="https://wa.me/917799825216" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">+91 77998 25216 (WhatsApp)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
