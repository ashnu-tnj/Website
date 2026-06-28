
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { STATS_DATA } from '../constants';

const Hero: React.FC = () => {
  const handleDiscoverClick = () => {
    const target = document.getElementById('services');
    if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden elegant-pattern">
      {/* Floating Ornaments */}
      <div className="absolute top-1/4 left-16 w-2 h-2 bg-champagne/30 rounded-full animate-gentle-float"></div>
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-rose-gold/40 rounded-full animate-gentle-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-1/4 left-24 w-1 h-1 bg-champagne/50 rounded-full animate-gentle-float" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10 max-w-5xl py-24">
        <AnimatedElement>
          <div className="ornamental-divider w-32 mx-auto mb-8"></div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
            <span className="luxury-text">aflatus</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-platinum/90 mb-8 font-light tracking-wide">
            Engineering Digital Excellence
          </h2>
          <div className="ornamental-divider w-24 mx-auto mb-8"></div>
        </AnimatedElement>
        
        <AnimatedElement delay={300}>
          <p className="text-xl md:text-2xl text-platinum/70 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            From Chennai to the Middle East, we craft sophisticated digital solutions that elevate businesses and define new standards of excellence.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={600}>
          <button 
            onClick={handleDiscoverClick}
            className="group relative inline-block px-12 py-4 rounded-full text-obsidian font-medium text-lg tracking-wide bg-gradient-to-r from-champagne to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-champagne/30 cursor-pointer"
          >
            Discover Our Expertise
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
          </button>
        </AnimatedElement>
        
        <AnimatedElement delay={900} className="mt-20 flex flex-wrap justify-center gap-12 md:gap-16">
            {STATS_DATA.map(stat => (
                <div key={stat.label} className="text-center">
                    <div className="font-serif text-3xl md:text-4xl mb-2 text-champagne italic">{stat.value}</div>
                    <div className="text-platinum/60 text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </AnimatedElement>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-champagne/50 to-transparent mx-auto mb-4"></div>
        <div className="w-4 h-4 border border-champagne/50 rounded-full animate-pulse-glow"></div>
      </div>
    </section>
  );
};

export default Hero;
