
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Visual Background: High-quality night-time architectural facade mirroring Doab Vilas */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
          alt="Doab Vilas Club Night Facade"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        {/* Balanced overlays for text legibility while preserving architectural glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        
        {/* Subtle decorative glow at the bottom to mimic ground lighting */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-royal-gold/10 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center lg:text-left flex flex-col lg:items-start items-center">
        <div className="mb-4 inline-block">
          <span className="bg-royal-gold/20 backdrop-blur-md border border-royal-gold/40 text-white px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 inline-block shadow-lg">
            Sushant City • Meerut
          </span>
        </div>
        
        {/* Refined headline with smaller, elegant sizing */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white max-w-3xl tracking-tight uppercase">
          <span className="text-royal-gold italic font-serif normal-case tracking-normal">Experience</span> <br />
          Doab Vilas Club
        </h1>
        
        {/* Refined subtext with smaller sizing */}
        <p className="text-xs md:text-sm lg:text-base font-light mb-8 max-w-xl text-white/80 tracking-widest leading-relaxed uppercase">
          Meerut's Premier Wedding & Luxury Stay Destination <br className="hidden md:block" />
          Where Every Celebration Becomes A Royal Legacy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-royal-gold text-deep-maroon font-black text-xs rounded-sm hover:bg-white hover:scale-105 transition-all shadow-xl uppercase tracking-[0.2em]">
            Plan Celebration
          </a>
          <a href="#rooms" className="w-full sm:w-auto px-8 py-3.5 border border-white/30 backdrop-blur-sm text-white font-bold text-xs rounded-sm hover:bg-white hover:text-deep-maroon transition-all uppercase tracking-[0.2em]">
            View Rooms
          </a>
        </div>
        
        <div className="mt-12 flex items-center gap-4 text-white/40">
          <div className="w-8 h-[1px] bg-royal-gold/50"></div>
          <span className="text-[9px] font-black tracking-[0.3em] uppercase">Est. Luxury Hospitality</span>
        </div>
      </div>

      {/* Elegant minimalist footnotes */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-5 text-right border-r border-royal-gold/20 pr-6">
        <div className="group cursor-default">
          <h4 className="text-royal-gold/80 font-black text-[10px] tracking-[0.2em] uppercase">NH-58 Bypass</h4>
          <p className="text-white/30 text-[8px] tracking-widest mt-0.5 uppercase">Strategic Location</p>
        </div>
        <div className="group cursor-default">
          <h4 className="text-royal-gold/80 font-black text-[10px] tracking-[0.2em] uppercase">Wedding Lawn</h4>
          <p className="text-white/30 text-[8px] tracking-widest mt-0.5 uppercase">1000+ Capacity</p>
        </div>
      </div>

      {/* Decorative hairline left accent */}
      <div className="absolute top-1/3 left-0 w-[1px] h-1/4 bg-royal-gold/30"></div>
    </section>
  );
};

export default Hero;
