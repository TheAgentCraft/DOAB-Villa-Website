
import React from 'react';
import { ROOMS_DATA } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-royal-gold font-black uppercase tracking-[0.4em] mb-4 block">Boutique Stays</span>
          <h2 className="text-4xl md:text-7xl font-bold text-deep-maroon leading-tight italic">
            Premium Business <br />& Event Accomodation
          </h2>
        </div>
        <div className="w-full lg:w-1/3 text-gray-500 text-lg leading-relaxed font-light">
          Experience refined comfort on the Meerut Bypass. Our rooms are designed for the high-end traveler with modern lounge spaces and meticulous service.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {ROOMS_DATA.map((room) => (
          <div key={room.id} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-sm luxury-shadow h-[500px]">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-white">
                  <h3 className="text-3xl font-bold font-serif italic mb-1">{room.name}</h3>
                  <div className="flex items-center gap-2 text-royal-gold">
                    <span className="w-8 h-[2px] bg-royal-gold"></span>
                    <span className="text-xs uppercase font-bold tracking-[0.2em]">Luxury Interiors</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-10">
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light italic">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10 border-b border-gray-100 pb-10">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-bold text-gray-700 tracking-wide uppercase">{amenity}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-4 group">
                <span className="text-deep-maroon font-black uppercase tracking-widest border-b-2 border-royal-gold pb-1 group-hover:text-royal-gold transition-colors">
                  Inquire for Booking
                </span>
                <svg className="w-6 h-6 text-royal-gold group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
