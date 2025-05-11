
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-6">
            <div className="inline-block px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium mb-2">
              Available for new opportunities
            </div>
            
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-montserrat font-bold leading-none">
              <span className="block italic mb-4">Hey, there</span>
            </h1>
            
            <div className="mt-8">
              <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-montserrat font-black text-tech-navy leading-none mb-4">
                I AM<br />ATHARVA
              </h2>
              
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-tech-navy text-white px-6 py-3 md:py-4 inline-block">
                  <span className="text-xl md:text-2xl font-semibold">DIGITAL PRODUCT</span><br/>
                  <span className="text-xl md:text-2xl font-semibold">DEVELOPER</span>
                </div>
                
                <p className="text-gray-600 max-w-md">
                  Specialized in AI Development, Web3 Technologies, and Machine Learning Solutions
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-tech-navy hover:bg-tech-navy/90 text-white rounded-none px-6 group"
              >
                View My Work
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform"/>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-tech-navy text-tech-navy hover:bg-tech-navy/5 rounded-none px-6"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-tech-orange/20 to-tech-blue/20 overflow-hidden">
              {/* Profile image would go here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
