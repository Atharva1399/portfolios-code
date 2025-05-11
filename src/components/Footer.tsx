
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tech-navy text-white py-8 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold font-montserrat italic">
              Atharva<span className="text-tech-blue">.</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Atharva Gaikwad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
