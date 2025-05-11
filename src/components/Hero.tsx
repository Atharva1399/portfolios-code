
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-tech-blue text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-6">
            <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-montserrat font-bold leading-tight uppercase">
              UI UX<br/>DESIGNER
            </h1>
            
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                <p className="text-lg md:text-xl max-w-md">
                  Specialized in AI Development, Web3 Technologies, and Machine Learning Solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative">
              <h2 className="absolute -right-4 top-4 z-10 text-[clamp(2.5rem,6vw,3.5rem)] font-montserrat font-black text-white leading-none rotate-90 origin-top-right whitespace-nowrap">
                FULL STACK<br/>CODER
              </h2>
              <div className="bg-white rounded-2xl p-4 relative z-0">
                <AspectRatio ratio={3/4} className="overflow-hidden rounded-xl bg-gray-100">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <Avatar className="w-full h-full rounded-xl">
                      <AvatarImage 
                        src="/placeholder.svg" 
                        alt="Atharva Gaikwad" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-6xl text-gray-400 bg-gray-100">AG</AvatarFallback>
                    </Avatar>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
