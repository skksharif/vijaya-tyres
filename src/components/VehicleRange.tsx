import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Truck, Bus, Tractor, Bike } from 'lucide-react';

const VehicleRange = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const vehicles = [
    { name: 'Scooty', icon: Bike, description: 'Premium tyres for scooters with superior grip and durability' },
    { name: 'Motorbike', icon: Bike, description: 'High-performance motorcycle tyres for all road conditions' },
    { name: 'Car', icon: Car, description: 'Quality passenger car tyres for safety and comfort' },
    { name: 'Bus', icon: Bus, description: 'Heavy-duty bus tyres for long-distance travel' },
    { name: 'Lorry', icon: Truck, description: 'Commercial truck tyres built for heavy loads' },
    { name: 'Tractor', icon: Tractor, description: 'Agricultural tyres designed for farming applications' },
    { name: 'JCB/Crane', icon: Truck, description: 'Industrial tyres for construction equipment' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Grid items animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
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
    <section id="vehicles" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vijaya-black mb-4">
            Our Vehicle <span className="text-vijaya-red">Tyre Range</span>
          </h2>
          <div className="w-24 h-1 bg-vijaya-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tyre solutions for all types of vehicles with MRF quality assurance
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <vehicle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-vijaya-black mb-2">
                   {vehicle.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {vehicle.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-vijaya-red font-semibold text-sm">
                    MRF Quality Guaranteed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Can't find your vehicle type? We service all types of vehicles!
          </p>
          <a
            href="tel:9032176617"
            className="inline-block bg-vijaya-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
          >
            Contact Us for Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleRange;