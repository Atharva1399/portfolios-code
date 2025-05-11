
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Works', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-tech-navy font-montserrat italic font-bold text-2xl">
              Atharva.
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium ${
                      link.name === 'Contact' 
                        ? 'bg-tech-navy text-white px-6 py-2' 
                        : 'text-gray-700 hover:text-tech-blue'
                    } transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-tech-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 font-medium text-gray-700 hover:text-tech-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
