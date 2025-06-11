import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Settings, 
  Target, 
  Wrench, 
  ShoppingCart, 
  Wind, 
  RotateCcw, 
  Car 
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      name: 'Wheel Alignment',
      subtitle: 'Cars & Lorries',
      icon: Target,
      description: 'Precision wheel alignment services for optimal vehicle handling and tyre longevity',
      features: ['Computer-controlled alignment', 'All vehicle types', 'Professional equipment']
    },
    {
      name: 'Wheel Balancing',
      icon: Settings,
      description: 'Expert wheel balancing to eliminate vibrations and ensure smooth rides',
      features: ['Dynamic balancing', 'Static balancing', 'Professional weights']
    },
    {
      name: 'Tyre Fitting',
      icon: Wrench,
      description: 'Professional tyre installation with proper mounting and safety checks',
      features: ['Expert installation', 'Safety inspection', 'Proper torque specs']
    },
    {
      name: 'Tyre Sales',
      subtitle: 'Two-Wheeler & Car',
      icon: ShoppingCart,
      description: 'Wide range of MRF tyres for motorcycles, scooters, and passenger cars',
      features: ['MRF authorized dealer', 'All vehicle types', 'Genuine products']
    },
    {
      name: 'Nitrogen Air',
      icon: Wind,
      description: 'Nitrogen filling for better tyre pressure retention and performance',
      features: ['Longer pressure retention', 'Better fuel efficiency', 'Reduced oxidation']
    },
    {
      name: 'Tubeless Puncture',
      icon: Wrench,
      description: 'Quick and reliable tubeless tyre puncture repair services',
      features: ['Professional patches', 'Quality sealants', 'Leak testing']
    },
    {
      name: 'Tyre Rebuttoning',
      icon: RotateCcw,
      description: 'Expert tyre retreading and rebuttoning services for commercial vehicles',
      features: ['Quality materials', 'Expert workmanship', 'Cost-effective solution']
    },
    {
      name: 'Suspension Repairs',
      icon: Car,
      description: 'Complete suspension system diagnosis and repair services',
      features: ['Shock absorber repair', 'Spring replacement', 'Complete diagnosis']
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

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          { y: 80, opacity: 0, rotationX: -15 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section id="services" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional <span className="text-vijaya-red">Services</span>
          </h2>
          <div className="w-24 h-1 bg-vijaya-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive automotive services delivered by certified professionals using state-of-the-art equipment
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-6 group border border-gray-100 dark:border-gray-600"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {service.name}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-vijaya-red font-semibold">
                    {service.subtitle}
                  </p>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-vijaya-red rounded-full mr-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <button className="w-full bg-vijaya-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-vijaya-red to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Professional Service?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our certified technicians are ready to help with all your tyre and automotive needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9032176617"
                className="bg-white text-vijaya-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Call: 90321 76617
              </a>
              <a
                href="tel:9849836894"
                className="bg-white text-vijaya-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Call: 98498 36894
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;