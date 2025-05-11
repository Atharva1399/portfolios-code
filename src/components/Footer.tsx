
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tech-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-gray-300">info@atharva.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Phone</h3>
            <p className="text-gray-300">+91 123 456 7890</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Atharva Gaikwad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
