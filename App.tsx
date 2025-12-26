
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Events from './pages/Events';
import Success from './pages/Success';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black text-white selection:bg-red-600 selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Floating Action Button */}
        <Link 
          to="/contact" 
          className="fixed bottom-8 right-8 z-40 bg-red-600 text-white font-black py-4 px-8 rounded-full shadow-2xl flex items-center space-x-3 group hover:scale-105 transition-all transform hover:shadow-red-600/40"
        >
          <span className="text-2xl animate-pulse">🔥</span>
          <span className="text-sm tracking-tighter hidden sm:inline uppercase">START TRANSFORMATION</span>
        </Link>
      </div>
    </Router>
  );
};

export default App;
