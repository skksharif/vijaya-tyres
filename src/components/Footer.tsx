import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vijaya-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-vijaya-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Vijaya Tyres</h3>
                <p className="text-sm text-gray-400">MRF Authorized</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for quality tyres and professional automotive services in Bhimavaram. 
              MRF authorized dealer with years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vijaya-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vijaya-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vijaya-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vijaya-red">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Vehicle Catalog', 'Services', 'Tyre Care Tips', 'Contact Us'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase().replace(/\s+/g, '').replace(/vehiclecatalog/, 'vehicles').replace(/tyrecaretips/, 'tips').replace(/contactus/, 'contact');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vijaya-red">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                'Wheel Alignment',
                'Wheel Balancing',
                'Tyre Fitting',
                'Puncture Repair',
                'Nitrogen Air',
                'Suspension Repair'
              ].map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-vijaya-red">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-vijaya-red mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold mb-1">Main Branch:</p>
                  <p>Plot No. 7-249/1, Undi Road, Near Bye Pass Road, NH: 214, Bhimavaram – 534202</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-vijaya-red flex-shrink-0" />
                <div className="text-gray-300">
                  <a href="tel:9032176617" className="hover:text-white transition-colors">
                    90321 76617
                  </a>
                  <span className="mx-2">|</span>
                  <a href="tel:9849836894" className="hover:text-white transition-colors">
                    98498 36894
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-vijaya-red flex-shrink-0" />
                <a
                  href="mailto:svltmrfmz@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  svltmrfmz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Vijaya Tyres & Services. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              MRF Authorized Dealer | Professional Tyre Services
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;