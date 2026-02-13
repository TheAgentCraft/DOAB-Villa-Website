
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-royal-gold rounded-full flex items-center justify-center text-black font-bold text-sm">D</div>
              <span className="text-xl font-bold tracking-widest">DOAB VILAS CLUB</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Experience authentic Indian hospitality and grand luxury at the heart of Meerut. 
              The ultimate choice for weddings and premium stays.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-black transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-royal-gold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Luxury Home</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#weddings" className="hover:text-white transition-colors">Wedding Venues</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">Dining & Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-royal-gold mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-royal-gold mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Subscribe to receive exclusive offers and event updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border-0 focus:ring-1 focus:ring-royal-gold text-white px-4 py-3 rounded"
              />
              <button className="bg-royal-gold text-black font-bold py-3 rounded hover:bg-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Doab Vilas Club, Meerut. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed for Royal Experiences • NH-58 Meerut Bypass
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
