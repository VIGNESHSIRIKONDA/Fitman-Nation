
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // helper to open consultation on homepage
  const consultPath = '/?consult=true';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove the # prefix from paths for Link components
  const getCleanPath = (path: string) => path.replace('#', '');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter italic">
            FITMAN<span className="text-red-600">NATION</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={getCleanPath(link.path)}
              className="text-sm font-semibold hover:text-red-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black absolute top-full left-0 w-full p-4 border-t border-red-900/50 flex flex-col space-y-4 animate-in slide-in-from-top">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={getCleanPath(link.path)}
              className="text-lg font-bold border-b border-white/10 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
