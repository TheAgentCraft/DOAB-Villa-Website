
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-maroon py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center text-deep-maroon font-bold text-xl group-hover:rotate-12 transition-transform">D</div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-widest leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>DOAB VILAS</span>
            <span className="text-[10px] text-royal-gold uppercase tracking-[0.2em] font-medium">Club & Resort • Meerut</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-white hover:text-royal-gold font-medium transition-colors uppercase text-sm tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-royal-gold text-deep-maroon px-6 py-2 rounded-sm font-bold hover:bg-white hover:scale-105 transition-all uppercase text-sm"
          >
            Plan Event
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-deep-maroon transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] border-b border-royal-gold' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-white hover:text-royal-gold text-lg py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-royal-gold text-deep-maroon py-3 rounded-md text-center font-bold mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Plan Wedding
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
