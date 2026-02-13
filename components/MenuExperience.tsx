
import React from 'react';
import { MENU_IMAGES } from '../constants';

const MenuExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <span className="text-royal-gold font-bold uppercase tracking-[0.4em] mb-4 block">A Culinary Visual Affair</span>
        <h2 className="text-4xl md:text-7xl font-bold text-deep-maroon mb-6">Dining & Menu Experience</h2>
        <div className="w-32 h-1 bg-royal-gold mx-auto mb-10"></div>
        <p className="text-gray-500 max-w-3xl mx-auto text-xl font-light italic leading-relaxed">
          At Doab Vilas, we believe in the "Visual Buffet" experience. Our catering is an artistic display of North Indian flavors, global wedding delicacies, and grand dessert spreads.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-24">
        {MENU_IMAGES.map((item) => (
          <div key={item.id} className="relative group overflow-hidden break-inside-avoid shadow-2xl rounded-sm">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="bg-royal-gold text-deep-maroon text-[10px] font-black px-4 py-1 uppercase tracking-[0.2em] mb-4 inline-block">
                {item.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-2 font-serif italic">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Grand catering setups featuring live counters and opulent buffet presentations.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-ivory p-12 md:p-20 rounded-sm border border-royal-gold/20 shadow-inner">
        <div>
          <h3 className="text-4xl font-bold text-deep-maroon mb-8 italic">The Catering Philosophy</h3>
          <p className="text-gray-700 text-lg leading-relaxed font-light mb-8">
            Our wedding catering isn't just a meal; it's a spectacle. We specialize in grand buffet layouts where every dish is presented as a piece of art. From the aroma of authentic North Indian masalas to the colorful vibrance of our salad bars and dessert galleries.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-deep-maroon rounded-full flex items-center justify-center text-royal-gold font-bold text-2xl flex-shrink-0">V</div>
              <div>
                <h4 className="font-bold text-deep-maroon uppercase tracking-widest text-sm">Veg Specialties</h4>
                <p className="text-gray-500 text-sm">Rich traditional curries and live tandoor counters.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-deep-maroon rounded-full flex items-center justify-center text-royal-gold font-bold text-2xl flex-shrink-0">N</div>
              <div>
                <h4 className="font-bold text-deep-maroon uppercase tracking-widest text-sm">Non-Veg Packages</h4>
                <p className="text-gray-500 text-sm">Signature grills and authentic Mughlai delicacies.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover"
            alt="Buffet Experience"
          />
          <div className="absolute inset-0 bg-deep-maroon/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
            <span className="text-white text-5xl font-serif italic mb-4 block">Visual Buffet Excellence</span>
            <div className="w-24 h-1 bg-royal-gold mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExperience;
