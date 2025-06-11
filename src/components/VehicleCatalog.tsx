import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Car,
  Truck,
  Bus,
  Tractor,
  Bike,
  ArrowLeft,
  Star,
  Shield,
  Zap,
} from "lucide-react";

interface VehicleType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  image: string;
  features: string[];
  tyreSpecs: {
    sizes: string[];
    brands: string[];
    priceRange: string;
  };
  services: string[];
  benefits: string[];
}

const VehicleCatalog = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const vehicles: VehicleType[] = [
    {
      id: "scooty",
      name: "Scooty",
      icon: Bike,
      description:
        "Premium scooter tyres for urban commuting with superior grip and fuel efficiency",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Superior Grip",
        "Fuel Efficient",
        "Long Lasting",
        "Weather Resistant",
      ],
      tyreSpecs: {
        sizes: ["90/90-12", "100/90-10", "110/70-12", "120/70-12"],
        brands: ["MRF Zapper", "MRF Nylogrip Plus", "MRF Revz"],
        priceRange: "₹1,500 - ₹3,500",
      },
      services: [
        "Tyre Fitting",
        "Puncture Repair",
        "Wheel Balancing",
        "Air Pressure Check",
      ],
      benefits: [
        "Better mileage",
        "Smooth ride",
        "Enhanced safety",
        "Reduced noise",
      ],
    },
    {
      id: "motorbike",
      name: "Motorbike",
      icon: Bike,
      description:
        "High-performance motorcycle tyres engineered for speed, control, and durability",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "High Performance",
        "Superior Control",
        "All Weather",
        "Racing Grade",
      ],
      tyreSpecs: {
        sizes: ["80/100-18", "90/90-18", "100/90-18", "110/80-18", "120/80-18"],
        brands: ["MRF Revz", "MRF Zapper", "MRF Mogrip"],
        priceRange: "₹2,000 - ₹6,000",
      },
      services: [
        "Performance Tuning",
        "Racing Setup",
        "Puncture Repair",
        "Wheel Alignment",
      ],
      benefits: [
        "Enhanced grip",
        "Better cornering",
        "Improved braking",
        "Longer life",
      ],
    },
    {
      id: "car",
      name: "Car",
      icon: Car,
      description:
        "Premium passenger car tyres offering comfort, safety, and performance for daily driving",
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Comfort Ride", "Low Noise", "Fuel Efficient", "All Season"],
      tyreSpecs: {
        sizes: [
          "155/80 R13",
          "165/80 R14",
          "175/65 R14",
          "185/65 R15",
          "195/55 R16",
        ],
        brands: ["MRF ZLX", "MRF ZVTV", "MRF Wanderer"],
        priceRange: "₹3,500 - ₹12,000",
      },
      services: [
        "Wheel Alignment",
        "Wheel Balancing",
        "Rotation Service",
        "Pressure Monitoring",
      ],
      benefits: [
        "Smooth driving",
        "Better fuel economy",
        "Enhanced safety",
        "Comfortable ride",
      ],
    },
    {
      id: "bus",
      name: "Bus",
      icon: Bus,
      description:
        "Heavy-duty bus tyres designed for passenger safety and long-distance reliability",
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Heavy Duty",
        "Passenger Safety",
        "Long Distance",
        "Retreadable",
      ],
      tyreSpecs: {
        sizes: ["215/75 R17.5", "225/75 R17.5", "235/75 R17.5", "245/70 R19.5"],
        brands: ["MRF Super Lug", "MRF Steel Muscle", "MRF Muscle Plus"],
        priceRange: "₹15,000 - ₹35,000",
      },
      services: [
        "Fleet Management",
        "Retreading",
        "Alignment",
        "Pressure Systems",
      ],
      benefits: [
        "Maximum safety",
        "Cost effective",
        "Long service life",
        "Reliable performance",
      ],
    },
    {
      id: "lorry",
      name: "Lorry",
      icon: Truck,
      description:
        "Commercial truck tyres built to handle heavy loads and demanding road conditions",
      image:
        "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Heavy Load", "Durable", "Cost Effective", "All Terrain"],
      tyreSpecs: {
        sizes: ["7.50 R16", "8.25 R16", "9.00 R20", "10.00 R20", "11.00 R20"],
        brands: ["MRF Super Lug", "MRF Steel Muscle", "MRF Muscle Plus"],
        priceRange: "₹12,000 - ₹45,000",
      },
      services: [
        "Load Analysis",
        "Fleet Solutions",
        "Retreading",
        "Maintenance Programs",
      ],
      benefits: [
        "Maximum payload",
        "Fuel efficiency",
        "Extended life",
        "Reduced downtime",
      ],
    },
    {
      id: "tractor",
      name: "Tractor",
      icon: Tractor,
      description:
        "Agricultural tyres engineered for farming applications with superior traction",
      image:
        "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Superior Traction",
        "Field Performance",
        "Soil Friendly",
        "Durable",
      ],
      tyreSpecs: {
        sizes: ["12.4-28", "13.6-28", "14.9-28", "16.9-30", "18.4-34"],
        brands: ["MRF MRL", "MRF Shakti", "MRF Luv"],
        priceRange: "₹8,000 - ₹25,000",
      },
      services: [
        "Agricultural Consultation",
        "Seasonal Setup",
        "Field Testing",
        "Custom Solutions",
      ],
      benefits: [
        "Better crop yield",
        "Fuel savings",
        "Reduced soil damage",
        "All-season use",
      ],
    },
    {
      id: "jcb",
      name: "JCB/Crane",
      icon: Truck,
      description:
        "Industrial construction tyres for heavy machinery and specialized equipment",
      image:
        "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Industrial Grade",
        "Heavy Machinery",
        "Puncture Resistant",
        "Long Life",
      ],
      tyreSpecs: {
        sizes: ["12.5/80-18", "15.5/80-24", "17.5L-24", "20.5-25", "23.5-25"],
        brands: ["MRF Rock", "MRF Industrial", "MRF Construction"],
        priceRange: "₹20,000 - ₹80,000",
      },
      services: [
        "Industrial Solutions",
        "Custom Fitting",
        "Site Service",
        "Equipment Analysis",
      ],
      benefits: [
        "Maximum durability",
        "Reduced maintenance",
        "Better productivity",
        "Cost savings",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
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
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedVehicle && detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [selectedVehicle]);

  const selectedVehicleData = vehicles.find((v) => v.id === selectedVehicle);

  if (selectedVehicle && selectedVehicleData) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={detailRef}>
            {/* Back Button */}
            <button
              onClick={() => setSelectedVehicle(null)}
              className="flex items-center space-x-2 text-vijaya-red hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Vehicle Catalog</span>
            </button>

            {/* Vehicle Detail Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center">
                    <selectedVehicleData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {selectedVehicleData.name} Tyres
                    </h1>
                    <p className="text-vijaya-red dark:text-red-400 font-semibold">
                      MRF Authorized
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {selectedVehicleData.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedVehicleData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-vijaya-red" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={selectedVehicleData.image}
                  alt={selectedVehicleData.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tyre Specifications */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-vijaya-red" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Specifications
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Available Sizes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVehicleData.tyreSpecs.sizes.map(
                        (size, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border"
                          >
                            {size}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      MRF Brands
                    </h4>
                    <div className="space-y-2">
                      {selectedVehicleData.tyreSpecs.brands.map(
                        (brand, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-vijaya-red rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {brand}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Price Range
                    </h4>
                    <span className="text-2xl font-bold text-vijaya-red">
                      {selectedVehicleData.tyreSpecs.priceRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-6 h-6 text-vijaya-red" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Services
                  </h3>
                </div>

                <div className="space-y-4">
                  {selectedVehicleData.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-vijaya-red rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-vijaya-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Book Service Now
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="w-6 h-6 text-vijaya-red" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Key Benefits
                  </h3>
                </div>

                <div className="space-y-4">
                  {selectedVehicleData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-vijaya-red/10 dark:bg-red-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>MRF Quality Guarantee:</strong> All our tyres come
                    with manufacturer warranty and quality assurance.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-r from-vijaya-red to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Upgrade Your {selectedVehicleData.name}?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact our experts for personalized recommendations and
                professional installation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9032176617"
                  className="bg-white text-vijaya-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call: 90321 76617
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-vijaya-red transition-colors"
                >
                  Visit Our Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="vehicles"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vehicle <span className="text-vijaya-red">Tyre Catalog</span>
          </h2>
          <div className="w-24 h-1 bg-vijaya-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of MRF tyres for every vehicle type
            with detailed specifications
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => setSelectedVehicle(vehicle.id)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-vijaya-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <vehicle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>

                <div className="space-y-2 mb-4">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center text-xs text-gray-700 dark:text-gray-300"
                    >
                      <Star className="w-3 h-3 text-vijaya-red mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span
                    className="text-vijaya-red font-semibold text-sm"
                    onClick={() =>
                      document
                        .getElementById("vehicles")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Click to View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Need help choosing the right tyre for your vehicle?
          </p>
          <a
            href="tel:9032176617"
            className="inline-block bg-vijaya-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleCatalog;
