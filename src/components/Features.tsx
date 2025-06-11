import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Award, Home } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Zap,
      title: 'Quick Support',
      description: 'Fast and efficient service with minimal waiting time. We value your time and provide swift solutions.',
      highlights: ['Rapid service delivery', 'Minimal wait times', 'Efficient processes', 'Quick response']
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'MRF-authorized quality standards with professional equipment and certified technicians.',
      highlights: ['MRF authorization', 'Professional equipment', 'Certified technicians', 'Quality assurance']
    },
    {
      icon: Home,
      title: 'Doorstep Assistance',
      description: 'Convenient doorstep service for emergency repairs and tyre-related assistance when you need it most.',
      highlights: ['Emergency service', 'Convenient location', 'Mobile assistance', 'Customer convenience']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const tiles = featuresRef.current?.children;
      if (tiles) {
        gsap.fromTo(tiles,
          { y: 80, opacity: 0, scale: 0.8, rotationY: -20 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-vijaya-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-vijaya-red">Vijaya Tyres</span>?
          </h2>
          <div className="w-24 h-1 bg-vijaya-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference of professional service backed by MRF quality and customer commitment
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-vijaya-red to-red-700 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-90"></div>
              
              {/* Content Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-vijaya-black mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-vijaya-red rounded-full mr-3"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white to-gray-100 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-vijaya-black mb-4">
              Ready to Experience Professional Service?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Join thousands of satisfied customers who trust Vijaya Tyres for their automotive needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9032176617"
                className="bg-vijaya-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Call Now: 90321 76617
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-vijaya-red text-vijaya-red px-8 py-3 rounded-lg font-semibold hover:bg-vijaya-red hover:text-white transition-all transform hover:scale-105"
              >
                Visit Our Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;