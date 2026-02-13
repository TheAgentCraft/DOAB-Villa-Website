
import React from 'react';
import { WEDDING_GALLERY } from '../constants';

const WeddingBanquet: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-royal-gold font-bold uppercase tracking-[0.3em] mb-4 block">Ethereal Celebrations</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Celebrate <span className="text-royal-gold italic font-serif">Royal Weddings</span> in Meerut
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
            Celebrate weddings, receptions, engagements, and corporate events with capacity up to large gatherings. 
            Our expansive lawns and grand banquet halls are designed for the most sophisticated celebrations.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              'Grand Stage Setups with Custom Decor',
              'Expansive Wedding Lawns for 500+ Guests',
              'Exquisite Cocktail Event Lighting',
              'Opulent Reception Decoration Themes',
              'On-site Management & Professional Staff'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-royal-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-deep-maroon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="inline-block bg-royal-gold text-deep-maroon font-bold px-10 py-4 rounded hover:bg-white hover:scale-105 transition-all shadow-2xl">
            Inquire for Dates
          </a>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {WEDDING_GALLERY.map((img, i) => (
            <div key={img.id} className={`relative rounded-xl overflow-hidden group ${i % 2 !== 0 ? 'mt-8' : ''}`}>
              <img 
                src={img.image} 
                alt={img.title} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-white font-bold text-center italic">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingBanquet;
