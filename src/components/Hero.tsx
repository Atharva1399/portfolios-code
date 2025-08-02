
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-background"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div 
              className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-2 
                        hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
            >
              Available for projects
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-foreground leading-tight">
              Hey, I'm <span className="text-primary">Atharva</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
              Tech Entrepreneur & AI Developer
            </h2>
            
            <p className="text-foreground text-lg max-w-xl leading-relaxed">
              Building intelligent solutions at the intersection of AI and Web3. 
              I specialize in Python development, machine learning, and blockchain technologies.
            </p>
          </div>
          
          <div className="lg:w-2/5 relative animate-[fade-in_0.6s_ease-out_0.3s_forwards] opacity-0">
            <div className="parallax-element" data-depth="0.05">
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-gradient-to-br from-tech-blue to-tech-teal overflow-hidden mx-auto shadow-lg relative 
                          hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <img 
                  src="https://i.postimg.cc/pLw95jJV/IMG-20250223-142157.jpg" 
                  alt="Atharva's profile" 
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative elements with parallax effect */}
                <div className="absolute -z-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-tech-navy/20 -top-3 -left-3 parallax-element" data-depth="0.1"></div>
                <div className="absolute -z-10 w-20 h-20 rounded-full bg-tech-orange/20 -bottom-6 -right-6 parallax-element" data-depth="0.15"></div>
              </div>
            </div>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="absolute -bottom-6 md:bottom-0 -right-6 md:right-0 bg-white rounded-xl shadow-lg p-5 backdrop-blur-sm bg-white/80 
                              animate-[fade-in_0.6s_ease-out_0.6s_forwards] opacity-0 border border-gray-100
                              hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="text-sm text-gray-500 mb-1">Specialized in</div>
                  <div className="font-medium text-tech-navy">
                    AI & Web3 Development
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Expert in AI Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    With extensive experience in Python, TensorFlow, PyTorch, and blockchain technologies.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-[fade-in_0.6s_ease-out_0.9s_forwards] opacity-0">
          <a 
            href="#about" 
            className="flex flex-col items-center text-tech-blue hover:text-tech-navy transition-colors group"
          >
            <span className="text-sm mb-2 font-medium group-hover:translate-y-1 transition-transform">Explore More</span>
            <ChevronDown className="animate-bounce group-hover:animate-none group-hover:scale-110 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
