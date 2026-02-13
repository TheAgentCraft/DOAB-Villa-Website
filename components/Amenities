
import React from 'react';
import { AMENITIES_LIST } from '../constants';

const Amenities: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-maroon mb-4">World-Class Facilities</h2>
        <div className="w-24 h-1 bg-royal-gold mx-auto mb-12"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {AMENITIES_LIST.map((amenity, i) => (
          <div key={i} className="flex flex-col items-center p-8 bg-white rounded-2xl border border-royal-gold/10 hover:border-royal-gold hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors duration-300">
              {amenity.icon}
            </div>
            <h3 className="font-bold text-gray-700 text-lg group-hover:text-deep-maroon transition-colors">{amenity.name}</h3>
          </div>
        ))}
        {/* Additional Custom Facilities */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl border border-royal-gold/10 hover:border-royal-gold hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
          </div>
          <h3 className="font-bold text-gray-700 text-lg group-hover:text-deep-maroon transition-colors">Bonfire Area</h3>
        </div>
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl border border-royal-gold/10 hover:border-royal-gold hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center text-royal-gold mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="font-bold text-gray-700 text-lg group-hover:text-deep-maroon transition-colors">Kids Play Area</h3>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
