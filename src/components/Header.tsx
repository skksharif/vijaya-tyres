import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="/mrf-logo.png" alt="" />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Vijaya Tyres
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'}`}>
                MRF Authorized
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Vehicles', 'Services', 'Tips', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors hover:text-vijaya-red ${
                  isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <DarkModeToggle />
            <a
              href="tel:9032176617"
              className="bg-vijaya-red text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <nav className="py-4 space-y-4">
              {['Home', 'Vehicles', 'Services', 'Tips', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:text-vijaya-red font-medium"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:9032176617"
                className="mx-4 bg-vijaya-red text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-fit"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;