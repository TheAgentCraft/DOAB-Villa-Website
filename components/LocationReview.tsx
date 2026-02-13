
import React from 'react';
import { REVIEWS } from '../constants';

const LocationReview: React.FC = () => {
  return (
    <div>
      {/* Reviews Section */}
      <section className="py-24 bg-ivory overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-royal-gold font-black uppercase tracking-[0.4em] mb-4 block">Guest Experiences</span>
            <h2 className="text-4xl md:text-6xl font-bold text-deep-maroon italic">Voices of Celebration</h2>
            <div className="w-24 h-1 bg-royal-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-12 rounded-sm shadow-2xl relative border-t-8 border-deep-maroon hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-royal-gold w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                <div className="flex items-center gap-1 text-royal-gold mb-8 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-10 leading-relaxed text-lg text-center font-light">"{review.comment}"</p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-deep-maroon text-xl mb-1">{review.author}</span>
                  <span className="text-xs font-black text-royal-gold uppercase tracking-[0.2em]">{review.category} Event</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="text-royal-gold font-black uppercase tracking-[0.4em] mb-4 block">Find Us</span>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-maroon mb-8 italic">Meerut Bypass Road</h2>
              
              <div className="space-y-10 mb-12">
                <div className="flex items-start gap-6 border-l-4 border-royal-gold pl-8">
                  <div className="text-deep-maroon mt-1 bg-ivory p-3 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-2">Address</h4>
                    <p className="text-gray-600 text-xl font-light leading-relaxed">
                      Sector-3 Ansal’s Sushant City,<br />
                      Partapur, Meerut Bypass Road (NH-58),<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-ivory p-8 rounded-sm shadow-sm border border-royal-gold/10">
                    <span className="text-[10px] uppercase font-black text-gray-400 block mb-2 tracking-[0.2em]">Meerut City Junction</span>
                    <span className="text-3xl font-bold text-deep-maroon font-serif italic">~ 5.6 km</span>
                  </div>
                  <div className="bg-ivory p-8 rounded-sm shadow-sm border border-royal-gold/10">
                    <span className="text-[10px] uppercase font-black text-gray-400 block mb-2 tracking-[0.2em]">Delhi Airport (IGI)</span>
                    <span className="text-3xl font-bold text-deep-maroon font-serif italic">~ 81 km</span>
                  </div>
                </div>
              </div>
              
              <a href="https://maps.google.com" target="_blank" className="gold-gradient text-deep-maroon px-10 py-5 font-black uppercase tracking-widest text-sm shadow-xl inline-flex items-center gap-4 hover:brightness-110 transition-all">
                Get Driving Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
            
            <div className="lg:w-1/2 w-full h-[600px] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(128,0,0,0.3)] border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111717.39739466547!2d77.63286379515632!3d28.95285747683416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64436577579f%3A0x63346917e33a1e95!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715876543210!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-royal-gold/20 m-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationReview;
