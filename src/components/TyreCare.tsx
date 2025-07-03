import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gauge, Target, Shield, Award } from 'lucide-react';

const TyreCare = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const tips = [
    {
      icon: Gauge,
      title: 'Air Pressure Check',
      description: 'Check tyre pressure monthly when tyres are cold. Proper inflation improves fuel efficiency and extends tyre life.',
      details: [
        'Check pressure when tyres are cold',
        'Use recommended PSI levels',
        'Don\'t forget the spare tyre',
        'Monthly inspections recommended (twice)'
      ]
    },
    {
      icon: Target,
      title: 'Alignment & Balancing',
      description: 'Get wheel alignment and balancing checked every 10,000 km or if you notice uneven wear patterns.',
      details: [
        'Every 10,000 km inspection',
        'Check for uneven wear',
        'Improves handling & safety',
        'Extends tyre lifespan'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Service Centers',
      description: 'Always choose certified service centers with trained professionals and proper equipment for tyre services.',
      details: [
        'MRF authorized dealers',
        'Certified technicians',
        'Professional equipment',
        'Quality assurance'
      ]
    },
    {
      icon: Award,
      title: 'Quality Over Certification',
      description: 'While certifications matter, prioritize service centers known for quality work and customer satisfaction.',
      details: [
        'Reputation & reviews',
        'Quality workmanship',
        'Customer satisfaction',
        'Professional standards'
      ]
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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section id="tips" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Expert <span className="text-vijaya-red">Tyre Care</span> Tips
          </h2>
          <div className="w-24 h-1 bg-vijaya-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional advice to maximize your tyre performance, safety, and longevity
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <tip.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="space-y-2">
                    {tip.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-vijaya-red rounded-full mr-3 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Tyre Care at Vijaya Tyres
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Our MRF-certified technicians provide expert care using professional equipment and genuine parts. 
              Trust your tyres to the professionals who understand quality and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-vijaya-red font-semibold">
                <Award className="w-5 h-5" />
                <span>MRF Authorized Dealer</span>
              </div>
              <div className="flex items-center space-x-2 text-vijaya-red font-semibold">
                <Shield className="w-5 h-5" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TyreCare;