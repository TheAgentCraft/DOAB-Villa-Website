
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import MenuExperience from './components/MenuExperience';
import WeddingBanquet from './components/WeddingBanquet';
import Amenities from './components/Amenities';
import LocationReview from './components/LocationReview';
import ContactForms from './components/ContactForms';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'wedding' | 'banquet'>('rooms');

  useEffect(() => {
    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      
      <main>
        <div id="home">
          <Hero />
        </div>

        <section id="rooms" className="py-20 bg-ivory">
          <Rooms />
        </section>

        <section id="dining" className="py-20 bg-white">
          <MenuExperience />
        </section>

        <section id="weddings" className="py-20 maroon-gradient text-white">
          <WeddingBanquet />
        </section>

        <section id="amenities" className="py-20 bg-ivory">
          <Amenities />
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-maroon mb-4">Book Your Celebration</h2>
            <div className="w-24 h-1 bg-royal-gold mx-auto mb-12"></div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setActiveTab('rooms')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'rooms' ? 'bg-royal-gold text-white scale-105' : 'bg-white text-royal-gold border border-royal-gold hover:bg-gold-50'}`}
              >
                Room Booking
              </button>
              <button 
                onClick={() => setActiveTab('wedding')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'wedding' ? 'bg-royal-gold text-white scale-105' : 'bg-white text-royal-gold border border-royal-gold hover:bg-gold-50'}`}
              >
                Wedding Inquiry
              </button>
              <button 
                onClick={() => setActiveTab('banquet')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'banquet' ? 'bg-royal-gold text-white scale-105' : 'bg-white text-royal-gold border border-royal-gold hover:bg-gold-50'}`}
              >
                Banquet Inquiry
              </button>
            </div>

            <ContactForms type={activeTab} />
          </div>
        </section>

        <LocationReview />
      </main>

      <Footer />
      
      {/* Floating Booking CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href="#contact" className="gold-gradient text-deep-maroon font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Book Now
        </a>
      </div>
    </div>
  );
};

export default App;
