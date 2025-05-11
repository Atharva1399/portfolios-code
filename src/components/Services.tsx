
import React from 'react';
import { Code, Database, Smartphone, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="bg-white p-6 border-t-2 border-tech-navy hover:shadow-lg transition-shadow">
      <div className="mb-4 text-lg text-gray-400">{number}</div>
      <div className="text-tech-blue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01.",
      title: "AI Development",
      description: "Custom AI agents and machine learning models for solving complex business problems.",
      icon: <Code size={32} />
    },
    {
      id: 2,
      number: "02.",
      title: "Web3 Solutions",
      description: "Blockchain applications and smart contracts for the decentralized ecosystem.",
      icon: <Database size={32} />
    },
    {
      id: 3, 
      number: "03.",
      title: "Mobile App Development",
      description: "Cross-platform mobile experiences for smartphones and tablets with AI integration.",
      icon: <Smartphone size={32} />
    },
    {
      id: 4,
      number: "04.",
      title: "Developer Relations",
      description: "Technical advocacy, community building, and developer experience optimization.",
      icon: <Briefcase size={32} />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-4">
          I CAN HELP YOU WITH
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title} 
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-navy mb-12">
            TURNING MY VISION
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Crafting bespoke solutions for each project I work on.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl font-bold text-tech-navy">64+</span>
                  <p className="text-gray-600 mt-2">Satisfied clients</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-tech-navy">89+</span>
                  <p className="text-gray-600 mt-2">Completed projects</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-tech-navy">12+</span>
                  <p className="text-gray-600 mt-2">Years experience</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-tech-navy">18+</span>
                  <p className="text-gray-600 mt-2">Different countries</p>
                </div>
              </div>
            </div>
            
            <div className="bg-tech-gray aspect-[4/3]">
              {/* Workspace image would go here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Workspace Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
