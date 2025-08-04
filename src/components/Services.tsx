
import React from 'react';
import { Brain, Code, Users, Database } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:shadow-neon-turquoise/20 hover:scale-105 animate-float group">
      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-neon-turquoise to-primary text-background rounded-lg mb-6 shadow-lg shadow-neon-turquoise/30 animate-neon-glow group-hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-card-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
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
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-neon-turquoise to-primary mx-auto mb-6 rounded-full shadow-lg shadow-neon-turquoise/50 animate-neon-glow"></div>
          <p className="text-muted-foreground">
            Professional services leveraging my expertise in AI, development, and technical community building.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="mt-16 bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl hover:shadow-neon-turquoise/20 transition-all duration-500 animate-float">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-mono font-bold text-foreground mb-4 animate-neon-glow">
                My Approach
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I believe in creating solutions that are not just technically sound but also practical and forward-thinking. My process typically involves:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-turquoise to-primary text-background rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 font-mono font-bold shadow-lg shadow-neon-turquoise/30 animate-neon-glow group-hover:scale-110 transition-transform duration-300">1</div>
                  <p className="text-foreground font-medium">In-depth consultation to understand your specific needs and goals</p>
                </li>
                
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-turquoise to-primary text-background rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 font-mono font-bold shadow-lg shadow-neon-turquoise/30 animate-neon-glow group-hover:scale-110 transition-transform duration-300">2</div>
                  <p className="text-foreground font-medium">Research and strategic planning to determine the most effective solution</p>
                </li>
                
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-turquoise to-primary text-background rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 font-mono font-bold shadow-lg shadow-neon-turquoise/30 animate-neon-glow group-hover:scale-110 transition-transform duration-300">3</div>
                  <p className="text-foreground font-medium">Iterative development with continuous feedback and improvements</p>
                </li>
                
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-turquoise to-primary text-background rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 font-mono font-bold shadow-lg shadow-neon-turquoise/30 animate-neon-glow group-hover:scale-110 transition-transform duration-300">4</div>
                  <p className="text-foreground font-medium">Thorough testing and deployment with comprehensive documentation</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-8 md:pl-8">
              <h4 className="text-xl font-mono font-bold text-foreground animate-neon-glow">Why Work With Me?</h4>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-neon-turquoise/20 to-primary/20 text-neon-turquoise rounded-lg flex items-center justify-center shadow-lg shadow-neon-turquoise/20 animate-float group-hover:animate-neon-glow transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-mono font-bold text-foreground mb-2">Technical Expertise</h5>
                  <p className="text-muted-foreground">Deep knowledge in cutting-edge technologies and emerging trends</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20 text-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 animate-float group-hover:animate-neon-glow transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-mono font-bold text-foreground mb-2">Problem Solver</h5>
                  <p className="text-muted-foreground">Focus on providing practical, efficient, and scalable solutions</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-accent/20 to-neon-turquoise/20 text-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20 animate-float group-hover:animate-neon-glow transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-mono font-bold text-foreground mb-2">Collaborative Approach</h5>
                  <p className="text-muted-foreground">Transparent communication and iterative feedback throughout the process</p>
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
