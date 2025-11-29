
import React from 'react';
import { Brain, Code, Users, Database } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-neon-turquoise text-background rounded-lg mb-4 sm:mb-6">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-card-foreground mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services Offered
          </h2>
          <div className="w-20 h-1 bg-neon-turquoise mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground">
            Professional services leveraging my expertise in AI, development, and technical community building.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <ServiceCard 
            icon={<Brain size={28} />}
            title="AI Agent Development"
            description="Custom AI agents designed for specific use cases and business needs. From concept to implementation and training."
          />
          
          <ServiceCard 
            icon={<Users size={28} />}
            title="Developer Relations"
            description="Strategic consulting to help bridge the gap between your tech products and developer communities."
          />
          
          <ServiceCard 
            icon={<Code size={28} />}
            title="Machine Learning Solutions"
            description="End-to-end ML solutions from model design to deployment, focusing on computer vision and predictive analytics."
          />
          
          <ServiceCard 
            icon={<Database size={28} />}
            title="Web3 Integration"
            description="Implementation of blockchain technologies into existing platforms or building new blockchain-based applications."
          />
        </div>
        
        <div className="mt-8 sm:mt-16 bg-card border border-border rounded-xl p-4 sm:p-8">
          <div className="grid gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-foreground mb-4">
                My Approach
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                I believe in creating solutions that are not just technically sound but also practical and forward-thinking. My process typically involves:
              </p>
              
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neon-turquoise text-background rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 font-mono font-bold text-xs sm:text-sm">1</div>
                  <p className="text-foreground font-medium text-sm sm:text-base">In-depth consultation to understand your specific needs and goals</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neon-turquoise text-background rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 font-mono font-bold text-xs sm:text-sm">2</div>
                  <p className="text-foreground font-medium text-sm sm:text-base">Research and strategic planning to determine the most effective solution</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neon-turquoise text-background rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 font-mono font-bold text-xs sm:text-sm">3</div>
                  <p className="text-foreground font-medium text-sm sm:text-base">Iterative development with continuous feedback and improvements</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neon-turquoise text-background rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 font-mono font-bold text-xs sm:text-sm">4</div>
                  <p className="text-foreground font-medium text-sm sm:text-base">Thorough testing and deployment with comprehensive documentation</p>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 sm:pt-8 border-t border-border">
              <h4 className="text-lg sm:text-xl font-mono font-bold text-foreground mb-4 sm:mb-6">Why Work With Me?</h4>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-neon-turquoise/20 text-neon-turquoise rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-mono font-bold text-foreground mb-2 text-sm sm:text-base">Technical Expertise</h5>
                    <p className="text-muted-foreground text-sm">Deep knowledge in cutting-edge technologies and emerging trends</p>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-neon-turquoise/20 text-neon-turquoise rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-mono font-bold text-foreground mb-2 text-sm sm:text-base">Problem Solver</h5>
                    <p className="text-muted-foreground text-sm">Focus on providing practical, efficient, and scalable solutions</p>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-neon-turquoise/20 text-neon-turquoise rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-mono font-bold text-foreground mb-2 text-sm sm:text-base">Collaborative Approach</h5>
                    <p className="text-muted-foreground text-sm">Transparent communication and iterative feedback throughout the process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
