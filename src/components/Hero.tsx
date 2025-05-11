
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-tech-gray"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium mb-2">
              Available for projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-tech-navy leading-tight">
              Hey, I'm <span className="text-tech-blue">Atharva</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-tech-dark-gray">
              Tech Entrepreneur & AI Developer
            </h2>
            
            <p className="text-gray-600 text-lg max-w-xl">
              Building intelligent solutions at the intersection of AI and Web3. 
              I specialize in Python development, machine learning, and blockchain technologies.
            </p>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-tech-blue/20 overflow-hidden mx-auto">
              {/* Placeholder for profile image - to be replaced */}
              <div className="w-full h-full flex items-center justify-center text-tech-blue">
                Profile Image
              </div>
            </div>
            
            <div className="absolute -bottom-6 md:bottom-0 -right-6 md:right-0 bg-white rounded-lg shadow-lg p-4 w-32 md:w-40">
              <div className="text-sm text-gray-500 mb-1">Specialized in</div>
              <div className="font-medium text-tech-navy">
                AI & Web3 Development
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-tech-blue transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
