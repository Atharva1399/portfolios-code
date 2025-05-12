
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-tech-blue/10 to-tech-gray/30"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium mb-2 backdrop-blur-sm shadow-sm">
              Available for projects
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-tech-navy leading-tight">
              Hey, I'm <span className="text-tech-blue bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">Atharva</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-tech-dark-gray">
              Tech Entrepreneur & AI Developer
            </h2>
            
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Building intelligent solutions at the intersection of AI and Web3. 
              I specialize in Python development, machine learning, and blockchain technologies.
            </p>
          </div>
          
          <div className="lg:w-2/5 relative animate-[fade-in_0.6s_ease-out_0.3s_forwards] opacity-0">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-gradient-to-br from-tech-blue to-tech-teal overflow-hidden mx-auto shadow-lg relative">
              {/* Placeholder for profile image - to be replaced */}
              <div className="w-full h-full flex items-center justify-center text-white text-lg font-medium">
                Profile Image
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-tech-navy/20 -top-3 -left-3"></div>
              <div className="absolute -z-10 w-20 h-20 rounded-full bg-tech-orange/20 -bottom-6 -right-6"></div>
            </div>
            
            <div className="absolute -bottom-6 md:bottom-0 -right-6 md:right-0 bg-white rounded-xl shadow-lg p-5 backdrop-blur-sm bg-white/80 animate-[fade-in_0.6s_ease-out_0.6s_forwards] opacity-0 border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">Specialized in</div>
              <div className="font-medium text-tech-navy">
                AI & Web3 Development
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-[fade-in_0.6s_ease-out_0.9s_forwards] opacity-0">
          <a 
            href="#about" 
            className="flex flex-col items-center text-tech-blue hover:text-tech-navy transition-colors group"
          >
            <span className="text-sm mb-2 font-medium">Explore More</span>
            <ChevronDown className="animate-bounce group-hover:animate-none" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
