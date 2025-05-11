
import React from 'react';
import { Brain, Code, Users, Database } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="w-14 h-14 flex items-center justify-center bg-tech-blue/10 text-tech-blue rounded-lg mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-tech-navy mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-navy mb-4">
            Services Offered
          </h2>
          <div className="w-20 h-1 bg-tech-teal mx-auto mb-6"></div>
          <p className="text-gray-600">
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
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-tech-navy mb-4">
                My Approach
              </h3>
              
              <p className="text-gray-600 mb-4">
                I believe in creating solutions that are not just technically sound but also practical and forward-thinking. My process typically involves:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                  <p className="text-gray-700">In-depth consultation to understand your specific needs and goals</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                  <p className="text-gray-700">Research and strategic planning to determine the most effective solution</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                  <p className="text-gray-700">Iterative development with continuous feedback and improvements</p>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                  <p className="text-gray-700">Thorough testing and deployment with comprehensive documentation</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 md:pl-8">
              <h4 className="text-xl font-semibold text-tech-navy">Why Work With Me?</h4>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 bg-tech-teal/10 text-tech-teal rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-tech-navy">Technical Expertise</h5>
                  <p className="text-sm text-gray-600">Deep knowledge in cutting-edge technologies</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 bg-tech-blue/10 text-tech-blue rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-tech-navy">Problem Solver</h5>
                  <p className="text-sm text-gray-600">Focus on providing practical, efficient solutions</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 bg-tech-orange/10 text-tech-orange rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-tech-navy">Collaborative Approach</h5>
                  <p className="text-sm text-gray-600">Transparent communication throughout the process</p>
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
