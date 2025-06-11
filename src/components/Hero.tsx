import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrolled * 0.5,
          duration: 0.3,
          ease: "none"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-vijaya-black via-gray-900 to-vijaya-red"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Vijaya <span className="text-vijaya-red">Tyres</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-1 bg-vijaya-red"></div>
              <span className="text-yellow-400 font-semibold text-lg">MRF AUTHORIZED</span>
              <div className="w-16 h-1 bg-vijaya-red"></div>
            </div>
          </div>
          
          <div ref={subtitleRef}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              World-Class Tyre Care Services for Commercial Vehicles
            </p>
            <p className="text-lg text-gray-300 mb-12">
              Your Trusted Partner for Quality Tyres & Professional Services in Bhimavaram
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:9032176617"
                className="bg-vijaya-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Call Now: 90321 76617
              </a>
              <button
                onClick={() => document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-vijaya-black transition-all transform hover:scale-105"
              >
                Explore Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;